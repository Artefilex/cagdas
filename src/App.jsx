import { useEffect, useState } from "react";
import { Ask_Data } from "./mock/Data";

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState({});
  useEffect(()=>{
  
    setData(Ask_Data[1])
  },[])
  
  const handleClick = (e) =>{
     e.preventDefault()
     const result = data.options.filter((q) => q.title.toLowerCase().includes(value.toLowerCase()));
     console.log(result);
     console.log(result)
     setValue("")
  }
  
  
  return (
    <div className="flex flex-col w-full items-center bg-[color:var(--main-color)] text-white font-bold h-[100vh]">
      Yarışmaya Hoş geldiniz
    <div className="flex gap-3 items-center justify-center mt-4">
    <input
      className=" border-none outline-none text-black px-4 py-1 "
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        
      />
      <button className="flex items-center justify-center bg-slate-600 px-2 py-1" onClick={handleClick}> Search</button>
    </div>
    </div>
  );
}

export default App;
