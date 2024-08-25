import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Typing} from "./Pages/Typing.jsx";

function App() {
   return (
    <div className={'canvas'}>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Typing />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
