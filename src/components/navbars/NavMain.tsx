import { Box, Container, Stack, Typography } from "@mui/material";
import LOGO from "../../Logo.png";
import { NavLink } from "react-router-dom";
import IconReg from "../../icons/reg.svg";
import IconAut from "../../icons/auth.svg";
import { useContext } from "react";
import { NavContext } from "../../App";

const NavMain = () => {
  const setNav = useContext(NavContext);
  return (
    <>
      <Container
        sx={{
          width: "380px",
          height: "100vh",
          position: "fixed",
          top: "0",
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box
          pl={2.5}
          pt={5.6}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Stack direction={"column"} alignItems={"flex-start"}>
            <img width={"110px"} src={LOGO} />
            <Stack mt={8} gap={"40px"}>
              <NavItemText
                location={""}
                title="მთავარი"
                icon={
                  "https://assets.website-files.com/5ec03c2c67cf4824e3d00674/5ec06fd41b451117a43bf866_Home.svg"
                }
              />
              <NavItemText
                location={"lessons"}
                title="ლექციები"
                icon={
                  "https://assets.website-files.com/5ec03c2c67cf4824e3d00674/5ec16d200962178631a23d61_Document.svg"
                }
              />
              <NavItemText
                location={"lectors"}
                title="ლექტორები"
                icon={
                  "https://assets.website-files.com/5ec03c2c67cf4824e3d00674/5ec0767df6793ec663e7022f_Calendar.svg"
                }
              />
              <NavItemText
                location={"sylabus"}
                title="სილაბუსი"
                icon={
                  "https://assets.website-files.com/5ec03c2c67cf4824e3d00674/5ec16f2bf2396c56c2e0b35d_Discovery.svg"
                }
              />
              <NavItemText
                location={"blog"}
                title="ბლოგი"
                icon={
                  "https://assets.website-files.com/5ec03c2c67cf4824e3d00674/5ec16f2bf2396c56c2e0b35d_Discovery.svg"
                }
              />
            </Stack>
          </Stack>
        </Box>
        <Box mb={3}>
          <Stack direction={"column"} gap={"20px"} alignItems={"center"}>
            <NavItemText
              location={"reg"}
              title={"რეგისტრაცია"}
              icon={IconReg}
            ></NavItemText>
            <NavItemText
              location={"login"}
              title={"ავტორიზაცია"}
              icon={IconAut}
            ></NavItemText>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export function NavItemText({
  title,
  icon,
  location,
}: {
  title: String;
  icon: String;
  location: String;
}) {
  return (
    <>
      <NavLink to={`/${location}`} style={{ opacity: "0.5" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img width={"22px"} src={icon.toString()} />
          <Typography
            sx={{
              fontFamily: "'Noto Sans',sans-serif",
              color: "#000000",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </Box>
      </NavLink>
    </>
  );
}

export default NavMain;
