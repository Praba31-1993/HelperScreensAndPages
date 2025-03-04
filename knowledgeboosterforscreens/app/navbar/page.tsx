import React from "react";

function Navbar() {
  return (
    <div className="row p-2" style={{background:'#F4F4F4'}}>
      <div className="col-md-3 d-md-block d-none">Logo</div>
      <div className="col-9 ">
        <div className="row justify-content-end">
          <div className="col-7 d-flex gap-3 justify-content-end align-items-center">
            <div className="">Projects</div>
            <div className="">Sevice</div>
            <div className="">Product</div>
            <div className="">Contact</div>
            <div className="">About</div>
          </div>
          <div className="col-4">
            <div className="d-flex my-2 my-lg-0 gap-1">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
