import { Box, Stack, Typography } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import { MainColor } from "../../styles/Styles";


const Benefits = () => {
    const learningPlane = [
        "ხატვა-წერას",
        "მეგას პროგრამას",
        "პროგრამირებას",
        "სალარო აპარატების დაყენეას",
    ]
    return (
        <>
            <>
                <Box 
                    data-aos='fade-down'
                    data-aos-duration='1000'
                sx={{
                    border: "1px solid rgba(0,0,0,0.1)",
                    maxWidth: { xs: "100%", md: "45%" },
                    boxShadow: "0 0 5px 0.1px rgba(0,0,0,0.1)"
                }} mt={5} p={3}>
                    <Stack
                        direction={'column'}
                        gap={'15px'}
                        alignItems={'flex-start'}
                    >
                        {learningPlane.map((e) => {
                            return (
                                <>
                                    <Typography color={'gray'}>
                                        <CheckIcon sx={{ color: MainColor, transform: "translate(-5px,5px)" }} />
                                        {e}
                                    </Typography>
                                </>
                            )
                        })}
                    </Stack>
                </Box>
            </>
        </>
    )
}

export default Benefits