import { generateClient } from 'aws-amplify/api';
import { useState, useEffect } from "react";
import '@aws-amplify/ui-react/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { onCreatePost } from '../graphql/subscriptions';
import type { Post } from '../API';
import { Subscription } from 'rxjs';
import { useAppDispatch } from '../hook';
import { useAppSelector } from '../hook';
import { fetchPosts } from '../store/slices/thunks/postsThunk';
import { useAuthenticator } from '@aws-amplify/ui-react';
// import { InvokeCommandOutput, Lambda } from '@aws-sdk/client-lambda';
// import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
// import { fetchUserAttributes } from 'aws-amplify/auth';

function HomePage() {
  const [newPost, setNewPost] = useState<Post | null>(null);
  const { authStatus } = useAuthenticator(); // Destructure authStatus and user directly
  const [term, setTerm] = useState("")
  const navigate = useNavigate()
  console.log(term);

  const dispatch = useAppDispatch();
  const allPosts = useAppSelector(state => state.posts.allPosts.data || [])
  console.log("allposts", allPosts);

  const client = generateClient({ authMode: 'apiKey' });
  let subOnCreate: Subscription;

  function setUpSubscriptions() {
    subOnCreate = client.graphql({ query: onCreatePost })
      .subscribe({
        next: ({ data }) => {
          const postData = data.onCreatePost as Post;
          setNewPost(postData);
        },
      });
  }

  useEffect(() => {
    setUpSubscriptions();
    return () => {
      subOnCreate.unsubscribe();
    };
  }, []);

  // async function handler() {
  //   try {
  //     const authSession = await fetchAuthSession();
  //     const lambda = new Lambda({
  //       credentials: authSession.credentials,
  //       region: 'ap-southeast-1',
  //     });

  //     const response = await lambda.invoke({
  //       FunctionName: 'arn:aws:lambda:ap-southeast-1:211125542142:function:LambdaNewComment-dev',
  //     });

  //     const decodedResponse = lambdaDecode(response);
  //     console.log('Lambda decoded:', decodedResponse);
  //   } catch (error) {
  //     console.error('Error invoking Lambda function:', error);
  //   }
  // }

  // function lambdaDecode(response: InvokeCommandOutput) {
  //   try {
  //     if (response.Payload) {
  //       const decoder = new TextDecoder("utf-8");
  //       const decodedPayload = decoder.decode(response.Payload);
  //       const payload = JSON.parse(decodedPayload);
  //       console.log('Parsed Payload:', payload);  // Log the parsed payload for debugging

  //       if (payload && payload.body) {
  //         const body = JSON.parse(payload.body);
  //         console.log("Body: ",body)
  //         return body;
  //       } else {
  //         throw new Error("Payload body is undefined or invalid");
  //       }
  //     } else {
  //       throw new Error("Payload is undefined");
  //     }
  //   } catch (error) {
  //     console.error('Error decoding Lambda response:', error);
  //     return null;
  //   }
  // }

  const filteredPosts = allPosts?.filter((post) =>
    post.title.toLowerCase().includes(term.toLowerCase())
  );

  const renderedListAllPosts = filteredPosts?.map((post, index) => (
    <div key={index}>
      <Link to={`/post/${post.id}`}>
        <div className='gap-4 p-5 mt-4 shadow-md cursor-pointer hover:bg-zinc-100'>
          {
            post.coverImage && (
              <div>
                <StorageImage path={post.coverImage} alt='img' className='size-3/6 rounded-lg'></StorageImage>
              </div>
            )
          }
          <h2 className='font-bold text-3xl truncate'>title: {post.title}</h2>
          <p className='truncate'>content: {post.content}</p>
          <p>author: {post.username}</p>
        </div>
      </Link>
    </div>
  ));

  const toLoginPage = () => {
    navigate("/login")
  }


  useEffect(() => {
    dispatch(fetchPosts());
    console.log("fetchAllPosts");
  }, [newPost]);

  return (
    <div className="m-4">
      {authStatus !== "authenticated" ?
        <div>
          <div className='text-4xl py-4 text-cyan-500 font-bold drop-shadow-lg'>Welcome to APPSYNCBLOGAPP</div>
          <button 
            onClick={toLoginPage} 
            className='mb-4 bg-cyan-500 text-white font-semibold py-2 rounded-lg hover:bg-cyan-800 flex items-center justify-center w-36'>login
          </button>
        </div>
        :
        <div>
          <input 
            value={term} 
            onChange={e => setTerm(e.target.value)} 
            placeholder='search title' 
            className='p-2' 
            style={{width: "100%"}}>
            </input>
          <h1 className="text-4xl py-4 text-cyan-500 font-bold drop-shadow-lg">All Posts</h1>
          {renderedListAllPosts}
        </div>
      }
    </div>
  );
}

export default HomePage;
