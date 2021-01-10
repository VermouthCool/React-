import axios from 'axios';
import React, { Component } from 'react'
export default class App extends Component{
    state={
        resname:"",
        resurl:'',
        keyword:'v',
        isLoading:'true',
        error:""
    }
    componentDidMount(){
        let {resname,resurl,keyword} = this.state;
        // axios.get(`https://api.github.com/search/repositories?q=${keyword}&sort=stars`).then(
        //     (res)=>{
        //         res=res.data
        //         resname=res.items[0].name;
        //         resurl=res.items[0].owner.html_url;
        //         this.setState({resname,resurl,isLoading:false});
        //     }
        // )
        //fetch发送请求
        fetch(`https://api.github.com/search/repositories?q=${keyword}&sort=stars`).then(
            (response)=>{
                console.log(response);
                return Promise.resolve(response.json()); //关注分离 先检查是否连接成功服务器
            }
        ).then((value)=>{
            console.log(value);
            resname=value.items[0].name;
            resurl= value.items[0].owner.html_url;
            this.setState({resname,resurl,isLoading:false});
        })
    }
    render(){
        let {isLoading,resname,resurl,keyword} = this.state;
        if(isLoading){
            return <h1>...Loading</h1>
        }else{
            return <h1>按照你的关键字{keyword}查找到的为<a href={resurl}>{resname}</a></h1>
        }
    }
}