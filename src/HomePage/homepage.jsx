import React, {Component} from 'react';
import Footer from '../Footer/footer-overall';
import CoreMembers from './Team/CoreMembers/final_core';
import Team from './Team/Team/team';
import About from './About/about';
import Particles from './Particles/particles';

class HomePage extends Component {
    render() {
        return (
            <div style={{overflowX:"hidden"}}>
                <Particles />
                <About />
                <Team />
                <CoreMembers />
                <Footer />
            </div>
        )
    }
}

export default HomePage;
