import React from "react";
import "../../styles/common/FormWrapper.css";

const FormWrapper = ({children}) => {
    return (
        <div className="form">{children}</div>
    )
}

export default FormWrapper;