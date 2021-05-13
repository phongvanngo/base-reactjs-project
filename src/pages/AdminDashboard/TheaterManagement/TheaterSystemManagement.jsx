import { changeAdminNavbarTitle } from "app/redux/commonSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TheaterSystemFormModal from "./TheaterSystemFormModal";
import TheaterSystemTable from "./TheaterSystemTable";
export default function TheaterSystemManagement() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeAdminNavbarTitle("Quản lý hệ thống rạp"));
  }, []);

  const [isOpenFormModal, setIsOpenFormModal] = useState(false);

  const openModal = () => {
    setIsOpenFormModal(true);
  };
  const closeModal = () => {
    setIsOpenFormModal(false);
  };
  return (
    <div>
      {/* <TheaterSystemFormModal
        isOpen={isOpenFormModal}
        closeModal={closeModal}
      />
      <div className="relative inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={() => {
            openModal();
          }}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}
      <div className="pt-20">
        <TheaterSystemTable />
      </div>
    </div>
  );
}
