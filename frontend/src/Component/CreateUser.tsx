

const CreateUser = () => {

    const handleForm = ()=>{

    }
    return(
        <form onSubmit={handleForm}>
            <label htmlFor='name'>Nom</label>
            <input name='name' type="text"></input>

            <label htmlFor='firstName'>Prénom</label>
            <input name='firstName' type="text"></input>

            <label htmlFor='nickName'>Pseudo</label>
            <input name='nickName' type="text"></input>

            <label htmlFor='mail'>Mail</label>
            <input name='mail' type="email"></input>

            <button type="submit"></button>
        </form>
    )
}