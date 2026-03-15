import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

const uplodeOnCloudinary = async (filePath) => {
     // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET // Click 'View API Keys' above to copy your API secret
    });

    try {
        const uploadResult = await cloudinary.uploader
       .upload(filePath, {
        folder: "virtualAssistant",
        resource_type: "auto"
       });
       fs.unlinkSync(filePath); // remove file from server after upload
       return uploadResult.secure_url;
      
    } catch (error) {
        fs.unlinkSync(filePath); // remove file from server if error occurs
        console.log("Error while uploading file to cloudinary", error);
    }
}

export default uplodeOnCloudinary;