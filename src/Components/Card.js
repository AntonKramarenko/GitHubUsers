import React from "react";
import { Link } from "react-router-dom";


export const Card = (props) => (
    // console.log(props)

    < div className="card" style={{ width: "18rem" }} >
        < img src={props.user.avatar_url} className="card-img-top" alt={props.user.login} />
        <div className="card-body m-auto ">
            <h5 className="card-title text-center mb-4">{props.user.login}</h5>
            <div className="btn-group-vertical">
                <Link to={'/profile/' + props.user.login} className="btn btn-primary mb-2">User information</Link>
                {<button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        props.selectedUser(props.user)
                        props.useStorage()
                    }}
                >{props.buttonName}
                </button>}
            </div>

        </div>
    </div >
)

