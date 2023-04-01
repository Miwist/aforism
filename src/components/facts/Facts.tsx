import React, { useEffect, useState } from 'react'
import { factApi } from '../../types/types';

const Facts = () => {
 const [factDate, setFactDate] = useState<factApi>();
 const [factMath, setFactMath] = useState<factApi>();
 const [factTrivia, setFactTrivia] = useState<factApi>();
 const [counter, setCounter] = useState(0);

 function nextFact() {
    setCounter(counter + 1);
 }
    useEffect(() => {
        fetch("http://numbersapi.com/random/year?json")
            .then(res => res.json())
            .then(
                (res) => {
                    setFactDate(res)
                },

                (error) => {

                    console.log(error);
                }
            )

            fetch("http://numbersapi.com/random/math?json")
            .then(res => res.json())
            .then(
                (res) => {
                    setFactMath(res)
                },

                (error) => {
                    console.log(error);
                }
            )
            
            fetch("http://numbersapi.com/random/trivia?json")
            .then(res => res.json())
            .then(
                (res) => {
                    setFactTrivia(res)
                },

                (error) => {
                    console.log(error);
                }
            )
    },[counter])

    return (
        <section className="container d-flex flex-column align-items-center" >
               <h1 className='mb-3'>Факты</h1>
               <button type="button" className='btn btn-success mb-3' onClick={nextFact}>Обновить</button>
               <div className="wrapper">
                <div className="fact-date mb-5 d-flex flex-row align-items-center" style={{ padding: "25px", background: "rgb(249 170 236)", borderRadius: '5px', maxWidth: "600px"}}>
                    <div className="d-flex flex-column">
                        <h2>Даты</h2>
                        <h5>{factDate?.date}</h5>
                        <p>{factDate?.text}</p>
                    </div>
                </div>
                <div className="fact-date mb-5 d-flex flex-row align-items-center" style={{ padding: "25px", background: "rgb(175 202 249)", borderRadius: '5px', maxWidth: "600px" }}>
                    <div className="d-flex flex-column">
                        <h2>Числа</h2>
                        <h5>{factMath?.date}</h5>
                        <p>{factMath?.text}</p>
                    </div>
                </div>
                <div className="fact-date mb-5 d-flex flex-row align-items-center" style={{ padding: "25px", background: "rgb(178 249 170", borderRadius: '5px', maxWidth: "600px" }}>
                    <div className="d-flex flex-column">
                        <h2>Мелочи</h2>
                        <h5>{factTrivia?.date}</h5>
                        <p>{factTrivia?.text}</p>
                    </div>
            </div>
               </div>
            
           
        </section>
    )
}

export default Facts