import React,{Component} from "react";
import "./header.css";
import {NavLink} from "react-router-dom";
export default class Header extends Component{
    render(){
        let {val} = this.props;
        return(
            <div className="header">
                <NavLink to="/entry/shop" style={{display:val}}>购物车</NavLink>
                <div>
                    <input type="text" placeholder="请输入"/>
                </div>
                <NavLink to="/entry/classify" style={{display:val}}>分类</NavLink>
            </div>
        )
    }
}