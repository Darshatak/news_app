import React, { PureComponent } from 'react';
import spinner from './Spinner-1s-200px.gif'

export default class Spinner extends PureComponent {
    render() {
        return (
            <div className="container text-center">
                <img src={spinner} alt="loader" />
            </div>

        )
    }
}
