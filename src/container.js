import React, { useEffect, useState } from 'react'

const Container = () => {
   
    const [boxes,setBoxes] = useState(Array(9).fill("white"));
    const [seq,setSeq]= useState([]);
    function clickHandler(index){
        if(seq.length==9){
            return;
        }
        console.log("ind count",index)
        if(seq.includes(index)){
            setBoxes((prev)=>{
                const newBoxes=[...prev];
                newBoxes[index]= "white"
                return newBoxes;
            })
            setSeq((prev)=>{
                const newSeq= [...prev];
               
                newSeq.splice(newSeq.indexOf(index),1);
                return newSeq;
            })
            return;
        }
        setBoxes((prev)=>{
            const newBoxes=[...prev];
            newBoxes[index]= "bg-green-500"
            return newBoxes;
        })
        setSeq((prev)=>{
            const newSeq= [...prev];
            newSeq.push(index);
            return newSeq;
        })
       
    }
    useEffect(()=>{
        if(seq.length==9){
            for(let i = 0 ;i<seq.length;i++){
             
                 setTimeout(() => {
                     
                     setBoxes((prev)=>{
                         const box= [...prev];
                         box[seq[i]]="bg-orange-500";
                         return box;
                     })
                     console.log(seq[i]);
                 }, i*200);
            
            
            // console.log(seq)
            }
            
         }
    },[seq])
  return (
    <div className=' bg-black min-h-screen flex items-center justify-center'>
        <div className=' grid grid-cols-3  w-[50%] m-auto bg-white'>
            {boxes.map((col,index)=><div className={`${seq.length<9? 'text-white cursor-pointer ': ' cursor-not-allowed'}   text-white h-11 border transition border-black ${col} text-center text-black`} onClick={()=>clickHandler(index)}>box {index} </div>)}
        </div>
        <p className=' text-white'>count-{seq.length}</p>
    </div>
  )
}

export default Container