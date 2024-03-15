import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMatched, setSingleData, setVisible } from "../store/DataSlice";
import success from "../assets/success.mp3";
import wah from "../assets/lose.mp3";
import { FaSearch } from "react-icons/fa";
import { BiSolidShow ,BiSolidHide} from "react-icons/bi";
import AnimationHidden from "../components/AnimationHidden";

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
      }, 2000);
    }
    setValue("");
  };

  return (
   <div className="flex  w-full h-full items-center justify-center bg-[color:var(--main-background)]">
     <div className="Container">
        {matched === true ? (  <audio src={success} autoPlay></audio>) : matched === false ? (<audio src={wah} autoPlay></audio>) : null}
      <header className="flex gap-3 items-center flex-col justify-center mt-4 max-w-[35rem] w-full px-2">
      
        <div className="mt-1 mb-2 text-2xl text-center">
          {singelData && singelData.question}
        </div>
        <div className="search-content">
          <div className="input-context">
            <input
              className=" border-none outline-none text-black px-4 py-1 "
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button className=" bg-slate-700" onClick={handleClick}>
              <FaSearch size={20} />
            </button>
          </div>
          <button
            className=" show-answer-button active:translate-y-1 duration-200"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ?  <BiSolidHide size={20}  />:<BiSolidShow size={20} /> }
            {showAll ? <span> Gizle</span> : <span>Göster</span>}
          </button>
        </div>
      </header>

      {showAll ? (
        <section className="flex flex-col w-full items-center justify-evenly font-semibold">
          <main className="flex w-[90%] flex-col items-center justify-center  mt-2 gap-1">
            {singelData &&
              singelData.options &&
              singelData.options.map((option, i) => (
                <div
                  key={i}
                  className="w-full max-w-[32rem] flex items-center justify-between text-xl gap-2 my-2 "
                >
                  <span>{option.title}</span> <span> {option.score} PUAN </span>
                </div>
              ))}
          </main>
         
            <Link
              className="next-question-button text-center"
              onClick={() => setShowAll(false)}
              to={`/question/${Number(id) + 1}`}
            >
              {" "}
              Diğer Soruya Geç
            </Link>
    
        </section>
      ) : (
        <section className="flex flex-col w-full items-center">
          <main className="flex flex-col w-[90%] items-center justify-center mt-2 gap-1 font-semibold">
            {singelData &&
              singelData.options &&
              singelData.options.map((option, i) => (
                <div
                  key={i}
                  className="w-full max-w-[32rem] flex  items-center justify-between px-3 text-xl gap-2"
                >
                  {option.visibel ? (
                    <>
                      <span> {option.title}</span>{" "}
                      <span> {option.score} PUAN </span>
                    </>
                  ) : (
                    <AnimationHidden famouse={i}/>
                  )}
                </div>
              ))}
            {singelData &&
              singelData.options &&
              singelData.options.every((item) => item.visibel === true) && (
                <button
                className="next-question-button text-center"
                onClick={() => setShowAll(false)}>
                
                  <Link to={`/question/${Number(id) + 1}`}>
                    Diğer Soruya Geç
                  </Link>
                </button>
              )}
          </main>
        </section>
      )}
    </div>


   </div>

  );
}

export default Question;
