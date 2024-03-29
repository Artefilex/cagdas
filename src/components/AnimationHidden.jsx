import PropTypes from "prop-types"
function AnimationHidden({ famouse }) {
  return (
    <div className="w-full max-w-[32rem]  h-10 my-1 bg-slate-700  animate-pulse flex items-center justify-between  font-normal">
      <div className="flex items-center w-full  ml-4">
        <div className="">{famouse + 1} .</div>{" "}
        <div className="w-[8rem] h-5 bg-slate-400 animate-pulse ml-3" />
      </div>

      <div className=" w-[8rem] h-5 flex items-center justify-center gap-2">
        <div className=" h-5 bg-slate-400 w-10 animate-pulse" />
        Puan
      </div>
    </div>
  );
}

AnimationHidden.propTypes = {
  famouse: PropTypes.number
}

export default AnimationHidden;
