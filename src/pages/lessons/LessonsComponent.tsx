import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { ButtonDetailed, MainColor } from "../../styles/Styles";
import { Lecture } from "./lessons.base/LessonsBase";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LessonsComponent = ({ item }: { item: Lecture[] }) => {
  useEffect(() => {
    console.log(item)
  }, [])
  if (item) {
    return (
      <>
        <Box
          sx={{ width: "100%", minHeight: "400px", background: "white", border: "0.3px solid rgba(0,0,0,0.2)", borderRadius: "5px", overflow: "hidden" }}
        >
          <Box
            height={"50%"}
            width={"100%"}
            bgcolor={"blue"}
            sx={{ backgroundImage: `url('${item && item[0].img}')`, backgroundSize: "cover" }}
          ></Box>
          <Stack
            p={1}
            gap={'10px'}
            direction={'column'}
            alignItems={'flex-start'}
          >

            <Typography
              variant="h6"
              fontWeight={'bold'}
              color={MainColor}
            >{item[0].title}</Typography>

            <Typography
              color={'gray'}
              fontSize={'13px'}
            >{item[0].description}</Typography>
            <Link
              to={`/less/${item && item[0].id}`}
            >
              <ButtonDetailed
                sx={{ fontSize: "11px" }}
              >ვრცლად...</ButtonDetailed>
            </Link>
          </Stack>
        </Box>
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
