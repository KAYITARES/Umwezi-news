import React from 'react';
import Button from "./Button"
function Signup() {
    return (
        <>
            <h1>Login Form</h1>
            <div className="group">
                <label htmlFor="username">Username</label>
                <input type="text" name='username' id='username' />
            </div>
            <div className="group">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' />

                <Button name="login"></Button>
            </div>
        </>

    )

}
export default Signup