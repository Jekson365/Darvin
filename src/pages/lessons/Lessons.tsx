import { CardActionArea, Grid, Grow, Paper } from "@mui/material";
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
                <Grow in={true} timeout={1000}>
                  <Paper>
                    <CardActionArea>
                      <LessonsComponent item={each} />
                    </CardActionArea>
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
