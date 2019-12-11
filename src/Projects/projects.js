import React , { Component } from 'react';
import AutoGrid from './body.js';
import FooterBar from "../Footer/footer-bottom";

class ProjectsPage extends Component { 
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

export default ProjectsPage;

/*import React from 'react';
import AutoGrid from './body.js';


function ProjectsPage() {
  return ( 
    <div> 
      <center>
      <AutoGrid/><br/>
      </center>      
    </div>
  );
}

export default ProjectsPage;*/