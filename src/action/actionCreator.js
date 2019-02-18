import {fetch} from "whatwg-fetch";
export const change_val_action=()=>({
    type:"CHANGE_VAL"
});
export const get_banners_action=(dispatch)=>{
    dispatch({
        type:"GET_BANNERS",
        payload:new Promise(resolve =>{
            let url="/api/capi/product/qiuxie/open/homefirstv322";
            fetch(url,{
                method: 'POST',
                // mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                // data:{"os":3},
                body: {"os":3}
                //credentials: 'include'
            })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    resolve(data)
                })
        })
    });
};