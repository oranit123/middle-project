import React, { useState } from "react";

export default function AddTasks() {

    const [tasks,setTasks]=useState()


  return (
    <>
    <h1>Add Your Tasks </h1>
      <form>
        <input type="text" placeholder="Name Task" value={tasks.name} />
        <br />
        <input type="text" placeholder="Name Category" />
        <br />
        <textarea placeholder="Task details" />
        <br />
        <input type="date" placeholder="By what date should it be done?" />
        <br />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
