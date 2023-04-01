import React, {useState } from 'react'
import { jokeApi } from '../../types/types'

const Jokes = () => {
    const [joke, setJoke] = useState<jokeApi>()
    const [show, setShow] = useState(false);

    function getJoke() {
      
            fetch("https://official-joke-api.appspot.com/random_joke")
                .then(res => res.json())
                .then(
                    (res) => {
                        setJoke(res);
                        setShow(true)
                    },

                    (error) => {

                        console.log(error);
                    }
                )
        
    }

    return (
        <section className="wrapper d-flex flex-column align-items-center  mt-5" style={{height: "100vh"}}>
            <h1 className='mb-3'>Случайная шутка</h1>
            <button type="button" className='btn btn-success mb-5' onClick={getJoke}>Шутка</button>
            {show && <div className="qute-list-category-author mb-2 d-flex flex-row align-items-center" style={{ padding: "25px", background: "rgb(170 245 249)", borderRadius: '5px', maxWidth: "600px" }}>
                <div className="d-flex flex-column">
                    <p>-{joke?.setup}</p>
                    <p>-{joke?.punchline}</p>
                </div>
            </div>}
        </section >
    )
}

export default Jokes