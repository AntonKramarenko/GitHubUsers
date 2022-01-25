import React, { useState } from "react";
import { Link } from "react-router-dom";


export const Card = (props) => {
    const [disable, setDisable] = useState(false)

    return (
        <Link to={'/profile/' + props.user.login} >
            <div className="card" style={{ width: "9rem", textDecoration: 'none', color: 'black' }} >
                <img src={props.user.avatar_url} className="card-img-top" alt={props.user.login} />
                <div className="card-body m-auto" >
                    <h5 className="card-title text-center">{props.user.login}</h5>
                    {disable
                        ? <button type="button" className="btn btn-secondary" onClick={(event) => event.preventDefault()} >User Select</button>
                        : <button
                            type="button"
                            className="btn btn-primary "
                            onClick={(event) => {
                                event.preventDefault()
                                props.selectUser(props.user)
                                props.useStorage()
                                setDisable(true)
                            }}
                        >{props.buttonName}
                        </button>}
                </div>
            </div>
        </Link >

    )

}

