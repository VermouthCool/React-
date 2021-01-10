import React, { Component } from 'react'
import './Add.css'
export default class Add extends Component{
    add=()=>{
        let {jian} = this.props;
        console.log(this.input.value);
        jian(this.input.value);
    }
    render() {
        return (
            <div className="jian">
                <input type="text" placeholder="请输入你想要搜索的人" ref={input=>this.input=input}style={{marginRight:2+'px'}} />
                <button onClick={this.add}>Search</button>
            </div>
        )
    }
}