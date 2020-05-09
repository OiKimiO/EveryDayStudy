import React,{Component} from 'react';

class App extends Component{
  state = {
    number : 1
  }

  handdleAdd = () => {
    this.setState =({
      number : this.state.number + 1
    });
  }

  haddleSub = () => {
    this.setState =({
      number : this.state.number - 1
    });
  }

  render(){
    return(
      <div>
        <p>현재의 값 : <span>{this.state.number}</span></p>
        <button onClick={this.handdleAdd}>+</button>
        <button onClick={this.haddleSub}>-</button>
      </div>
    )
  }

}



export default App;
