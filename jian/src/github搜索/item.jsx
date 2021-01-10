import React, { Component } from 'react'
export default class Item extends Component{
    render() {
        let {login,avatar_url,html_url} = this.props;
        return (
            <div style={{width:"150px",height:'150px',float:'left',textAlign:'center',border:'1px solid',margin:'0 2px'}}>
                <a href={html_url}><img src={avatar_url} style={{width:'90%',height:"90%"}} /></a>
                <p style={{textAlign:"center"}}>{login}</p>
            </div>
        )
    }
}