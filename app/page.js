"use client";
import { ClientPageRoot } from "next/dist/client/components/client-page";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [MainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...MainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(MainTask);
  };

  const deleteHandler = () => {
    //splice deletes the elements seperates the elements from array
    let copyTask = [...MainTask];
    let i = 0
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  }
  let renderTask = <h2>No task Available</h2>;

  if (MainTask.length > 0) {
    renderTask = MainTask.map((t, i) => {
      return (
        <li key={i}>
          <div className="flex items-center justify-between w-4/3">
            <h5 className="text-2xl font-semibold ">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
            <button onClick={()=>{
            deleteHandler(i)
          }} className="bg-red-700 text-white px-4 py-2   rounded font-bold">
            Delete
          </button>
          </div>
          
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-4xl text-center">
        Uzair's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Title Here"
          className="text-2xl text-black border-zinc-800 border-4  m-5 px-4 py-2"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
            // console.log(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Enter Description Here"
          className="text-2xl text-black border-zinc-800 border-4 mx-5 my-10 px-4 py-2"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
            // console.log(e.target.value)
          }}
        />
        <button className="bg-black text-white px-2 py-3 font-bold rounded m-10">
          Add Item
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-400">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};
export default page;
