import { Box, Stack, Typography } from "@mui/material"
import { MainColor } from "../styles/Styles"

const Filter = () => {
    const arr = [
        "ქართული",
        "ინგლისური",
        "მათემატიკა",
        "ფრანგული"
    ]
    return (
        <>
            <Stack direction={'row'} gap={'10px'} mb={5} width={'100%'} justifyContent={'end'}>
                {arr.map((each) => {
                    return (
                        <>
                            <Box
                                bgcolor={MainColor}
                                p={1}
                                sx={{ cursor: "pointer" }}
                                borderRadius={"30px"}
                            >
                                <Typography

                                    fontSize={'15px'}
                                    color={'white'}
                                >{each}</Typography>
                            </Box>
                        </>
                    )
                })}
            </Stack>
        </>
    )
}

export default Filter