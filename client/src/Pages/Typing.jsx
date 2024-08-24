import {GlobalStyles} from "../Styles/global.js";
import {Navbar} from "../Components/Navbar.jsx";
import {Info} from "../Components/Info.jsx";
import {TypeBox} from "../Components/TypeBox.jsx";
import {Footer} from "../Components/Footer.jsx";

export function Typing() {
    return (
        <>
            <GlobalStyles/>
            <Navbar />
            {/*<SettingsBar />*/}
            <Info/>
            <TypeBox/>
            <Footer/>
        </>
    )
}