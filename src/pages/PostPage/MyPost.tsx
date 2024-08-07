import { useEffect, useState } from "react";
import type { Post } from "../../API";
import { generateClient } from "@aws-amplify/api";
import { listPosts }  from "../../graphql/queries";
import { Link } from "react-router-dom";
import Moment from "moment"
import { deletePost  as deletePostMutation} from "../../graphql/mutations";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import { Subscription } from 'rxjs'
import { onDeletePost } from "../../graphql/subscriptions";
import { useAuthenticator } from "@aws-amplify/ui-react";


function MyPost(){

    const { user } = useAuthenticator(); // Destructure authStatus and user directly
    const [posts, setPosts] = useState<Post[]>([]);
    const [deleteData , setDeletePost] = useState<Post>()
    const username = user.username
    const client = generateClient();
    let subOnDelete: Subscription;

    function setUpSubscriptions(){
      subOnDelete = client.graphql({
        query: onDeletePost
      }).subscribe({
        next: ({data}) => {
          const deleteData = data.onDeletePost as Post
          setDeletePost(deleteData)
        }
      })
    }

    useEffect(() => {
      setUpSubscriptions()
      return () => {
        subOnDelete.unsubscribe();
      }
    })
  
    useEffect(() => {
      fetchPost()
    },[deleteData])

    async function fetchPost() {
      const postData = await client.graphql({
        query: listPosts,
        variables: {
          filter: {
            username: { eq: `${user?.userId}::${username}` }
          }
        }
      })
      setPosts(postData.data.listPosts.items)
    }

    async function deletePost(id : string) {
      await client.graphql({
        query: deletePostMutation,
        variables: {input : {id}}
      })
      fetchPost()
    } 
 
    return(
        <div className="py-8 px-8 max-w-xxl mx-auto bg-white rounded sm:items-center sm:space-y-0 sm:space-x-6 mb-2">
            <h1 className='text-4xl font-bold text-cyan-500 ml-5'>My Posts</h1>
                  {
        posts.map((post) => (
            <div key={post.id} className="relative">
            <div className='gap-4 p-5 mt-4  rounded-lg shadow-md hover:bg-zinc-100 relative'>
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
            <p className="text-slate=500">Create on : {Moment(post.createdAt).format("ddd, MMM, hh:mm a")}</p>
            <div className="flex absolute right-4 bottom-4">
                <Link to={`/post/${post.id}`} 
                    className="bg-cyan-500 rounded p-2 bottom-5 hover:bg-cyan-700 text-white  text-sm sm:text-base">View</Link>
                <Link to={`/edit-post/${post.id}`} 
                    className="bg-cyan-500 rounded p-2 bottom-5 hover:bg-cyan-700 text-white  text-sm sm:text-base ml-2">Edit</Link>
                <button onClick={() => deletePost(post.id)}
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



