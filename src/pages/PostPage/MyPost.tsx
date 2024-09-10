import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Moment from "moment"
import { StorageImage } from "@aws-amplify/ui-react-storage";
import { fetchMyPosts } from "../../store/slices/thunks/postsThunk";
import { useAppDispatch, useAppSelector } from "../../hook";
import { removePost } from "../../store/slices/thunks/postsThunk";

function MyPost() {

  const dispatch = useAppDispatch()
  const [term, setTerm] = useState("")
  const myPosts = useAppSelector(state => state.posts.myPosts.data || [])

  const filteredPosts = myPosts?.filter((post) =>
    post.title.toLowerCase().includes(term.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchMyPosts())
    console.log("fetchMyPosts");
  }, [])


  return (
    <div className="py-8 px-8 max-w-xxl mx-auto rounded sm:items-center sm:space-y-0 sm:space-x-6 mb-2">
      <input
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder='search title'
        className='p-2'
        style={{ width: "100%" }}>
      </input>
      <h1 className="text-4xl py-4 text-cyan-500 font-bold drop-shadow-lg">My Posts</h1>
      {
        filteredPosts.map((post) => (
          <div key={post.id} className="relative">
            <div className='gap-4 p-5 mt-4  rounded-lg shadow-md hover:drop-shadow-2xl hover:bg-zinc-100 relative'>
              {
                post.coverImage && (
                  <div>
                    <StorageImage path={post.coverImage} alt='img' className='size-3/6 rounded-lg'></StorageImage>
                  </div>

                )
              }
              <h2 className='font-bold text-3xl truncate'>title : {post.title}</h2>
              <p className="truncate"> content :  {post.content}</p>
              <p> author : {post.username}</p>
              <p className="text-slate=500">Create on : {Moment(post.createdAt).format("DD / MM / YYYY, hh:mm:ss a")}</p>
              <div className="flex absolute right-4 bottom-4">
                <Link to={`/post/${post.id}`}
                  className="bg-cyan-500 rounded p-2 bottom-5 hover:bg-cyan-700 text-white  text-sm sm:text-base">View</Link>
                <Link to={`/edit-post/${post.id}`}
                  className="bg-cyan-500 rounded p-2 bottom-5 hover:bg-cyan-700 text-white  text-sm sm:text-base ml-2">Edit</Link>
                <button onClick={() => dispatch(removePost(post.id))}
                  className="bg-red-500 rounded p-2 bottom-5 hover:bg-red-700 text-white text-sm sm:text-base ml-2"
                  id="delete-button">
                  X
                </button>
              </div>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default MyPost;



