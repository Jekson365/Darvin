import { Box, CardMedia, Grid, Rating, Stack, Typography } from "@mui/material";
import { Lecture } from "./lessons.base/LessonsBase";
import { MainColor, MainColorGreen } from "../../styles/Styles";
import { ChooseButton } from "../auth/Registration";

const LessonsComponent = ({ item }: { item: Lecture }) => {
  return (
    <>
      <Grid
        container
        sx={{ background: "white", display: "flex", alignItems: "center" }}
      >
        <Grid item xs={12} md={4}>
          <Box maxWidth={445} height={280} width={"100%"}>
            <CardMedia
              component={"img"}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={item.img.toString()}
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
                {item.title} -{" "}
                <Rating
                  size="small"
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: MainColor,
                    },
                  }}
                  color={MainColor}
                  readOnly
                  defaultValue={item.stars}
                />
              </Typography>
              <Typography fontSize={"14px"} color={"gray"}>
                ლექტორი: {item.author}
              </Typography>
              <Box
                p={0.1}
                pl={1}
                pr={1}
                bgcolor={MainColorGreen}
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
                  {item.price}ლ
                </Typography>
              </Box>
            </Stack>
            <Typography fontSize={"14px"} color={"gray"}>
              {item.description}
            </Typography>
            <Stack direction={"row"} gap={"10px"}>
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
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default LessonsComponent;
