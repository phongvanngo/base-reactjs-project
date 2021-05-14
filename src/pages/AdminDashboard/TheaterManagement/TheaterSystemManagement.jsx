import { changeAdminNavbarTitle } from "app/redux/commonSlice";
import { fetchListTheaterSystem } from "app/redux/theaterSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TheaterSystemFormModal from "./TheaterSystemFormModal";
import TheaterSystemTable from "./TheaterSystemTable";
import Example from "common/Menu Dropdown/Menu";

export default function TheaterSystemManagement() {
  const dispatch = useDispatch();
  const listTheaterSystem = useSelector(
    (state) => state.theater.listTheaterSystem
  );

  useEffect(() => {
    dispatch(changeAdminNavbarTitle("Quản lý hệ thống rạp"));
    dispatch(fetchListTheaterSystem({}));
  }, [dispatch]);

  return (
    <div>
      <TheaterSystemFormModal />
      <div className="pt-20">
        <TheaterSystemTable listTheaterSystem={listTheaterSystem} />
      </div>
    </div>
  );
}
