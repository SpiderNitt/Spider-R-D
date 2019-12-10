import React from 'react'

import './redirectPage.css'

const NotFound = () => {
    return <div id="notfound">
    <div class="notfound">
        <div class="notfound-404">
            <h1>Oops!</h1>
        </div>
        <h2>404 - Page not found</h2>
        <p>The page you are looking for can't be found!</p>
        <a href="/">Go To Homepage</a>
    </div>
</div>
}

export default NotFound;