import React,{useState} from 'react'

export default function TextForm(props) {

    // Converting text in textfield to upper case
    const handleUpperClick = ()=> {
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper Case","success")
    }
    
    // convert text in textfield to lower case
    const handleLowerClick = ()=> {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower Case","success")

    }

    // clearing the text
    const HandleClear= () => {
        setText("");
        props.showAlert("Cleared all text","success")

    }



    // Changing the text  
    const Changed = (event)=>{
        setText(event.target.value)
    }


    const [text, setText] = useState("");
    const words = text.split(" ").length
    const sentence = text.split(".").length
    

    
   //Capitalizing the first letter of each word 
    const handleCapClick = ()=>{
        const word = text.split(" ")
        for (var i = 0; i < word.length; i++) {
            word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
        
        }
        const word2 = word.join(" ")
        setText(word2);
        props.showAlert("Capitalized text","success")

    }
    
        return (
            <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading} </h1>   
                <div className='mb-3'>
                    <textarea className='form-control' onChange={Changed} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"  />
                </div> 
                <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2"  onClick={handleLowerClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2"  onClick={HandleClear}>Clear </button>
                <button className="btn btn-primary mx-2"  onClick={handleCapClick}>Convert to Capitalized Case </button>

            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Text Briefings</h1>
                <p>{words} words and {text.length} characters</p>
                <p>{0.008 * words} minutes to read</p>
                <p>{sentence} sentences in the text</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter you text above please'}</p>
            </div>
            
            </>
        )
}
