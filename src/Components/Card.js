import React from "react";
import { NavLink } from "react-router-dom";


export const Card = (props) => (
    // console.log(props)

    < div className="card" style={{ width: "18rem" }} >
        < img src={props.user.avatar_url} className="card-img-top" alt={props.user.login} />
        <div className="card-body m-auto ">
            <h5 className="card-title text-center mb-2">{props.user.login}</h5>
            <div className="btn-group-vertical">
                <NavLink to={'/profile/' + props.user.login} className="btn btn-primary mb-2">User information</NavLink>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        props.selectUser(props.user)
                        props.useStorage()
                    }}
                >{props.buttonName}
                </button>
            </div>

        </div>
    </div >
)

