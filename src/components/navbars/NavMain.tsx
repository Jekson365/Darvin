import { Box, Container, Stack, Typography } from '@mui/material'
import LOGO from '../../Logo.png'

const NavMain = () => {
    return (
        <>
            <Container
                sx={{
                    width: "380px",
                    height: "100vh",
                    position: "fixed",
                    top: "0",
                    background: "white",
                }}
            >
                <Box
                    pl={2.5}
                    pt={5.6}
                >
                    <Stack
                        direction={'column'}
                        alignItems={'flex-start'}
                    >
                        <img
                            
                            width={'110px'}
                            src={LOGO}
                        />
                        <Stack
                            mt={8}
                            gap={"40px"}
                        >
                            <NavItemText title="მთავარი" icon={"https://assets.website-files.com/5ec03c2c67cf4824e3d00674/5ec06fd41b451117a43bf866_Home.svg"} />
                            <NavItemText title="ლექციები" icon={"https://assets.website-files.com/5ec03c2c67cf4824e3d00674/5ec16d200962178631a23d61_Document.svg"} />
                            <NavItemText title="ლექტორები" icon={"https://assets.website-files.com/5ec03c2c67cf4824e3d00674/5ec0767df6793ec663e7022f_Calendar.svg"} />
                            <NavItemText title="სილაბუსი" icon={"https://assets.website-files.com/5ec03c2c67cf4824e3d00674/5ec16f2bf2396c56c2e0b35d_Discovery.svg"} />
                        </Stack>
                    </Stack>
                </Box>
            </Container>
        </>
    )
}

export function NavItemText({ title, icon }: { title: String, icon: String }) {
    return (
        <>
            <Box
                sx={{
                    display: "flex", alignItems: "center", gap: "10px",
                    opacity: "0.6", cursor: "pointer", "&:hover": { opacity: "1" }
                }}
            >
                <img
                    width={'22px'}
                    src={icon.toString()}
                />
                <Typography
                    sx={{ fontFamily: "'Noto Sans',sans-serif", color: '#000000', fontWeight: 'bold' }}
                >{title}</Typography>
            </Box>
        </>
    )
}

export default NavMain