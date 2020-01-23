import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab :0}
    }

    toggleCategories(){
        if(this.state.activeTab ===0){
            return(
                //Projects
                <div className="projects-grid">
            
                <Card shadow={5} style={{width:'400px', margin: 'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UiAkjzLv-oh2qtrZ6NUZuFzSCs7qx_O0yykoQMAoj1FuzJQEeA&s'}}>React Project#1</CardTitle>
                    <CardText>
                        I know i have to write something logicalllllll
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{width:'400px', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UiAkjzLv-oh2qtrZ6NUZuFzSCs7qx_O0yykoQMAoj1FuzJQEeA&s'}}>React Project#1</CardTitle>
                <CardText>
                    I know i have to write something logicalllllll
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            <Card shadow={5} style={{width:'400px', margin: 'auto'}}>
            <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UiAkjzLv-oh2qtrZ6NUZuFzSCs7qx_O0yykoQMAoj1FuzJQEeA&s'}}>React Project#1</CardTitle>
            <CardText>
                I know i have to write something logicalllllll
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
            </CardMenu>
            </Card>
            </div>
            )
        }else if(this.state.activeTab ===1){
            return(
                <div><h1>This is React </h1></div>
            )
        }else if(this.state.activeTab ===2){
            return(
                <div><h1>This is Nodejs</h1></div>
            )
        }else if(this.state.activeTab ===3){
            return(
                <div><h1>This is Javascript</h1></div>
            )
        }

    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                    <Tab>Mongo</Tab>
                    <Tab>React</Tab>
                    <Tab>Nodejs</Tab>
                    <Tab>Javascript</Tab>
                </Tabs>
                
                    <Grid >
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
               
            </div>
        )
    }
}

export default Project