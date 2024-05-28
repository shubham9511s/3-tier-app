import React, { useEffect } from "react";
import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {

  const [data, setData] = useState("");
  const [list, setList] = useState([]);

  useEffect(()=>{
    axios.get('http://13.48.68.181:5000/get')
    .then(result => setList(result.data))
    .catch(err =>console.log(err))

  },[])

  function handlesubmit(e) {
    e.preventDefault();
    axios.post('http://13.48.68.181:5000/add',{data: data})
    .then(result =>console.log(result))
    .catch(err =>console.log(err))
    console.log("Data save into database");
  
  } 

  return (
    <>
      <div className="container">
        <h1> TODO List</h1>
        <form>
          <div className="input-group mb-3 mt-5 input-group-lg">
            <input
              type="text"
              className="form-control border-black"
    
              onChange={(e) => {
                // console.log(e.target.value)
                setData(e.target.value);
              }}
              placeholder="Add Task here..."
            />

            <button
              onClick={handlesubmit}
              className="btn btn-success"
              id="button"
            >
              Submit
            </button>
          </div>
        </form>
        <hr className="mb-3 mt-4" />

        <div className="show">
          {list.map((item, i) => {
            return (
              <div className="print" key={i}>
                <h3>{item.data}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default App
