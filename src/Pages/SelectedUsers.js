import React from "react";
import { Card } from "../Components/Card";
import { Navbar } from "../Components/Navbar";

export const SelectedUsers = () => {
    const storage = window.localStorage
    let selectedUsers = JSON.parse(storage.getItem('users'))

    const removeAllUsers = () => {
        storage.removeItem('users')
    }

    return (
        <React.Fragment>
            <button
                type="button"
                className="btn btn-outline-primary text-center w-100 mb-4"
                onClick={() => removeAllUsers()}
            >Delete all Users</button>

            <div className="row">
                {selectedUsers.map(user => {
                    return (
                        <div className="col-sm-4 mb-4" key={user.id}>
                            <Card user={user} buttonName='Delete user' />
                        </div>
                    )
                })}
            </div>
        </React.Fragment>

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