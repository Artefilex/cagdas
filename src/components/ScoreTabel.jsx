import HeaderScore from "./HeaderScore";

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
      <div className="text-white flex flex-col items-center justify-start  max-w-[31rem] w-[80%]  mt-[4%] gap-5 absolute bg-slate-800 z-20 px-4 h-[25rem] rounded-md  shadow shadow-slate-600 py-2">
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
              <button className="rounded bg-slate-950 p-2 hover:bg-slate-900 mr-2" type="submit"><HiOutlinePlus  size={20}/> </button>
            </form>
          </div>

          <div className=" h-[10rem] bg-white pl-1" />
          <div>
            <HeaderScore title="B takımı" score={scoreB} />
            <form onSubmit={handelSubbmitB} className="relative top-20 flex">
              <input
                className="bg-transparent outline-none border-b-2 border-white ml-4 "
                type="number"
                value={scoreBSetter}
                onChange={(e) => {
                  setScoreBSetter(e.target.value);
                }}
              />
              <button className="rounded bg-slate-950 p-2 hover:bg-slate-900" type="submit"><HiOutlinePlus  size={20} /> </button>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default ScoreTabel;
