import React,{Component} from 'react';

class PhoneInfo extends Component{
    
    // props로 넘어온 값이 없을 때 기본 이값을 사용합니다.
    // defaultProps를 사용한 이유? 넘어온 info가 undefined일 때에는 비구조화 할당을 통해 내부값을 받아올 수 없기 때문 
    static defaultProps = {
        info : {
            name  : "이름",
            phone : "00000000000",
            id    : 0
        }
    }

    render(){
        // div에 넣을 스타일 지정합니다.
        const style = {
            border  : '1px solid black',
            padding : '8px',
            margin  : '8px'
        }

        // 부모로 부터 넘겨 받은 props를 가져옵니다.
        const {name, phone, id} = this.props.info;

        return(
            <div style = {style}>
                <div id = {id}>
                    <div><b>{name}</b></div> 
                    <div>{phone}</div>                    
                </div>
            </div>    
        )
    }
}

export default PhoneInfo;