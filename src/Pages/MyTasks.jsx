import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
export default function MyTasks() {

    const [tasks,setTasks]=useState([]);
    
    return (
      <>
      <Navbar/>
      <h1>Tasks List({tasks.length})</h1>
             <div>              {
              tasks.map((tasks,index)=><il key={index}>{tasks}</il>)
               }
              </div>
       <Link to="/MyTasks/AddTasks">Add Tasks</Link>
      </>
    )
}
