import { Box, CardMedia, Container, Grid, Stack, Typography, Rating } from "@mui/material"
import { Lects, Lecturer } from "./lectros.base/Lecturer"
import { ButtonDetailed, MainColor } from "../../styles/Styles"
import { Link } from "react-router-dom"


const Lectors = () => {
  return (
    <>
      <Container>
        <Grid container columns={12} rowSpacing={5} columnSpacing={5}>
          {Lects.map((each: Lecturer) => {
            const { name, surname, subject, desc, img, stars } = each
            return (
              <>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    minHeight={400}
                    bgcolor={'white'}

                    sx={{ "&:hover": { boxShadow: "0 0 40px 0.1px rgba(0,0,0,0.2)" }, cursor: "pointer" }}

                  >
                    <CardMedia
                      component={'img'}
                      src={img.toString()}
                    />
                    <Stack
                      direction={'column'}
                      mt={1}
                      p={2}
                      gap={'10px'}
                      alignItems={'flex-start'}
                    >
                      <Stack direction={'row'} flexWrap={'wrap'} gap={'5px'}>
                        {subject.slice(0, 2).map((e: String) => {
                          return (
                            <>
                              <Box
                                fontSize={'12px'}
                                p={0.5}
                                pl={1}
                                pr={1}
                                borderRadius={10}
                                sx={{ color: 'white', background: MainColor }}
                              >{e}</Box>
                            </>
                          )
                        })}
                      </Stack>
                      <Rating
                        sx={{
                          "& .MuiRating-iconFilled": {
                            color: MainColor
                          },
                        }}
                        color={MainColor}
                        readOnly
                        defaultValue={stars}
                      />
                      <Typography
                        variant="h5"
                      >{name} {surname}</Typography>
                      <Typography
                        color={'gray'}
                      >{desc}</Typography>

                      <Link to={`/lect/${each.id}`}>
                        <ButtonDetailed>მეტი...</ButtonDetailed>
                      </Link>
                    </Stack>
                  </Box>
                </Grid>
              </>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}



export default Lectors