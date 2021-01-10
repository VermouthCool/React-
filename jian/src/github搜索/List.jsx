import React, { Component } from 'react'
import Item from "./item.jsx"
export default class List extends Component{
    render() {
        let {content,isNull} = this.props;
        if(isNull){
            return <h1>请输入查询</h1>
        }else{
           return (
               <div>
                   {
                       content.map((value,index)=>{
                        return (<Item {...content[index]}/>)
                        })
                   }
               </div>
           )
        }
    }
}