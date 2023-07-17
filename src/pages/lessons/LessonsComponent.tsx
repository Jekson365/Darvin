import { Box, CardMedia, Grid, Rating, Stack, Typography } from "@mui/material";
import { MainColor } from "../../styles/Styles";
import { ChooseButton } from "../auth/Registration";
import { Lecture } from "./lessons.base/LessonsBase";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LessonsComponent = ({ item }: { item: Lecture[] }) => {
  useEffect(() => {
    console.log(item)
  }, [])

  return (
    <>
      <Grid
        container
        sx={{ background: "white", display: "flex", alignItems: "center" }}
      >
        <Grid item xs={12} md={4}>
          <Box width={"100%"}>
            <CardMedia
              component={"img"}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={item[0].img.toString()}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack
            gap={1}
            direction={"column"}
            alignItems={"baseline"}
            justifyContent={"space-between"}
            minHeight={"230px"}
            p={2}
          >
            <Stack direction={"column"} gap={0.5}>
              <Typography variant="h5" color={MainColor}>
                {item[0].title} -{" "}
                <Rating
                  size="small"
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: MainColor,
                    },
                  }}
                  color={MainColor}
                  readOnly
                  defaultValue={item[0].stars}
                />
              </Typography>
              <Typography fontSize={"14px"} color={"gray"}>
                ლექტორი: {item[0].author}
              </Typography>
              <Box
                p={0.1}
                pl={1}
                pr={1}
                bgcolor={MainColor}
                maxWidth={"30px"}
                textAlign={"center"}
                display={"flex"}
                justifyContent={"center"}
              >
                <Typography
                  fontSize={"13px"}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  {item[0].price}ლ
                </Typography>
              </Box>
            </Stack>
            <Typography fontSize={"14px"} color={"gray"}>
              {item[0].description}
            </Typography>
            <Stack direction={"row"} gap={"10px"}>
              <Link to={`/less/${item[0].id}`}>
                <ChooseButton
                  sx={{
                    padding: "0 10px",
                    fontSize: "13px",
                    borderRadius: "20px",
                    background: "white",
                    color: MainColor,
                    "&:hover": {
                      background: MainColor,
                      color: "white",
                    },
                  }}
                >
                  ვრცლად...
                </ChooseButton>
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default LessonsComponent;
