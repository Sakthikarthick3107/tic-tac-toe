import { CssBaseline } from "@mui/material";
import MultiBoard from "./Multiplayer/MultiBoard";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";


function App() {
  return (
    <div className="App">
    <CssBaseline/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/multi-player-game' element={<MultiBoard/>}/>
      
      
    </Routes>
    </div>
  );
}

export default App;
