import React, { Component } from 'react'
import { Cell, Grid} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqP85ZnOcRSCX3nlYdkCvSxhSuZs0bLt1He8EvGr5ne8c7mTqW&s"
                            alt="avatar"
                            style={{height: '200px'}}/>
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Tuncer AKALIN</h2>
                        <h4 style={{color:'grey'}}>Web Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width:'50%'}}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Address</h5>
                        <p>Athens-Greece</p>
                        <h5>Phone</h5>
                        <p>555 5 555</p>
                        <h5>Email</h5>
                        <p>tuncerakalin407@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>education</h2>
                        <Education
                           startYear={2018}
                           endYear={2019}
                           schoolName={"Grandma University"}
                           schoolDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"}
                        />
                        <Education
                           startYear={2038}
                           endYear={2049}
                           schoolName={"GrandPa University"}
                           schoolDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"}
                        />
                        <hr style={{borderTop:'2px solid red'}}/>
                        <h2>Experience</h2>
                        <Experience
                          startYear={2138}
                          endYear={2249}
                          jobName={"JOHN J COMPANY"}
                          jobDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"}
                       
                        />
                        <Experience
                          startYear={2108}
                          endYear={2209}
                          jobName={"MICHAEL M COMPANY"}
                          jobDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"}
                       
                        />
                        <hr style={{borderTop:'2px solid red'}}/>
                        <h2>Skills</h2>
                        <Skills
                           skill="Javascript"
                           progress={100}
                        />
                        <Skills
                           skill="React"
                           progress={100}
                        />
                        <Skills
                           skill="MongoDB"
                           progress={90}
                        />
                        <Skills
                           skill="Nodejs"
                           progress={100}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume