import {GlobalStyles} from "../Styles/global.js";
import {GithubLogo} from "../Assets/GithubLogo.jsx";
import {LinkedInLogo} from "../Assets/LinkedInLogo.jsx";
import {EmailLogo} from "../Assets/EmailLogo.jsx";

export function Footer() {
    return (
        <>
            <GlobalStyles />
            <div className={'footer'}>
                <div className={'frame-parent'}>
                    <div className={'frame-group'}>
                        <div className={'wrapper'}>
                            <span className={'name-text'}>Rohan Munot : </span>
                        </div>
                        <div className={'link-parent'} onClick={()=>{
                            window.open("https://github.com/Rohan-Munot","_blank")
                        }} >
                            <GithubLogo />
                            <div className={'link-text'}>Github</div>
                        </div>
                        <div className={'link-parent'}>
                            <LinkedInLogo />
                            <div className={'link-text'}>LinkedIn</div>
                        </div>
                        <div className={'link-parent'}>
                            <EmailLogo />
                            <div className={'link-text'}>Email</div>
                        </div>
                    </div>
                    <div className={'divider-2'} />
                    <div className={'frame-group'}>
                        <div className={'wrapper'}>
                            <span className={'name-text'}>Sahil Prasoon : </span>
                        </div>
                        <div className={'link-parent'}>
                            <GithubLogo />
                            <div className={'link-text'}>Github</div>
                        </div>
                        <div className={'link-parent'}>
                            <LinkedInLogo />
                            <div className={'link-text'}>LinkedIn</div>
                        </div>
                        <div className={'link-parent'}>
                            <EmailLogo />
                            <div className={'link-text'}>Email</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}