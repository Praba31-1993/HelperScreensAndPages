"use client";
import React, { useEffect, useState } from "react";

import { profiledetails } from "./jsondatas";

import { getEmployee, UpdateEmployee } from "@/app/api/listingapi";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Practice() {
  const [profileList, setProfileList] = useState<any[]>(profiledetails);
  const [employees, setEmployee] = useState<any[]>();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [editId, setEditId] = useState<any>();
  const [name, setName] = useState<string>("");

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

    for (
      let i = startPageItem;
      i < endPageItem && i < profileList.length;
      i++
    ) {
      arr.push(profileList[i]); // Push items into the array
    }

    console.log("Paginated Items:", arr);
    setProfileList(arr); // Update state with the paginated items
  };

  const fetchEmployee = async () => {
    try {
      const response = await getEmployee();
      console.log("empData", response.data);
      setEmployee(response.data); // Assuming you want to store the actual data
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };
  useEffect(() => {
    fetchEmployee();
  }, [isEdit]);

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
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Address</th>
            <th scope="col">Blood Group</th>
            <th scope="col">Role</th>
            <th scope="col">Salary Type</th>
            <th scope="col">Company Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee: any, index: number) => (
            <tr key={employee?.id}>
              <td>
                {isEdit && employee?.id === editId ? (
                  <input
                    type="text"
                    value={name !== "" ? name : employee?.name || ""}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  employee?.name
                )}
              </td>
              <td>{employee?.email}</td>
              <td>{employee?.mobile}</td>
              <td>{employee?.address}</td>
              <td>{employee?.bloodGroup}</td>
              <td>{employee?.role}</td>
              <td>{employee?.salaryType}</td>
              <td>{employee?.companyName}</td>
              <td>
                {isEdit ? (
                  <p
                    onClick={() => {
                      UpdateEmployee(editId, { name: name }), fetchEmployee; setIsEdit(false)
                    }}
                  >
                    Complete Edit
                  </p>
                ) : (
                  <i
                    className="bi bi-pencil"
                    onClick={() => {
                      setIsEdit(true), setEditId(employee.id);
                    }}
                  ></i>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={pagination}>pagination</button>
    </div>
  );
}
