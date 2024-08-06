const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  console.log(new Date())
  
  return <Course course={course} />
}

const Course = ({ course }) => (
  <div>
    <Header course={course}/>
    <Content course={course}/>
  </div>
)


const Header = (props) => {
  console.log('name', props.course.name)
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  const parts = props.course.parts
  return (
    <div>
      {/* <Part part={parts[0].name} ex={parts[0].exercises}/> */}
      {parts.map((part) => <Part key={part.id} part={part.name} ex={part.exercises}/>)}
    </div>
  )
}

const Total = (props) => {
  const parts = props.course.parts
  return (
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.ex}
    </p>
  )
}

export default App
