import React,{useState} from "react";
import "../App.css";
import TodoListFull from "./TodoListFull";
import PendingListFull from "./PendingListFull";
import CompletedListFull from "./CompletedListFull";

const Everything = () => {
    
    const [completedList , setCompletedList] = useState([]); 
    const [pendingList,setPendingList] = useState([]);

    return (
      <div className="container">
        <TodoListFull  completedList={completedList} setCompletedList={setCompletedList} pendingList={pendingList} setPendingList={setPendingList}/>
        <CompletedListFull completedList={completedList} setCompletedList={setCompletedList} />
        <PendingListFull pendingList={pendingList} setPendingList={setPendingList}/>
      </div>
    );
}

export default Everything;