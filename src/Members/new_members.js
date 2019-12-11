import React , { Component } from 'react';
import AutoGrid from './new_members_body.js';
import FooterBar from "../Footer/footer-bottom";


class MembersPage extends Component { 
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render()
  {
    return ( 
      <div style={{overflow:'hidden'}}> 
        <center>
        <AutoGrid/>
        </center>
        <FooterBar />        
      </div>
    );
  }
}

export default MembersPage;