import React, {useState} from 'react'
import {Button} from "reactstrap";


const EmployeeComponent = (props) => {
    const [name, setName] = useState("test-> calling from employee");
    const onClick = (name) => {
        setName(name);
    };
    const onChange = (e, name) => {
        setName(e.target.value);
    };
    return (
        <div>
            {name}
            <input type={"text"} onChange={e=>onChange(e, "gujjari")} name={"test"}/>
            <Button outline color="primary" onClick={e=>{onClick("test12")}}>Apply</Button>{' '}
        </div>
    );
};

export default EmployeeComponent;