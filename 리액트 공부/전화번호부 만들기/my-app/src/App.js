import React,{Component} from 'react';
import {PhoneForm,PhoneInfoList} from './Component/Index';

class App extends Component{
  id = 2;
  state ={
      information : [
        {id:0, name : '김**', phone : '010********'},
        {id:1, name : '김**', phone : '010********'},
    ]
  }
  
  handleCreate = (data) =>{
    // 현재의 information 데이터를 가져옵니다. 
    const {information} = this.state;
    
    // phoneForm에서 입력한 name값과 phone값을 현재 state의 information이라는 배열의 값에 추가합니다. 
    this.setState({
      information : information.concat({id : this.id++,...data})
    })
    console.log(data);
  }
  
  // 기존의 데이터 혹은 추가한 데이터의 값을 PhoneInfoList로 전달합니다. 
  render(){
    return(
      <div>
        <PhoneForm 
          onCreate ={this.handleCreate}
        />
        <PhoneInfoList 
          data = {this.state.information}
        />
      </div>
    )
  }
}

export default App;
