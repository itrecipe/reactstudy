import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

export const PostDetail=(props)=>{


    const[imgurl,setImgurl]=useState("")
    //app 페이지에서 값을 받아서 저장하고 보낸다.
    useEffect(() => {
    if(props.url){
    const storage = getStorage();
    const pathReference = ref(storage, `${props.url}`);
    getDownloadURL(pathReference)
    .then((url)=>{
        setImgurl(url)
    })
    .catch((error) => {
      // 에러 처리
      console.error('파일로드에로:', error);
    });
}}, []);
    return(
        <div>
            
            <h1>{props.title}</h1>
            <h1>{props.name}</h1>
            <h1>{props.text}</h1>
            <img src={imgurl} />
        </div>
    )
}