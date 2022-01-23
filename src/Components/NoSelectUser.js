import Reacr from "react";
import { NavLink } from "react-router-dom";


export const NoSelectUser = () => (


    <div className="card text-center">

        <div className="card-body ">
            <h5 className="card-title text-uppercase">No select User</h5>
            <p className="card-text">Please select a user from users list</p>
            <NavLink to='/' className='btn btn-primary col-12'>Users</NavLink>

        </div>

    </div>



)