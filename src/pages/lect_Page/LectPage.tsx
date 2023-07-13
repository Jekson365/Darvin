import { Box, CardMedia, Grid, Rating, Stack, Typography } from "@mui/material"
import { MainColor } from "../../styles/Styles"
import { ChooseButton } from "../auth/Registration"
import { useState } from 'react'
import { Lects, Lecturer } from "../lectors/lectros.base/Lecturer"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
import Twitter from "@mui/icons-material/Twitter"
import Slider from "./story/Slider"
import Titles from "./Titles"


const LectPage = () => {
    const currentId = window.location.href.split("/")[4]
    const [data] = useState(Lects.filter((each: Lecturer) => each.id == Number(currentId))[0])

    return (
        <>
            <Grid container columns={12}>
                <Grid item xs={12} md={8} data-aos='fade-right'>
                    <Stack
                        gap={'20px'}
                        direction={'column'}
                        alignItems={'flex-start'}>
                        <Box width={'100%'} height={'500px'}>
                            <CardMedia
                                width={'100%'}
                                height={'100%'}
                                sx={{ objectFit: "cover" }}
                                component={'img'}
                                src={data.img.toString()}
                            />
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4} data-aos='fade-left'>
                    <Box sx={{ paddingLeft: { xs: "0px", md: "30px" } }}>
                        <Stack
                            gap={'25px'}
                            direction={'column'} alignItems={'flex-start'}>
                            <Typography
                                variant="h4"
                                color={MainColor}
                            >
                                {data.name} {data.surname}
                            </Typography>
                            <Stack direction={'row'} flexWrap={'wrap'} gap={'5px'}>
                                {data.subject.map((e: String) => {
                                    return (
                                        <>
                                            <Box
                                                fontSize={'13px'}
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
                            <Stack direction={'row'} alignItems={'center'} gap={'10px'}>

                                <Rating
                                    value={4}
                                    sx={{
                                        "& .MuiRating-iconFilled": {
                                            color: MainColor
                                        },
                                    }}
                                />
                                <Typography color={'gray'} fontSize={'13px'}>115 მოსწავლე</Typography>
                            </Stack>
                            <Typography
                                fontSize={'15px'}
                                color={'gray'}
                            >
                                {data.desc}
                            </Typography>
                            <Stack
                                direction={'column'}
                                alignItems={'flex-start'}
                            >
                                {data.socialMedia.map((e) => {
                                    return (
                                        <>
                                            <SocMedia title={e} />
                                        </>
                                    )
                                })}
                            </Stack>
                            <ChooseButton sx={{ width: "100%" }}>დაჯავშნა</ChooseButton>
                        </Stack>
                    </Box>
                </Grid>
            </Grid >
            <Titles data={data} />
            <Typography
                variant="h5"
                mb={3}
                mt={3}
                color={MainColor}
            >გალერეა</Typography>
            <Slider />
        </>
    )
}

function SocMedia({ title }: { title: String }) {
    return (
        <>
            <Stack direction={'row'} alignItems={'center'} gap={'10px'} mt={1}>
                <Box
                    p={1}
                    sx={{
                        border: `0.5px solid ${MainColor}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                            borderRadius: "20px"
                        }
                    }}
                >
                    <Typography
                        sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "5px", color: MainColor }}
                    >
                        {title == 'facebook.com' ? <FacebookIcon /> : title == 'twitter.com' ? <Twitter /> : title == "instagram.com" ? <InstagramIcon /> : ""}
                    </Typography>
                </Box>
                <Typography
                    sx={{ color: MainColor }}
                >{title}</Typography>
            </Stack>
        </>
    )
}

export default LectPage