import React, {useState} from 'react'

export default function TextForm(props) {



  const handleUpClick = ()=>{
    // console.log('uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UPPERCASE" , "success");
  }

  const handleDownClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase" , "success");
  }

  const handleClearClick = ()=>{
    let newText = ('');
    setText(newText)
    props.showAlert("Text Cleared" , "success");
  }

  const handleCopy= ()=>{
    // var ctext = document.getElementById("MyBox");
    // ctext.select();
     navigator.clipboard.writeText(text);
     props.showAlert("Copied to Clipboard" , "success");
  }

  const handleInverseClick = ()=>{
    let newText = "";
    for(let i = text.length-1; i>=0; i--)
    {
      newText = newText + text[i]; 
    }
    setText(newText)
    props.showAlert("Text is successfully Inverted" , "success");
  }

  const handleOnChange = (event)=>{
    // console.log('On Change');
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  // text = "new text";  wrong
  // setText("new text");   right
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'#353935':'white'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="MyBox" value ={text} onChange = {handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#353935' , color: props.mode==='light'?'#353935':'white'}} rows="9"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
      <button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Convert to lowercase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleInverseClick}>Inverse Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container" style={{color: props.mode==='light'?'#353935':'white'}}>
      <h2 className='my-2'>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!!"}</p>
    </div>
    </>
  )
}
