import React from "react";


export const PopularPosts = ({post}) => {
    return <div className="bg-input my-1">
        <div className="flex text-xs p-2 text-gray-light hover:bg-white hover:text-green-blue">
           {post.title}
        </div></div>
}