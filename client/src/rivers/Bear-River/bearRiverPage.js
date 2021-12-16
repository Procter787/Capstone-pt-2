// import { render } from "react-dom";
import React from "react";
// import Fish from "../../../Fish";
import Fishlist from "../../components/Fish/Fishlist"
import BearFlylist from "./bearFlyList";
import useStyles from '../../components/tables/table'
import BearRiver from '../../Images/riverPics/BearRiver2.jpeg'


export default function PageInfo() {
  const fishlist = Fishlist();
  const bearFlyList = BearFlylist();
  const classes = useStyles();

  return(
    <>
    <div>
    <h2 className={classes.header}>Bear River</h2>
      <div >
        <img src={BearRiver} alt=''className={classes.imageCenter}/>
      </div>
    <p className={classes.paragraph}>
    The Bear River is the largest tributary of the Great Salt Lake, draining a mountainous area and farming valleys northeast of the lake and southeast of the Snake River Plain. It flows through southwestern Wyoming, southeastern Idaho, and northern Utah, in the United States. Approximately 350 miles (560 km) long it is the longest river in North America that does not ultimately reach the sea.
    </p>
  </div>

  <div>
    {fishlist}
  </div>
  
  <div>
    {bearFlyList}
  </div>
  </>
  

  );
 
}