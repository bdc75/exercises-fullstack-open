// const Person = (props) => {
//     // console.log('props: ', props)
//     return <li>{props.person.name}</li>
// }
const Person = ({ person }) => {
    return <li>{person.name}: {person.number}</li>
}

export default Person
