// const Person = (props) => {
//     // console.log('props: ', props)
//     return <li>{props.person.name}</li>
// }
const Person = ({ person, onDelete }) => {
    return (
        <li key={person.id}>
            {person.name}: {person.number}
            <button onClick={onDelete}>delete</button>
        </li>
    )
}

export default Person
