import React from "react";
import WeberFly from "./weberFlies";
import useStyles from "../../components/tables/table"

export default function WeberFlylist() {
    const classes = useStyles();
    const weberflies = [
        {
            id: 1,
            fType: "BWO",
            size: "16-20 ",
            begin: "March 1",
            end: "May 30"
            
        },
        {
            id: 2,
            fType: "PMD",
            size: "12-16 ",
            begin: "June 1",
            end: "August 31"
        },
        {
            id: 3,
            fType: "March Brown",
            size: "12-14 ",
            begin: "April 1",
            end: "May 31"
        },
        {
            id: 4,
            fType: "Black Quill",
            size: "14-16 ",
            begin: "July 1",
            end: "August 31"
        },
        {
            id: 5,
            fType: "Quill Gordon",
            size: "14-16 ",
            begin: "July 1",
            end: "August 31"
        },
        {
            id: 6,
            fType: "Caddis",
            size: "12-14 ",
            begin: "May 1",
            end: "October 31"
        },
        {
            id: 7,
            fType: "Yellow Sally",
            size: "14-16 ",
            begin: "June 1",
            end: "August 31"
        },
        {
            id: 8,
            fType: "Early Black Stone",
            size: "14-16 ",
            begin: "February 1",
            end: "May 1"
        }, 
        {
            id: 8,
            fType: "Golden Stone",
            size: "10-12 ",
            begin: "June 1",
            end: "July 31"
        },
        {
            id: 9,
            fType: "Terrestrials",
            size: "6-16 ",
            begin: "June 1",
            end: "October 31"
        },
        {
            id: 10,
            fType: "Midges",
            size: "20-22 ",
            begin: "January 1",
            end: "December 31"
        }
    ];

    return (
        <div className="container" id="weberflytable">
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
                        weberflies.map(fly => (
                            <WeberFly weberfly={fly} key={fly.id} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}