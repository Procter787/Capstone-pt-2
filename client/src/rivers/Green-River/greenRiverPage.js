import React from "react";
import Fishlist from "../../components/Fish/Fishlist"
import GreenFlylist from "./greenFlyList";
import useStyles from "../../components/tables/table"
import GreenRiver from "../../Images/riverPics/GreenRiver2.jpeg"

export default function PageInfo() {
  const fishlist = Fishlist();
  const greenFlylist = GreenFlylist();
  const classes = useStyles();

  return(
  <>
  <div>
    <h2 className={classes.header}>Green River</h2>
    <div>
    <img src={GreenRiver} alt='' className={classes.imageCenter}/>
    </div>
    <p className={classes.paragraph}>
    The A Section of the Green consists of the first 7 miles below Flaming Gorge dam, beginning immediately below Flaming Gorge Dam and terminating at Little Hole. This section is largely responsible for the reputation the Green has as one of the West’s top trout fisheries. This results from the huge population of trout the river holds here numbering around 8,000 to 14,000 fish per mile and the easy access it affords. This section holds majority wild brown trout, good numbers of rainbow trout, some cutthroat trout and a rare brook trout. There are paved roads and parking areas with access at both Flaming Gorge dam and Little Hole 7 miles below with a well-maintained trail system meandering the entire length. As a result of this reputation and the easier, major access points, it is by far the most popular section of the river. However, there are ways to avoid the crowds during the busy seasons by fishing early or late in the day or floating two sections in one day.
    </p>
  </div>

  <div>
    {fishlist}
  </div>
  <div>
    {greenFlylist}
  </div>
  </>

);


}

