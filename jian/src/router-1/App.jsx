import React, { Component } from 'react'
import {NavLink,Route,Switch,Redirect,Link} from 'react-router-dom'
class About extends Component{
    render() {
        return (
            <div>
                <h1>第一个的内容</h1>
            </div>
        )
    }
}
class Jian extends Component{
    render() {
        return (
            <div>
                <h1>第二个的内容</h1>
                <NavLink style={{width:'20px',height:'20px',border:'1px solid',marginLeft:'10px',display:'inline-block'}} to='/ge/new' activeClassName="jian"></NavLink>
                <NavLink style={{width:'20px',height:'20px',border:'1px solid',marginLeft:'10px',display:'inline-block'}} to='/ge/message' activeClassName="jian"></NavLink>
                <Switch>
                    <Route path="/ge/new" component={New}/>
                    <Route path="/ge/Message" component={Message}/>
                    <Redirect to="/ge/new"/>
                </Switch>
            </div>
        )
    }
}
class New extends Component{
    render() {
        return (
            <div>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit.</li>
                </ul>
            </div>
        )
    }
}
class Detail extends Component{
    state={
        content:[
            {
                name:'jian',
                age:18
            },
            {
                name:'森美',
                age:32
            },
            {
                name:'佐藤白音',
                age:31
            }
        ]
    }
    componentDidMount(){
        console.log(this.props.match.params);
    }
    render() {
        let {id} = this.props.match.params;
        let {content} = this.state;
        return (
            <ul>
                <li>{`名字：${content[id-1].name}`}</li>
                <li>{`年龄：${content[id-1].age}`}</li>
            </ul>
        )
    }
}
class Message extends Component{
    state={
        content:[]
    }
    push=(a)=>{
        let {push} = this.props.history;
        push(a);
    }
    replace=(a)=>{
        let {replace} = this.props.history;
        replace(a);
    }
    componentDidMount(){
        var {content} = this.state;
        content=[{
            id:'1',
            name:'di1'
        },
        {
            id:'2',
            name:'di2'
        },
        {
            id:'3',
            name:'di3'
        }
    ]
        setTimeout(()=>{
            this.setState({content});
        },1000)
    }
    render() {
        let {content} = this.state;
        return (
            <div>
               {
                   content.map((value)=>{
                       let {id,name} = value;
                       return(
                           <div key={id}>
                               <Link to={`/ge/message/${id}`} >{name}</Link>
                               <button onClick={()=>{this.push(`/ge/message/${id}`)}}>push</button>
                               <button onClick={()=>{this.replace(`/ge/message/${id}`)}}>replace</button>
                           </div>
                       )
                   })
               }
               <Switch>
               <Route path="/ge/message/:id" component={Detail}/>
                </Switch>
            </div>
        )
    }
}
export default class App extends Component{
    render() {
        return (
            <div>
                {/* 路由链接 */}
                <NavLink style={{width:'20px',height:'20px',border:'1px solid',display:'inline-block'}} to='/jian' activeClassName="jian ge"></NavLink>
                <NavLink style={{width:'20px',height:'20px',border:'1px solid',marginLeft:'10px',display:'inline-block'}} to='/ge' activeClassName="jian"></NavLink>
                <Switch>
                    {/* 注册路由 */}
                <Route path="/jian" component={About}/>
                <Route path='/ge' component={Jian}/>
                <Redirect to='/jian'/>
                </Switch>
            </div>
        )
    }
}