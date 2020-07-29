import React from "react";

function FormField({ value, onChange, type, label }) {
    return (
        <div>
            <label>{ label }:
                    <input type={type} onChange={onChange} value={value}/>
            </label>
        </div>
    )
}

export default FormField;