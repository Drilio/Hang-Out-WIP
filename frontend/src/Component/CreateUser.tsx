import {FormEvent, useState} from "react";


const CreateUser = () => {
const [name, setName] = useState('');
const [firstName, setFirstName] = useState('');
const [nickName, setNickName] = useState('');
const [ mail, setMail] = useState('');
    const handleForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const user = {
            mail: mail,
            firstName: firstName,
            nickName: nickName,
            name: name,
            isManager: 0,
        };

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Success:", data);
            } else {
                console.error("Server responded with an error:", response.status);
            }
        } catch (error) {
            console.error("Network or other error:", error);
        }
    };



    return(
        <form onSubmit={handleForm}>
            <label htmlFor='name'>Nom</label>
            <input name='name' type="text" onChange={(e) => setName(e.target.value)}></input>

            <label htmlFor='firstName'>Prénom</label>
            <input name='firstName' type="text" onChange={(e) => setFirstName(e.target.value)}></input>

            <label htmlFor='nickName'>Pseudo</label>
            <input name='nickName' type="text" onChange={(e) => setNickName(e.target.value)}></input>

            <label htmlFor='mail'>Mail</label>
            <input name='mail' type="email" onChange={(e) => setMail(e.target.value)}></input>

            <button type="submit"></button>
        </form>
    )
}

export default CreateUser