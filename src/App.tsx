import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";
import MyPost from "./pages/MyPost";
import DetailPost from "./pages/DetailPost";
import LoginPage from "./pages/LoginPage";
import EditPage from "./pages/EditPage";
import { detailLoader } from "./loaders/detailLoader";
import '@aws-amplify/ui-react/styles.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: '/create-post',
        element: 
          <CreatePostPage></CreatePostPage>
      },
      {
        path: '/profile-page',
        element: <ProfilePage isPassedToWithAuthenticator={true}></ProfilePage>
      },
      {
        path: '/sign-up',
        element: <SignUpPage></SignUpPage>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/my-post',
        element: <MyPost isPassedToWithAuthenticator={true}></MyPost>
      },
      {
        path: '/post/:id',
        element: <DetailPost></DetailPost>,
        loader: detailLoader
      },
      {
        path: 'edit-post/:id',
        element: <EditPage></EditPage>,
        loader: detailLoader
      }
    ]
  }
])


function App(){
  return(
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App;