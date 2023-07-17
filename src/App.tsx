import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/styles.scss";
import Home from "./pages/home/Home";
import Lessons from "./pages/lessons/Lessons";
import Lectors from "./pages/lectors/Lectors";
import Sylabus from "./pages/sylabus/Sylabus";
import Blog from "./pages/blog/Blog";
import { Box, Container } from "@mui/material";
import Search from "./components/Search";
import Registration from "./pages/auth/Registration";
import Login from "./pages/auth/Login";
import { createContext, useState, useEffect } from "react";
import LectPage from "./pages/lect_Page/LectPage";
import AOS from 'aos'
import 'aos/dist/aos.css'
import LesPage from "./pages/lessons_page/LesPage";

export const NavContext = createContext({});

function App() {
  const [nav, setNav] = useState<boolean>(false);

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <BrowserRouter>
        <NavContext.Provider value={{ nav, setNav }}>
          <Navigation />
          <Container
            sx={{
              marginLeft: { xs: "0", md: "380px" },
              padding: { xs: "25px", md: "20px 50px" },
              maxWidth: "1290px",
            }}
            maxWidth={false}
          >
            <Search />
            <Box mt={5}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lessons" element={<Lessons />} />
                <Route path="/lectors" element={<Lectors />} />
                <Route path="/sylabus" element={<Sylabus />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/reg" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path='/lect/:id' element={<LectPage />} />
                <Route path='/less/:id' element={<LesPage/>}/>
              </Routes>
            </Box>
          </Container>
        </NavContext.Provider>
      </BrowserRouter>
    </>
  );
}
export default App;
