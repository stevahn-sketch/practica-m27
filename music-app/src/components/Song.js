import React, { Component } from "react";

class Song extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <h2>{this.props.titulo}</h2>
                <p>Artista: {this.props.artista}</p>
                <p>Duración: {this.props.duracion}</p>
            </div>
        );
    }
}

export default Song;