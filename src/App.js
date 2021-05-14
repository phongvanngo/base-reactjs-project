import PageLoader from "common/PageLoader/PageLoader";
import React from "react";
import AppRoutes from "routes";
import "./App.css";
import ErrorNotificationDialog from "common/Notification/ErrorNotification.dialog";

function App() {
  return (
    <div className="App">
      <ErrorNotificationDialog />
      <PageLoader />
      <AppRoutes />
    </div>
  );
}

export default App;
