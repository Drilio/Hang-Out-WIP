import {useState, useEffect } from "react";
interface User {
    user_id: number;
    user_name: string;
    user_firstName: string;
    user_nickName: string;
    user_mail: string;
    user_isManager: number;
}

const Users = () =>{

    const [users, setUsers ] = useState<User[]>([])

    useEffect(()=>{
        fetch('http://localhost:5000/user')
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                console.log(data)
                setUsers(data.data);
            })
            .catch(error => {
            console.error("failed to fetch users", error)
        })
    },[])

    const showData =() =>{
        console.log(users)
        console.log('toto')
    }


    return(
        <div>
            <button onClick={showData}>show data</button>
            <ul>
                {users.map((user) => (
                    <li key={user.user_id}>{user.user_nickName}</li>
                ))}
            </ul>
        </div>
    )
}

export default Users;