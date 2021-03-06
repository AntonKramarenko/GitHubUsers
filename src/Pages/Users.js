import React, { Fragment, useEffect, useState } from "react";
import { Card } from "../Components/Card";
import { Search } from "../Components/Search";


export const Users = () => {
    const url = 'https://api.github.com/users'
    const storage = window.localStorage
    const selectedUsers = []


    const [users, setUsers] = useState([])
    const [value, setValue] = useState('')


    useEffect(() => {
        fetch(url).then(res => res.json().then(data => setUsers(data)))
    }, [])

    const handleInput = (e) => setValue(e.target.value)

    const serchUser = () => {
        return users.filter(user => {
            if (user.login.toLowerCase().includes(value.toLowerCase().trim()) || user.node_id.includes(value.trim())) {
                return user;
            }
        })
    }
    const saveToStorage = () => {
        storage.setItem('users', JSON.stringify(selectedUsers))
    }

    const userArrayAdd = (user) => {
        selectedUsers.push(user)
    }



    return (
        <Fragment>
            <Search onChange={handleInput} value={value} />
            <div className="row px-5">
                {serchUser().map(user => {
                    return (
                        <div className="col-sm-2 mb-4" key={user.id}>
                            <Card user={user} buttonName='Select user' selectUser={userArrayAdd} useStorage={saveToStorage} />
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}