import './App.css'
import { RouterProvider } from 'react-router-dom'
import routs from './Router/Routs'
function App() {
  return (
    <div className="App">
      <RouterProvider router={routs}></RouterProvider>
    </div>
  )
}

export default App
