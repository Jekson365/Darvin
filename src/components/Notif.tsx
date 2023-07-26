import { Box, Typography } from '@mui/material'
import { MainColor } from '../styles/Styles';


const Notif = () => {

    return (
        <>
            <Box
                sx={{
                    maxWidth: "300px",
                    padding: "10px 50px",
                    background: MainColor,
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    boxShadow: "0 0 20px 1px rgba(0,0,0,0.3)",
                    position: "sticky",
                    top: "10px",
                    left: "78%",
                    zIndex:"100000"
                }}
            >
                <Typography>
                    საიტი მუშაობს სატესტო რეჟიმში!
                </Typography>
            </Box>
        </>
    )
}

export default Notif