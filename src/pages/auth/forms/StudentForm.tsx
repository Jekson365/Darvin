import { Grid, MenuItem, CardMedia, Typography } from '@mui/material'
import { CustomField, CustomInput, CustomSelect, MainColor } from '../../../styles/Styles'
import { useEffect, useState } from 'react'
import { ChooseButton } from '../Registration'

export const StudentForm = () => {
    const [status, setStatus] = useState<string>("")
    const [age, setAge] = useState<number>(0)
    // const [subjects, setSubjects] = useState<string[]>(['მათემატიკა', 'პროგრამირება', "ქართული", "ინგლისური", "ესპანური", "გერმანული", "იტალიუერი", "იაპონური", "ჩინური", "ისტორია"])


    useEffect(()=> {
        console.log(age)
    },[])



    // handle select field

    const handleSelect = (event: any) => {
        setStatus(event.target.value as string)
    }
    return (
        <>
            <Typography
                variant="h5"
                color={MainColor}
                mb={3}
            >მოსწავლე</Typography>
            <Grid container columns={12} spacing={3}>
                <Grid item xs={12} md={6}>
                    <CustomInput placeholder='სახელი' />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomInput placeholder='გვარი' />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomSelect
                        value={status || "აბიტურიენტი"}
                        // placeholder='აბიტურიენტი'
                        onChange={handleSelect}
                    >
                        <MenuItem value={'სტუდენტი'}>სტუდენტი</MenuItem>
                        <MenuItem value={'მოსწავლე'}>სკოლის მოსწავლე</MenuItem>
                        <MenuItem value={'აბიტურიენტი'}>აბიტურიენტი</MenuItem>
                        <MenuItem value={'ემიგრანტი'}>ემიგრანტი</MenuItem>
                        <MenuItem value={'სხვა'}>სხვა</MenuItem>
                    </CustomSelect>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomInput placeholder='ასაკი' onChange={(e) => setAge(Number(e.target.value))} />
                </Grid>
                <Grid item container columns={12} spacing={5}>
                    <Grid item xs={12} md={3}>
                        <CardMedia
                            sx={{ width: "200px", height: "200px", borderRadius: "50%" }}
                            component="img"
                            src="https://img.freepik.com/free-icon/user_318-563642.jpg?w=2000"
                        />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <CustomField
                            // sx={{width:"100%",height:"100%"}}
                            multiline
                            placeholder='მოგვიყევით თქვენს შესახებ'
                            rows={7}
                        />
                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={12} alignItems={'flex-end'} display={'flex'} justifyContent={'flex-end'}>
                        <ChooseButton sx={{ fontSize: "15px", padding: "10px 10px" }}>რეგისტრაცია</ChooseButton>
                    </Grid>
                </Grid>
            </Grid >
        </>
    )
}

