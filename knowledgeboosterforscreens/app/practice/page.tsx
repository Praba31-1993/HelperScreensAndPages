"use client";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { profiledetails } from "./jsondatas";

export default function Practice() {
  const [profileList, setProfileList] = useState<any[]>(profiledetails);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleFilter = (key: keyof (typeof profiledetails)[0]) => {
    console.log("keydata", typeof key);
    setSelectedValue(key);

    const sortedList = [...profiledetails].sort((a, b) =>
      a[key] > b[key] ? 1 : -1
    );

    setProfileList(sortedList);
  };

  const handleDelete = (id: any) => {
    let DatasAfterDeleted = profiledetails.filter(
      (list: any) => list.id !== id
    );

    setProfileList(DatasAfterDeleted);
  };

  const currentPage = 3; // Page numbers start from 1
  const itemsPerPage = 2;

  const endPageItem = currentPage * itemsPerPage;
  const startPageItem = endPageItem - itemsPerPage; // Zero-based index

  const pagination = () => {
    console.log(
      `Showing items from index ${startPageItem} to ${endPageItem - 1}`
    );
  
    let arr: typeof profileList = []; // Define array outside the loop
  
    for (let i = startPageItem; i < endPageItem && i < profileList.length; i++) {
      arr.push(profileList[i]); // Push items into the array
    }
  
    console.log('Paginated Items:', arr);
    setProfileList(arr); // Update state with the paginated items
  };
  
  
  

  return (
    <div className="p-3">
      <div className="d-flex justify-content-end m-3">
        <div className="w-20 d-flex gap-3">
          <label className="mt-2">Filtered by</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              handleFilter(e.target.value as keyof (typeof profiledetails)[0]);
            }}
          >
            {profiledetails?.length > 0 &&
              Object.keys(profiledetails[0]).map((header) => (
                <option key={header} value={header}>
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </option>
              ))}
          </select>
        </div>
      </div>

      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">SNO</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Company</th>
            <th scope="col">Role</th>
            <th scope="col">Personal Details</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {profileList?.map((profile: any, index: number) => (
            <tr key={profile?.id}>
              <th>{profile?.id}</th>
              <td>{profile?.firstName + profile?.lastName}</td>
              <td>{profile?.email}</td>
              <td>{profile?.company}</td>
              <td>{profile?.jobTitle}</td>
              <td>
                <FontAwesomeIcon
                  icon={faEye}
                  style={{ cursor: "pointer", height: "13px" }}
                />
              </td>
              <td>
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ cursor: "pointer", height: "13px" }}
                  onClick={() => handleDelete(profile?.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={pagination}>pagination</button>
    </div>
  );
}
