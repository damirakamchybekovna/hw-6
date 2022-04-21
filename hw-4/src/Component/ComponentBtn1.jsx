import { useCallback, useState } from "react";
import './Component.css'

function ComponentBtn1(){
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
            <div className="cont3">
                <input type="text"  onChange={Text} value={text} />
                <button onClick={a}>push</button>
            </div>
            
            <div className="cont2">
                {newText.map((i)=><h2>{'salam '+i.allText}</h2>)}
            </div>
            
        </div>
    )
}
export default ComponentBtn1
