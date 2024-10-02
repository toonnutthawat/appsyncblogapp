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
import ProfilePicture from '../components/ProfilePicture';
import { BiSolidLike } from 'react-icons/bi';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

function HomePage() {
  const [newPost, setNewPost] = useState<Post | null>(null);
  const { authStatus } = useAuthenticator(); // Destructure authStatus and user directly
  const [term, setTerm] = useState("")
  const [sortOrder, setSortOrder] = useState<'none' | 'ascending' | 'descending'>('none'); // Three state sorting
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector(state => state.posts.allPosts.data || [])

  const client = generateClient();
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

  const filteredPosts = allPosts?.filter((post) =>
    post.title.toLowerCase().includes(term.toLowerCase())
  );
  console.log("original filteredPost : ", filteredPosts);

  const getSortedPosts = () => {
    if (sortOrder === 'ascending') {
      return [...filteredPosts].sort((a, b) => a.likes - b.likes);
    } else if (sortOrder === 'descending') {
      return [...filteredPosts].sort((a, b) => b.likes - a.likes);
    }
    return filteredPosts; // Default: no sorting (sortOrder is 'none')
  };

  const sortedPosts = getSortedPosts();
  console.log("sortedPost : ", sortedPosts);

  // Toggle through the three states: none -> ascending -> descending -> none
  const toggleSortOrder = () => {
    if (sortOrder === 'none') {
      setSortOrder('ascending');
    } else if (sortOrder === 'ascending') {
      setSortOrder('descending');
    } else {
      setSortOrder('none');
    }
  };


  const renderedListAllPosts = sortedPosts?.map((post, index) => (
    <div key={index}>
      <Link to={`/post/${post.id}`} state={{ detail: post }}>
        <div className='gap-4 p-5 mt-4 shadow-md cursor-pointer hover:bg-zinc-100 relative rounded-lg'>
          {
            post.coverImage && (
              <div className='pt-8'>
                <StorageImage path={post.coverImage} alt='img' className='size-3/6 rounded-lg'></StorageImage>
              </div>
            )
          }
          <h2 className='font-bold text-3xl truncate'>title: {post.title}</h2>
          <p className='truncate'>content: {post.content}</p>
          <div className='flex flex-row space-x-2 absolute right-2 top-2'>
            <ProfilePicture src={`public/profile/${post.username}`} size='32px'></ProfilePicture>
            <p>{post.username}</p>
          </div>
          <div className='flex flex-row space-x-2 absolute right-2 bottom-2 items-center'>
            <BiSolidLike size="32px"></BiSolidLike>
            <p>{post.likes}</p>
          </div>
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
    <div className="m-4 px-20">
      {authStatus !== "authenticated" ?
        <div>
          <div className='text-4xl py-4 text-cyan-500 font-bold drop-shadow-lg'>Welcome to BLOGAPP</div>
          <button
            onClick={toLoginPage}
            className='mb-4 bg-cyan-500 text-white font-semibold py-2 rounded-lg hover:bg-cyan-800 flex items-center justify-center w-36'>login
          </button>
        </div>
        :
        <div>
          <div className='flex flex-row space-x-2'>
            <input
              value={term}
              onChange={e => setTerm(e.target.value)}
              placeholder='search title'
              className='p-2'
              style={{ width: "95%" }}>
            </input>
            <div className='relative top-0'>
              <button
                onClick={toggleSortOrder}
                className=' mt-4 bg-cyan-500 text-white font-semibold p-2 rounded-lg hover:bg-cyan-800 flex flex-row items-center'>
                Sort
                {sortOrder === 'ascending' && <IoIosArrowUp className='ml-1' />}
                {sortOrder === 'descending' && <IoIosArrowDown className='ml-1' />}
                {sortOrder === 'none' && <FiMinus className='ml-1' />}
              </button>
            </div>
          </div>
          <h1 className="text-4xl py-4 text-cyan-500 font-bold drop-shadow-lg">All Posts</h1>
          {renderedListAllPosts}
        </div>
      }
    </div>
  );
}

export default HomePage;
