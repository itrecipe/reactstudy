import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

export const Write=()=>{

    const[img,setImg] = useState();
    const changeimge=(e)=>{
        setImg(e.target.files)
        console.log(e.target.files[0])
    }
    
    const submitchange=async ()=>{
        try{
            const storage=getStorage();
            const storageRef = ref(storage, `images/${img[0].name}`);
            console.log(img[0].name)
            await uploadBytes(storageRef,img[0]);
            console.log("파일 업로드 성공");

        } catch(error){
            console.log("파일업로드 에러")
        }
   
    }


    return(
        <div>

            <input type="text" placeholder="제목"></input> 
            <textarea></textarea>  
            <input type="file"  accept="image/*" onChange={changeimge}></input>
            <button onClick={submitchange}>제출</button>       
        </div>
    )
}