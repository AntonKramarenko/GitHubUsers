import React, { Fragment, useEffect } from "react";
import { Card } from "../Components/Card";
import { Search } from "../Components/Search";


export const Users = () => {

    const url = 'https://api.github.com/users'
    const [users, setUsers] = React.useState([])

    useEffect(() => {
        fetch(url).then(res => res.json().then(data => setUsers(data)))
    }, [])

    console.log(users);

    // <header className="Header">
    //     {users.map(user => (
    //         <div key={user.id}>
    //             <img src={user.avatar_url} />
    //             <p>{user.login}</p>
    //         </div>
    //     ))}
    //     <Input />
    // </header>




    return (
        <Fragment>
            <Search />
            <div className="row">
                {users.map(user => {
                    return (
                        <div className="col-sm-4 mb-4" key={user.id}>
                            <Card id={user.id} avatar={user.avatar_url} login={user.login} />
                        </div>

                    )
                })}
            </div>

        </Fragment>
    )
}