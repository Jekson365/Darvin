import { Grid, MenuItem, CardMedia, TextField, Typography } from "@mui/material"
import { CustomInput, CustomSelect, CustomField, CustomComplete, MainColor } from "../../../styles/Styles"
import { ChooseButton } from "../Registration"
import { useEffect, useState } from "react"

const LectForm = () => {
    const [status, setStatus] = useState<string>("აბიტურიენტი")
    const [age, setAge] = useState<number>(0)
    const [subjects, setSubjects] = useState<string[]>(['მათემატიკა', 'თარჯიმანი', 'პროგრამირება', "ქართული", "ინგლისური", "ესპანური", "გერმანული", "იტალიუერი", "იაპონური", "ჩინური", "ისტორია"])
    const [education, setEducation] = useState<string>("ბაკალავრი")

    useEffect(()=> {
        console.log(age);
        console.log(setSubjects);
    },[])

    // handle status select field
    const handleStatusField = (event: any) => {
        setStatus(event.target.value as string)
    }
    const handleEducationField = (event: any) => {
        setEducation(event.target.value as string)
    }
    return (
        <>
            <Typography
                variant="h5"
                color={MainColor}
                mb={3}
            >მასწავლებელი</Typography>
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
                        placeholder='აბიტურიენტი'
                        onChange={handleStatusField}
                    >
                        <MenuItem value={'სტუდენტი'}>სტუდენტი</MenuItem>
                        <MenuItem value={'მოსწავლე'}>სკოლის მოსწავლე</MenuItem>
                        <MenuItem value={'ემიგრანტი'}>ემიგრანტი</MenuItem>
                        <MenuItem value={'დასაქმებული'}>დასაქმებული</MenuItem>
                        <MenuItem value={'დაუსაქმებელი'}>დაუსაქმებელი</MenuItem>
                        <MenuItem value={'მასწავლებელი'}>მასწავლებელი</MenuItem>
                        <MenuItem value={'ლექტორი'}>ლექტორი</MenuItem>
                        <MenuItem value={'სხვა'}>სხვა</MenuItem>
                    </CustomSelect>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomInput placeholder='ასაკი' onChange={(e) => setAge(Number(e.target.value))} />
                </Grid>
                <Grid item xs={12} md={12}>
                    <CustomComplete
                        multiple
                        id="tags-standard"
                        options={subjects}
                        defaultValue={[subjects[0]]}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="პროფესია"
                            />
                        )}
                    />
                </Grid>

                {/* pricing */}
                <Grid item xs={12} md={6}>
                    <CustomSelect
                        value={education || "განათლება"}
                        placeholder='აბიტურიენტი'
                        onChange={handleEducationField}
                    >
                        <MenuItem value={'დაწყებითი'}>დაწყებითი</MenuItem>
                        <MenuItem value={'ბაკალავრი'}>ბაკალავრი</MenuItem>
                        <MenuItem value={'მაგისტრი'}>მაგისტრი</MenuItem>
                        <MenuItem value={'დოქტორი'}>დოქტორი</MenuItem>
                        <MenuItem value={'პროფესორი'}>პროფესორი</MenuItem>
                        <MenuItem value={'თვითნასწავლი'}>თვითნასწავლი</MenuItem>
                    </CustomSelect>
                </Grid>

                <Grid item xs={12} md={6}>
                    <CustomInput placeholder='ლექციების რაოდენობა' onChange={(e) => setAge(Number(e.target.value))} />
                </Grid>

                <Grid item xs={12} md={12}>
                    <CustomInput placeholder='თქვენი ლექციების მოკლე აღწერა' onChange={(e) => setAge(Number(e.target.value))} />
                </Grid>
                {/* pricing */}

                {/* image and description input */}
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
                {/* image and description input */}
                <Grid container item>
                    <Grid item xs={12} alignItems={'flex-end'} display={'flex'} justifyContent={'flex-end'}>
                        <ChooseButton sx={{ fontSize: "15px", padding: "10px 10px" }}>რეგისტრაცია</ChooseButton>
                    </Grid>
                </Grid>
            </Grid >
        </>
    )
}

export default LectForm