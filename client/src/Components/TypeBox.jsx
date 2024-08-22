import {createRef, useEffect, useMemo, useRef, useState} from "react";

import {generate} from 'random-words'

export function TypeBox() {
    const [wordsArray, setWordsArray] = useState(()=>{
        return generate(38)
    })
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [typedWords, setTypedWords] = useState(Array(wordsArray.length).fill([]))
    const inputRef = useRef(null)


    const handleKeyDown = (e) => {
        const keyPressed = e.key
        console.log(e.key)
        const currentWord = wordsArray[currentWordIndex]
        const currentChar = currentWord[currentCharIndex]

        if (keyPressed === currentChar){
            setCurrentCharIndex((prevState)=>prevState+1)
            setTypedWords((prevState)=> {
                const newTypedWords = [...prevState]
                newTypedWords[currentWordIndex] = [...newTypedWords[currentWordIndex],{char: keyPressed, correct: true}]
                return newTypedWords;
            })
        }else if(keyPressed === ' '){ // Space Functionality to move to next word
            setCurrentWordIndex((prevState=>prevState+1))
            setCurrentCharIndex(0)
        }else if(keyPressed === 'Backspace'){
            if(currentCharIndex>0){
                setCurrentCharIndex((prevState)=>prevState-1)
                setTypedWords((prevState)=> {
                    const newTypedWords = [...prevState]
                    newTypedWords[currentWordIndex] = newTypedWords[currentWordIndex].slice(0,-1)
                    return newTypedWords;
                })
            }else if(currentWordIndex>0){
                setCurrentWordIndex((prevState)=>prevState-1)
                setCurrentCharIndex(wordsArray[currentWordIndex-1].length)
            }
        }else {
            setCurrentCharIndex((prevState) => prevState + 1)
            setTypedWords((prevState) => {
                const newTypedWords = [...prevState]
                newTypedWords[currentWordIndex] = [...newTypedWords[currentWordIndex], {
                    char: keyPressed,
                    correct: false
                }]
                return newTypedWords;
            })
        }
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
                                    const typedChar = typedWords[wordIndex][charIndex];
                                    const isCorrect = typedChar && typedChar.correct;
                                    const shouldCursor = wordIndex === currentWordIndex && charIndex === currentCharIndex;
                                    const shouldCursorRight = wordIndex === currentWordIndex && charIndex === word.length-1 && currentCharIndex>=word.length
                                        return (
                                            <span key={charIndex} className={`char ${typedChar?(isCorrect? 'correct' : 'incorrect'):''}`}>
                                                {shouldCursor && <span className={'cursor'}></span> }
                                                {char}
                                                {shouldCursorRight && <span className={'cursor-right'}></span> }
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