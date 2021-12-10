import React from "react";
import "./container.scss";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorClosed, faDoorOpen } from '@fortawesome/free-solid-svg-icons'

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
            img: {},
        }
    }

    componentDidMount = () => {
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
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