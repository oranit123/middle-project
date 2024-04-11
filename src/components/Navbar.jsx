 import React from 'react'
import { Link } from 'react-router-dom'
 
 export default function Navbar() {
   return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link><br/>
                <Link to="/MyTasks">MyTasks</Link><br/>
                <Link to="/Categories">Categories</Link><br/>
                <Link to="/AverageGraph">AverageGraph</Link><br/>

            </li>
        </ul>
    </nav>
    </>
   )
 }
 