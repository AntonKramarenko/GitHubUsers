import React, { Fragment, useState, useEffect } from "react";
import { Card } from "../Components/Card";
import { NoSelectUser } from "../Components/NoSelectUser";
import { Search } from "../Components/Search";



export const SelectedUsers = () => {
    const [selectedUsers, setSelectedUsers] = useState([])
    const [isEmpty, setIsEmpty] = useState(true)
    const [value, setValue] = useState('')

    const storage = window.localStorage

    const removeAllUsers = () => {
        removeUsersStorage()
        setSelectedUsers([])
        setIsEmpty(false)
    }

    const removeUsersStorage = () => {
        storage.removeItem('users')
    }

    useEffect(() => {
        setSelectedUsers(JSON.parse(storage.getItem('users')))
    }, []);

    const handleInput = (e) => setValue(e.target.value)

    const searchUser = () => {
        return selectedUsers.filter(user => {
            if (user.login.toLowerCase().includes(value.toLowerCase().trim()) || user.node_id.includes(value.trim())) {
                return user;
            }
        })
    }

    const saveToStorage = (saveItem) => {
        storage.setItem('users', JSON.stringify(saveItem))
    }

    const findDeleteUser = (user) => {
        const { id } = user
        const filteredUsers = selectedUsers.filter(user => user.id !== id)
        setSelectedUsers(filteredUsers)
        saveToStorage(filteredUsers)
    }

    return (
        <Fragment>
            {selectedUsers !== null || undefined
                ? <Fragment>
                    {isEmpty &&
                        <>
                            <Search onChange={handleInput} value={value} />
                            <button
                                type="button"
                                className="btn btn-outline-primary text-center w-100 mb-4"
                                onClick={() => removeAllUsers()}
                            >Delete all Users
                            </button>
                        </>}
                    <div className="row">
                        {searchUser().map(user =>
                        (<div className="col-sm-2 mb-4" key={user.id}>
                            <Card user={user} buttonName='Delete user' selectUser={() => findDeleteUser(user)} />
                        </div>))}
                    </div>
                </Fragment>
                : null}
            {!selectedUsers?.length && <NoSelectUser />}
        </Fragment>
    )

}
