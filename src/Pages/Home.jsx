import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSingleData } from "../store/DataSlice";
import { Link } from "react-router-dom";
function Home() {
 const {askData} = useSelector((state) => state.DataReducer)
  const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch( setSingleData(1))
    }, [askData,dispatch]);
    

  return   <div className="flex flex-col w-full  justify-center items-center bg-[color:var(--main-color)] text-white  h-[100vh]">
       <div className="text-4xl font-bold">
    Yarışmaya Hoş geldiniz
    </div>
 
      <Link to={`/question/1`} className="bg-green-800 px-6 py-4 active:translate-y-2 rounded-full mt-10"> İlk Soruya ilerle </Link>
 
</div>;
}

export default Home;
