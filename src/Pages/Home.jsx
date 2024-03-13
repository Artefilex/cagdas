import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Home() {
 const {DataReducer} = useSelector((state) => state)
    const [value, setValue] = useState("");
    const [data, setData] = useState(null);
    useEffect(() => {
      setData(DataReducer);
    }, [DataReducer]);
  
    const handleClick = (e) => {
      e.preventDefault();
      const result = data.options.filter((q) =>{
        q.title.toLowerCase().includes(value.toLowerCase())
      
      }
        
      );
      console.log(result);
      console.log(result);
      setValue("");
    };

  return   <div className="flex flex-col w-full items-center bg-[color:var(--main-color)] text-white font-bold h-[100vh]">
  Yarışmaya Hoş geldiniz
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
    {data && data.question}
  </header>
  <main>
    {data &&
      data.options &&
      data.options.map((option, i) => (
        <div
          key={i}
          className="w-full flex items-center justify-between "
        >
         {
          option.visibel ?  <div>{option.title} - {option.score}</div> : <div className="w-[25rem] h-10  bg-slate-700 my-3"/> 
         }

        </div>
      ))}
  </main>
</div>;
}

export default Home;
