import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMatched, setSingleData, setVisible } from "../store/DataSlice";
import success from "../assets/success.mp3";
import wah from "../assets/lose.mp3";
function Question() {
  const { singelData, matched } = useSelector((state) => state.DataReducer);
  const [showAll, setShowAll] = useState(false);
  const [value, setValue] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSingleData(Number(id) + 1));
  }, [id, dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(setVisible(value));
      setTimeout(() => {
        dispatch(setMatched());
      }, 1000);
    }
    setValue("");
  };

  return (
    <div className="flex flex-col w-full items-center bg-[color:var(--main-color)] text-white font-bold h-[100vh]">
      <div className="flex gap-3 items-center justify-center mt-4">
        {matched === true ? (
          <audio src={success} autoPlay></audio>
        ) : matched === false ? (
          <audio src={wah} autoPlay></audio>
        ) : null}
        <input
          className=" border-none outline-none text-black px-4 py-1 "
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="flex items-center justify-center bg-slate-600 px-2 py-1"
          onClick={handleClick}
        >
          Search
        </button>
        <button onClick={() => setShowAll(!showAll)}>Show All</button>
      </div>

      {showAll ? (
        <section className="flex flex-col w-full items-center bg-[color:var(--main-color)] text-white font-bold">
        <header className="mt-10 text-2xl">
            {singelData && singelData.question}
          </header>
          <main className="flex flex-col items-center justify-center mt-10 gap-1">
            {singelData &&
              singelData.options &&
              singelData.options.map((option, i) => (
                <div key={i} className="w-[25rem] flex  items-center justify-between text-xl  ">
                    <span>{option.title}</span> <span> {option.score} PUAN </span>    
                </div>
              ))}
          </main>
          <button>
            <Link to={`/question/${Number(id) + 1}`}> Diğer Soruya Geç</Link>
          </button>
        </section>
      ) : (
        <section className="flex flex-col w-full items-center bg-[color:var(--main-color)] text-white font-bold">
          <header className=" mt-10 text-2xl">
            {singelData && singelData.question}
          </header>
          <main className="flex flex-col items-center justify-center mt-10 gap-1">
            {singelData &&
              singelData.options &&
              singelData.options.map((option, i) => (
                <div key={i} className="w-[25rem] flex  items-center justify-between px-3  text-xl">
                  {option.visibel ? (
                    <>
                   <span> {option.title}</span>   <span> {option.score} PUAN </span>  
                    </>
                  ) : (
                    <div className="w-[25rem] h-10  bg-slate-700 my-3 animate-pulse" />
                  )}
                </div>
              ))}
               {singelData &&
              singelData.options &&   singelData.options.every((item) =>item.visibel === true) &&  <Link to={`/question/${Number(id) + 1}`}> Diğer Soruya Geç</Link> } 
          </main>
        </section>
      )}
    </div>
  );
}

export default Question;
