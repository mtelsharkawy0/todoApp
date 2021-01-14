import React, {Component} from 'react';
import Card from './Card'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
import Container from  '@material-ui/core/Container';
import Grid from  '@material-ui/core/Grid';
import {Spring} from 'react-spring/renderprops';
class Input extends Component{
  constructor(props){
    super(props)
    this.state={
      input:"",
      submit:[],
      submitted:false
    }
  }
  updateInput=(e)=>{
    this.setState({
      submitted:false,
      input:e.target.value
    })
  }
  deleteTodo=(val)=>{
    let newSubmit=this.state.submit.filter((v,i)=>{return (i!==val) })
    this.setState({
      submit:newSubmit
    })
  }
  submitTodo=()=>{
    if (this.state.input.trim()!==""){
    this.setState({
      submit:this.state.submit.concat(this.state.input),
      submitted:true,
      input:""
    })
  }
  }
  render(){
    const listItems = this.state.submit.map(
      (sub,index) =>  
      <Spring
      from={{opacity:0}}
      to={{opacity:1}}
      config={{delay:200,duration:1000}}
    >
      {props=>(
      <div style={props}>
          <Card todo={sub} del={this.deleteTodo} k={index} key={index}/>
      </div>
    )}</Spring>
    );
    const sty={
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
    const sty2={
      margin:"auto",
      marginTop:20,
      padding:15,
      backgroundColor:"white",
      borderRadius:10
    }
    const styH1={
      textAlign:"center",
      margin:15
    }
    return (

      <Container  maxWidth="md" style={sty2} > 
        <h1 style={styH1}>TODO APP</h1>
        <Grid container spacing={1} >
          <Grid item xs={10} md={11}>
          <TextField
          fullWidth={true}
          label="Enter Todo"
          variant="outlined"
          onChange={this.updateInput}
          value={(this.state.submitted)?"":this.state.input}
          />
          </Grid> 
          <Grid item xs={2} md={1} style={sty}>
          <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={this.submitTodo}>
            <Send/>
          </Button>
          </Grid>
          <Grid item xs={12}>
          <div>{listItems}</div>
          </Grid>
        </Grid>
      </Container>
    )
   }
}
export default Input;
