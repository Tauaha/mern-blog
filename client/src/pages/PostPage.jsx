import React, { useCallback, useEffect, useState } from 'react'
import {     AiFillEye,
    AiOutlineMessage,
    AiTwotoneEdit,
    AiFillDelete, } from 'react-icons/ai'
import Moment from 'react-moment'
import axios from '../utils/axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {removePost} from '../redux/features/post/postOperations'
import { toast } from 'react-toastify'

const PostPage = () => {
  const [post, setPost] = useState(null)
  const {user} = useSelector(state=> state.auth)
  const params = useParams()
const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const fetchPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`)
    setPost(data)
  }, [params.id])

  const handlerRemovePost = () => {
   try {
     dispatch(removePost(params.id))
     toast('Post deleted')
     navigate('/posts')
   } catch (error) {
    console.log(error)
   }
  }
  
  useEffect(() => {
    fetchPost()
  },[fetchPost])
     if (!post) {
        return (     
      <div className='text-xl text-center text-black py-10'>Not found any Post</div>
        )
    }
  return (
    <div>
      <button className='flex justify-center items-center bg-green-blue text-xs text-white rounded-sm py-2 px-4'>
        <Link to={'/'}>
          Back
        </Link> </button> 
      <div className="flex gap-10 py-8">
        <div className='w-2/3'>
          <div className="flex flex-col basic-1/4 flex-grow">
            <div className={post?.imgUrl ? 'flex rounded-sm h-80' : 'flex rounded-sm'}>
            {post?.imgUrl && (
                <img src={`http://localhost:3001/${post.imgUrl}`} alt='picturePost' className="object-cover w-full"/>
           )}
        </div>
          </div>
           <div className="flex justify-between items-center pt-2">
            <div className="text-xs text-gray-light opacity-50">{post.username}</div>
            <div className="text-xs text-gray-light opacity-50">
                <Moment data={post.createdAt}  format='D MMM YYYY' />
              </div>
        </div>
        <div className="text-black trxt-xl">{post.title}</div>
        <p className="text-black opacity-60 text-xs pt-4 line-clamp-4">{post.text}</p>
          <div className="flex gap-3 items-center justify-between"> 
            <div className='flex gap-3 mt-4'>
               <button className="flex items-center justify-center gap-2 text-xs text-gray-light opacity-50">
            <AiFillEye /><span>{post.views}</span>
        </button>
          <button className="flex items-center justify-center gap-2 text-xs text-gray-light opacity-50">
              <AiOutlineMessage />{' '}
                        <span>{post.comments?.length || 0} </span>
            </button>
            </div>
            {user?._id === post.author && (  <div className="flex gap-3 mt-4">
               <button className="flex items-center justify-center gap-2  text-gray-light opacity-50">
               <Link to={`/${params.id}/edit`}>
                                        <AiTwotoneEdit />
                                    </Link>
        </button>
              <button
                onClick={handlerRemovePost}
                className="flex items-center justify-center gap-2  text-gray-light opacity-50">
              <AiFillDelete />
            </button>
            </div>
      )}
        </div>
        </div>
        
        <div className='w-1/3'>COMMENTS</div>
      </div>
    </div>
  )
}

export default PostPage
