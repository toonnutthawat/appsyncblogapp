// import { API } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { listPosts } from '../graphql/queries';
import { useState , useEffect } from "react";
import '@aws-amplify/ui-react/styles.css';
import { Link } from 'react-router-dom';
import { StorageImage } from '@aws-amplify/ui-react-storage';

type Post = {
  id: string;
  title: string;
  content: string;
  username?: string | null | undefined;
  coverImage?: string | null | undefined;
  createdAt: string;
  updatedAt: string;
};

function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);

  const client = generateClient({authMode: 'apiKey'});

  useEffect(() => {
    fetchPost()
  },[])

  async function fetchPost() {
    const postData = await client.graphql({
      query: listPosts
    })
    setPosts(postData.data.listPosts.items)

  }

  return (
    <div className="m-4">
      <h1 className='text-4xl font-bold text-cyan-500'>All Posts</h1>
      {
        posts.map((post) => (
          <Link to={`/post/${post.id}`}>
            <div key={post.id}>
            <div className='gap-4 p-5 mt-4 shadow-md cursor-pointer hover:bg-zinc-100'>
              {
                post.coverImage && (
                  <div>
                    <StorageImage path={post.coverImage} alt='img' className='size-3/12 rounded-lg'></StorageImage>
                  </div>
                  
                )
              }
            <h2 className='font-bold text-3xl truncate'>title : {post.title}</h2>
            <p className='truncate'> content :  {post.content}</p>
            <p> author : {post.username}</p>
            </div>
        </div>
          </Link>
        ))
      }
    </div>
  )
}

export default HomePage;
