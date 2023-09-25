import React, { useEffect } from 'react'
import { PostItem } from '../components/PostItem'
import { PopularPosts } from '../components/PopularPosts'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../redux/features/post/postOperations'

const MainPage = () => {
  const dispatch = useDispatch()
  const { posts, popularPosts } = useSelector((state) => state.post)
  
  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  if (!posts.length) {
    return (
      <div className='text-xl text-center text-black py-10'>Not found any Post</div>
    )
  }

  return (
    <div className='max-w-[900px] mx-auto py-10'>
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-10 basic-4/5">
         {posts?.map((post, idx) => (
                        <PostItem key={idx} post={post} />
                    ))}
        </div>
        <div className="basic-1/5">
          <div className="text-xs uppercase text-black">POPULAR:</div>
          {
            popularPosts?.map((post, idx) => (
           <PopularPosts  key={idx} post={post}/>
            )
         
            )
          }

        </div>
      </div>
    
    </div>
  )
}

export default MainPage
