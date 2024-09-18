import '../../configureAmplify';
import { Link } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hook';
import { fetchUser } from '../store/slices/thunks/userThunk';

function Navbar() {
    const { authStatus } = useAuthenticator(); // Destructure authStatus and user directly
    const dispatch = useAppDispatch()
    const userInfo = useAppSelector(state => state.user.userInfo)
    const location = useLocation()
    const { isSignIn } = location.state || ""

    useEffect(() => {
        dispatch(fetchUser())
    }, [isSignIn])


    return (
        <div className='flex justify-between items-center pt-3 pb-3 border-b bg-cyan-500 border-gray-30'>
            <div className='flex space-x-4 ml-4'>
                <Link to="/" className='text-white hover:text-slate-900'>Home</Link>


                {authStatus === 'authenticated' && (
                    <>
                        <Link to="/create-post" className='text-white hover:text-slate-900'>Post</Link>
                        <Link to="/chat" className='text-white hover:text-slate-900'>Chat</Link>
                        <Link to="/my-post" className='text-white hover:text-slate-900'>MyPost</Link>
                        <Link to="/shop" className='text-white hover:text-slate-900'>Shop</Link>
                    </>
                )}

                {authStatus !== 'authenticated' && (
                    <>
                        <Link to="/login" className='text-white hover:text-slate-900'>Login</Link>
                    </>
                )}


            </div>

            {authStatus === 'authenticated' && (
                <div className='flex items-center'>
                    <Link to="/profile-page" className='text-white hover:text-slate-900 mr-4'>{userInfo?.username}</Link>
                </div>
            )}
        </div>
    );
}

export default Navbar;
