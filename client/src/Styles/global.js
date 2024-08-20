import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
    
    *{
        box-sizing: border-box;
    }
    
    body{
        margin: 0;
        padding: 0;
        background-color: #262629;
        color: #666666;
        font-family: 'DM Sans', sans-serif;
    }
    .canvas{
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        gap: 0.5rem;
        width:100vw;
        align-items: center;
    }
    .typebox{
        display: flex;
        flex-direction: row;
        height: fit-content;
        margin-top: 48px;
        margin-left:120px;
        margin-right:120px;
        overflow: hidden;
        align-content: center;
        justify-content: center;
        font-weight: 500;
    }
    .words{
        margin: auto;
        font-size: 36px;
        display: flex;
        flex-wrap: wrap;
        line-height: 56px;
    }
    .word{
        margin: 0.3rem;
        padding-right: 2px;        
    }
    
    .settings-bar{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
        width: max-content;
        height: 60px;
        padding: 0 40px;
        margin-top: 32px;
        font-size: 16px;
        background-color: #0f1114;
        color: #e0e0e0;
        font-family: 'DM Sans', sans-serif;
    }
    .nav-links-1{
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .divider-1 {
        width: 4px;
        position: relative;
        background-color: #262629;
        height: 44px;
    }
    .nav-links{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .nav-links-inner {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 60px;
    }
    .words-wrapper {
        background-color: #0f1114;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 8px 20px;
        width: 100%;
    }
    .time-wrapper {
        background-color: #0f1114;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 8px 20px;
        width: 100%;
    }
    .time-nav{
        position: relative;
        line-height: 20px;
        font-weight: 500;
    }
    .words-nav{
        position: relative;
        line-height: 20px;
        font-weight: 500;
    }
    .container {
        width: 36px;
        height: 36px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .time-setting{
        position: relative;
        line-height: 20px;
        font-weight: 500;
    }
    .navbar{
        width: 100%;
        height: 72px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 28px;
        position: relative;
        text-align: left;       
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;
        background-color: #0f1114;
        color: #d5fe65;
    }
    .navbar-nav-links{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
        font-size: 18px;
        position: relative;
        color: white;
        width: max-content;
        gap: 48px;
    }
    .typetest-wrapper{
        height: 72px;
        width: max-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .about-wrapper{
        height: 72px;
        width: max-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .typetest{
        line-height: 24px;
        font-weight: 500;
    }
    .about{
        line-height: 24px;
        font-weight: 500;
    }
    .theme-dropdown{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 14px 22px;
        height: 72px;
        font-size: 16px;
        color: #262629;
        font-family: 'DM Sans', sans-serif;
    }
    .desktop-logo-parent{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 12px 24px 12px 20px;
        background-color: #d5fe65;
        gap: 8px;
    }
    .select-theme{
        line-height: 20px;
        position: relative;
        font-weight: 500;
        color: #0F1114;
    }
    .desktop-icon{
        width: 20px;
        position: relative;
        height: 20px;
    }
    .logo-container{
        width: max-content;
        height: 72px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
    .info-parent{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: max-content;
        border-radius: 200px;
        border: 1px rgba(255, 255, 255, 0.28);
        background-color: rgba(255, 255, 255, 0.12);
        position: relative;
        gap: 8px;
        padding: 8px 16px 8px 12px;
        font-size: 14px;
        font-family: 'DM Sans', sans-serif;
        color: #ffffff;
        margin-top: 48px;
        font-weight: 400;
    }
    .info-logo{
        width: 18px;
        height: 18px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .info-text{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        line-height: 18px;
        position: relative;
        letter-spacing: 0.02em;
        font-weight: 400;
    }
    .hidden-input {
        position: absolute;   /* Position off-screen */
        top: -9999px;
        left: -9999px;
        opacity: 0;           /* Make it invisible */
        width: 0;
        height: 0;
        border: none;         /* Remove any borders */
        outline: none;        /* Remove the focus outline */
    }
    .cursor {
        border-left: 2px solid #D5FE65;
        animation: blink 850ms step-start infinite;
        animation-timing-function: ease;
        
    }
    @keyframes blink {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }

    .correct{
        color: #ffffff;
    }
    .incorrect{
        color: darkred;
    }

`