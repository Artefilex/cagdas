import {BrowserRouter as Router , Routes , Route} from  "react-router-dom"
import Home from "./Pages/Home";
import Question from "./Pages/Question";
function App() {
  
  return (
    <Router>
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/question/:id" element={<Question/>} />
    </Routes>

</Router>
  
  );
}

export default App;
