import { Box, Grid, Stack, Typography } from "@mui/material"
import { MainColor } from "../../styles/Styles"

const Sylabus = ({ SylByWeek }: { SylByWeek: any }) => {
    return (
        <>
            <Box mt={5}>

                <Typography
                    variant="h5"
                    color={MainColor}
                >სილაბუსი</Typography>
                <Grid
                    container
                    columns={12}
                    spacing={5}
                    mt={2}
                    display={'flex'}
                    flexWrap={'wrap'}
                >
                    {SylByWeek && SylByWeek.week.map((each: any, index: number) => {
                        return (
                            <>
                                <Grid item
                                    xs={12}
                                    sm={6}
                                    md={4}

                                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                                >
                                    <Box
                                        bgcolor={MainColor}
                                        height={'230px'}
                                        // width={'230px'}
                                        sx={{"&:hover":{transform:"scale(1.1)"},cursor:"pointer"}}
                                        borderRadius={"5px"}
                                        p={[2, 2]}

                                    >
                                        <Stack
                                            direction={'column'}
                                            alignItems={'flex-start'}
                                            gap={'20px'}

                                        >
                                            <Typography
                                                bgcolor={'white'}
                                                fontSize={'16px'}
                                                color={MainColor}
                                                pl={1}
                                                pr={1}
                                                borderRadius={20}
                                            >{index + 1} კვირა</Typography>
                                            <Typography
                                                sx={{ fontSize: "15px", color: "white" }}
                                            >
                                                ამ კვირაში შევისწავლით ყველაფერს რაც უკავშირედბეა ანატომიას,გენეტიკას და სხვა მრავალს
                                                ნიჭიერი მწერალი არასდროს ვყოფილვარ აზრზე არ ვარ აქ რას ვწერ
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
            </Box>
        </>
    )
}

export default Sylabus