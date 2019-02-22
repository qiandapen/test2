import {fetch} from "whatwg-fetch";
export const change_val_action=()=>({
    type:"CHANGE_VAL"
});
export const get_banners_action=()=>({
    // dispatch({
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
                body: JSON.stringify({os:3})
                //credentials: 'include'
            })
                .then(res=>res.json())
                .then(data=>{
                    resolve(data.data)
                })
        // })
    })
});
export const get_list_action=()=>({
    type:"GET_LIST",
    payload:new Promise(resolve => {
        let url = "/api/api/product/guessWhatYouLikeV322";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                "deviceid": "h5",
                "extend": "/api/product/guessWhatYouLikeV322",
                "lang": "zh",
                "os": "h5",
                "param": "%7B%22pageindex%22%3A1%2C%22isc2clist%22%3A2%2C%22hometabid%22%3A%226039dcc26ae7401191239559335de9ff%22%7D",
                "sign": "f779683c8484959386bfef8effbf61de",
                "version": "3.1.0"
            })
        })
            .then(res => res.json())
            .then(data => {
                resolve(data.data.list)
            })
    })
});
export const get_series_list_action=()=>({
    type:"GET_SERIES_LIST",
    payload:new Promise(resolve => {
        let url = "/api/capi/product/qiuxie/open/seriesList";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data.data)
            })
    })
});
export const get_title_action=()=>({
    type:"GET_TITLE",
    payload:new Promise(resolve => {
        let url = "/api/api/Base/CategoryAll";
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                "deviceid": "h5",
                "extend": "/api/Base/CategoryAll",
                "lang": "zh",
                "os": "h5",
                "param": "%7B%7D",
                "sign": "57fd100ffa0cffd84b5376b95c221620",
                "version": "3.1.0"
            })
        })
            .then(res => res.json())
            .then(data => {
                resolve(data.data)
            })
    })
});
export const get_search_action=f("GET_SEARCH_DATA",
    "/api/capi/product/open/hotkeyword/gettoplistV20",
    "POST",{
    "showtype": 3,
    "type": 2
});
// export const get_search_res_action=f("GET_SEARCH_RES_DATA",
//     "/api/capi/product/open/getAssociationalWordListV20",
//     "POST",{
//         "keyword":"",
//         "type":2
//     },val)
export const get_search_res_action=(val)=>({
        type:'GET_SEARCH_RES_DATA',
        payload:new Promise(resolve => {
            console.log(val);
            fetch("/api/capi/product/open/getAssociationalWordListV20",{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    "keyword":val,
                    "type":2
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.data);
                    resolve(data.data)
                })
        })
    })
function f(type,url,method,body,val) {
    if(val){
        body.keyword=val;
    }
    return ()=>({
            type:type,
            payload:new Promise(resolve => {
                fetch(url,{
                    method:method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify(body)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.data);
                        resolve(data.data)
                    })
            })
        });
}