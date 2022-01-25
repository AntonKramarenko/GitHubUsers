import React from "react";

export const Search = (props) => {
    return (
        <div className="row">
            <input
                type='text'
                className="form-control mb-4"
                placeholder="Enter username or node_id..."
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    )
}