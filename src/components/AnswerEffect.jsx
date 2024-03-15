
import { useSelector } from "react-redux";
import success from "../assets/success.mp3"
import wah from "../assets/lose.mp3"
import { FaCheck } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
function AnswerEffect() {
 const {matched} = useSelector((state) => state.DataReducer)
  return <div className={`absolute flex items-center justify-center w-full h-full top-0 left-0 z-[-1]  opacity-70 ${matched === true ? "bg-green-500 z-[10]" : matched === false ? "bg-red-500 z-[10]" : ""} `}>
        {matched === true ? (  <audio src={success} autoPlay></audio>) : matched === false ? (<audio src={wah} autoPlay></audio>) : null}
        {matched === true ? (<div><FaCheck size={100} /></div>) : matched === false ?  (<div><GrClose size={100} /></div>) : <GrClose size={100} />   }
  </div>;
}

export default AnswerEffect;
