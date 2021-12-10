import React from "react";
import "./container.scss";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorClosed, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import api from "../../services/api/api";

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
            img: {},
        }
    }

    componentDidMount = () => {
        this.getDoorStatus();
    }

    getDoorStatus = async () => {
        api
            .get("/status/1")
            .then(response => {
                let isOpen = response.data.isOpen;
                this.setState({ isOpen });
                console.log('is open', isOpen)
            });
    }

    toggle = () => {
        if(this.state.isOpen) {
            this.closeDoor();
        } else {
            this.openDoor();
        }
        this.setState({ isOpen: !this.state.isOpen });
    }

    openDoor = async () => {
        api.post("/open/1");
    }

    closeDoor = async () => {
        api.post("/close/1");
    }

    render() {
        return (
            <div className="container" style={{backgroundImage: this.state.isOpen ? 'url(/img/opened.jpg)' : 'url(/img/closed.jpg)'}}>
                <div className="gradient"></div>
                <div
                    className="btn btn-outline-light mx-auto"
                    onClick={this.toggle}
                    >
                        {this.state.isOpen ? 
                            <div><FontAwesomeIcon icon={faDoorClosed} /> Trancar</div> :
                            <div><FontAwesomeIcon icon={faDoorOpen} /> Abrir</div>
                        }
                    </div>
            </div>
        )
    }
}

export default Container;