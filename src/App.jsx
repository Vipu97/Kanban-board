import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

export default function App() {
  const storedGrouping = JSON.parse(localStorage.getItem("grouping")) || "status";
  const storedOrdering = JSON.parse(localStorage.getItem("ordering")) || "title";
  const [grouping, setGrouping] = useState(storedGrouping);
  const [ordering, setOrdering] = useState(storedOrdering);
  const [data,setData] = useState(null);
  
  useEffect(() => {
    localStorage.setItem('grouping',JSON.stringify(grouping));
  },[grouping])
  
  useEffect(() => {
    localStorage.setItem('ordering',JSON.stringify(ordering));
  },[ordering])
  
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        const result = await response.json();
        setData(result)
      }catch(err){
        console.error(err);
      }
    };
    fetchData();
  },[]);


  return (
    <div className="App">
      <Header grouping={grouping} ordering={ordering} setOrdering={setOrdering} setGrouping={setGrouping} />
      {data && <Hero data={data} grouping={grouping} ordering={ordering} /> }
    </div>
  );
}
