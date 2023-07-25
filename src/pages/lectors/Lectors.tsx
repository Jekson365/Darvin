import { Box, CardMedia, Container, Grid, Stack, Typography, Rating } from "@mui/material"
import { Lects, Lecturer } from "./lectros.base/Lecturer"
import { ButtonDetailed, MainColor } from "../../styles/Styles"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { Loading } from "../lessons/LessonsComponent"
import { NavContext } from "../../App"
import Filter from "../../components/Filter"
import Search from "../../components/Search"


const Lectors = () => {
  const [searchItems, setSearchItems] = useState(Lects)
  const [loading, setLoading] = useState<boolean>(true)
  const { searchRes }: any = useContext(NavContext)

  useEffect(() => {
    window.scrollTo(0, 0)
    const timeOut = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setLoading(false)
    }
    timeOut()
  }, [])

  useEffect(() => {
    setSearchItems(Lects.filter((e) => {
      var conctaed: string = e.name + e.surname
      return conctaed.toLowerCase().includes(searchRes.toLowerCase())
    }))
  }, [searchRes])
  if (!loading) {

    return (
      <>
        <Box mb={4}>
          <Search />
        </Box>
        <Filter />
        <Container>
          <Grid container columns={12} rowSpacing={5} columnSpacing={5}>
            {searchItems.map((each: Lecturer, index: number) => {
              const { name, surname, subject, desc, img, stars } = each
              return (
                <>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      data-aos='fade-right'
                      data-aos-duration={`${String(300 * (index + 1))}`}
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
  else {
    return (
      <>
        <Loading />
      </>
    )
  }
}



export default Lectors