import { Button } from 'antd';
import './App.css';
import React,{useState,useEffect}from 'react'
import { Link } from "react-router-dom";

function OrderDetail({match}) {
  useEffect(()=>{
fetchItem()
console.log(match)
  },[])

  const[items,setItem]=useState({})

  const fetchItem=async()=>{
    const data=await fetch('https://fortnite-api.com/v1/playlists?ids=${match.params.id}')
    const items=await data.json();
    console.log(items.data)
    setItem(items.data)
  }
//TODO back button
  return (
    <h1>{items.name}</h1>
//     <div className="OrderDetail">
      
// {items.map(item=>(
//   <h1 key={item.id}><Link to={'/order/${item.id}'}>{item.name}</Link></h1>
// ))}

//     </div>
  );
}

export default OrderDetail;