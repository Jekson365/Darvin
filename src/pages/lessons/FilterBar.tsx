import { Box, Grid, Radio, RadioGroup, Rating, Slider, Stack, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import Search from "../../components/Search"
import { MainColor } from "../../styles/Styles"
import { useEffect, useState } from "react"

const useStyles = makeStyles({
    root: {
        color: MainColor + " !important"
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: `${MainColor} !important`,
        border: `1px solid ${MainColor}`,
        marginTop: 0,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})

const FilterBar = () => {
    const subs = ['მათემატიკა', "ქართული", "ინგლისური", "ფერწერა", "ხატვა", "პროგრამირება"]

    const [value1, setValue1] = useState([0, 300])

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        console.log(event)
        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1]), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0])]);
        }
    };

    const [star, setStar] = useState<number>(0)

    const handleStar = (star: any) => {
        setStar(star.target.value)
    }

    useEffect(() => {
        console.log(star)
    }, [star])



    const classes = useStyles();
    // const radioClass = radioStyles();
    return (
        <>
            <Box sx={{ position: { xs: "static", md: "sticky", top: "20px" },paddingLeft:{xs:"0px",md:"10px"}}} >
                <Grid container columns={12}>
                    <Stack gap={'30px'}>

                        <Search />
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            gap={'5px'}
                            flexWrap={'wrap'}
                        >
                            {subs.map((wrd: string) => {
                                return (
                                    <>
                                        <Box
                                            p={1}
                                            pl={1.5}
                                            pr={1.5}
                                            
                                            fontSize={'11px'}
                                            color={'white'}
                                            borderRadius={"20px"}
                                            bgcolor={MainColor}
                                        >
                                            {wrd}
                                        </Box>
                                    </>
                                )
                            })}
                        </Stack>
                        <Stack direction={'column'} alignItems={'center'} width={'90%'} margin={'0 auto'}>
                            <Typography
                                fontSize={'15px'}
                                color={MainColor}
                            >ფასის ფილტრი</Typography>
                            <Stack
                                flexDirection={'row'}
                                alignItems={'center'}
                                width={'100%'}
                                justifyContent={'space-between'}
                            >
                                <Typography
                                    color={MainColor}
                                    fontSize={'18px'}
                                >{value1[0]}₾</Typography>
                                <Typography
                                    color={MainColor}
                                    fontSize={'18px'}
                                >{value1[1]}₾</Typography>
                            </Stack>
                            <Slider
                                min={0}
                                max={300}
                                classes={{
                                    root: classes.root,
                                    thumb: classes.thumb,
                                    active: classes.active,
                                    valueLabel: classes.valueLabel,
                                    track: classes.track,
                                    rail: classes.rail,
                                }}
                                aria-label="Temperature"
                                defaultValue={value1}
                                onChange={handleChange1}
                            />
                        </Stack>
                    </Stack>
                    {/* stars  */}
                    <Stack
                        direction={'column'}
                        gap={'0px'}
                    >
                        <RadioGroup>

                            <Stack direction={'row'} alignItems={'center'}>
                                <Rating defaultValue={5}
                                    readOnly

                                    sx={{
                                        "& .MuiRating-iconFilled": {
                                            color: MainColor
                                        },
                                    }}
                                />
                                <Radio
                                    onChange={handleStar}
                                    value="5"
                                    name="radio-buttons"

                                />
                                5 ვარსკვლავი
                            </Stack>
                            <Stack direction={'row'} alignItems={'center'}>
                                <Rating defaultValue={4}
                                    readOnly
                                    sx={{
                                        "& .MuiRating-iconFilled": {
                                            color: MainColor
                                        },
                                    }}

                                />
                                <Radio
                                    onChange={handleStar}
                                    value="4"
                                    name="radio-buttons"

                                />
                                4 ვარსკვლავი
                            </Stack>
                            <Stack direction={'row'} alignItems={'center'}>
                                <Rating defaultValue={3}
                                    readOnly

                                    sx={{
                                        "& .MuiRating-iconFilled": {
                                            color: MainColor
                                        },
                                    }}
                                />
                                <Radio
                                    onChange={handleStar}
                                    value="3"
                                    name="radio-buttons"

                                />
                                3 ვარსკვლავი
                            </Stack>
                            <Stack direction={'row'} alignItems={'center'}>
                                <Rating defaultValue={2}
                                    readOnly
                                    sx={{
                                        "& .MuiRating-iconFilled": {
                                            color: MainColor
                                        },
                                    }}

                                />
                                <Radio
                                    onChange={handleStar}
                                    value="2"
                                    name="radio-buttons"

                                />
                                2 ვარსკვლავი
                            </Stack>
                            <Stack direction={'row'} alignItems={'center'}>
                                <Rating defaultValue={1}
                                    readOnly
                                    sx={{
                                        "& .MuiRating-iconFilled": {
                                            color: MainColor
                                        },
                                    }}

                                />
                                <Radio
                                    onChange={handleStar}
                                    value="1"
                                    name="radio-buttons"

                                />
                                1 ვარსკვლავი
                            </Stack>
                        </RadioGroup>
                    </Stack>
                    {/* stars  */}
                </Grid>
            </Box >
        </>
    )
}

export default FilterBar