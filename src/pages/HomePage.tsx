import { generateClient } from 'aws-amplify/api';
import { useState, useEffect } from "react";
import '@aws-amplify/ui-react/styles.css';
import { Link } from 'react-router-dom';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { onCreatePost } from '../graphql/subscriptions';
import type { Post } from '../API';
import { Subscription } from 'rxjs';
import { useAppDispatch, useAppSelector } from '../hook';
import { fetchPosts } from '../store/slices/thunks/postsThunk';
import { listPosts } from '../graphql/queries';
// import { InvokeCommandOutput, Lambda } from '@aws-sdk/client-lambda';
// import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
// import { fetchUserAttributes } from 'aws-amplify/auth';

function HomePage() {
  const [newPost, setNewPost] = useState<Post | null>(null);
  const [listAllPosts, setlistAllPosts] = useState<Post[] | null>(null)
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

  useEffect(() => {
    getPosts()
    console.log("getPosts");
  }, [])

  async function getPosts() {
    try {
      const response = await client.graphql({
        query: listPosts
      })
      setlistAllPosts(response.data.listPosts.items)
    } catch (error) {
      console.log(error);
      setlistAllPosts([])
    }
  }

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

  useEffect(() => {
    dispatch(fetchPosts());
    console.log("fetchAllPosts");
  }, [newPost]);

  return (
    <div className="m-4">
      <h1 className='text-4xl font-bold text-cyan-500'>All Posts</h1>
      {
        (listAllPosts ?? []).map((post, index) => (
          <Link to={`/post/${post.id}`} key={index}>
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
        ))
      }
    </div>
  );
}

export default HomePage;
