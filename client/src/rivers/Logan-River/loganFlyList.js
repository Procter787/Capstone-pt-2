import React from "react";
import LoganFly from "./loganFlies";
import useStyles from "../../components/tables/table"

export default function LoganFlylist() {
    const classes = useStyles();
    const loganflies = [
        {
            id: 1,
            fType: "Tiny Black Stone Flies",
            size: "14-18 ",
            begin: "February",
            end: "March"
            
        },
        {
            id: 2,
            fType: "Golden Stones",
            size: "12-18 ",
            begin: "May",
            end: "June"
        },
        {
            id: 3,
            fType: "Midges",
            size: "16-22 ",
            begin: "February",
            end: "November"
        },
        {
            id: 4,
            fType: "Green Drakes",
            size: "10-14 ",
            begin: "May",
            end: "June"
        },
        {
            id: 5,
            fType: "Grey Drakes",
            size: "10-14 ",
            begin: "August",
            end: "September"
        },
        {
            id: 6,
            fType: "BWO",
            size: "18-20 ",
            begin: "March",
            end: "April"
        },
        {
            id: 7,
            fType: "Caddis",
            size: "12-16 ",
            begin: "June",
            end: "October"
        },
        {
            id: 8,
            fType: "Terrestrials",
            size: "8-16 ",
            begin: "June",
            end: "October"
        }
    ];

    return (
        <div className="container" id="loganflytable">
            <table className={classes.tablecenter}>
                <thead className={classes.tablehead}>
                    <tr>
                        <th>Name</th>
                        <th>Size</th> 
                        <th>Start</th>
                        <th>End</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loganflies.map(fly => (
                            <LoganFly loganfly={fly} key={fly.id} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}