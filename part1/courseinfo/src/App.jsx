
const Header = (props) =>{
  return (
    <h1>{props.course}</h1>
  )
}

const Content= (props) =>{
  return(
    <p>{props.part}{props.exercises}</p>
  )
}


const Total = (props) =>{
  const one = props.first
  const two = props.second
  const three = props.third
  return(
    (" Number of exercises: ")+(one + two + three)
  
  )}


const App = () => {
  const course = {
  name: 'Half stack application development ',
  parts : [
    {name : 'Fundamentals of React ',
      exercises: 10
    },
    {
      name:'Using props to pass data ',
      exercises: 7
    },
    {
      name:'State of a component ',
      exercises: 14
    }
  ]
}
  

  return(
    <div>
      <Header course={course.name}/>
      <Content part={course.parts[0].name} exercises={course.parts[0].exercises}/>
      <Content part={course.parts[1].name} exercises={course.parts[1].exercises}/>
      <Content part={course.parts[2].name} exercises={course.parts[2].exercises}/>
      <Total first={course.parts[0].exercises} second ={course.parts[1].exercises} third={course.parts[2].exercises}/>
    </div>
  )
}

export default App