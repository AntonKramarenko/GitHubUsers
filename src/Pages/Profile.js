import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



export const Profile = () => {
    const userLink = useParams()
    const url = 'https://api.github.com/users/' + userLink.name


    const [user, setUser] = useState([])

    useEffect(() => {
        fetch(url).then(res => res.json().then(data => setUser(data)))
    }, [])

    const {
        name, company, avatar_url, location, blog, login, html_url, followers, following, public_repos, public_gists
    } = user

    const userData = [
        { id: 0, className: 'badge bg-primary me-2 p-3', title: 'Followers:', data: followers },
        { id: 1, className: 'badge bg-success me-2 p-3', title: 'Following:', data: following },
        { id: 2, className: 'badge bg-info me-2 p-3', title: 'Repositories:', data: public_repos },
        { id: 3, className: 'badge bg-dark me-2 p-3', title: 'Gists:', data: public_gists },

    ]


    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3 text-center">
                        <img
                            src={avatar_url}
                            alt={name}
                            className="img-fluid rounded-start" />
                    </div>
                    <div className="col">
                        <h1>{name}</h1>
                        <ul>
                            {location
                                ? <li>
                                    <strong>Location: </strong>
                                    {location} </li>
                                : null}
                            {
                                login
                                    ? <li>
                                        <strong>Username: </strong>
                                        {login}</li>
                                    : null
                            }
                            {
                                company
                                    ? <li>
                                        <strong>Company: </strong>
                                        {company}</li>
                                    : null
                            }
                            {
                                blog
                                    ? <li>
                                        <strong>Blog: </strong>
                                        <a
                                            href={blog}
                                            target={"_blank"}
                                            className="link-primary"
                                        >{blog}</a>

                                    </li>
                                    : null
                            }
                        </ul>
                        {userData.map(user => (
                            <span className={user.className}>{user.title} {user.data} </span>
                        ))}
                    </div>
                    <a
                        href={html_url}
                        target={"_blank"}
                        className="btn btn-primary col-12 mt-2"
                    >Open profile</a>
                </div>
            </div>
        </div>

    )
}