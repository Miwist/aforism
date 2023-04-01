import React, {useState } from 'react'
import { adviceApi } from '../../types/types'

const Advices = () => {
  const [advices, setAdvices] = useState<adviceApi>()
  const [show, setShow] = useState(false);
  const [color, setColor] = useState<string>();
  const [counter, setCounter] = useState(1)
 
  function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(
        (res) => {
          setAdvices(res);
        setCounter(Math.floor(Math.random() * 5))
          setShow(true)
            changeColor()
        },

        (error) => {

          console.log(error);
        }
      )
        function changeColor() {
          if (counter === 1) {
            setColor("rgb(222 170 249)");
          } else if (counter === 2) {
            setColor("rgb(175 170 249)");
          } else if (counter === 3) {
            setColor("rgb(75 170 249)");
          } else if (counter === 4) {
            setColor("rgb(120 120 249)");
          } else {
            setColor("rgb(75 230 249)");
          }
        }
  }
  return (
    <section className="container d-flex flex-column align-items-center  mt-5" style={{height: "100vh"}}>
      <h1 className='mb-3'>Получить совет</h1>
      <button type="button" className='btn btn-success mb-5' onClick={getAdvice}>Совет</button>
      {show && <div className="qute-list-category-author mb-2 d-flex flex-row align-items-center" style={{ padding: "25px", background: color, borderRadius: '5px', maxWidth: "600px" }}>
        <div className="d-flex flex-column">
          <p>-{advices?.slip.advice}</p>
        </div>
      </div>}
    </section >
  )
}

export default Advices