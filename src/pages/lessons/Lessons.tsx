import { Box, Grid, } from "@mui/material";
import LessonsComponent, { Loading } from "./LessonsComponent";
import { Lects } from "../lectors/lectros.base/Lecturer";
import { useState, useEffect, useContext } from "react";
import { NavContext } from "../../App";
import { Lecture } from "./lessons.base/LessonsBase";

const Lessons = () => {
  const { searchRes } = useContext<any>(NavContext)
  const [arr, setArr] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0)

    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setArr(Lects.map((e) => e.rooms).filter((e) => e.length != 0))
      setIsLoading(false)
    };
    fetchData();
  }, [])
  useEffect(() => {
    console.log(arr)
    // setArr([].concat(...arr))
  }, [searchRes])

  return (
    <>
      <Grid container columns={12} rowSpacing={2}>
        {!isLoading ? (
          <>
            {arr.map((each: Lecture[], index: number) => {
              return (
                <>
                  <Grid xs={12} item>
                    <Box data-aos='fade-right'
                      data-aos-duration={`${String((index + 1) * 300)}`}
                    >
                      <LessonsComponent item={each} />
                    </Box>
                  </Grid>
                </>
              )
            })
            }
          </>
        ) : <Loading />}
      </Grid>
    </>
  );
};

export default Lessons;
