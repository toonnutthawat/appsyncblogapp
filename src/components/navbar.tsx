import '../../configureAmplify';
import { Link } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

function Navbar() {
    const { authStatus, user } = useAuthenticator(); // Destructure authStatus and user directly

    return (
        <div className='flex justify-between items-center pt-3 pb-3 border-b bg-cyan-500 border-gray-30'>
            <div className='flex space-x-4 ml-4'>
                <Link to="/" className='text-white hover:text-slate-900'>Home</Link>


                {authStatus === 'authenticated' && (
                    <>
                        <Link to="/create-post" className='text-white hover:text-slate-900'>Post</Link>
                        <Link to="/chat" className='text-white hover:text-slate-900'>Chat</Link>
                        <Link to="/my-post" className='text-white hover:text-slate-900'>MyPost</Link>
                    </>
                )}

                {authStatus !== 'authenticated' && (
                    <>
                        <Link to="/login" className='text-white hover:text-slate-900'>Login</Link>
                        <Link to="/sign-up" className='text-white hover:text-slate-900'>Sign Up</Link>
                    </>
                )}

            </div>

            {authStatus === 'authenticated' && (
                <div className='flex items-center'>
                    <Link to="/profile-page" className='text-white hover:text-slate-900 mr-4'>{user?.username}</Link>
                </div>
            )}
        </div>
    );
}

export default Navbar;
