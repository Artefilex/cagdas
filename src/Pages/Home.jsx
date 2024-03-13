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
    

  return   <div className="flex flex-col w-full items-center bg-[color:var(--main-color)] text-white font-bold h-[100vh]">
  Yarışmaya Hoş geldiniz
 
      <Link to={`/question/1`}> İlk Soru Gelsin </Link>
 
</div>;
}

export default Home;
