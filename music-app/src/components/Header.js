import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header className={this.props.className}>
                <h1>Music App</h1>
            </header>
        );
    }
}

export default Header;