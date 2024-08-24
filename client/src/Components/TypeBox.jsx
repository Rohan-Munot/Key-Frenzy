import {useEffect, useRef, useState} from "react";

import {generate} from 'random-words'


export function TypeBox() {
    const [wordsArray, setWordsArray] = useState(()=>{
        return generate(36)
    })
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [typedWords, setTypedWords] = useState(Array(wordsArray.length).fill([]))
    const [startTime, setStartTime] = useState(null)
    const [wpm, setWpm] = useState(0)
    const[accuracy, setAccuracy] = useState(0)
    const inputRef = useRef(null)


    const handleKeyDown = (e) => {
        const keyPressed = e.key
        // console.log(e.key)
        const ignoredKeys = ['Shift','Meta', 'Alt', 'Control','CapsLock','Tab','Escape','ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
        if (ignoredKeys.includes(keyPressed)){
            return
        }
        const currentWord = wordsArray[currentWordIndex]
        const currentChar = currentWord[currentCharIndex]

        // Timer starts
        if(!startTime){
            setStartTime(Date.now())
        }

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

    //     Check if all words are typed and stop timer
        if (currentWordIndex === wordsArray.length-1 && currentCharIndex+1 === currentWord.length ){
            const endTime = Date.now()
            const timeTaken = (endTime-startTime)/60000 // Time in minutes

            const totalCharacters = typedWords.flat().length
            const correctCharacters = typedWords.flat().filter(char => char.correct).length

        //     Calculate WPM
            const calculatedWPM = (totalCharacters/5)/timeTaken;
        //     Calculate Accuracy
            const calculatedAccuracy = (correctCharacters/totalCharacters)*100

            setWpm(Math.round(calculatedWPM))
            setAccuracy(Math.round(calculatedAccuracy))

            inputRef.current.blur()

            console.log('WPM '+ calculatedWPM)
            console.log('Accuracy: ' + calculatedAccuracy)
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