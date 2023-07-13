import { Box, Grid, Stack, Typography } from "@mui/material"
import { Lecturer } from "../lectors/lectros.base/Lecturer"


import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ConstructionIcon from '@mui/icons-material/Construction';
import { MainColor } from "../../styles/Styles";



const Titles = ({ data }: { data: Lecturer }) => {
    return (
        <>

            <Box mt={6}>
                <Typography
                    variant="h5"
                    color={MainColor}
                    mb={3}
                >კვალიფიკაცია</Typography>
                <Grid container columns={12}>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        container
                        spacing={0}
                        display={'flex'}
                        flexDirection={'column'}>
                        <HistoryEduIcon sx={{ fontSize: "50px", color: MainColor }} />
                        <Stack direction={'column'} alignItems={'flex-start'}>
                            {data && data.certificate.map((each: any) => {
                                return (
                                    <>
                                        <Grid xs={12} md={6} item>
                                            <Typography
                                                sx={{ fontSize: "14px", color: "gray", fontWeight: "bold", whiteSpace: "nowrap" }}
                                            >- {each}</Typography>
                                        </Grid>
                                    </>
                                )
                            })}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SchoolIcon sx={{ fontSize: "50px", color: MainColor }} />
                        <Stack direction={'column'} alignItems={'flex-start'}>
                            {data && data.education.map((each: any) => {
                                return (
                                    <>
                                        <Grid xs={12} md={6} item>
                                            <Typography
                                                sx={{ fontSize: "14px", color: "gray", fontWeight: "bold", whiteSpace: "nowrap" }}
                                            >- {each}</Typography>
                                        </Grid>
                                    </>
                                )
                            })}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ConstructionIcon sx={{ fontSize: "50px", color: MainColor }} />
                        <Stack direction={'column'} alignItems={'flex-start'}>
                            {data && data.experience.map((each: any) => {
                                return (
                                    <>
                                        <Grid xs={12} md={6} item>
                                            <Typography
                                                sx={{ fontSize: "14px", color: "gray", fontWeight: "bold", whiteSpace: "nowrap" }}
                                            >- {each}</Typography>
                                        </Grid>
                                    </>
                                )
                            })}
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}


export default Titles