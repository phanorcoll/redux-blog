import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLogo from '../images/react-logo.png';
class TestContainer extends Component {

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="container">
                        <div className="top">
                            <div className="bg">
                                <img src={ReactLogo} />
                            </div>
                            <h1>{'{ dazero }'}</h1>
                            <h3>Initial boilerplate code for Reactjs app</h3>
                        </div>
                    </div>
                </div>
                <div className="dina-text">{this.props.test[0].title}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        test: state.test
    };
}

export default connect(mapStateToProps)(TestContainer);