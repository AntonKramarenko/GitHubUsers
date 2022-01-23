import React from "react";
import { Link, NavLink } from "react-router-dom";


export const Card = (props) => {

    const onclick = (e) => {
        window.location.assign('http://localhost:3000/profile/' + props.user.login);

    }

    return (
        <div className="card" style={{ width: "18rem", textDecoration: 'none', color: 'black' }} >
            <img src={props.user.avatar_url} className="card-img-top" alt={props.user.login} onClick={onclick} />
            <div className="card-body m-auto">
                <h5 onClick={onclick} className="card-title text-center">{props.user.login}</h5>
                <button
                    type="button"
                    className="btn btn-primary "
                    onClick={(e) => {
                        props.selectUser(props.user)
                        props.useStorage()
                    }}
                >{props.buttonName}
                </button>
            </div>

        </div>



    )

}

