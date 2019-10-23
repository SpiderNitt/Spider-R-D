import React , { Component , Fragment } from 'react';
import Heading from'./Heading'
import ProfileName from './profiles'
import Batch from './batch'
import { Profile , Year , members } from './spiderJSON'
import TeamPage from './teamPage'

export default class extends Component {

	constructor(props)
	{
		super(props)

		this.state = {
			profileName: 'Tronix',
			yearName: 'All',
			Profile , Year , members 
		}

	}

	getData(){
	    setTimeout(() => {
	      this.setState({
	        profileName: 'Web Dev'
	      })
	    }, 500)
	  }

	  componentDidMount(){
	    this.getData();
	  }


	 handleProfileSelected = profileName =>
    {
      this.setState({
        profileName
      })
    }


	 handleYearSelected = yearName =>
    {
      this.setState({
        yearName
      })
    }

    	
  
  render() 
  {   
  	 
  	   const {profileName, yearName} = this.state
  	  
   return(
      <Fragment>
      <br/>
      <center>
      <br/>
      <Heading/>
      <ProfileName
      	profileName = {profileName}
        Profile={Profile} 
        onSelect = {this.handleProfileSelected}/>
      <br/>
      <Batch
       	yearName = {yearName}
        Year={Year} 
        onSelect = {this.handleYearSelected}/>
      <br/>
      <br/>
      <TeamPage
        members = {members}
      	profileName = {profileName} 
      	yearName = {yearName}
      />
      </center>
      </Fragment>
      )
  }
}
