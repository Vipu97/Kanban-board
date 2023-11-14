import React from "react";
import "./Card.css";
import Filters from "../../utils";
import ProfileIcon from "../ProfileIcon/ProfileIcon";

const Card = ({id,task,tag,userId,users,status,grouping,priority}) => {
  const statusArray = Filters.status;
  const priorityArray = Filters.priority;
  const [ele] = statusArray.filter(item => item.name === status)
  const statusIcon = ele.icon;
  const[key] = users.filter(item => item.id === userId);
  const [it] = priorityArray.filter(item => item.level === priority)
  const priorityIcon = it.icon;
  
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <span>{id}</span>
        {grouping !== 'user' &&<ProfileIcon name={key.name} /> }
      </div>
      <div className="mid-section">
        {grouping !== 'status' && <img src={statusIcon} alt="statusIcon" width={'12px'}/> }
        <p>{task}</p>
      </div>
      <div className="card-footer">
        {grouping !== 'priority' && <img src={priorityIcon} alt="priorty-icon" width={"12px"} />}
        <div>
          <img src="/icons/circle-fill.svg" alt="circle-fill-icon" />
          {tag && <span>{...tag}</span>}
        </div>
      </div>
    </div>
  );
};

export default Card;
