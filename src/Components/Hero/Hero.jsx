import React from "react";
import Filters from "../../utils";
import "./Hero.css";
import Card from "../Card/Card";
import ProfileIcon from "../ProfileIcon/ProfileIcon";

const sortByTitle = (item) => {
  return item.sort((a, b) => a.title.localeCompare(b.title));
};
const sortByPriorty = (item) => {
  return item.sort((a, b) => b["priority"] - a["priority"]);
};

const Hero = ({ data, grouping, ordering }) => {
  const tickets = data.tickets;
  const users = data.users;
  const titlesArray = grouping === "user" ? users : Filters[grouping];
  return (
    <div className="hero-wrapper">
      {titlesArray.map((title) => {
        let filteredTickets;
        if(grouping === "status")
          filteredTickets = tickets.filter(task => task[grouping] === title.name)
        else if(grouping === "priority")
          filteredTickets = tickets.filter(task => task[grouping] === title.level)
        else if(grouping === "user")
          filteredTickets = tickets.filter(task => task['userId'] === title.id)

        ordering === "title" ? sortByTitle(filteredTickets) : sortByPriorty(filteredTickets);
        return (
          <div className="section">
            <div className="title">
              <div className="title-left-part">
                {
                  grouping === 'user' ? <ProfileIcon name={title.name}/> :<img src={title.icon} alt="title-icon" width={"16px"} />
                }
                <span>{title.name}</span>
                <span>{filteredTickets.length}</span>
              </div> 
              <div className="title-right-part">
                <img src="/icons/plus-sign.svg" alt="plus-icon" />
                <img src="/icons/three-dot.svg" alt="three-dots-icon" />
              </div>
            </div>
            <TaskContainer users={users} filteredTickets={filteredTickets} grouping={grouping}/>
          </div>
        );
      })}
    </div>
  );
};

const TaskContainer = ({users,filteredTickets,grouping}) => {
  return (
    <div className="task-container">
    {
      filteredTickets.map((item) =>
      <Card key={item.id} id={item.id} task={item.title} users={users} 
        userId={item.userId} status={item.status} grouping={grouping} priority={item.priority} 
        tag={item.tag} />)
    }
  </div>
  )
}
export default Hero;