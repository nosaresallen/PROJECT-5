import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import UsersProfile from "./pages/UsersProfile";
import AddPost from "./pages/AddPost";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Message from "./pages/Message";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='usersprofile' element={<UsersProfile/>}/>
          <Route path='addpost' element={<AddPost/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='message' element={<Message/>}/>
        </Route>
        <Route>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App