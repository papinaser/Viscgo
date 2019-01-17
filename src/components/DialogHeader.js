import React from "react";
import logo from '../assets/logo.svg';
import "./DialogHeader.css"

export class DialogHeader extends React.Component {
    render() {
        return (
            <header className="dialogHeader">
                <img src={logo} alt={"logo"}/>
            </header>
        );
    }
}

export default DialogHeader;