import React from "react";
import Fishlist from "../../components/Fish/Fishlist"
import LoganFlylist from "./loganFlyList";
import useStyles from "../../components/tables/table"
import LoganRiver from "../../Images/riverPics/LoganRiver2.jpeg"

export default function PageInfo() {
  const fishlist = Fishlist();
  const loganFlylist = LoganFlylist();
  const classes = useStyles();

  return(
    <>
  <div>
    <h2 className={classes.header}>Logan River</h2>
    <img src={LoganRiver} alt='' height="auto" width="40%" alignItems="center"/>
    <p className={classes.paragraph}> 
    The Logan River rises in the Bear River Mountains in Idaho and flows south, then southwest through Logan Canyon and the Wasatch-Cache National Forest to the city of Logan, Utah, in the Cache Valley. In this valley it joins the Little Bear River a few miles west of Logan and about 5 miles (8 km) south of where the Little Bear River joins the Bear River.
    </p>
  </div>

  <div>
    {fishlist}
  </div>
  <div>
    {loganFlylist}
  </div>

  </>
);

}