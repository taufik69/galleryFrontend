
import Login from "./Login/Login"
import Registration from "./Registration/Registration"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route >
        <Route path="/registration" element = {<Registration/>}> </Route>
        <Route path="/login" element = {<Login/>}> </Route>
     </Route>
    )
  )


  return (
    <>
    <RouterProvider router={router}/>

    </>
  )
}

export default App
