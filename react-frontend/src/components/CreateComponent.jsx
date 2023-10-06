import React,{useState} from "react";
import postService from "../services/postService";
function CreateComponents(){

    const [title,setTitle]=useState('');
    const [date,setDate]=useState('');
    const [image,setImage]=useState('');

    const [message,setMessage]=useState('');
const handleSubmit = async(event)=>{
    event.preventDefault();

   const formData = new FormData();
   formData.append('title',title);
   formData.append('date',date);
   formData.append('image',image);
    const response = await postService.create(formData);
   if(response.data.success == true)
   {
    setMessage('post created successfully.');
   }
   else
   {
    setMessage('post failed');

   }
   setTimeout(function(){
    setMessage('');
   },2000);
   event.target.reset();
  
};

    return(
        <div class=" bg-info text-white">
            <h2 class="p-3 mb-2 bg-info text-white">Create Post</h2>
            <form onSubmit={handleSubmit}>
            <input type="text"
            name="title"
            placeholder="Enter Post Title"
            onChange={event=>setTitle(event.target.value)}
            required/>
            <br></br>
            <input type="date"
            name="date"
            onChange={event=>setDate(event.target.value)}
            required/>
            <br></br>
            <input type="file"
            name="image"
            onChange={event=>setImage(event.target.files[0])}
            required/>
                <br></br>

                         <button  class="bg-success text-white">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    )

}
export default CreateComponents;