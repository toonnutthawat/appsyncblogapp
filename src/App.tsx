import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/PostPage/CreatePostPage";
import ProfilePage from "./pages/MyAccount/ProfilePage";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import MyPost from "./pages/PostPage/MyPost";
import DetailPost from "./pages/PostPage/DetailPost";
import EditPage from "./pages/PostPage/EditPage";
import ResetPassword from "./pages/AuthPage/ResetPassword";
import { detailLoader } from "./loaders/detailLoader";
import Login from "./pages/AuthPage/Login";
import '@aws-amplify/ui-react/styles.css';
import ProductPage from "./pages/Shop/ProductsPage";
import AddProduct from "./pages/Shop/AddProduct";
import CartPage from "./pages/Shop/CartPage";
import ProductDetail from "./pages/Shop/ProductDetail";
import MyPurchase from "./pages/MyAccount/MyPurchase";
import MyPurchaseOrderDetail from "./pages/MyAccount/MyPurchaseOrderDetail";
import ManageProduct from "./pages/Admin/ManageProduct";

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
        path: '/admin/manageProduct',
        element: <ManageProduct></ManageProduct>
      },
      {
        path: '/create-post',
        element: 
          <CreatePostPage></CreatePostPage>
      },
      {
        path: '/profile-page',
        element: <ProfilePage></ProfilePage>
      },
      {
        path:'/profile-page/myPurchase',
        element: <MyPurchase></MyPurchase>
      },
      {
        path: '/profile-page/orderDetail',
        element: <MyPurchaseOrderDetail></MyPurchaseOrderDetail>
      },
      {
        path: '/sign-up',
        element: <SignUpPage></SignUpPage>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/reset-password',
        element: <ResetPassword></ResetPassword>
      },
      {
        path: '/my-post',
        element: <MyPost></MyPost>
      },
      {
        path:'/shop',
        element: <ProductPage></ProductPage>
      },
      {
        path: '/product/detail',
        element: <ProductDetail></ProductDetail>
      },
      {
        path: '/shop/add',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/shop/cart',
        element: <CartPage></CartPage>
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