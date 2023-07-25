import { Box, InputBase, styled } from "@mui/material"
import { MainColor } from "../styles/Styles";
import { useContext } from "react";
import { NavContext } from "../App";

const Search = () => {
    const { setSearchRes } = useContext<any>(NavContext)
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
    borderRadius: "1px",
})

export default Search