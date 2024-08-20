import {TypeBox} from "./Components/TypeBox.jsx";
import {SettingsBar} from "./Components/SettingsBar.jsx";
import {GlobalStyles} from "./Styles/global.js";
import {Navbar} from "./Components/Navbar.jsx";
import {Info} from "./Components/Info.jsx";

function App() {
   return (
    <div className={'canvas'}>
        <GlobalStyles/>
        <Navbar />
        {/*<SettingsBar />*/}
        <Info/>
        <TypeBox/>
    </div>
  )
}

export default App
