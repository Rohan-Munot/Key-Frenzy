import {MemoizedInfoLogo} from "../Assets/InfoLogo.jsx";

export function Info() {
    return (
        <div className={'info-parent'}>
            <MemoizedInfoLogo/>
            <div className={'info-text'}>
                Start typing the words shown on the screen to begin the test. Once you finish, your results, stats, and analytics will be displayed. Good luck!
            </div>
        </div>
    )
}