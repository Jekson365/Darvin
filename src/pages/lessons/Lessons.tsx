import { Grid, Grow, Paper } from "@mui/material";
import LessonsComponent from "./LessonsComponent";
import { Lecture, Lecutres } from "./lessons.base/LessonsBase";

const Lessons = () => {
  return (
    <>
      <Grid container columns={12} rowSpacing={2}>
        {Lecutres.map((each: Lecture) => {
          return (
            <>
              <Grid xs={12} item>
                <Grow in={true}>
                  <Paper>
                    <LessonsComponent item={each} />
                  </Paper>
                </Grow>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default Lessons;
