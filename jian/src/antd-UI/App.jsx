import React, { Component } from 'react'
import {Button,message} from 'antd'
import '../../node_modules/antd/dist/antd.css'
export default class App extends Component{
    dian=(d,m)=>{
        message.warning('dianwi')
    }
    render() {
        return (
            <div>
                <h1>哈哈</h1>
                <Button type="primary" onClick={this.dian}>建哥最帅</Button>
            </div>
        )
    }
}