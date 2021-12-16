import React from "react";
import Fishlist from "../../components/Fish/Fishlist";
import ProvoFlylist from "./provoFlyList";
import useStyles from "../../components/tables/table"
import ProvoRiver from "../../Images/riverPics/ProvoRiver.jpeg"

export default function PageInfo() {
  const classes = useStyles();
  const fishlist = Fishlist();
  const provoFlylist = ProvoFlylist();
  

  return(
    <>
  <div>
    <h2 className={classes.header}>Provo River</h2>
    <img src={ProvoRiver} alt='' height="auto" width="40%" alignItems="center"/>
    <p className={classes.paragraph}> 
    The two main branches of Provo River are North Fork Provo River and South Fork Provo River. The river is impounded by Jordanelle Reservoir at the north end of the Heber Valley. Deer Creek Dam further impounds the Provo River with Deer Creek Reservoir, which was built in 1941. The two branches of the Provo are split into upper, middle, and lower sections. The upper Provo originates in the high Uintas and flows into Jordanelle Reservoir. Below the dam of Jordanelle to Deer Creek Reservoir is known as the Middle Provo river. The Middle Provo is joined on the right by Snake Creek, which includes the Midway Fish Hatchery.[4] The lower section of the Provo river flows out of Deer creek Reservoir through Provo Canyon and into Utah lake.
    </p>
  </div>

  <div>
    {fishlist}
  </div>

  <div>
    {provoFlylist}
  </div>

  </>
    );
  }