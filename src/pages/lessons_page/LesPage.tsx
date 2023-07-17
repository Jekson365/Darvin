import { useEffect, useState } from "react"
import { Lects } from "../lectors/lectros.base/Lecturer"
import comp2 from '../../figma_comps/dasda.svg'
import { Box, CardMedia, Grid, Rating, Stack, Typography } from "@mui/material"
import { ButtonDetailed, MainColor } from "../../styles/Styles"
import { Link } from "react-router-dom"
import Benefits from "./Benefits"
import Sylabus from "./Sylabus"


const LesPage = () => {
    const id = window.location.href.split("/")[4]

    const [arr] = useState<any>(Lects.map((e) => e.rooms).filter((s) => s.length != 0))

    const [currentItem] = useState<any>([].concat(...arr))

    const [final, setFinal] = useState<any>()

    useEffect(() => {
        setFinal(currentItem.filter((e: any) => e.id == Number(id))[0])
    }, [])



    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "300px",
                    background: MainColor,
                    position: "relative",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                }}
                data-aos='fade-down'
                data-aos-duration="1000"
            >

                <Stack sx={{ width: { xs: "100%", md: "50%" }, padding: { xs: "0px 20px", md: "0 20px" } }} gap={'10px'}>
                    <Typography
                        variant="h4"
                        color={'white'}
                    >{final && final.title} - <Rating value={final && final.stars} readOnly sx={{
                        "& .MuiRating-iconFilled": {
                            color: 'white',
                        },

                    }} /></Typography>
                    <Typography
                        color={'white'}
                    >{final && final.description}</Typography>
                </Stack>
                <CardMedia
                    sx={{
                        position: "absolute",
                        right: "0px",
                        bottom: "-2px",
                        width: "500px",
                        height: "250px",
                        display: { xs: "none", md: "block" }
                    }}
                    component={'img'}
                    src={comp2}
                >
                </CardMedia>
                <Box
                    data-aos='zoom-in'
                    data-aos-duration='1000'
                    sx={{
                        display: { xs: "none", md: "block" },
                        position: { xs: "static", md: "absolute" },
                        right: { xs: "50%", md: "100px" },
                        bottom: "-218px",
                        borderRadius: "30px",
                        maxWidth: { xs: "200px", md: "300px" },
                        width: "100%",
                        height: { xs: "250px", md: "452px" },
                        background: MainColor,
                    }}
                >
                    <Stack direction={'column'} alignItems={'flex-start'} p={1.5} overflow={'hidden'}>
                        <CardMedia
                            sx={{ borderRadius: "25px" }}
                            component={'img'}
                            src={final && final.img}
                        />
                        <Stack mt={1} gap={'5px'} direction={'column'} alignItems={'flex-start'}>
                            <Typography
                                variant="h5"
                                color={'white'}
                            >{final && final.price}₾</Typography>
                            <Typography
                                fontSize={'17px'}
                                color={'white'}
                            >
                                ლექტორი - <Typography component={'span'} sx={{ textDecoration: "underline" }}>
                                    <Link to={`/lect/${final && final.id}`} style={{ "color": "white" }}>
                                        {final && final.author}
                                    </Link>
                                </Typography>
                            </Typography>
                            <Typography
                                fontSize={'17px'}
                                color={'white'}
                            >
                                ხანგრძლივობა - <Typography component={'span'}>
                                    {final && final.duration} თვე
                                </Typography>
                            </Typography>
                            <Typography
                                fontSize={'17px'}
                                color={'white'}
                            >ლექციების რაოდენობა
                                <Typography component={'span'}>
                                    - {final && final.totalMeet}
                                </Typography>
                            </Typography>
                        </Stack>
                        <ButtonDetailed sx={{ width: "100%", background: "white", color: MainColor, padding: "10px 0", borderRadius: "5px", marginTop: "8px", "&:hover": { color: "white", outline: "1px solid white" } }}>დაჯავშნა</ButtonDetailed>
                        <ButtonDetailed sx={{ width: "100%", background: "white", color: MainColor, padding: "10px 0", borderRadius: "5px", marginTop: "8px", "&:hover": { color: "white", outline: "1px solid white" } }}>კალათაში დამატება</ButtonDetailed>
                    </Stack>
                </Box>
            </Box>
            <Stack direction={'column'}>
                {/* <Typography variant="h5">{currentLess}</Typography> */}
            </Stack>
            <Box
                sx={{
                    display: { xs: "block", md: "none" },
                    width: "100%",
                    height: "fit-content",
                    marginTop: "30px",
                    background: MainColor,
                    position: "relative",
                    borderRadius: "20px",
                    justifyContent: "center"
                }}
            >
                <Grid container columns={12} p={3} >
                    <Grid item xs={12}>
                        <CardMedia
                            sx={{ borderRadius: "10px" }}
                            component={'img'}
                            src={final && final.img}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Stack mt={1} gap={'5px'} direction={'column'} alignItems={'flex-start'}>
                            <Typography
                                variant="h5"
                                color={'white'}
                            >{final && final.price}₾</Typography>
                            <Typography
                                fontSize={'17px'}
                                color={'white'}
                            >
                                ლექტორი - <Typography component={'span'} sx={{ textDecoration: "underline" }}>
                                    <Link to={`/lect/${final && final.id}`} style={{ "color": "white" }}>
                                        {final && final.author}
                                    </Link>
                                </Typography>
                            </Typography>
                            <Typography
                                fontSize={'17px'}
                                color={'white'}
                            >
                                ხანგრძლივობა - <Typography component={'span'}>
                                    {final && final.duration} თვე
                                </Typography>
                            </Typography>
                            <Typography
                                fontSize={'17px'}
                                color={'white'}
                            >ლექციების რაოდენობა
                                <Typography component={'span'}>
                                    - {final && final.totalMeet}
                                </Typography>
                            </Typography>
                        </Stack>
                        <ButtonDetailed sx={{ width: "100%", background: "white", color: MainColor, padding: "10px 0", borderRadius: "5px", marginTop: "8px", "&:hover": { color: "white", outline: "1px solid white" } }}>დაჯავშნა</ButtonDetailed>
                        <ButtonDetailed sx={{ width: "100%", background: "white", color: MainColor, padding: "10px 0", borderRadius: "5px", marginTop: "8px", "&:hover": { color: "white", outline: "1px solid white" } }}>კალათაში დამატება</ButtonDetailed>
                    </Grid>
                </Grid>
            </Box>
            <Benefits />
            <Sylabus />
        </>
    )
}

export default LesPage