import { Box, Grid, InputBase, styled } from "@mui/material"
import { ButtonDetailed, MainColor } from "../styles/Styles";
import { useContext, useEffect } from "react";
import { NavContext } from "../App";

const Search = () => {
    const { setSearchRes, searchRes } = useContext<any>(NavContext)
    return (
        <>
            <Box
                width={'100%'}
                bgcolor={MainColor}
                height={'40px'}
                borderRadius={'5px'}
            >
                <SearchBar placeholder="ძებნა..." onChange={(e: any) => setSearchRes(e.target.value)} />
            </Box >
        </>
    )
}

export const SearchBar = styled(InputBase)({
    background: "white",
    padding: "5px 10px",
    width: "100%",
    transition: "1s",
    height: "40px",
    borderRadius: "5px",
})

export default Search