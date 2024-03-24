import HeaderScore from "./HeaderScore";
import logo from "../assets/logo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { setScoreA, setScoreB } from "../store/DataSlice";
import { useState } from "react";

import { HiOutlinePlus } from "react-icons/hi2";
function ScoreTabel() {
  const { scoreA, scoreB } = useSelector((state) => state.DataReducer);
  const dispatch = useDispatch();
  const [scoreASetter, setScoreASetter] = useState("");
  const [scoreBSetter, setScoreBSetter] = useState("");
  const handelSubbmitA = (e) => {
    e.preventDefault();
   dispatch(setScoreA(Number(scoreASetter)));
    setScoreASetter("");
  };
  const handelSubbmitB = (e) => {
    e.preventDefault();
    dispatch(setScoreB(Number(scoreBSetter)));
    setScoreBSetter("");
  };

  return (
    <>
      <div className="text-white flex flex-col items-start justify-start h-full  max-w-[30rem] w-[80%]   mt-[4%] gap-5">
        <h1 className="text-2xl font-bold text-center w-full">Score Durumu</h1>
        <div className=" w-full h-[2px] bg-white pl-1" />
        <div className="flex w-full items-start justify-between ">
          <div>
            <HeaderScore title="A takımı" score={scoreA} />
            <form onSubmit={handelSubbmitA} className="relative top-20 w-full flex ">
              <input
                className="bg-transparent outline-none  border-b-2 border-white"
                type="number"
                value={scoreASetter}
                onChange={(e) => {
                  setScoreASetter(e.target.value);
                }}
            
              />
              <button className=" bg-slate-800 mr-2 p-2 rounded" type="submit"><HiOutlinePlus  size={20}/> </button>
            </form>
          </div>

          <div className=" h-[10rem] bg-white pl-1" />
          <div>
            <HeaderScore title="B takımı" score={scoreB} />
            <form onSubmit={handelSubbmitB} className="relative top-20 flex">
              <input
                className="bg-transparent outline-none border-b-2 border-white"
                type="number"
                value={scoreBSetter}
                onChange={(e) => {
                  setScoreBSetter(e.target.value);
                }}
              />
              <button className="rounded bg-slate-800 p-2" type="submit"><HiOutlinePlus  size={20} /> </button>
            </form>
          </div>
        </div>
      </div>
      <img
        src={logo}
        alt="logo"
        className="absolute bottom-0 right-0 w-[30rem]"
      />
    </>
  );
}

export default ScoreTabel;
