import React, { useState } from "react";
import "../App.css";

import Header from "./Header";
import Form from "./Form";
import CompletedList from "./CompletedList";

const CompletedListFull = ({completedList,setCompletedList}) => {
  return (
    <div className="app-wrapper">
      <div>
        <Header name="Completed List" />
      </div>

      <div>
        <CompletedList completedList={completedList} setCompletedList={setCompletedList} />
      </div>
    </div>
  )
}

export default CompletedListFull