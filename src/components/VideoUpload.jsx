import { useState } from 'react'
import { Input, Button } from './index.js'
import {uploadVideo} from '../api/video.api.js'
import { redirect } from 'react-router-dom';

function VideoUpload() {
    const [formData, setFormData] = useState({
        videoFile: null,
        thumbnail: null,
        title: '',
        description: '',
        isPublished: false,
    });

    const [errors, setErrors] = useState({});

    function changeHandler(e) {
        const {name, type, value, files, checked} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type==='file' ? files[0] : type==='checkbox' ? checked : value
        }))

    }

    function validateForm() {
        const newErrors = {}
        if(!formData.videoFile) newErrors.videoFile = 'Video file is required.';
        if(!formData.thumbnail) newErrors.thumbnail = 'Thumbnail is required.';
        if(!formData.title) newErrors.title = 'Title is required.';
        if(!formData.description) newErrors.description = 'Description is required.';
        return Object.keys(newErrors).length === 0;
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if(validateForm) {
            console.log(formData)
            response = await uploadVideo(formData)
            console.log(response) 
            redirect('/channel')           
        }
    }



    return (
        <div className="flex w-full h-svh items-center justify-center  bg-[url(./assets/white-blurreed-bg.jpg)] bg-cover bg-center">
            <div className="flex flex-col items-center justify-center p-4 w-auto h-auto rounded-xl bg-white">
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <Input accept='video/*' onChange={changeHandler} name='videoFile' label='Video' value={formData.videoFile} type='file' className='w-full h-20 bg-purple-300' />
                    {errors.videoFile && <p>{errors.videoFile}</p> }
                    <Input accept='video/*' onChange={changeHandler} name='thumbnail' label='Thumbnail' value={formData.thumbnail} type='file' className='bg-purple-300' />
                    {errors.videoFile && <p>{errors.thumbnail}</p> }
                    <Input onChange={changeHandler} name='title' label='Title' placeholder='Title' value={formData.videoFile} type='text' />
                    {errors.videoFile && <p>{errors.title}</p> }
                    <Input onChange={changeHandler} name='description' label='Description' placeholder='Description' value={formData.description} type='text' />
                    {errors.videoFile && <p>{errors.description}</p> }
                    <span className='mx-5'>IsPublished</span>
                    <input onChange={changeHandler} name='isPublished' checked={formData.isPublished} type='checkbox' />
                    {errors.videoFile && <p>{errors.isPublished}</p> }
                    <Button children="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default VideoUpload