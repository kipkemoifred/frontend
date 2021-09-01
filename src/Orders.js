import { Button } from 'antd';
import './App.css';
import {useState,useEffect}from 'react'
import { Link } from "react-router-dom";

function Orders() {
  useEffect(()=>{
fetchItems()
  },[])

  const[items,setItems]=useState([])

  const fetchItems=async()=>{
    const data=await fetch('https://fortnite-api.com/v1/playlists')
    const items=await data.json();
    console.log(items.data)
    setItems(items.data)
  }

  return (
    <div className="Orders">
{items.map(item=>(
  <h1 key={item.id}><Link to={'/order/${item.id}'}>{item.name}</Link></h1>
))}
    </div>
  );
}

export default Orders;