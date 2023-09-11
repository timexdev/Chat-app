import React from 'react';
import Camera from "../Images/cameral icon.png"

const InputText = () => {
  return (
    <div className='inputMessage'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <i style={{cursor:"pointer"}} class="bi bi-paperclip"></i>
        <input type="file" style={{display:"none"}} id="file" />
        <img style={{width:"24px", height:"24px", cursor:"pointer"}} src={Camera} alt="camera icon"/>
        <button className='bg-success'>Send</button>
      </div>
    </div>
  )
}

export default InputText