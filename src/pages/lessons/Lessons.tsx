import { Grid, } from "@mui/material";
import LessonsComponent from "./LessonsComponent";
import { Lects } from "../lectors/lectros.base/Lecturer";
import { useState } from "react";

const Lessons = () => {
  const [arr] = useState(Lects.map((e) => e.rooms))
  return (
    <>
      <Grid container columns={12} rowSpacing={2}>
        {arr.filter((e) => e.length != 0).map((each) => {
          return (
            <>
              <Grid xs={12} item>
                <LessonsComponent item={each} />
              </Grid>
            </>
          )
        })}
      </Grid>
    </>
  );
};

export default Lessons;
