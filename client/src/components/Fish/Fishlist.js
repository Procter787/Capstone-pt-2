import React from "react";
import  Fish  from "./Fish";
import useStyles from "../tables/table"


export default function Fistlist() {
    const classes = useStyles();
    const fishies = [
        {
            id: 1,
            fType: "Rainbow",
            imageUrl: "public/fishImages/rainbow.jpg"
        },
        {
            id: 2,
            fType: "Brown",
            imageUrl: "public/fishImages/browntrout.jpg"
        },
        {
            id:3,
            fType: "Brook",
            imageUrl: "public/fishImages/brook.jpg"
        },
        {
            id:3,
            fType: "Cutthroat",
            imageUrl: "public/fishImages/cutthroat.jpg"
        },
        {
            id:3,
            fType: "Mountain Whitefish",
            imageUrl: "public/fishImages/whitefish.jpg"
        }
    ];

    return (
        <div className="container" id="fishtable">
            <table className={classes.tablecenter}>
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