import { Box, InputBase, Stack, styled } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";

const Search = () => {
    const [sth, setSearch] = useState<boolean>(false)
    return (
        <>
            <Box
                width={'100%'}
            >
            <Stack
                direction={'row'}
                alignItems={'center'}
                position={'relative'}
            >
                <SearchBar placeholder="ძებნა..." sx={{ width: `${!sth ? '95%' : "0%"}`, opacity: `${!sth ? '1' : "0"}` }} />
                <Box
                    sx={{ cursor: "pointer", position: "absolute", right: "0" }}
                    onClick={() => setSearch(!sth)}>
                    {sth ? <SearchIcon sx={{ fontSize: "40px" }} /> : <ClearIcon sx={{ fontSize: "40px" }} />}
                </Box>
            </Stack>
        </Box >
        </>
    )
}

export const SearchBar = styled(InputBase)({
    background: "white",
    padding: "5px 10px",
    transition: "1s",
})

export default Search