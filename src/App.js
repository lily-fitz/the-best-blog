import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'
import Posts from './components/Posts'
import SinglePost from './components/SinglePost'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/:slug' element={<SinglePost />} />
          <Route path='about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

//<Route path='/' element={<Home />} />
//<Route path='posts' element={<Posts />} />
