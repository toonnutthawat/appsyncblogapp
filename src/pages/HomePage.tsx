import { generateClient } from 'aws-amplify/api';
import { listPosts } from '../graphql/queries';
import { useState, useEffect } from "react";
import '@aws-amplify/ui-react/styles.css';
import { Link } from 'react-router-dom';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { onCreatePost } from '../graphql/subscriptions';
import type { Post } from '../API';
import { Subscription } from 'rxjs';
// import { InvokeCommandOutput, Lambda } from '@aws-sdk/client-lambda';
// import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
// import { fetchUserAttributes } from 'aws-amplify/auth';

function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<Post | null>(null);

  // async function getUserInfo(){
  //     const { username, userId, signInDetails } = await getCurrentUser();
  //     const user = await fetchUserAttributes()
  //     console.log("user:", user)
  //     console.log("username", username);
  //     console.log("user id", userId);
  //     console.log("sign-in details", signInDetails);
  // }


  const client = generateClient({ authMode: 'apiKey' });
  let subOnCreate: Subscription;

  function setUpSubscriptions() {
    subOnCreate = client.graphql({ query: onCreatePost })
      .subscribe({
        next: ({ data }) => {
          const postData = data.onCreatePost as Post;
          setNewPost(postData);
          console.log(postData);
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

  useEffect(() => {
    fetchPosts();
  }, [newPost]);

  async function fetchPosts() {
    const postData = await client.graphql({
      query: listPosts,
    });
    setPosts(postData.data.listPosts.items);
  }

  return (
    <div className="m-4">
      <h1 className='text-4xl font-bold text-cyan-500'>All Posts</h1>
      {
        posts.map((post, index) => (
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
