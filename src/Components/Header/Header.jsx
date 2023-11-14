import React, { useState } from "react";
import "./Header.css";

const Header = ({setOrdering,setGrouping}) => {
    const [openMenu,setOpenMenu] = useState(false);
  return (
    <div className="header">
      <div className="display-button" onClick={() => setOpenMenu(!openMenu)}>
        <img src="/icons/menu-icon.svg" alt="menu-icon" />
        <span>Display</span>
        <img src="/icons/arrow-down.svg" alt="arow-down-icon" />
        </div>
      {openMenu && <Menu setGrouping={setGrouping} setOrdering={setOrdering} />}
    </div>
  );
};

const Menu = ({grouping,ordering,setGrouping,setOrdering}) => {
    return(
        <div className="menu">
        <div className="row">
          <span>Grouping</span>
          <select id="grouping" value={grouping} onChange={(e) => setGrouping(e.target.value)}>
            <option value="" hidden>Select</option>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="row">
          <span>Ordering</span>
          <select name="ordering" value={ordering} onChange={(e) => setOrdering(e.target.value)}>
            <option value="" hidden>Select</option>
            <option value="title" >Title</option>
            <option value="priority">Priority</option>
          </select>
        </div>
      </div>
    )
}
export default Header;
