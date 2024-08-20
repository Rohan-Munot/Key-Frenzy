import {createRef, useEffect, useMemo, useRef, useState} from "react";

import {generate} from 'random-words'

export function TypeBox() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [typedWords, setTypedWords] = useState([])
    const inputRef = useRef(null)

    const [wordsArray, setWordsArray] = useState(()=>{
        return generate(38)
    })

    const handleKeyDown = (e) => {
        const keyPressed = e.key
        // console.log(keyPressed)
        const currentWord = wordsArray[currentWordIndex]
        const currentChar = currentWord[currentCharIndex]
        if (keyPressed === currentChar){
            setCurrentCharIndex((prevState)=>prevState+1)
            setTypedWords((prevState)=> [...prevState, {char: keyPressed, correct: true}])
        }else {
            setCurrentCharIndex((prevState)=>prevState+1)
            setTypedWords((prevState)=> [...prevState, {char: keyPressed, correct: false}])
        }

        // Move to the next word if the current one is completed
        if (currentCharIndex + 1 === currentWord.length) {
            setCurrentWordIndex((prevIndex) => prevIndex + 1);
            setCurrentCharIndex(0);

        }

        console.log(currentWordIndex)
        console.log(currentCharIndex)


    }
    const focusInput =()=>{
        inputRef.current.focus()
    }
    useEffect(() => {
        focusInput()
    }, []);



    return (
        <>
            <div className={'typebox'} onClick={focusInput}>
                <div className={'words'}>
                    {
                        wordsArray.map((word, wordIndex) => (
                            <span key={wordIndex} className={'word'}>
                                {word.split('').map((char, charIndex) => {
                                    // Determine if the character is correctly or incorrectly typed
                                    const typedChar = typedWords[wordIndex * word.length + charIndex];
                                    const isCorrect = typedChar && typedChar.correct;
                                    const shouldCursor = wordIndex === currentWordIndex && charIndex === currentCharIndex;
                                        return (
                                                <span key={charIndex} className={`char ${typedChar?(isCorrect? 'correct' : 'incorrect'):''}`}>
                                                    {shouldCursor && <span className={'cursor'}></span> }
                                                    {char}
                                                </span>
                                        )
                                })}
                            </span>
                        ))
                    }
                </div>
            </div>
            <input
                type={"text"}
                ref={inputRef}
                className={'hidden-input'}
                onKeyDown={handleKeyDown}
            />
        </>
    )
}