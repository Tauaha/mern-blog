import React from "react";
import { AiFillEye, AiOutlineMessage  } from 'react-icons/ai'
import Moment from 'react-moment'
import { Link } from "react-router-dom";

export const PostItem = ({ post }) => {
    if (!post) {
        return (     
      <div className='text-xl text-center text-black py-10'>Loading...</div>
        )
    }


    return (
        <Link to={`/${post._id}`}>
                <div className="flex flex-col basis-1/4 flex-grow">
        <div className={post.imgUrl? 'flex rounded-sm h-80' : 'flex rounded-sm'}>
            {post.imgUrl && (
                <img src={`http://localhost:3001/${post.imgUrl}`} alt='picturePost' className="object-cover w-full"/>
           )}
        </div>
        <div className="flex justify-between items-center pt-2">
            <div className="text-xs text-gray-light opacity-50">{post.username}</div>
            <div className="text-xs text-gray-light opacity-50">
                <Moment data={post.createdAt}  format='D MMM YYYY' />
              </div>
        </div>
        <div className="text-black trxt-xl">{post.title}</div>
        <p className="text-black opacity-60 text-xs pt-4 line-clamp-4">{post.text}</p>
        <div className="flex gap-3 items-center">  <button className="flex items-center justify-center ga-2 text-xs text-gray-light opacity-50">
            <AiFillEye /><span>{post.views}</span>
        </button>
          <button className="flex items-center justify-center ga-2 text-xs text-gray-light opacity-50">
              <AiOutlineMessage />{' '}
                        <span>{post.comments?.length || 0} </span>
            </button>
        </div>
      
        </div>
        </Link>
    
    )
}