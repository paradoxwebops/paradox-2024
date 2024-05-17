import { Table, TableProps } from "@/components/CustomTable";

export default function SchedulePage(){
    const table1:TableProps = {
        title: "Day 0 ~ 29th May 2024",
        data: [
            ["Paradox Premier League", "Sangam Ground", "03:00 PM - 10:00 PM"],
        ],
        color: '#3D6ADE',
        headingColor: "#193C95",
        headings: ["EVENT", "LOCATION", "TIME"]

    }

    const table2:TableProps = {
        title: "Day 1 ~ 30th May 2024",
        data: [
            ["Paradox Premier League", "Sangam Ground", "03:00 PM - 10:00 PM"],
        ],
        color: '#3D6ADE',
        headingColor: "#193C95",
        headings: ["EVENT", "LOCATION", "TIME"]

    }

    const table3:TableProps = {
        title: "Day 2 ~ 31st May 2024",
        data: [
            ["Paradox Premier League", "Sangam Ground", "03:00 PM - 10:00 PM"],
        ],
        color: '#3D6ADE',
        headingColor: "#193C95",
        headings: ["EVENT", "LOCATION", "TIME"]

    }

    const table4:TableProps = {
        title: "Day 3 ~ 1st June 2024",
        data: [
            ["Paradox Premier League", "Sangam Ground", "03:00 PM - 10:00 PM"],
        ],
        color: '#3D6ADE',
        headingColor: "#193C95",
        headings: ["EVENT", "LOCATION", "TIME"]

    }

    const table5:TableProps = {
        title: "Day 4 ~ 2nd June 2024",
        data: [
            ["Paradox Premier League", "Sangam Ground", "03:00 PM - 10:00 PM"],
        ],
        color: '#3D6ADE',
        headingColor: "#193C95",
        headings: ["EVENT", "LOCATION", "TIME"]

    }

    const data:TableProps[] = [table1, table2, table3, table4, table5]

    return (
        <>
        <div className="flex w-full flex-col gap-6 ">
            {data.map((item, ind) => {
                return (
                    <Table {...item} key={ind} />
                )
            })}
        </div>
        </>
    )
}