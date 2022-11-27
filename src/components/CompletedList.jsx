import React,{useEffect} from "react";

const CompletedList = ({ completedList,setCompletedList }) => {

  // let newCompletedList = completedList.filter((onebyone) => onebyone.completed === true)
  
  useEffect(() => {
  }, [completedList])
  

  return (
    console.log("The completed list is ",completedList),
    <div>
      {completedList.map((onebyone) => (
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

export default CompletedList;
