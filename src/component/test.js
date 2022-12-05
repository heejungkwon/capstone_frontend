import React, {useCallback, useEffect, useMemo, useState} from 'react'
import Stack from 'react-bootstrap/Stack'
import axios from "axios";
import {Input, Button, Container, Form } from "reactstrap";
import { API_URL } from "../index";
import { useDropzone } from 'react-dropzone';


const baseStyle = {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    transition: 'border .3s ease-in-out'
  };
  
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };
  

function Uploadfile () {
    const [Image, setImage] = useState("");
    const [text, setText] = useState("없음");
    const [heat, setHeatmap] = useState("");

    const onDrop = useCallback(acceptedFiles => {
        setImage(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
        }, []);
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
        } = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png'
        });
    
    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
        }), [
        isDragActive,
        isDragReject,
        isDragAccept
        ]);

    const uploadModule = async (e) => {
        e.preventDefault();

    const upload_file = e.target[0].files[0];
    const upload_image_name = e.target[0].value; // C:fakepath/~
    const formData = new FormData();
    
    formData.append("image", upload_file);
    formData.append("enctype", "multipart/form-data")

    console.log('formdata')
    console.log("upload : "+e.target[0].value)
    const URL = API_URL+"upload/image/"

    axios({
        method: "POST",
        url: URL,
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
        }
      }).then(function (response) {
        console.log(response)
      }).then(function (){
        const URL = API_URL+"upload/image/processing/"
        axios.get(URL, {
          params: {
            user_image: upload_image_name
          }
      })
      .then((response)=>{
        var obj = JSON.stringify(response.data['result']); 
          console.log(obj); 
          var jsonObj = JSON.parse(obj);
        if (jsonObj.isForgery){
          setText(jsonObj.proba+"% forgery image.");
        }else{
          setText(jsonObj.proba+"% Not forgery image.")
        }
        setHeatmap(response.data['heatmap']);
      })
      .catch((Error)=>{console.log(Error)})})   
      }
    
      const saveFileImage = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
      };

      const deleteFileImage = () => {
        URL.revokeObjectURL(Image ||setImage);
        setImage("");
        console.log(Image);
      };


    return (
        <Form onSubmit={uploadModule}>
            <div>
                <Stack direction="horizontal" gap={3}>
                    <Stack direction="vertical" gap={2}>
                        <Container style={{minHeight:"40vh"}}>
                            <div {...getRootProps({style})}>
                            <input {...getInputProps()} />
                            <div>Drag and drop your images here.</div>
                            
                                {Image && (
                                <img
                                    alt="sample"
                                    src={Image}
                                    style={{margin:"auto" ,maxWidth:"512px"}}
                                    />
                                )}
                            </div>
                        </Container>
                        <Stack direction="horizontal" gap={3} style={{display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
                            <Input 
                            id="imgUpload"
                            type="file"
                            accept="image/jpg"
                            onChange={saveFileImage}
                            placeholder="Your image"
                            title="FILE"
                            >파일 선택</Input>
                            <Button className="btn-secondary" type="submit">Send</Button>
                            <Button color="danger" type="reset" onClick={() => deleteFileImage()}>Reset</Button>
                        
                        </Stack>
                    </Stack>
                </Stack>
            </div>
        </Form>
    )
}
export default Uploadfile;