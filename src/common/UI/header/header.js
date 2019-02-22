import React,{Component} from "react";
import "./header.css";
import {withRouter} from "react-router-dom";
import {NavLink} from "react-router-dom";
class Header extends Component{
    goPath(){
        this.props.history.push("/entry/search");
    }
    render(){
        let {val} = this.props;
        return(
            <div className="header">
                <NavLink to="/entry/shop" style={{display:val}}>
                    <img src="https://m.eyee.com/static/imgs/mall/ico-cart.png" alt=""/>
                    <span>购物车</span>
                </NavLink>
                <div onClick={this.goPath.bind(this)}>
                    <input type="text" placeholder="请输入"/>
                </div>
                <NavLink to="/entry/classify" style={{display:val}}>
                    <img src="https://m.eyee.com/static/imgs/mall/ico-category.png" alt=""/>
                    <span>分类</span>
                </NavLink>
            </div>
        )
    }
}
export default withRouter(Header);