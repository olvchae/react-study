import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Game from "../pages/Game/Game";

function MainRountes() {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:username" element={<Game />} />
    </Routes>
}

export default MainRountes;