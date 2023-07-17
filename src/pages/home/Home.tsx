import { CardMedia, Grid, Stack, Typography } from "@mui/material"

import Sec1 from '../../illustrations/Freelance-Developer.svg'
import Sec2 from '../../illustrations/Girl-Workplace.svg'
import Sec3 from '../../illustrations/Pomodoro-technique.svg'
import { ButtonDetailed } from "../../styles/Styles"
import { Link } from "react-router-dom"


const Home = () => {
    const benefits = [
        {
            img: Sec1,
            desc: "პლატფორმა საშუალებას გაძლევს იმუშაო ან ისწავლო სახლიდან გაუსვლელად. აიყვანო ლექტორი ან თავად გახდე სტუდენტი.",
            nm: "სახლიდან გაუსვლელად"
        },
        {
            img: Sec2,
            nm: "სილაბუსი",
            desc: "პლატფორმას გააჩნია სილაბუსი,რომელიც საშუალებას მოგცემთ მართოთ თქვენი დავალებები, სასწავლო მასალები და შეფასების სისტემები",

        },
        {
            img: Sec3,
            nm: "სერტიფიკატი",
            desc: "კურსის დამთავრების შემდეგ შესაძლებლობა გაქვს აიღო 'დარვინის' სერტიფიკატი"
        },
    ]
    return (
        <>
            <Grid container columns={12}>

                {benefits.map((each, index) => {
                    return (
                        <>
                            <Grid container item columns={12}
                                height={'100%'}
                                minHeight={'70vh'}
                                display={'flex'}
                                alignItems={'center'}
                                flexDirection={index % 2 == 0 ? "row" : "row-reverse"}
                            >
                                <Grid item xs={12} md={6}>
                                    <Stack
                                        pr={3}
                                        direction={'column'} alignItems={'flex-start'} gap={'20px'}>
                                        <Typography
                                            variant="h4"
                                            fontWeight={'bold'}
                                            color={'black'}>{each.nm}</Typography>
                                        <Typography
                                            variant="h6"
                                            fontSize={'17px'}
                                        >{each.desc}</Typography>
                                        <Link to={"/reg"}>
                                            <ButtonDetailed
                                                sx={{ padding: "10px 20px", borderRadius: "5px" }}
                                            >რეგისტრაცია</ButtonDetailed>
                                        </Link>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardMedia
                                        className="inf-an"
                                        component={'img'}
                                        src={each.img}
                                    />
                                </Grid>
                            </Grid>
                        </>
                    )
                })}
            </Grid>
        </>
    )
}

export default Home