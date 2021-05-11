import { changeAdminNavbarTitle } from "app/redux/commonSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function TheaterManagement() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeAdminNavbarTitle("Quản lý cụm rạp"));
  }, []);
  return <div>theater</div>;
}
