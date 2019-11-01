import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <p id="description">Weaved with &#128376; by   
                    <a href="https://spider.nitt.edu" className="spider-logo">
                        <span> &#128375;</span>
                    </a>
                </p>
            </footer>
        )
    }
}

export default Footer;