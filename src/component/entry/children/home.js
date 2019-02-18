import React,{Component} from "react";
import {connect} from "react-redux";
import {change_val_action,get_banners_action} from "../../../action/actionCreator";
import "../css/home.css"
import Header from "../../../common/UI/header/header";
import Banner from "../../../common/UI/banner/banner";
class Home extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.getBanners();
        console.log(this.props);
    }
    render(){
        let {hVal,banners} = this.props;
        return(
            <div>
                <Header val={hVal}/>
                <button onClick={this.props.change.bind(this)}>点我变值</button>
                <Banner banners={banners}/>
                这里是登陆界面
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    hVal:state.header.hVal,
    banners:state.banner.banners
});
const mapDispatchToProps=(dispatch)=>({
    change(){
        dispatch(change_val_action());
    },
    getBanners(){
        get_banners_action(dispatch);
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Home)