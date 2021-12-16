import React from "react";
import GreenFly from "./greenFlies";
import useStyles from '../../components/tables/table'


export default function GreenFlylist() {
    const classes = useStyles();
    const greenflies = [
        {
            id: 1,
            fType: "Trico",
            size: "20-24 ",
            begin: "June 26",
            end: "August 31"
            
        },
        {
            id: 2,
            fType: "PMD",
            size: "16-18 ",
            begin: "June 26",
            end: "July 31"
        },
        {
            id: 3,
            fType: "Tiny BWO",
            size: "20-24 ",
            begin: "August 1",
            end: "October 10"
        },
        {
            id: 4,
            fType: "Tan Caddis",
            size: "14-16 ",
            begin: "August 1",
            end: "August 31"
        },
        
    ];

    return (
        <div className="container" id="greenflytable">
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
                        greenflies.map(fly => (
                            <GreenFly greenfly={fly} key={fly.id} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}