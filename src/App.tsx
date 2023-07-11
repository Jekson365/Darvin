import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/styles.scss'
import Home from './pages/home/Home';
import Lessons from './pages/lessons/Lessons';
import Lectors from './pages/lectors/Lectors';
import Sylabus from './pages/sylabus/Sylabus';
import Blog from './pages/blog/Blog';
import { Box, Container } from '@mui/material';
import Search from './components/Search';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Container
          sx={{ marginLeft: { xs: "0", md: "380px" }, padding: { xs: "25px", md: "20px 50px" }, maxWidth: "1290px" }}
          maxWidth={false}
        >
          <Search />
          <Box mt={5}> 
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/lessons' element={<Lessons />} />
              <Route path='/lectors' element={<Lectors />} />
              <Route path='/sylabus' element={<Sylabus />} />
              <Route path='/blog' element={<Blog />} />
            </Routes>
          </Box>
        </Container>
      </BrowserRouter>
    </>

  )
}
export default App;
