import { useState,useEffect } from "react";

const useFetch = (url) => {
    const[data,setData]=useState(null);

    useEffect(()=>{
        const abortCont=new AbortController();
        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal})
            .then(res=>{
                if(!res.ok){
                    throw Error('could not fetch the data');
                }
                return res.json();
            })
            .then(data=>{
                setData(data);
            })
            .catch(err=>{
                if(err.name==='AbortError'){
                    console.log("fetch aborted");
                }
            })
        })
        return()=>abortCont.abort();
    },[url])
    return {data};
}
 
export default useFetch;