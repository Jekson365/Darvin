import { styled } from "@mui/material"
import { Button, InputBase, Select, TextField, Autocomplete } from "@mui/material"

export const MainColor: string = '#9c59ff'

export const ButtonDetailed = styled(Button)({
    background: MainColor,
    color: "white",
    borderRadius: "20px",
    padding: "0 20px",
    outline: "1px solid #9c59ff",
    "&:hover": {
        outline: "1px solid #9c59ff",
        color: "#9c59ff"
    }
})


export const CustomInput = styled(InputBase)({
    background: "white",
    outline: "1px solid rgba(0,0,0,0.1)",
    width: "100%",
    padding: "10px 10px"
})



export const CustomSelect = styled(Select)({
    background: "white",
    width: "100%",
    boxShadow: "0 0 0 0 !important",
    outline: "1px solid rgba(0,0,0,0.1)",

})

export const CustomField = styled(TextField)({
    background: "white",
    width: "100%",
    boxShadow: "0 0 0 0 !important",
    outline: "1px solid rgba(0,0,0,0.1)",
    "&:hover": {

        border: "0px solid rgba(0,0,0,0.1)",
    }
})
export const CustomComplete = styled(Autocomplete)({
    background: "white",
    width: "100%",
    boxShadow: "0 0 0 0 !important",
    outline: "1px solid rgba(0,0,0,0.1)",
})
