import React from "react";
import ProvoFly from "./provoFlies"
import useStyles from "../../components/tables/table"


export default function ProvoFlylist() {
    const  classes = useStyles();
    const provoflies = [
        {
            id: 1,
            fType: "BWO",
            size: "18-22",
            begin: "October 1",
            end: "may 30"
            
        },
        {
            id: 2,
            fType: "PMD",
            size: "12-16",
            begin: "June 1",
            end: "August 31"
        },
        {
            id: 3,
            fType: "Caddis",
            size: "12-14",
            begin: "May 1",
            end: "October 31"
        },
        {
            id: 4,
            fType: "Yellow Sally",
            size: "14-16",
            begin: "June 1",
            end: "August 31"
        },
        {
            id: 5,
            fType: "Black and Gold Salmonflies",
            size: "6-10",
            begin: "May 1",
            end: "July 31"
        },
        {
            id: 6,
            fType: "Terrestrials",
            size: "6-16",
            begin: "June 1",
            end: "October 31"
        },
        {
            id: 7,
            fType: "Green Drake",
            size: "10-14",
            begin: "June 1",
            end: "August 31"
        },
        {
            id: 8,
            fType: "Midges",
            size: "20-22",
            begin: "January 1",
            end: "December 31"
        }
    ];

    return (
        // <div className="container" id="provoflytable">
        <div className={classes.container} container alignItems="stretch" spacing={3}>
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
                        provoflies.map(fly => (
                            <ProvoFly provofly={fly} key={fly.id} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}