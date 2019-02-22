import React,{Component,Fragment} from "react";
// import "../css/home.css";
// import {HashRouter as Router,Route,Switch,NavLink,Link,Redirect} from "react-router-dom";
import {connect} from "react-redux";
import SeriesItem from "../../../common/UI/series/series";
import {get_series_list_action,get_title_action} from "../../../action/actionCreator";
import Header from "../../../common/UI/header/header";
class Classify extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.getSeriesList();
        this.props.getTitle();
    }
    render(){
        let {seriesList,title} = this.props;
        console.log(title);
        return(
            <div>
                <Header/>
                    <div>
                        <div>
                            <span>分类</span>
                            <span>品牌</span>
                        </div>
                        <div className="1" style={{display:"flex"}}>
                            <div className="left" style={{width: '4000px',backgroundColor:"#e5e5e5"}}>
                                {
                                    title.map((item,index)=>{
                                        return <span key={index} style={{display:"block",padding:"5px"}}>{item.name}</span>
                                    })
                                }
                            </div>
                            <div className="right">
                                <img src="https://m.eyee.com/static/imgs/search/authenticate.png" alt=""/>
                                <p style={{textAlign:"center"}}>热门系列</p>
                                <div className="hot_series">
                                    <SeriesItem seriesList={seriesList}/>
                                </div>
                            </div>
                        </div>
                        <div className="2">

                        </div>
                    </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    seriesList:state.series.classifyList,
    title:state.title.title
});
const mapDispatchToProps=(dispatch)=>({
    getSeriesList(){
        dispatch(get_series_list_action());
    },
    getTitle(){
        dispatch(get_title_action());
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Classify);