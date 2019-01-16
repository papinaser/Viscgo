export class LoginContent extends React.Component {
    render() {
        return (
            <form className="dialogContent">
                <fieldset>
                    <input className="textBox userName" type={"text"} placeholder="Username"/>
                    <input className="textBox password" type={"password"} placeholder="Password"/>
                </fieldset>
                <button type={"submmit"} className="login">Login</button>
                <p className="forgotMessage">Did you forget your password?</p>
            </form>
        )
    }
}