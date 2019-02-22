import React,{Component,Fragment} from "react";
import "./banner.css";
export default class Banner extends Component{
    render(){
        let {banners} = this.props;
        return(
            <Fragment>
                {
                    banners.map((item,index)=>{
                        return <div className="swiper-slide" key={index}><img src={item.url} alt="" style={{width:"100%"}} /></div>
                    })
                }
            </Fragment>
        )
    }
}