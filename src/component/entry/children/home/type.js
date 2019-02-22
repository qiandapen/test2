import React,{Component} from "react";
export class Type1 extends Component{
    render(){
        let {data}=this.props;
        return(
            <div style={{width:"50%"}}>
                <img src={data.img} alt="" style={{width:"156.8px",height:"156.8px"}}/>
                <h1>{data.title}</h1>
                <p>{data.vicetitle}</p>
            </div>
        )
    }
}
export class Type2 extends Component{
    render(){
        let {data}=this.props;
        return(
            <div>
                <img src={data.mainpic} alt="" style={{width:"156.8px",height:"156.8px"}}/>
                <p>{data.name}</p>
                <p>￥{data.saleprice}</p>
                <p>{data.sumcount}人付</p>
            </div>
        )
    }
}
export class Type3 extends Component{
    render(){
        let {data}=this.props;
        return(
            <div>
                <div style={{display:"flex",flexWrap:"wrap"}}>
                    {data.list.map((item,index)=>{
                        return (<div key={index} style={{width:"50%",height:"50%"}}>
                                <img  src={item.imgurl} alt="" />
                                <div>{item.name}</div>
                        </div>)
                    })}
                </div>
                <h1>{data.title}</h1>
                <p>{data.vicetitle}</p>
            </div>
        )
    }
}
