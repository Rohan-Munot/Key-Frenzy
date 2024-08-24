import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Typing} from "./Pages/Typing.jsx";
import {Results} from "./Pages/Results.jsx";

function App() {
   return (
    <div className={'canvas'}>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Typing />} />
                <Route path={'/results'} element={<Results/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
