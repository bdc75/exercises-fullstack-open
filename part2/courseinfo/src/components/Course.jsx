const Course = ({ course }) => (
  <div>
    <Header course={course}/>
    <Content course={course}/>
    <Total course={course}/>
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
      {parts.map((part) => <Part key={part.id} part={part.name} ex={part.exercises}/>)}
    </div>
  )
}

const Total = (props) => {
  const parts = props.course.parts
  const sumExerc = parts.reduce(
    (sum, part) => sum + part.exercises, 0
  )
  return (
    <strong>total of {sumExerc} exercises</strong>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.ex}
    </p>
  )
}

export default Course
