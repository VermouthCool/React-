import React, { Component } from 'react'
import axios from 'axios'
import './App1.css';
import Add from './Add.jsx'
import List from "./List.jsx"
export default class App1 extends Component{
    state={
        isLoading:true,
        keyword:'',
        isNull:true,
        content:[]
    }
    jian=(a)=>{
        let {content,isNull} = this.state;
        isNull=!isNull;
        console.log('jain');
        axios.get(`https://api.github.com/search/users?q=${a}`).then(
            (res)=>{
                console.log('发送请求');
                content=res.data.items;
                this.setState({content,isNull});
            }
        ).catch((error)=>{
            console.log(error.message);
        })
    }
    render() {
        return (
            <div>
                <h1>该软件用于搜索Github上面的用户</h1>
                <Add jian={this.jian}/>
                <List {...this.state}/>
            </div>
        )
    }
}