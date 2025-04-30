import { useState } from 'react'
/*
const Display =({counter})=> <div>{counter}</div>
  

const Button = ({onClick, text}) => 
    <button onClick={onClick}>
      {text}
    </button>


const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log("rendering with counter value" , counter)

  const increaseByOne = () => {
    console.log('increasing, value bedore', counter)
    setCounter(counter + 1)}

  const setToZero = () => {
    console.log('resetting to zero, value before' , counter)
    setCounter(0)}
  const decreaseByOne = () => {
    console.log('decreasing, value before' , counter)
    setCounter(counter - 1)}

  return (
    <div>
      <Display counter= {counter}/>
      <Button onClick={increaseByOne} text='Plus'/>
      <Button onClick={setToZero} text ='Zero'/>
      <Button onClick={decreaseByOne} text='Minus'/>
    </div>
  )
}
*/

const History = (props) => {
  if(props.allClicks.length === 0){
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return(
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {

/* const[clicks, setClicks] = useState({
  left: 0, right : 0
 })

  const handleLeftClick = () => {
    setClicks({...clicks, left: clicks.left + 1}) Los ... significan que hace una copia del objeto clicks y en base a esa copia modifica el valor del objeto
                                                  De no modificarse sobre la copia pueden sobreescribirse los datos en futuros usos del objeto
  }

  const handleRightClick = () => {
    setClicks({...clicks, right: clicks.right + 1})
  }  

*/

const [left,setLeft] = useState(0)
const [right, setRight] = useState(0)
const [allClicks, setAll] = useState([])
const [total , setTotal] = useState(0)

const handleLeftClick = () =>{
  setAll(allClicks.concat('L'))
  const updatedLeft = left + 1 // React realiza las actualizaciones de manera asincrona osea no inmediatamete por lo que se requiere de esta linea para forzar que react haga display del valor correcto
  setLeft(updatedLeft)
  setTotal(updatedLeft+ right)
}

const handleRightClick = () => {
  setAll(allClicks.concat('R'))
  setRight(right + 1)
  const updatedRight = right + 1 
  setTotal(left + updatedRight)
}


  return(
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks}/>
      <p>total {total}</p>
    </div>
  )


}

export default App