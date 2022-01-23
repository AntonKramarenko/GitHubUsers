import React, { Fragment, useState, useEffect } from "react";
import { Card } from "../Components/Card";
import { Navbar } from "../Components/Navbar";
import { NoSelectUser } from "../Components/NoSelectUser";
import { Search } from "../Components/Search";


export const SelectedUsers = () => {
    const [selectedUsers, setSelectedUsers] = useState([])
    const [isEmpty, setIsEmpty] = useState(true)
    const [value, setValue] = useState('')

    const storage = window.localStorage
    // setSelectedUsers(JSON.parse(storage.getItem('users')))

    const removeAllUsers = () => {
        storage.removeItem('users')
        setSelectedUsers([])
        setIsEmpty(false)

    }

    useEffect(() => {
        setSelectedUsers(JSON.parse(storage.getItem('users')))
    }, []);

    const handleInput = (e) => setValue(e.target.value)

    const serchUser = () => {
        return selectedUsers.filter(user => {
            if (user.login.toLowerCase().includes(value.toLowerCase().trim()) || user.node_id.includes(value.trim())) {
                return user;
            }
        })
    }





    return (
        <Fragment>
            {selectedUsers !== null || undefined
                ? <Fragment>
                    <Search onChange={handleInput} value={value} />
                    <button
                        type="button"
                        className="btn btn-outline-primary text-center w-100 mb-4"
                        onClick={() => removeAllUsers()}
                    >Delete all Users</button>

                    <div className="row">
                        {serchUser().map(user =>
                        (<div className="col-sm-4 mb-4" key={user.id}>
                            <Card user={user} buttonName='Delete user' />
                        </div>))}
                    </div>
                </Fragment>
                : <NoSelectUser />}
        </Fragment >

    )
}


// import React, { Fragment, useEffect, useState } from "react";
// import { Card } from "../Components/Card";
// import { Search } from "../Components/Search";


// export const Users = () => {
//     const url = 'https://api.github.com/users'
//     const storage = window.localStorage

//     const [users, setUsers] = useState([])
//     const [value, setValue] = useState('')

//     useEffect(() => {
//         fetch(url).then(res => res.json().then(data => setUsers(data)))
//     }, [])

//     const handleInput = (e) => setValue(e.target.value)

//     const serchUser = () => {
//         return users.filter(user => {
//             if (user.login.toLowerCase().includes(value.toLowerCase()) || !value.length) {
//                 return user;
//             }
//         })
//     }

//     let selected = storage.getItem('users')
//     console.log(JSON.parse(selected))



//     const selectedUsers = []

//     return (
//         <Fragment>
//             <Search onChange={handleInput} value={value} />
//             <div className="row">
//                 {serchUser().map(user => {
//                     return (
//                         <div className="col-sm-4 mb-4" key={user.id}>
//                             <Card id={user.id} avatar={user.avatar_url} login={user.login} />
//                             <button
//                                 onClick={() => {
//                                     selectedUsers.push(user)
//                                     console.log(selectedUsers)
//                                     storage.setItem('users', JSON.stringify(selectedUsers))
//                                 }}
//                             >  test</button>
//                             <button
//                                 onClick={() => {
//                                     console.log()
//                                 }}
//                             >
//                                 console
//                             </button>
//                         </div>
//                     )
//                 })}
//             </div>
//         </Fragment>
//     )
// }