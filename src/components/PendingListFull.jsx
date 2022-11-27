import React, { useState } from "react";
import "../App.css";

import Header from "./Header";
import Form from "./Form";
import PendingList from "./PendingList";

const PendingListFull = ({ pendingList, setPendingList }) => {
  return (
    <div className="app-wrapper">
      <div>
        <Header name="Pending List"/>
      </div>

      <div>
        <PendingList
          pendingList={pendingList}
          setPendingList={setPendingList}
        />
      </div>
    </div>
  );
};

export default PendingListFull;
