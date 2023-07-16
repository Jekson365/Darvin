import { CardActionArea, Grid, Grow, Paper } from "@mui/material";
import LessonsComponent from "./LessonsComponent";
import { Lects, Lecturer } from "../lectors/lectros.base/Lecturer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Lessons = () => {
  return (
    <>
      <Grid container columns={12} rowSpacing={2}>
        {Lects.filter((each: any) => { return each.rooms != false }).map((each: Lecturer) => {
          return (
            <>
              <Grid xs={12} item>
                <Link to={`/lect/${each.id}`}>
                  <LessonsComponent item={each.rooms} />
                </Link>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default Lessons;
