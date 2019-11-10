import React, {Component} from 'react';
import Logo from './Logo/logo';
import Footer from '../Footer/Footer';
import CoreMembers from './Team/CoreMembers/coreMemberCards';
import Team from './Team/Team/team';
import About from './About/about';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Logo />
                <About />
                <Team />
                <CoreMembers />
                <Footer />
            </div>
        )
    }
}

export default HomePage;