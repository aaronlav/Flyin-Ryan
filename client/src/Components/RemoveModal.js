import React from 'react'
import X from "../images/x.png"
import "../Css/ShareModal.css"
import { database } from '../firebaseApp.js'

class RemoveModal extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div id="share-modal">
                <h2>Delete Value</h2>
                <br></br>
                <div onClick={this.props.closeRemModal}>
                    <img id='close-button' src={X} style={{ maxWidth: "40px" }}></img>
                </div>
                <div id='preshare'>
                    <div>Hey 
                        <span id="author-post">
                            , {this.props.author}
                        </span>, click "Delete" to delete the following value:
                        <div id="post-content">
                            {this.props.content}
                        </div>
                    </div>
                </div>
                <div id="share-to-feed" onClick={this.props.delete}>Delete</div>
            </div>
        )
    }
}

export default RemoveModal
