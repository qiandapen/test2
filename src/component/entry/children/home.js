import React,{Component} from "react";
import {connect} from "react-redux";
import {
    change_val_action,
    get_banners_action,
    get_list_action
} from "../../../action/actionCreator";
import "../css/home.css";
import Swiper from 'swiper/dist/js/swiper.js';
import {Type1,Type2,Type3} from "./home/type";
import 'swiper/dist/css/swiper.min.css';
import Header from "../../../common/UI/header/header";
import Banner from "../../../common/UI/banner/banner";
import Grids from "../../../common/UI/grids/grids";
class Home extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.getBanners();
        this.props.getList();
    }
    render(){
        let {hVal,banners,grids,tabs,list} = this.props;
        // console.log(list);
        return(
            <div>
                <Header val={hVal}/>
                <button onClick={this.props.change.bind(this)}>点我变值</button>
                <div className="wxchat-banner">
                    <section className="new_custom swiper-container index_tab_con" ref={self => this.swiperID = self}>
                        <div className="swiper-wrapper">
                            <Banner banners={banners}/>
                        </div>
                        <div className="swiper-pagination banner-pagination" ref={self => this.paginateID = self}/>
                    </section>
                </div>
                <div className="grids">
                    {
                        grids.map((item,index) => {
                            return <Grids grids={item} key={index} className="grid_item"/>;
                        })
                    }
                </div>
                <div className="tabs">
                    {
                        tabs.map((item,index)=>{
                            return (
                                item.channelimg? <img src={item.channelimg} alt="" key={index}/>:<span key={index}>{item.channelname}</span>
                            )
                        })
                    }
                </div>
                <div className="list" style={{display:"flex",flexWrap:"wrap"}}>
                    {
                        list.map((item,index)=>{
                            return (<div key={index}  style={{width:"49%"}}>
                                    {
                                        (item.img||item.mainpic||item.list)? (item.list?<Type3 data={item}/>:(item.img?<Type1 data={item}/>: <Type2 data={item}/>)):""
                                    }
                                </div>)
                        })
                    }
                </div>
            </div>
        )
    }
    componentWillUpdate(){
        new Swiper(this.swiperID, {
            direction : 'horizontal',
            debugger: true,
            loop:true,
            autoplay: {
                disableOnInteraction: false,
            },
            pagination: {
                el: this.paginateID,
                clickable: true
            },
        });
    }
}
const mapStateToProps=(state)=>({
    hVal:state.header.hVal,
    banners:state.banner.banners,
    grids:state.banner.grids,
    tabs:state.banner.tabs,
    list:state.list.list
});
const mapDispatchToProps=(dispatch)=>({
    change(){
        dispatch(change_val_action());
    },
    getBanners(){
        dispatch(get_banners_action());
    },
    getList(){
        dispatch(get_list_action());
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Home)