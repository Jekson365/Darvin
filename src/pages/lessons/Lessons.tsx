import {Grid, } from "@mui/material";
import LessonsComponent, { Loading } from "./LessonsComponent";
import { Lects } from "../lectors/lectros.base/Lecturer";
import { useState, useEffect, useContext } from "react";
import { NavContext } from "../../App";
import FilterBar from "./FilterBar";

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
  }, [searchRes])

  return (
    <>
      <Grid container columns={12} rowSpacing={3}
        sx={{flexDirection:{xs:"column-reverse",sm:"row"}}}
      >
        {!isLoading ? (
          <>
            < Grid item xs={12} md={9} container spacing={3}>
              {arr.map((each: any) => {
                return ( 
                  <>
                    <Grid item xs={12} sm={6} container spacing={2}>
                      {!isLoading ? <LessonsComponent item={each} /> : <Loading />}
                    </Grid>
                  </>
                )
              })}
            </Grid>
            <Grid item xs={12} md={3}>
              <FilterBar />
            </Grid>
          </>
        )
          : <Loading />}
      </Grid >
    </>
  );
};

export default Lessons;
