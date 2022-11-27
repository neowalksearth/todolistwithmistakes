import React, { useEffect } from "react";

const PendingList = ({ pendingList, setPendingList }) => {

  return (
    <div>
      {pendingList.map((onebyone) => (
        <li className="list-item" key={onebyone.id}>
          <input
            type="text"
            value={onebyone.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
        </li>
      ))}
    </div>
  );
};

export default PendingList;
