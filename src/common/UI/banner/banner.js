import React,{Component} from "react";
export default class Banner extends Component{
    render(){
        let {banners} = this.props;
        return(
            <div className="banner">
                {
                    banners.map((item,index)=>{
                        return <div key={index}><img src={item} alt=""/></div>
                    })
                }
            </div>
        )
    }
}