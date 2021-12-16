import React from "react";
import  Fish  from "./Fish";
import useStyles from "../tables/table"


export default function Fistlist() {
    const classes = useStyles();
    const fishies = [
        {
            id: 1,
            fType: "Rainbow",
            imageUrl: "/fishImages/fishPics/rainbow.jpg"
        },
        {
            id: 2,
            fType: "Brown",
            imageUrl: "/fishImages/fishPics/browntrout.jpg"
        },
        {
            id:3,
            fType: "Brook",
            imageUrl: "/fishImages/fishPics/brook.jpg"
        },
        {
            id:3,
            fType: "Cutthroat",
            imageUrl: "/fishImages/fishPics/cutthroat.jpg"
        },
        {
            id:3,
            fType: "Mountain Whitefish",
            imageUrl: "/fishImages/fishPics/whitefish.jpg"
        }
    ];

    return (
        <div className="container" id="fishtable">
            <table className={`${classes.tablecenter} ${classes.tableMargin}`}>
                <thead className={classes.tablehead}>
                    <tr>
                        <th>Name</th>
                        <th></th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        fishies.map(fish => (
                            <Fish fish={fish} key={fish.id} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}