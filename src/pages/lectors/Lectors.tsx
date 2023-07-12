import { Box, CardMedia, Container, Grid, Stack, Typography, Rating } from "@mui/material"
import { Lects, Lecturer } from "./lectros.base/Lecturer"
import { ButtonDetailed, MainColor } from "../../styles/Styles"

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
                      <Box
                        fontSize={'16px'}
                        sx={{ color: MainColor, fontWeight: "bold" }}
                      >{subject}</Box>
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
                      <ButtonDetailed>მეტი...</ButtonDetailed>
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