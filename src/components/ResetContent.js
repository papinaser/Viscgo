import React from "react";
import "./ResetContent.css"

export class ResetContent extends React.Component {
    render() {
        return (
            <article className="dialogContent">
                <form>
                    <h3>Reset Password
                    </h3>
                    <p>
                        Enter the email address associated with your account, and we’ll email you a link to reset your
                        password
                    </p>
                    <fieldset>
                        <input className="textBox email" name="email" type={"email"} placeholder="Email Address"/>
                        <button type={"submmit"} className="dialogButton resetBtn">Reset Password</button>
                    </fieldset>
                </form>
            </article>
        );
    }
}