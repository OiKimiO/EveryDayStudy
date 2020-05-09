import React,{Component} from 'react';

class PhoneForm extends Component{
    state = {
        name: '',
        phone : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
            /*
             [e.target.name] : 현재 적히고 있는 input에 name을 말한다. 
             e.target.value  : 현재 input name에서 입력되는 값을 말한다.
            */
        })
    }

    // 전송버튼을 누르면 이함수가 실행된다.
    handleSubmit = (e) => {
        // submit의 기능을 멈추어 준다.
        e.preventDefault();
        
        // App.js에서 onCreate를 통하여 haddleCreate함수를 실행합니다.
        // this.state의 값은 {name의 값,phone의 값}입니다. 
        this.props.onCreate(this.state);
        
        // 받고 나면 값을 초기화 한다. 
        this.setState({
            name : '',
            phone : ''
        })
    }

    render(){
        return(
                <form onSubmit = {this.handleSubmit}>
                    <input      
                        placeholder = "이름"   
                        value={this.state.name}
                        onChange = {this.handleChange}
                        name = "name"                        
                    /> 

                    <input      
                        placeholder = "전화번호"   
                        value={this.state.phone}
                        onChange = {this.handleChange}
                        name = "phone"                       
                    />

                    <input type= "submit" value="전송" />
                    <div>{this.state.name} : {this.state.phone}</div>                      
                </form>
        )
    }
}

export default PhoneForm;