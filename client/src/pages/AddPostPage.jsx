import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../redux/features/post/postOperations'
import {  useNavigate } from 'react-router-dom'

const AddPostPage = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handlerSubmit = () => {
    try {
      const data = new FormData()
      data.append('title', title)
      data.append('text', text)
      data.append('image', image)
      dispatch(createPost(data))
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const resetForm = () => {
    setImage('')
    setText('')
    setTitle('')
  }
  return (
    <form className='w-1/3 mx-auto py-10'
    onSubmit={e=> e.preventDefault()}>
      <label className='text-gray-light py-2 bg-input text xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer'>
        Add an image:
        <input type='file' className='hidden' onChange={e=> setImage(e.target.files[0])}/>
      </label>
      <div className='flex object-cover py-2'>
        {image && (
          <img src={URL.createObjectURL(image)} alt={image.name}/>
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
         bg-green-blue' onClick={handlerSubmit}>Add</button>
          <button className='flex justify-center text-xs text-white rounded-sm px-4 py-2
         bg-green-blue' onClick={resetForm}>Cancel</button>
      </div>
  </form>
  )
}

export default AddPostPage
