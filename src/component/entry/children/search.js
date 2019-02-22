import React,{Component} from "react";
import {connect} from "react-redux";
import {get_search_action,get_search_res_action} from "../../../action/actionCreator";
import Hsearch from "../../../common/UI/search/search";
class Search extends Component{
    // showtype: 3
    // type: 2
    componentWillMount(){
        this.props.getSearchData()
    }
    state={
        val:''
    }
    change=(event)=>{
        this.setState({
            val:event.target.value
        })
        this.props.getSearchResData(event.target.value)
    }
    render(){
        let {search,search_res}=this.props;
        console.log(search_res);
        return(
            <div className="search">
                <input type="text"
                       placeholder="请输入"
                       value={this.state.val}
                       onChange={this.change}/>
                <div className="search_res"  style={{marginTop:"20px",width:"calc(100vw)"}}>
                    {
                        search_res?search_res.map((item,index)=>{
                            return <span key={index} style={{backgroundColor:"gray",margin:"5px",display:"block"}}>{item}</span>
                        }):""
                    }
                </div>
                <div className="commend" style={{width:"calc(100vw)",display:"flex",flexWrap:"wrap"}}>
                    {
                        search.map((item,index)=>{
                            return <span key={index} style={{backgroundColor:"gray",margin:"5px",padding:"10px",display:"block"}}>{item.keyword}</span>
                        })
                    }
                </div>
            </div>
        )
    }
    // componentWillUnmount(){
    //     this.setState({
    //         val:""
    //     })
    // }
}
const mapStateToProps=(state)=>({
    search:state.search.search,
    search_res:state.search.search_res
});
const mapDispatchToProps=(dispatch)=>({
    getSearchData(){
        dispatch(get_search_action())
    },
    getSearchResData(data){
        dispatch(get_search_res_action(data))
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Search);