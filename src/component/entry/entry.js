import React,{Component,Fragment} from "react";
import {HashRouter as Router,Route,Switch,NavLink,Redirect} from "react-router-dom";
import Home from "./children/home";
import Classify from "./children/classify";
import Mine from "./children/mine";
import Shop from "./children/shop";
export default class Entry extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Fragment>
                        <Switch>
                            <Route path="/entry/home/" component={Home}/>
                            <Route path="/entry/classify" component={Classify}/>
                            <Route path="/entry/shop" component={Shop}/>
                            <Route path="/entry/mine" component={Mine}/>
                            <Redirect path="/" to="/entry/home"/>
                        </Switch>
                        <footer>
                            <NavLink to="/entry/home">商城</NavLink>
                            <NavLink to="/entry/classify">分类</NavLink>
                            <NavLink to="/entry/shop">购物车</NavLink>
                            <NavLink to="/entry/mine">我的</NavLink>
                        </footer>
                    </Fragment>
                </Router>
            </div>
        )
    }
}