import {useState, useEffect } from "react";

const Users = () =>{

    const [users, setUsers ] = useState([])
    const [toto, setToto] = useState()
    useEffect(()=>{
        fetch('http://localhost:5000/user')
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                console.log(data.rows);
                setUsers(data);
                setToto(data.rows[0].user_firstName)
            })
            .catch(error => {
            console.error("failed to fetch users", error)
        })
    },[])

    return(
        <div>
            <div>
                {toto}
            </div>
            <div>
                <p>toto</p>
            </div>
        </div>
    )
}

export default Users;