// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { setSingleData } from "../store/DataSlice";
import { Link } from "react-router-dom";
import giris from "../assets/giris.jpeg";
function Home() {
  // const { askData } = useSelector((state) => state.DataReducer);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setSingleData(1));
  // }, [askData, dispatch]);
  
  return (
    <div className="font-sans flex flex-col w-full  justify-center items-center bg-[color:var(--main-background)] text-white  min-h-[100vh]">
      <img src={giris} alt="giriş" className="w-[21rem]  absolute top-5 " />
      <div className="text-4xl font-bold  mt-[6rem]">Hoş Geldiniz</div>

      <Link
        to={`/question/1`}
        className="bg-green-600 py-4 text-semibold text-xl active:translate-y-2 rounded-full mt-10 hover:bg-green-500 duration-200 transition-colors text-center w-[20rem]"
      >
        {" "}
        İlk Soruya İlerle{" "}
      </Link>
    </div>
  );
}

export default Home;
