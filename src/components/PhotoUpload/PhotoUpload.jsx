import React ,{useState, useEffect} from 'react';
import AWS from 'aws-sdk';
import './PhotoUpload.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
const REGION ='us-west-1';


AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})


const PhotoUpload = (props) => {
  const { formData, setFormData } = props
  const [progress , setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
      setSelectedFile(e.target.files[0]);
  }

  useEffect(() => {
    if(selectedFile) {
      uploadFile(selectedFile)
    }
    

  }, [selectedFile])


  // THIS IS THE ORIGINAL UPLOAD FILE FUNCTION

  // const uploadFile = async (file) => {
  //     const params = {
  //         ACL: 'public-read',
  //         Body: file,
  //         Bucket: S3_BUCKET,
  //         Key: file.name
  //     };

  //     let s3Response = await myBucket.upload(params).promise()
  //     console.log(s3Response.Location, "S3 LOCATION")
  //     setFormData({
  //       ...formData,
  //       ['photoUrl']: s3Response.Location,
  //       error: ''
  //     });
  // }

  // THIS IS THE NEW UPLOAD FILE FUNCTION
  const uploadFile = async (file) => {
    const image = new Image();
    image.src = URL.createObjectURL(file);
    
    const [width, height] = await new Promise((resolve, reject) => {
      image.onload = () => {
        resolve([image.naturalWidth, image.naturalHeight]);
      };
      image.onerror = reject;
    });
  
    if (width <= 1200 && height <= 900) {
      const params = {
        ACL: 'public-read',
        Body: file,
        Bucket: S3_BUCKET,
        Key: file.name,
      };
    
      const s3Response = await myBucket.upload(params).promise();
      console.log(s3Response.Location, "S3 LOCATION");
  
      setFormData({
        ...formData,
        ['photoUrl']: s3Response.Location,
        error: '',
      });
    } else {
      ReactTooltip.show(document.getElementById('fileInput'));
    }
  };


        // myBucket.putObject(params)
      //     .on('httpUploadProgress', (evt) => {
      //         setProgress(Math.round((evt.loaded / evt.total) * 100))
      //     })
      //     .send((err) => {
      //         if (err) console.log(err)
      //     })

  return (
  <div className='file-input-container'>
    {formData.photoUrl !== '' ? 
      <img className='upload-img' src={formData.photoUrl} alt="" />
      :
      <>
      
      <label className="file-input-label" htmlFor="file_input"><i className="fa-solid fa-cloud-arrow-up"></i></label>
      <input 
      className="img-file-input" aria-describedby="file_input_help" id="file_input" 
      type="file" 
      onChange={handleFileInput}
      accept="image/png,image/jpeg,image/gif"
      />
      <ReactTooltip id="fileInput" place="top" effect="solid">
      <p className="file-input-text">PNG, JPG or GIF (MAX. 800x400px).</p>
      </ReactTooltip>
      </>}
  </div>
  )
}

export default PhotoUpload;