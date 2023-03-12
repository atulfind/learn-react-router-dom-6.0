import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import RootLayout from './pages/rootLayout';
import About from './pages/about';
import PostDetails, {loader as postDetailsLoader} from './pages/postDetails';
import Posts from './pages/posts';
import ErrorPage from './pages/error';
import UserForm, {action as userFormAction} from './pages/form';
import DeferPosts, {loader as deferPostsLoader} from './pages/deferPosts';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   }
// ])

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
    <Route index element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/posts'>
      <Route index element={<Posts/>} />
      <Route 
        path=':id'
        loader={postDetailsLoader} 
        element={<PostDetails />}
      />
    </Route>
    <Route
      path="/posts/newPost" 
      element={<UserForm />}
      action={userFormAction}  
    />
    <Route
      path='/deferPost'
      element={<DeferPosts />}
      loader={deferPostsLoader}
    />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
