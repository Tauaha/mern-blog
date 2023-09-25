import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  useNavigate, useParams } from 'react-router-dom'
import axios from '../utils/axios'
import { updatePost } from '../redux/features/post/postOperations'

const EditPostPage = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [oldImage, setOldImage] = useState('')
  const [newImage, setNewImage] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const params = useParams()
    const fetchPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`)
      setTitle(data.title)
      setText(data.text)
      setOldImage(data.imgUrl)
    }, [params.id])
  
  useEffect(() => {
    fetchPost()
  },[fetchPost])
  

  const handlerSubmit = () => {
    try {
      const updatedPost = new FormData()
       updatedPost.append('title', title)
      updatedPost.append('text', text)
      updatedPost.append('id', params.id)
      updatedPost.append('image', newImage)
      dispatch(updatePost(updatedPost))
      navigate('/posts')
    } catch (error) {
      console.log(error)
    }
  }

    const resetForm = () => {
    setText('')
    setTitle('')
  }

  return (
    <form className='w-1/3 mx-auto py-10'
    onSubmit={e=> e.preventDefault()}>
      <label className='text-gray-light py-2 bg-input text xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer'>
        Add an image:
        <input type='file' className='hidden' onChange={e => {setNewImage(e.target.files[0])
        setOldImage('')}} />
      </label>
      <div className='flex object-cover py-2'>
         {oldImage && (
          <img src={`http://localhost:3001/${oldImage}`} alt={oldImage.name}/>
)}
        {newImage && (
          <img src={URL.createObjectURL(newImage)} alt={newImage.name}/>
)}
      </div>
      <label className='text-xs text-black opacity-70'> Post title
      <input type='text'
          placeholder='Title'
          value={title}
          onChange={e=> setTitle(e.target.value)}
          className='mt-1 text-black w-full rounded-lg bg-nav-bg border py-1 px-2 text-xs outline-none placeholder:text-gray-light' /></label>
       <label className='text-xs text-black opacity-70'> Post text
      <textarea 
          placeholder='Text'
           value={text}
          onChange={e=> setText(e.target.value)}
          className='mt-1 text-black w-full rounded-lg bg-nav-bg border py-1 px-2 text-xs outline-none resize-none h-40 placeholder:text-gray-light' /></label>
      <div className='flex gap-8 items-center justify-center mt-4'>
        <button className='flex justify-center text-xs text-white rounded-sm px-4 py-2
         bg-green-blue' onClick={handlerSubmit}>Edit</button>
          <button className='flex justify-center text-xs text-white rounded-sm px-4 py-2
         bg-green-blue' onClick={resetForm}>Cancel</button>
      </div>
  </form>
  )
}

export default EditPostPage
