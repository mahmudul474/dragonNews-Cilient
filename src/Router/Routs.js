import { createBrowserRouter } from 'react-router-dom'
import Category from '../Components/Category'
import News from '../Components/News'
import TermsOfCondition from '../Components/TermsOfCondition'
import Main from '../Layot/Main'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Private from './Private'

const routs = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader:()=>fetch("http://localhost:5000/news"),
        element: <Home></Home>,
      },
      {
        path: '/news/:id',
        loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`),
        element: <Private><News></News></Private>,
      },
      { path: '/category/:id',
      loader:({params})=>fetch(`http://localhost:5000/categorys/${params.id}`),
       element: <Category></Category> },
       {
        path:"/login",
        element:<Login></Login>
       },
       {
        path:"/register",
        element: <Register></Register>
       },
       {
        path:"/tarms",
        element:<TermsOfCondition></TermsOfCondition>
 
      }
    ],
  },
])

export default routs
