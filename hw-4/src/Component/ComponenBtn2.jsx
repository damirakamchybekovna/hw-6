import { useCallback, useState } from "react";


function ComponentBtn2(){
    let[text, getText ] = useState('')
    function Text(e){
        getText(e.target.value)
    }
    let[newText, setText]=useState([])
    let a = useCallback(()=>{
        setText([...newText, {allText: text}])
    })
    
    return(
        <div className="cont">
           <div><input type="text"  onChange={Text} value={text} />
            <button onClick={a} >push</button></div> 
            {newText.map((i)=><h2>{'kak vy? ' + i.allText}</h2>)}
        </div>
    )
}
export default ComponentBtn2