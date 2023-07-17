import { Box, CardMedia, Grid, Rating, Stack, Typography } from "@mui/material"
import { Lecturer } from "../lectors/lectros.base/Lecturer"
import { ButtonDetailed, MainColor } from "../../styles/Styles";
import { Lecture } from "../lessons/lessons.base/LessonsBase";
import { Link } from "react-router-dom";


const Classes = ({ room }: { room: Lecturer }) => {
  return (
    <>
      <Grid container columns={12} spacing={3}>

        {room.rooms.map((each: Lecture) => {
          return (
            <>
              <Grid item xs={12} sm={6} md={4}>
                <Box bgcolor={'white'} sx={{ borderRadius: "5px", overflow: "hidden" }}>

                  <Box
                    sx={{ width: "100%", height: "300px", overflow: "hidden" }}
                  >
                    <CardMedia
                      component={'img'}
                      src={each.img.toString()}
                      width={'100%'}
                      height={'100%'}
                      sx={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Box p={1}>
                    <Stack direction={'column'} alignItems={'flex-start'} gap={'5px'}>
                      <Typography
                        variant="h6"
                        color={MainColor}
                      >{each.title}</Typography>
                      <Rating
                        value={each.stars}
                        size="small"
                        readOnly
                        sx={{
                          "& .MuiRating-iconFilled": {
                            color: MainColor,
                          },
                        }}
                      />
                      <Link to={`/less/${each.id}`}>
                        <ButtonDetailed sx={{ marginTop: "10px" }}>მეტი...</ButtonDetailed>
                      </Link>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </>
          )
        })}
      </Grid>
    </>
  )
}

export default Classes