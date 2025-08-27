const Person = ({name, age, message, isStudent}) => {
  return (
    <div className='mt-5'>
        <h1> i am {age} years old</h1>
        <h2> my name is {name}</h2>
        <p>{message}</p>
        <p>Is {name} Student? : {isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

export default Person;