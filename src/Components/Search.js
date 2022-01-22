import React from "react";

export const Search = (props) => {
    return (
        <div className="form-group">
            <input
                type='text'
                className="form-control mb-4"
                placeholder="Ведите логин пользователя..."
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    )
}