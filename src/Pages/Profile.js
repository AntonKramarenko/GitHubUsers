import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";


export const Profile = () => {
    const userLink = useParams()
    const url = 'https://api.github.com/users/' + userLink.name
    console.log(url)


    const [user, setUser] = useState([])

    useEffect(() => {
        fetch(url).then(res => res.json().then(data => setUser(data)))
    }, [])

    const {
        name, company, avatar_url, location, blog, login, html_url, followers, following, public_repos, public_gists
    } = user

    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3 text-center">
                        <img
                            src={avatar_url}
                            alt={name}
                            className="col-12" />
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
                                        {blog}</li>
                                    : null
                            }
                        </ul>

                        <span className="badge bg-primary me-2 p-3 ">Followers: {followers} </span>
                        <span className="badge bg-success me-2 p-3">Following: {following} </span>
                        <span className="badge bg-info me-2 p-3">Repositorias: {public_repos} </span>
                        <span className="badge bg-dark me-2 p-3">Gists: {public_gists} </span>

                    </div>
                    <a
                        href={html_url}
                        target={"_blank"}
                        className="btn btn-outline-dark col-12 mt-4"
                    >Open profile</a>
                </div>
            </div>
        </div>

    )
}