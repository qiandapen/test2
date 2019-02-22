import React,{Component,Fragment} from "react";
export default class SeriesItem extends Component{
    render(){
        let {seriesList} = this.props;
        let { hotseries,series } = seriesList;
        return (
            <Fragment>
                <div  style={{display:"flex",flexWrap:"wrap"}}>
                    {
                        hotseries?hotseries.map((item,index)=>{
                            return <img src={item.imgurl} alt="" key={index}
                                        style={{
                                            width:"30%",
                                            height:"50px",
                                        }}/>
                        }):""
                    }
                </div>
                <div>
                    {
                        series?series.map((item,index)=>{
                            return (<div key={index}><img src={item.brandimgurl} alt=""
                                     style={{
                                         width:"30%",
                                         height:"50px",
                                         display:"block",
                                         margin:"0 auto"
                                     }}/>
                                <Children hotseries={item.hotseries} />
                            </div>)

                        }):""
                    }
                </div>
            </Fragment>
        )
    }
}
class Children extends Component{
    render(){
        let {hotseries}=this.props;
        return(
            <div style={{display:'flex',flexWrap:"wrap"}}>
                {
                    hotseries.map((item,index)=>{
                        return (<img src={item.imgurl} alt="" key={index}
                                    style={{
                                        width:"30%",
                                        height:"50px",
                                    }}/>)
                    })
                }
            </div>
        )
    }
}
class Child extends Component{
    render(){
        let {hotseries}=this.props;
        return(
            <div style={{display:'flex',flexWrap:"wrap"}}>
                {
                    hotseries.map((item,index)=>{
                        return hotseries.child?<img src={item.imgurl} alt="" key={index}
                                    style={{
                                        width:"30%",
                                        height:"50px",
                                    }}/>:""
                    })
                }
            </div>
        )
    }
}
