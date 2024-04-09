const Hello = ({ name, age }) => {
    

    const bornYearn = () => {
        const year = new Date().getFullYear();
        return year - age;
    }

    return (
        <>
            <p id="loshadka">
                Hello {name}, you are {age} years old
            </p>
            <p>year {`--->`} {bornYearn()}</p>

        </>
    )
}

const App = () => {
    const nimi = 'Pekka'
    const ika = 10

    return (
        <>
            <h1>Greetings</h1>
            <Hello name="Maya" age={277} />
            <Hello name={nimi} age={ika} />

        </>

    )
}


export default App;