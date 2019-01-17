import React from "react";
import {DialogHeader} from "../components/DialogHeader";
import {ResetContent} from "../components/ResetContent";

export class ResetPage extends React.Component {
    render() {
        return (
            <div className="resetPage">
                <DialogHeader/>
                <ResetContent/>
            </div>
        )
    }
}

export default ResetPage;