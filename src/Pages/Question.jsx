import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSingleData } from "../store/DataSlice";
function Question() {
  const { singelData } = useSelector((state) => state.DataReducer);
  const [value, setValue] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchData = setInterval(() => {
      dispatch(setSingleData(Number(id) + 1));
    }, 200);
    
    return () => clearInterval(fetchData);
  }, [id, dispatch]);
 

  const handleClick = (e) => {
    e.preventDefault();
    const result = singelData.options.filter((q) => {
        return q.title.toLowerCase().includes(value.toLowerCase());
      });
    console.log(result);
    console.log(result);
    setValue("");
  };

  return (
    <div className="flex flex-col w-full items-center bg-[color:var(--main-color)] text-white font-bold h-[100vh]">
      <div className="flex gap-3 items-center justify-center mt-4">
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
          {" "}
          Search
        </button>
      </div>
      <header className="flex flex-col item-center justify-center mt-10">
        {singelData && singelData.question}
      </header>
      <main>
        {singelData &&
          singelData.options &&
          singelData.options.map((option, i) => (
            <div key={i} className="w-full flex items-center justify-between ">
              {option.visibel ? (
                <div>
                  {option.title} - {option.score}
                </div>
              ) : (
                <div className="w-[25rem] h-10  bg-slate-700 my-3" />
              )}
            </div>
          ))}
      </main>
      <button>
        <Link to={`/question/${Number(id)+ 1 }`}> Diğer Soruya Geç</Link>
      </button>
    </div>
  );
}

export default Question;
