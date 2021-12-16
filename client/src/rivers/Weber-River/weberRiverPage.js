import React from "react";
import Fishlist from "../../components/Fish/Fishlist";
import WeberFlylist from "./weberFlyList";
import useStyles from '../../components/tables/table'
import WeberRiver from '../../Images/riverPics/WeberRiver2.jpeg'



export default function PageInfo() {
  const classes = useStyles();
  const fishlist = Fishlist();
  const weberFlylist = WeberFlylist();

  return(
  <>
  <div>
    <h2 className={classes.header}>Weber River</h2>
    <img src={WeberRiver} alt='' height="auto" width="40%" alignItems="center"/>
    <p className={classes.paragraph}>
    The Weber River rises in the northwest of the Uinta Mountains, at the foot of peaks including Bald Mountain, Notch Mountain, and Mount Watson. It passes by Oakley, and fills the reservoir of Rockport Lake, then turns north, receiving the flow of major tributaries Silver Creek and at Coalville, Chalk Creek. Coalville is also at the upper end of Echo Reservoir; Below the reservoir, the river passes Henefer, turns more westerly, and then passes Morgan, where it receives East Canyon Creek. Issuing out of the mountains at Uintah at the mouth of Weber Canyon, it turns north again where it is joined by the Ogden River west of Ogden. The combined stream meanders across mostly-flat land, entering mud flats near where it empties into the Great Salt Lake, contributing about 25 percent of the total water entering the lake.
    </p>
  </div>

  <div>
    {fishlist}
  </div>
  <div>
    {weberFlylist}
  </div>
  </>
);
}

