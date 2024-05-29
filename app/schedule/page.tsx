import { Table, TableProps } from "@/components/CustomTable";

export default function SchedulePage(){
    const table1:TableProps = {
        title: "Day 0 ~ 29th May 2024",
        data: [
            ["Paradox Premier league 24 Cricket (Trials)", "Sangam Ground", "03:00 PM-06:30 PM"],
            ["Paradox Badminton League Trials", "Badminton Court", "03:00 PM - 08:00 PM"],
            ["Paradox Champion League Trials", "Football Ground", "05:30 PM - 08:00 PM"],
            ["Instructors vs Students Cricket match", "Sangam Ground", "07:00 PM - 09:00 PM"],
            ["Volley Vortex Trials", "Volleyball Court", "05:30 PM - 08:00 PM"],
        ],
        color: '#3D6ADE',
        headingColor: "#193C95",
        headings: ["EVENT", "LOCATION", "TIME"]

    }

    const table2:TableProps = {
        title: "Day 1 ~ 30th May 2024",
        data: [
            ["Paradox Premier league 24 Cricket", "Sangam Ground", "06:00 AM - 09:00 AM"],
            ["Stalls", "Outside OAT", "08:00 AM - 10:00 PM"],
            ["DSA Triathlon", "CRC 203", "09:00 AM - 11:00 AM"],
            ["Inauguration", "SAC", "10:00 AM - 11:00 AM"],
            ["Faculty Interaction", "SAC", "11:00 AM - 12:30 PM"],
            ["50 Ka Funda", "ICSR Room 3", "11:00 AM - 01:00 PM"],
            ["Python Coding Challenge", "CRC 103", "11:00 AM - 01:00 PM "],
            ["Music", "CRC 101", "11:00 AM - 04:00 PM"],
            ["Capital Conclave", "CRC 102 & 203", "11:00 AM - 03:00 PM"],
            ["Ad Hoc Hullabaloo", "CRC 201", "11:00 AM - 02:00 PM"],
            ["Qutopia (prelims)", "CLT", "11:00 AM - 01:00 PM"],
            ["Paradox Badminton League", "Badminton Court |New sports complex", "11:00 AM - 04:00 PM"],
            ["Analytic Alchemy", "ICSR Room 1", "11:30 AM - 01:30 PM"],
            ["Degree Distribution", "SAC", "01:30 PM - 07:30 PM"],
            ["50 Ka Funda", "ICSR Room 3", "02:00 PM - 03:00 PM"],
            ["Dance (Quarter Finals)", "CRC 103", "01:30 PM - 04:30 PM"],
            ["The Inter House Chess Championship 2024", "CLT", "02:00 PM - 03:30 PM"],
            ["Kathalok", "CRC 203", "02:00 PM - 03:30 PM"],
            ["Robo Soccer", "ICSR Room 4", "02:00 PM - 05:00 PM"],
            ["Python Coding Challenge", "ICSR Room 2", "03:00 PM - 04:00 PM"],
            ["Paradox Champions League", "Football Ground", "04:00 PM - 06:30 PM"],
            ["Surprise Event", "OAT", "04:00 PM - 05:00 PM"],
            ["Insight IAS Session", "CLT", "04:00 PM - 06:00 PM"],
            ["Music", "Himalaya Lawn", "04:30 PM - 07:00 PM"],
            ["Fashion Show", "OAT", "08:00 PM - 09:00 PM"],
            ["Paper Dressing", "OAT", "09:00 PM - 10:00 PM"],
        ],
        color: '#3D6ADE',
        headingColor: "#193C95",
        headings: ["EVENT", "LOCATION", "TIME"]

    }

    const table3:TableProps = {
        title: "Day 2 ~ 31st May 2024",
        data: [
            ["Shutter Safari", "Campus", "05:30 AM - 09:30 PM"],
            ["Paradox Premier league 24 Cricket", "Sangam Ground", "06:00 AM - 09:00 AM"],
            ["Stalls", "Outside OAT", "08:00 AM - 10:00 PM"],
            ["Volley Vortex", "Volleyball Court", "06:30 AM - 10:00 PM"],
            ["Worst pitch ever", "CRC 203", "08:30 AM - 11:30 PM"],
            ["Compassionathon Day 1", "ICSR Room 1", "09:00 AM - 11:00 AM"],
            ["Research summit", "ICSR Room 3", "09:00 AM - 03:00 PM"],
            ["Academic Workshops", "RMN/RMJ", "10:00 AM - 06:00 PM"],
            ["Pitch-O-Con", "CRC 102", "10:00 AM - 01:00 PM"],
            ["Qutopia(semis)", "CRC 204", "10:00 AM - 12:00 PM"],
            ["Dance(Semis)", "CRC 205", "10:00 AM - 12:30 PM"],
            ["Ranneeti 3.0: BGMI", "RMN 101", "10:00 AM - 01:00 PM"],
            ["Ranneeti 3.0: Free fire", "RMN 102", "10:00 AM - 01:00 PM"],
            ["Quest Explorer (Prelims)", "Biotech Seminar Hall", "10:30 AM - 11:30 AM"],
            ["Paradox Badminton League", "Badminton Court | New sports complex", "11:00 AM - 04:00 PM"],
            ["Anubhuti (Round 2 )", "CRC 203", "12:00 PM - 3:00 PM"],
            ["Ranneeti 3.0: Valorant", "CRC 205", "12:30 PM - 03:30 PM"],
            ["Tradequest", "CLT", "12:30 PM - 02:30 PM"],
            ["Voices of Nature", "CRC 204", "12:30 PM - 01:30 PM"],
            ["DSA Triathlon", "ICSR Room 1", "01:00 PM - 03:00 PM"],
            ["Dimension forge", "RMN 101", "01:00 PM - 03:00 PM"],
            ["Robo Soccer", "UTIL", "02:00 PM - 05:00 PM"],
            ["Fiction Flicks Day 1", "CRC 204", "02:00 PM - 03:00 PM"],
            ["Ultimate Sports Quiz (Prelims)", "Biotech Seminar Hall", "02:00 PM - 03:00 PM"],
            ["Kathalok", "CRC 203", "03:30 PM - 05:30 PM"],
            ["IPL Arena (Prelims)", "CRC 204", "03:30 PM - 04:30 PM"],
            ["Dramathon", "CLT", "03:30 PM - 04:30 PM"],
            ["The Inter House Chess Championship 2024", "NAC 513 and NAC 514", "04:00 PM - 07:00 PM"],
            ["Volley Vortex", "Volleyball Court", "04:00 PM - 07:30 PM"],
            ["Chalk Art Doodle War", "OAT", "04:00 PM - 05:00 PM"],
            ["Madcap Masters", "Himalaya Lawn", "04:00 PM - 05:00 PM"],
            ["Squid Games", "Sangam Ground", "04:30 PM - 07:00 PM"],
            ["What's in a Meme - Finals", "CRC 204", "05:00 PM - 07:00 PM"],
            ["Music", "OAT", "05:00 PM - 08:00 PM"],
            ["LLM Without Tears", "Biotech Seminar Hall", "06:00 PM - 10:00 PM"],
            ["DJ Night", "OAT", "08:00 PM - 10:30 PM"],
        ],
        color: '#3D6ADE',
        headingColor: "#193C95",
        headings: ["EVENT", "LOCATION", "TIME"]

    }

    const table4:TableProps = {
        title: "Day 3 ~ 1st June 2024",
        data: [
            ["Kampus Run", "Campus", "05:30 AM - 08:00 AM"],
            ["Stalls", "Outside OAT", "08:00 AM - 10:00 PM"],
            ["Mysterio Mind Maze", "CLT", "08:00 AM - 11:00 AM"],
            ["Prakriti Paravah", "RMN 102", "09:00 AM - 2:00 PM"],
            ["EncryptID", "ICSR Room 2", "09:00 AM - 12:30 PM"],
            ["Fiction Flicks", "CRC 205", "09:00 AM - 11:30 AM"],
            ["Logic Loom", "CRC 102", "09:30 AM - 12:30 PM"],
            ["Ranneeti 3.0: BGMI", "RMN 101", "10:00 AM - 01:00 PM"],
            ["Ranneeti 3.0: Free fire", "RMN 202", "10:00 AM - 01:00 PM"],
            ["Ranneeti 3.0: Valorant", "RMN 201", "10:00 AM - 01:00 PM"],
            ["Ultimate Sports Quiz", "Biotech Seminar Hall", "10:00 AM - 01:00 PM"],
            ["Fault in Flyers", "CRC 203", "10:00 AM - 01:30 PM"],
            ["Launching startup by Wadhwani Foundation", "ICSR Room 3", "10:30 AM - 01:30 PM"],
            ["Ad Hoc Hullabaloo", "CRC 204", "11:00 AM - 01:00 PM"],
            ["Drama", "CLT", "12:00 PM - 5:30 PM"],
            ["Capital conclave (Finals)", "CRC 205", "12:00 PM - 04:00 PM"],
            ["Dimension forge", "RMN 101", "01:00 PM - 03:00 PM"],
            ["Robo Soccer", "Sangam Grounds", "01:00 PM - 04:00 PM"],
            ["Compassion-a-thon Day 2", "ICSR Room 1", "01:00 PM - 03:00 PM"],
            ["IPL Arena (Finals - Day 1)", "Biotech Seminar Hall", "01:30 PM - 03:30 PM"],
            ["Clay Modeling", "CRC 203", "02:00 PM - 05:00 PM"],
            ["EncryptID", "ICSR Room 2", "02:00 PM - 03:30 PM"],
            ["Anubhuti", "CRC 204", "02:00 PM - 03:30 PM"],
            ["Lift Off", "TTJ Auditorium", "03:00 PM - 05:00 PM"],
            ["Pro Table Tennis Championship", "Table Tennis Hall | New sports complex", "03:00 PM - 05:00 PM"],
            ["Inter house Chess Championship 2024", "CRC 101", "04:00 PM - 07:30 PM"],
            ["Paradox Champions League", "Football Ground", "04:30 PM - 06:30 PM"],
            ["Street Play", "Himalaya Lawn", "04:30 PM - 05:30 PM"],
            ["Paradox Premier league 24 Cricket", "KV/Sangam Ground", "06:30 PM - 07:30 PM"],
            ["Madcap Masters", "Himalaya Lawn", "05:30 PM - 06:30 PM"],
            ["Volley Vortex", "Volleyball Court", "06:30 PM - 07:30 PM"],
            ["Dance", "SAC", "05:30 PM - 07:30 PM"],
            ["Prom Night", "CC Terrace", "08:00 PM - 10:30 PM"],
            ["Magic show", "SAC", "8:00 PM - 8:30 PM"],
            ["Under The Stars Open Mic", "SAC", "08:30 PM - 10:30 PM"],
        ],
        color: '#3D6ADE',
        headingColor: "#193C95",
        headings: ["EVENT", "LOCATION", "TIME"]

    }

    const table5:TableProps = {
        title: "Day 4 ~ 2nd June 2024",
        data: [
            ["Pro Table Tennis Championship", "Table Tennis Hall | New sports complex", "07:00 AM - 09:00 AM"],
            ["Quest Explorer (Finals)", "Campus", "07:00 AM - 10:00 PM"],
            ["Logic Loom", "ICSR Room 2", "09:00 AM - 01:30 PM"],
            ["Prerna", "ICSR Room 3", "09:30 AM - 12:30 PM"],
            ["AI Agent Hackathon", "ICSR Room 1", "10:00 AM - 12:00 PM"],
            ["IPL Arena (Finals - Day 2)", "CRC 102", "10:00 AM - 12:00 PM"],
            ["Ranneeti 3.0: BGMI", "CRC 201", "10:00 AM - 01:00 PM"],
            ["Ranneeti 3.0: Free fire", "CRC 202", "10:00 AM - 01:00 PM"],
            ["Ranneeti 3.0: Valorant", "CRC 203", "10:00 AM - 1:00 PM"],
            ["Qutopia - Finals", "CRC 101", "10:00 AM - 01:00 PM"],
            ["Becoming Billionare", "TTJ Auditorium ICSR", "10:30 AM - 12:00 PM"],
            ["Dimension forge", "CRC 101", "01:00 PM - 03:00 PM"],
            ["Closing Ceremony", "SAC", "03:00 PM - 05:00 PM"],
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