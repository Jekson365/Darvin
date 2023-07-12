import { Box, Button, Stack, Typography, styled, Fade } from "@mui/material";
import { MainColor } from "../../styles/Styles";
import { useState, useEffect } from "react";
import LectForm from "./forms/LectForm";
import { StudentForm } from "./forms/StudentForm";

const Registration = () => {
  
  const [regType, setRegType] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Fade in={regType ? false : true} timeout={1000}>
        <Box
          sx={{
            width: "100%",
            height: "700px",
            display: regType ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            fontSize={"25px"}
            color={MainColor}
            mb={3}
            textAlign={"center"}
          >
            ვრეგისტრირდები როგორც:
          </Typography>
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"center"}
            gap={"20px"}
            flexWrap={"wrap"}
          >
            <ChooseButton
              onClick={() => setRegType("student")}
              sx={{ background: "white", color: MainColor }}
            >
              მოსწავლე
            </ChooseButton>

            <ChooseButton onClick={() => setRegType("lecturer")}>
              მასწავლებელი
            </ChooseButton>
          </Stack>
        </Box>
      </Fade>
      <Fade in={regType ? true : false} timeout={1500}>
        <h1>{regType == "student" ? <StudentForm /> : <LectForm />}</h1>
      </Fade>
    </>
  );
};

export const ChooseButton = styled(Button)({
  background: MainColor,
  color: "white",
  padding: "10px 50px",
  borderRadius: "5px",
  border: `1px solid ${MainColor}`,
  fontSize: "18px",
  "&:hover": {
    background: "white",
    color: MainColor,
  },
});

export default Registration;
