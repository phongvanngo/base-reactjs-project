import { filterArrayBySearchTerm } from "app/myLibrary/utilities";
import MyTable from "common/Table/MyTable";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MenuDropdown from "./TheaterSystemTable.menu";

export default function TheaterSystemTable({ listTheaterSystem }) {
  const [searchTerm, setSearchTerm] = useState("");

  let currentListTheaterSystem = filterArrayBySearchTerm(
    listTheaterSystem,
    searchTerm
  );
  console.log(currentListTheaterSystem);

  return (
    <div className="w-full">
      <div className="w-full ">
        <div className="w-full flex justify-between items-center mb-5">
          <div className="flex items-center h-10 ">
            <input
              className="h-full appearance-none rounded-l-full border w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              placeholder="Tìm kiếm"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <div className="bg-admin_color_1 rounded-r-full h-full w-12 p-1 flex justify-center hover:bg-indigo-900">
              <i className="bx bx-search-alt text-2xl text-white m-auto "></i>
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-between items-center h-20 border-b border-gray-200 rounded-t-3xl bg-white">
          <h1 className="text-xl font-medium">Danh sách hệ thống rạp chiếu</h1>
          <button className="flex items-center bg-admin_color_1 appearance-none  rounded-full w-100 h-full  py-2 px-8 text-admin_color_2 leading-tight hover:bg-indigo-900 focus:outline-none">
            <i className="bx bx-plus mr-2 align-middle block"></i>
            <span>Thêm rạp mới</span>
          </button>
        </div>
        <div className="px-8 py-6 rounded-b-3xl bg-white shadow-sm">
          <table className="table-auto w-full mb-10">
            <thead className="">
              <tr className="uppercase border-b border-gray-200 text-left text-base font-extrabold text-gray-500 tracking-widest">
                <th scope="col" className="px-2 py-3 break-words">
                  <strong>#</strong>
                </th>
                <th scope="col" className="px-2 py-3 break-words">
                  <strong>Tên hệ thống rạp</strong>
                </th>
                <th scope="col" className="px-2 py-3 break-words">
                  <strong>Logo</strong>
                </th>
                <th scope="col" className="px-2 py-3 break-words">
                  <strong>Bí danh</strong>
                </th>
                <th scope="col" className="px-2 py-3 break-words">
                  <strong>Action</strong>
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-500 font-normal">
              {currentListTheaterSystem.map((theaterSystem, index) => {
                const { logo, id, name, alias } = theaterSystem;
                return (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-2 py-4 text-gray-500 text-sm font-extrabold">
                      <strong>{index + 1}</strong>
                    </td>
                    <td className="px-2 py-4">{name}</td>
                    <td className="px-2 py-4">
                      <img
                        className="h-20 w-20 rounded-lg"
                        alt="logo"
                        src={logo}
                      />
                    </td>

                    <td className="px-2 py-4">{alias}</td>
                    <td className="px-2 py-4">
                      <MenuDropdown />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
