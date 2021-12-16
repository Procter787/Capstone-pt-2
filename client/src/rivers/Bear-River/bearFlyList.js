import React from "react";
import BearFly from "./bearFlies";
import useStyles from '../../components/tables/table'

export default function BearFlylist() {
    const classes = useStyles();
    const bearflies = [
        {
            id: 1,
            fType: "BWO",
            size: "16-20 ",
            begin: "February 1",
            end: "April 30"
            
        },
        {
            id: 2,
            fType: "PMD",
            size: "16-18 ",
            begin: "May 1",
            end: "August 31"
        },
        {
            id: 3,
            fType: "Caddis",
            size: "14-18 ",
            begin: "May 1",
            end: "September 30"
        },
        {
            id: 4,
            fType: "Cicada",
            size: "14-16 ",
            begin: "June 1",
            end: "August 31"
        },
        {
            id: 5,
            fType: "Gold Salmonflies",
            size: "6-10 ",
            begin: "May 1",
            end: "July 31"
        }
    ];

    return (
        <div className="container" id="bearflytable">
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
                        bearflies.map(fly => (
                            <BearFly bearfly={fly} key={fly.id} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}