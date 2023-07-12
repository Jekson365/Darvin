import { Box, Container, Stack } from "@mui/material"
import { NavItemText } from "./NavMain"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import LOGO from '../../Logo.png'

const NavMobile = () => {
    const [nav, setNav] = useState<boolean>(false)
    return (
        <>
            <Container
                maxWidth={false}
                sx={{ padding: "0px !important" }}
            >
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}
                    sx={{ background: "#ededed" }}
                    p={2} pl={3} zIndex={101}>
                    <img
                        width={'110px'}
                        src={LOGO}
                    />
                    <Box
                        pt={0.6}
                        pr={3}
                        onClick={() => setNav(!nav)}
                    >
                        <MenuIcon sx={{ fontSize: "19px", color: "gray", cursor: "pointer" }} />
                    </Box>
                </Stack>
                <Box
                    className='dasdaca'
                    zIndex={100}
                    sx={{
                        position: "absolute",
                        right: "0px",
                        top: nav ? '80px' : "-340px",
                        width: "100%",
                        background: "white",
                        padding: "20px 0px",
                    }}
                >
                    <Stack
                        direction={'column'}
                        alignItems={'flex-start'}
                        pl={3}
                    >
                        <Stack
                            gap={"40px"}
                        >
                            <NavItemText location={''} title="მთავარი" icon={"https://assets.website-files.com/5ec03c2c67cf4824e3d00674/5ec06fd41b451117a43bf866_Home.svg"} />
                            <NavItemText location={'lessons'} title="ლექციები" icon={"https://assets.website-files.com/5ec03c2c67cf4824e3d00674/5ec16d200962178631a23d61_Document.svg"} />
                            <NavItemText location={'lectors'} title="ლექტორები" icon={"https://assets.website-files.com/5ec03c2c67cf4824e3d00674/5ec0767df6793ec663e7022f_Calendar.svg"} />
                            <NavItemText location={'sylabus'} title="სილაბუსი" icon={"https://assets.website-files.com/5ec03c2c67cf4824e3d00674/5ec16f2bf2396c56c2e0b35d_Discovery.svg"} />
                            <NavItemText location={'blog'} title="ბლოგი" icon={"https://assets.website-files.com/5ec03c2c67cf4824e3d00674/5ec16f2bf2396c56c2e0b35d_Discovery.svg"} />
                        </Stack>
                    </Stack>
                </Box>
            </Container>
        </>
    )
}

export default NavMobile