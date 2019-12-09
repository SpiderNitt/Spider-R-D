import React, {Component} from 'react';
import Footer from '../Footer/Footer';
//import CoreMembers from './Team/CoreMembers/coreMemberCards';
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
