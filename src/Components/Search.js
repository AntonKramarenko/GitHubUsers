import React, { useState } from "react";

export const Search = () => {

    const [value, setValue] = useState('')


    if (value.trim()) {
        console.log('make request with', value)
    }

    return (
        <div className="form-group">
            <input
                type='text'
                className="form-control mb-4"
                placeholder="Ведите логин пользователя..."
                onChange={event => setValue(event.target.value)}
                value={value}
            />
        </div>
    )
}