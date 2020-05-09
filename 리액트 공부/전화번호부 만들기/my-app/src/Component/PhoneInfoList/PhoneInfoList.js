import React,{Component} from 'react';
import PhoneInfo from '../PhoneInfo/PhoneInfo';

class PhoneInfoList extends Component{
    // props으로 넘어오는 값이 없다면 data의 값을 없이합니다.
    static defaultProps = {
        data : []
    }

    
    render(){
        // props로 부모에 있는 값을 가져옵니다.
        const {data} = this.props;   // this.props는 App.js에 있는 information을 말함 
        /*
            1. 부모에 있던 배열 값을 map형태로 나타냅니다.
              **map()? const info = arr.map(callback => (<자식 페이지
                                             자식태그의 state name = {props로 넘길 값}
                                             />))               
               map은 callback 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만듭니다.
               현재의 방식은 name = {props 넘길 값}이 JSON형태로 {name : props로 넘길 값} 바뀌게 됩니다.
               {name:props로 넘길 값}는 자식페이지로 들어가게 되고 값이 들어간 자식페이지는 info 배열의 첫 요소에 위치하게 되고 나머지 요소 또한 반복됩니다.             

            2.PhoneInfo key의 값을 넣는 이유?
              key는 리액트의 배열을 렌더링 할때 꼭 필요한 값입니다. 
              태그가 key값을 가지고 있다면 key값이 index가 되어 나중에 추가되는
              태그가 있더라도 이전에 있던 key값을 렌더링 하지않아도 되기 때문에
              key값을 가지고 있는 것이 조금 더 효율적이다.  
        */
        const list   = data.map(
            info => (<PhoneInfo 
                    key  = {info.id} 
                    info = {info} 
                />));

        return(
            <div>
                {list}
            </div>
        )
    }
}

export default PhoneInfoList;