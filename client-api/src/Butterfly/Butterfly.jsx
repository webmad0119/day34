import React, { Component } from 'react';
import ButterflyService from '../ButterflyService/butterflyService';

export default class Butterfly extends Component {
  constructor(props){
    super(props)
    this.state={
      butterfly:[],
      name:'',
      color:''
    }
    this.butterflyService = new ButterflyService();
    this.getButterfly();
  }

  getButterfly = () =>{
    this.butterflyService.getButterfly()
    .then(butterflies=>{

      //let stateCopy={...this.state};
      //stateCopy.butterfly=butterflies
      //this.setState(stateCopy)

      this.setState({...this.state,butterfly:butterflies.data})
    })
    .catch(err=>console.log(err))
  }
  handlerChange = e =>{
    let inputName=e.target.name; 
    let inputValue=e.target.value;
    this.setState({...this.state,[inputName]:inputValue})
  }

  handlerSubmit = e => {
    e.preventDefault();
    let {name,color} = this.state;
    this.butterflyService.newButterfly({name,color})
    .then(response=>{
      this.setState({...this.state,color:'',name:''},()=>{
        this.getButterfly();
      })
    })

  }
  render() {
    
    return this.state.butterfly?(
      <div>
        <h1>Mariposas =^.^=</h1>
        {this.state.butterfly.map((butterfly,index)=>{
          return(
            <div key={index}>
              <div>Name: {butterfly.name}</div>
              <div>Color: {butterfly.color}</div>
            </div>
          )
        })}
        <form onSubmit={e=>this.handlerSubmit(e)}>
          <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={e=>this.handlerChange(e)}/>
          <input type="text" placeholder="Color" value={this.state.color} name="color" onChange={e=>this.handlerChange(e)}/>
          <button type="submit">New Butterfly</button>
        </form>
      </div>
    ):<div>Gift load</div>

    // return this.state.butterfly ? <div>mi butterfly</div> : <p>Load</p>
  }
}
