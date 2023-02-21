import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

 const Test = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <TextField 
                name="name"
                value={inputs.name} 
                onChange={handleChange}
                sx={{ margin: 3 }}
                type={'text'}
                placeholder="Name"
                variant="outlined"
            />
            <TextField 
                name="email"
                value={inputs.email} 
                onChange={handleChange}
                sx={{ margin: 3 }} 
                type={'email'}
                placeholder="Email" v
                variant="outlined"
            />
            <TextField 
                name="password"
                value={inputs.password} 
                onChange={handleChange}
                sx={{ margin: 3 }} 
                type={'password'}
                placeholder="Password" 
                variant="outlined"
            />

            <Button type='submit'>Submit Info</Button>
        </form>
    </div>
  );
};

export default Test;