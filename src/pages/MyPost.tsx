import { useEffect, useState } from "react";
//import type { PostType } from "../types/PostType";
import type { Post } from "../API";
import { generateClient } from "@aws-amplify/api";
import { listPosts }  from "../graphql/queries";
import { withAuthenticator , WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import Moment from "moment"
import { deletePost  as deletePostMutation} from "../graphql/mutations";
import { StorageImage } from "@aws-amplify/ui-react-storage";

interface Props extends WithAuthenticatorProps {
    isPassedToWithAuthenticator: boolean;
}


function MyPost({isPassedToWithAuthenticator,user} : Props){

    if (!isPassedToWithAuthenticator) {
        throw new Error(`isPassedToWithAuthenticator was not provided`);
    }

    const [posts, setPosts] = useState<Post[]>([]);
    const username  = user?.username;
    const client = generateClient();
    if(!username){
        throw new Error("username must be provided")
    }
  
    useEffect(() => {
      fetchPost()
    },[])

    async function fetchPost() {
      const postData = await client.graphql({
        query: listPosts
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
            <div className='gap-4 p-5 mt-4  rounded-lg shadow-md hover:bg-zinc-100'>
            {
                post.coverImage && (
                  <div>
                    <StorageImage path={post.coverImage} alt='img' className='size-3/12 rounded-lg'></StorageImage>
                  </div>
                  
                )
              }
            <h2 className='font-bold text-3xl truncate'>title : {post.title}</h2>
            <p className="truncate"> content :  {post.content}</p>
            <p> author : {post.username}</p>
            <p className="text-slate=500">Create on : {Moment(post.createdAt).format("ddd, MMM, hh:mm a")}</p>
            <Link to={`/post/${post.id}`} 
                className="bg-cyan-500 rounded p-2 absolute bottom-5 right-5 hover:bg-cyan-700 text-white">View Post</Link>
            <Link to={`/edit-post/${post.id}`} 
                className="bg-cyan-500 rounded p-2 absolute bottom-5 hover:bg-cyan-700 text-white" style={{right: '7rem'}}>Edit Post</Link>
            <button onClick={() => deletePost(post.id)}
                className="bg-red-500 rounded p-2 absolute bottom-5 hover:bg-red-700 text-white" style={{right: '197px'}}>Delete Post</button>
            </div>
        </div>
        ))
      }
        </div>
    )
}

export default withAuthenticator(MyPost);

export async function getStaticProps() {
    return {
      props: {
        isPassedToWithAuthenticator: true,
      },
};
}

