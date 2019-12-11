import React, {Component} from 'react';
<<<<<<< HEAD
import Footer from '../Footer/Footer';
=======
import Footer from '../Footer/footer-overall';
>>>>>>> a17dd28f8dbce64dbf5b44ac98a1d12ac86609db
import CoreMembers from './Team/CoreMembers/final_core';
import Team from './Team/Team/team';
import About from './About/about';
import Sparticle from './Sparticle/sparticle';

class HomePage extends Component {
    render() {
        return (
            <div style={{overflowX:"hidden"}}>
                <Sparticle />
                <About />
                <Team />
                <CoreMembers />
                <Footer />
            </div>
        )
    }
}

export default HomePage;
