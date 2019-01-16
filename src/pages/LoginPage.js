import {DialogHeader} from "../components/DialogHeader";
import {LoginContent} from "../components/LoginContent";

export class LoginPage extends React.Component {
    render() {
        return (
            <div className="loginPage">
                <DialogHeader/>
                <LoginContent/>
            </div>
        )
    }
}