import React,{Component} from "react";
export default class Grids extends Component{
    render() {
        let {grids} = this.props;
        return (
            <div className="grids_item">
                {
                    grids.gridlist.map((item,index) => {
                        return <div key={index}>
                            <img src={item.bottompic} alt=""/>
                            {/*style={{width:item.width,height:item.height}}*/}
                        </div>;
                    })
                }
            </div>
        )
    }
}