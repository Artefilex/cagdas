import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMatched, setSingleData, setVisible } from "../store/DataSlice";
import { FaSearch } from "react-icons/fa";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import AnimationHidden from "../components/AnimationHidden";
import AnswerEffect from "../components/AnswerEffect";
import ScoreTabel from "../components/ScoreTabel";

function Question() {
  const { singelData } = useSelector((state) => state.DataReducer);
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
    <div className="flex  w-full h-full items-start justify-around bg-[color:var(--main-background)]">
       
      <div className="Container">
        <AnswerEffect />
        <header className="flex gap-3 items-center flex-col justify-center mt-4 max-w-[35rem] w-full px-2">
          <div className="mt-1 mb-2 text-2xl text-center">
            {singelData && singelData.question}
          </div>
          <div className="search-content">
            <form className="input-context">
              <input
                className=" border-none outline-none text-black px-4 py-1 "
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button type="submit" className=" bg-slate-700" onClick={handleClick}>
                <FaSearch size={20} />
              </button>
            </form>
            <button
              className=" show-answer-button active:translate-y-1 duration-200"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? <BiSolidHide size={20} /> : <BiSolidShow size={20} />}
              {showAll ? <span> Gizle</span> : <span>Göster</span>}
            </button>
          </div>
        </header>

        {showAll ? (
          <section className="flex flex-col w-full items-center justify-evenly font-semibold">
            <main className="flex w-[90%] flex-col items-center justify-center  mt-2 ">
              {singelData &&
                singelData.options &&
                singelData.options.map((option, i) => (
                  <div
                    key={i}
                    className="w-full max-w-[32rem] flex items-center justify-between text-xl gap-2 my-2 "
                  >
                    <span>{option.title}</span>{" "}
                    <span> {option.score} PUAN </span>
                  </div>
                ))}
            </main>

          </section>
        ) : (
          <section className="flex flex-col w-full items-center">
            <main className="flex w-[90%] flex-col items-center justify-center  mt-1  font-semibold">
              {singelData &&
                singelData.options &&
                singelData.options.map((option, i) => (
                  <div
                    key={i}
                    className="w-full max-w-[32rem] flex items-center justify-between text-xl gap-1 my-2"
                  >
                    {option.visibel ? (
                      <>
                        <span> {option.title}</span>{" "}
                        <span> {option.score} PUAN </span>
                      </>
                    ) : (
                      <AnimationHidden famouse={i} />
                    )}
                  </div>
                ))}
            
            </main>
          </section>
        )}

        <Link
          className="next-question-button text-center"
          onClick={() => setShowAll(false)}
          to={`/question/${Number(id) + 1}`}
        >
          {" "}
          Diğer Soruya Geç{" "}
        </Link>
      </div>
      <ScoreTabel/>
    </div>
  );
}

export default Question;
