// // // // // // // // // //
//
//      Footer
//
// // // // // // // // // //

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { scrollIt }   from 'utils/scroll';

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    // * * * * * * * * * * * * * * * * * * * *
    // Scrolls to top of document
    // * * * * * * * * * * * * * * * * * * * *
    handleClick = () => scrollIt(0, 500, 'easeInOutCubic');

    render() {
        return (
            <footer role="contentinfo">
                <ul>
                    <li><Link to={'/'}>home</Link></li>
                </ul>
            </footer>
        );
    }
}


const mapStateToPRops = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToPRops)(Footer));