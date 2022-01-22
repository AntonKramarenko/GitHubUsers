import React from "react";
import { Link } from "react-router-dom";


export const Card = (props) => (

    < div className="card" style={{ width: "18rem" }} >
        < img src={`${props.avatar}`} className="card-img-top" alt={props.login} />
        <div className="card-body m-auto ">
            <h5 className="card-title text-center mb-4">{props.login}</h5>
            <Link to={'/profile/' + props.login} className="btn btn-primary">Информация о юзере</Link>
        </div>
    </div >
)

