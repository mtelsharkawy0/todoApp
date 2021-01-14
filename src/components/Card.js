import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from  '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';


class Card extends Component{
  constructor(props){
    super(props)
    this.state={
      textDecoration:"none",
      checkCorrect:false,
      time:""
    }
  }
  handleChangeCheck=(e)=>{
    if (this.state.checkCorrect){
      this.setState({checkCorrect:false})
    }else{
      this.setState({checkCorrect:true})}
      this.setState({textDecoration:(e.target.checked)?"line-through":"none"})
  }
  componentDidMount(){
    this.setState({time:new Date().toString()})
  }
  render(){
    const sty3={
      margin:"auto",
      marginBottom:15,
      padding:15,
      background:"linear-gradient(to right,darkblue,darkred)",
      borderRadius:10
    }
    const styPTodo={
      whiteSpace:"normal",
      textDecoration:this.state.textDecoration,
      overflow:"auto",
      color:"white",
      fontSize:20
    }
    const styPTime={
      color:"#ccc",
      fontSize:12,
      fontStyle:"italic"
    }
    const styPId={
      display:"inline",
      color:"white"
    }
    return(
      <div style={sty3} >
        <Grid 
        container  
        spacing={1}>
          <Grid item xs={2}>
           <p style={styPId}>{this.props.k+1}    </p>
            <Checkbox  
            checkedIcon={<CheckCircleTwoToneIcon fontSize="large" style={{color:"lime"}}/>}
            icon={<CheckCircleTwoToneIcon fontSize="large" style={{color:"darkgrey"}}/>}
            checked={this.state.checkCorrect} 
            onChange={this.handleChangeCheck}/>
          </Grid>
          <Grid item md={9} sm={8} xs={8}>
            <p style={styPTodo}>{this.props.todo}</p>
            <p style={styPTime}>{this.state.time}</p>
          </Grid>
          <Grid item md={1} sm={2} xs={2}>
            <Button
            variant="contained"
            color="secondary"
            onClick={()=>{
              this.setState({
                textDecoration:"none",
                checkCorrect:false
              });
              this.props.del(this.props.k);}}>
              <DeleteIcon/>
            </Button>
          </Grid>
        </Grid>
      </div>
      )
     }
   }
export default Card;
