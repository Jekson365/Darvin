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
import { createContext, useState } from "react";

export const NavContext = createContext({});

function App() {
  const [nav, setNav] = useState<boolean>(false);
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
              </Routes>
            </Box>
          </Container>
        </NavContext.Provider>
      </BrowserRouter>
    </>
  );
}
export default App;
