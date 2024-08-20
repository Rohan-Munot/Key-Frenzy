import {MemoizedLogo}  from  '../Assets/DesktopLogo.jsx';
import {MemoizedKeyFrenzy}  from  '../Assets/KeyFrenzy.jsx';
export function Navbar() {
    return (
        <div className={'navbar'}>
            <div className={'logo-container'}>
                <MemoizedKeyFrenzy />
            </div>
            <div className={'navbar-nav-links'}>
                <div className={'typetest-wrapper'}>
                    <span className={'typetest'}>TypeTest</span>
                </div>
                <div className={'about-wrapper'}>
                    <span className={'about'}>About</span>
                </div>
            </div>
            <div className={'theme-dropdown'}>
                <div className={'desktop-logo-parent'}>
                    <MemoizedLogo />
                    <div className={'select-theme'}>Select Theme</div>
                </div>
            </div>
        </div>
    )
}