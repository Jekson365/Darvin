import { Box, Card, CardMedia, CircularProgress, Grid, Rating, Stack, Typography } from "@mui/material";
import { ButtonDetailed, MainColor } from "../../styles/Styles";
import { ChooseButton } from "../auth/Registration";
import { Lecture } from "./lessons.base/LessonsBase";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const LessonsComponent = ({ item }: { item: Lecture[] }) => {
  useEffect(() => {
    console.log(item)
  }, [])
  if (item) {
    return (
      <>
        <Box
          sx={{width:"100%",minHeight:"200px",background:"red"}}
        ></Box>
      </>
    );
  }
};

export const Loading = () => {
  return (
    <Box
      sx={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: "0", left: "0" }}
    >
      <Stack direction={'column'} alignItems={'center'}>
        <CircularProgress sx={{ color: MainColor, width: "400px" }} />
        {/* <Typography variant="h4" color={MainColor}>იტვირთება...</Typography> */}
      </Stack>
    </Box>
  )
}

export default LessonsComponent;
