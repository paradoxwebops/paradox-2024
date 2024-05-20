"use client"

import { rgba } from "@/lib/utils";
/**
 * 
 * {
 *      title: "",
 *      color: "",
 *      headings: [],
 *      data: [
 *          [],
 *      ]
 * }
 */

import { Mirza } from "next/font/google";

const mirza = Mirza({weight: ["400", "500", "600"], subsets: ['latin']})

export type TableProps = {
    title: string;
    color: string;
    headingColor: string;
    headings: string[];
    data: string[][];
}

type TableCellProps = {
    children: React.ReactNode;
    isOdd: boolean;
    color?: string;
}

type TableRowProps = {
    data: string[];
    isOdd: boolean;
    isHeading: boolean;
    color?: string;
}

const TableHeadingCell = ({children, isOdd, color}:TableCellProps) => {
    return (
        <th scope="col" className="px-6 py-4 text-xl lg:text-4xl font-normal" style={{color: color ?? "#222", backgroundColor: isOdd ? 'transparent' : rgba("#ffffff", 0.25)}}>
            {children}
        </th>
    )
}

const TableDataCell = ({children, isOdd}:TableCellProps) => {
    return (
        <td scope="row" className="px-6 py-4 text-md lg:text-3xl" style={{backgroundColor: isOdd ? 'transparent' : rgba("#ffffff", 0.25)}}>
            {children}
        </td>
    )
}

const TableRow = ({data, isOdd, isHeading, color}:TableRowProps) => {
    return (
        <tr style={{backgroundColor: isOdd ? rgba('#000000', 0.01) : rgba("#ffffff", 0.25)}}>
            {data.map((val, ind) => {
                if (isHeading) {
                    return (
                        <TableHeadingCell key={ind} isOdd={(ind % 2 === 0)} color={color}>{val}</TableHeadingCell>
                    )
                } else {
                    return (
                        <TableDataCell key={ind} isOdd={(ind % 2 === 0)}>{val}</TableDataCell>
                    )
                }
            })}
        </tr>
    )
}

const Table = ({title, headings, data, color, headingColor}:TableProps) => {
    return (
        <div className={`${mirza.className} relative overflow-x-auto shadow-md sm:rounded-lg`}>
            <table className="w-full text-left rtl:text-right" style={{backgroundColor: rgba(color, 0.55)}}>
                <caption className="p-5 text-xl lg:text-4xl text-center text-white" style={{backgroundColor: color}}>
                    {title}
                </caption>
                <thead>
                    <TableRow data={headings} isOdd={true} isHeading={true} color={headingColor} />
                </thead>
                <tbody>
                    {data.map((row, ind) => {
                        return (
                            <TableRow data={row} key={ind} isOdd={(ind % 2 === 1)} isHeading={false} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export {
    Table,
}