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
            ["Inauguration", "SAC", "10:00 AM - 11:00 AM"],
            ["Faculty Interaction", "SAC", "11:00 AM - 12:30 PM"],
            ["Degree Distribution", "SAC", "01:30 PM - 07:30 PM"],
            ["Stalls", "OAC", "08:00 AM Onwards"],
            ["Paradox Premier league 24 Cricket", "Sangam Ground", "06:00 AM - 09:00 AM"],
            ["The Inter House Chess Championship 2024", "CLT", "02:00 PM - 03:30 PM"],
            ["Music", "CRC 101", "11:00 AM - 04:00 PM"],
            ["Capital Conclave", "CRC 102", "11:00 AM - 03:00 PM"],
            ["Ad Hoc Hullabaloo", "CRC 201", "11:00 AM - 02:00 PM"],
            ["Qutopia (prelims)", "CLT", "11:00 AM - 01:00 PM"],
            ["Paradox Badminton League", "Badminton Court", "11:00 AM - 01:30 PM (repeated at 4:00 - 6:30 PM)"],
            ["Dance (Quarter Finals)", "CRC 103", "01:30 PM - 04:30 PM"],
            ["Kathalok", "CRC 203", "02:00 PM - 03:30 PM"],
            ["DSA Triathlon", "ICSR Room 2", "09:00 AM - 11:00 AM"],
            ["50 Ka Funda", "ICSR Room 1", "11:00 AM - 01:00 PM"],
            ["Analytic Alchemy", "ICSR Room 3", "11:30 AM - 01:30 PM"],
            ["Python Coding Challenge", "CRC 103", "11:00 AM - 01:00 PM (repeated at 3:00 - 4:00 PM at ICSR no 2)"],
            ["Paradox Champions League", "Football Ground", "04:00 PM - 06:30 PM"],
            ["Robo Soccer", "ICSR Room 4", "02:00 PM - 05:00 PM"],
            ["Sponsored event", "ICSR Room 1", "02:00 PM - 05:00 PM"],
            ["Lift Off", "ICSR Room 2", "01:30 PM - 02:30 PM"],
            ["PCC", "ICSR Room 2", "03:00 PM - 04:00 PM"],
            ["Music", "Himalaya Lawn", "04:30 PM - 07:00 PM"],
            ["Fashion Show", "SAC", "08:00 PM - 09:00 PM"],
            ["Paper Dressing", "SAC", "09:00 PM - 10:00 PM"],
        ],
        color: '#3D6ADE',
        headingColor: "#193C95",
        headings: ["EVENT", "LOCATION", "TIME"]

    }

    const table3:TableProps = {
        title: "Day 2 ~ 31st May 2024",
        data: [
            ["Volley Vortex", "Volleyball Court", "06:30 AM - 09:00 AM"],
            ["Paradox Premier league 24 Cricket", "Sangam Ground", "06:00 AM - 09:00 AM"],
            ["Academic Workshops", "RMN/RMJ", "10:00 AM - 06:00 PM"],
            ["Shutter Safari", "Campus", "05:30 AM - 09:30 PM"],
            ["IPL Arena (Prelims)", "CRC 204", "03:30 PM - 04:30 PM"],
            ["Laser Tag", "HSB 133", "10:00 AM - 01:00 PM and 02:00 PM to 09:00 PM"],
            ["Ranneeti 3.0: BGMI", "RMN 101", "10:00 AM - 01:00 PM"],
            ["Ranneeti 3.0: Free fire", "RMN 102", "10:00 AM - 01:00 PM"],
            ["Quest Explorer (Prelims)", "Biotech Seminar Hall", "10:30 AM - 11:30 AM"],
            ["Paradox Badminton League", "Badminton Court", "11:00 AM - 01:30 PM"],
            ["Ranneeti 3.0: Valorant", "CRC 205", "12:30 PM - 03:30 PM"],
            ["Tradequest", "CLT", "12:30 PM - 02:30 PM"],
            ["Voices of Nature", "CRC 204", "12:30 PM - 01:30 PM"],
            ["Anubhuti(Round 2 )", "CRC 203", "12:00 PM - 3:00 PM"],
            ["Qutopia(semis)", "CRC 204", "10:00 AM - 12:00 PM"],
            ["Dance(Semis)", "CRC 205", "10:00 AM - 12:30 PM"],
            ["Fiction Flicks Day 1", "CRC 204", "02:00 PM - 03:00 PM"],
            ["Sponsored event", "ICSR Room 3", "01:00 PM - 03:00 PM"],
            ["DSA Triathlon", "ICSR Room 1", "01:00 PM - 03:00 PM"],
            ["Dimension forge", "RMN 101", "01:00 PM - 03:00 PM"],
            ["Drone Dash", "KV Ground", "05:00 PM - 06:30 PM"],
            ["Pitch-O-Con", "ICSR Room 3", "10:00 AM - 01:00 PM"],
            ["Ultimate Sports Quiz (Prelims)", "Biotech Seminar Hall", "02:00 PM - 03:00 PM"],
            ["Kathalok", "CRC 203", "03:30 PM - 05:30 PM"],
            ["What's in a Meme - Finals", "CRC 204", "05:00 PM - 07:00 PM"],
            ["Dramathon", "CLT", "03:30 PM - 04:30 PM"],
            ["Squid Games", "Sangam Ground", "04:30 PM - 07:00 PM"],
            ["The Inter House Chess Championship 2024", "NAC 513/ 514", "04:00 PM - 07:00 PM"],
            ["Volley Vortex", "Volleyball Court", "04:00 PM - 07:30 PM"],
            ["Chalk Art Doodle War", "SAC (road)", "05:00 PM - 06:00 PM"],
            ["Madcap Masters", "Himalaya Lawn", "05:00 PM - 06:00 PM"],
            ["Music", "SAC", "06:00 PM - 07:30 PM"],
            ["Dance", "SAC", "07:30 PM - 09:30 PM"],
            ["DJ Night", "SAC", "09:30 PM - 10:30 PM"],
            ["Compassionathon Day 1", "ICSR Room 1", "09:00 AM - 11:00 AM"],
            ["Research summit", "TJ Jagganathan", "09:00 AM - 02:00 PM"],
            ["Worst pitch ever", "CRC 203", "08:30 AM - 11:30 PM"],
            ["36 hour Hackathon", "ICSR Room 2", "07:00 AM - 10:00 PM"],
        ],
        color: '#3D6ADE',
        headingColor: "#193C95",
        headings: ["EVENT", "LOCATION", "TIME"]

    }

    const table4:TableProps = {
        title: "Day 3 ~ 1st June 2024",
        data: [
            ["Kampus Run", "Campus", "05:30 AM - 08:00 AM"],
            ["36 hour Hackathon", "ICSR Room 2", "06:00 AM - 07:00 PM (Next Day)"],
            ["Paradox Premier league 24 Cricket", "KV/Sangam Ground", "04:30 PM - 05:30 PM"],
            ["IPL Arena (Finals - Day 1)", "Biotech Seminar Hall", "01:30 PM - 03:30 PM"],
            ["Mysterio Mind Maze", "CLT", "08:00 AM - 11:00 AM"],
            ["Ranneeti 3.0: BGMI", "RMN 101", "10:00 AM - 01:00 PM"],
            ["Ranneeti 3.0: Free fire", "RMN 102", "10:00 AM - 01:00 PM"],
            ["Ranneeti 3.0: Valorant", "RMN 201", "10:00 AM - 01:00 PM"],
            ["Ultimate Sports Quiz", "Biotech Seminar Hall", "10:00 AM - 01:00 PM"],
            ["Prakriti Paravah", "RMN 102", "09:00 AM - 2:00 PM"],
            ["Logic Loom", "ICSR Room 1", "09:30 AM - 12:30 PM"],
            ["Music", "SAC", "06:00 PM - 07:30 PM"],
            ["Fiction Flicks", "CRC 205", "09:00 AM - 11:30 AM"],
            ["Ad Hoc Hullabaloo", "CRC 204", "11:00 AM - 01:00 PM"],
            ["Fault in Flyers", "CRC 203", "10:00 AM - 01:30 PM"],
            ["Clay Modeling", "CRC 203", "02:00 PM - 05:00 PM"],
            ["Paradox Badminton League", "Badminton Court", "11:00 AM - 01:00 PM"],
            ["Inter house Chess Championship 2024", "CRC 101", "04:00 PM - 07:30 PM"],
            ["Drama", "CLT", "12:00 PM - 5:30 PM"],
            ["Capital conclave (Finals)", "CRC 205", "12:00 PM - 04:00 PM"],
            ["Sponsored event", "ICSR Room 3", "10:30 AM - 01:30 PM"],
            ["Anubhuti", "CRC 204", "02:00 PM - 03:30 PM"],
            ["Dimension forge", "RMN 101", "01:00 PM - 03:00 PM"],
            ["Paradox Champions League", "Football Ground", "04:30 PM - 06:30 PM"],
            ["Volley Vortex", "Volleyball Court", "06:30 PM - 07:30 PM"],
            ["Pro Table Tennis Championship", "TT Hall", "03:00 PM - 05:00 PM"],
            ["Madcap Masters", "Himalaya Lawn", "04:30 PM - 05:30 PM"],
            ["Street Play", "Himalaya Lawn", "05:30 PM - 06:30 PM"],
            ["Prom Night", "CC Terrace", "08:00 PM - 10:30 PM"],
        ],
        color: '#3D6ADE',
        headingColor: "#193C95",
        headings: ["EVENT", "LOCATION", "TIME"]

    }

    const table5:TableProps = {
        title: "Day 4 ~ 2nd June 2024",
        data: [
            ["Pro Table Tennis Championship", "TT Hall", "07:00 AM - 09:00 AM"],
            ["Quest Explorer (Finals)", "Campus", "07:00 AM - 10:00 PM (Next Day)"],
            ["36 hour hackathon Prize dis", "TJ Jagganathan", "09:00 AM - 10:00 AM"],
            ["Logic Loom", "ICSR Room 2", "09:00 AM - 01:30 PM"],
            ["Prerna", "ICSR Room 3", "09:30 AM - 12:30 PM"],
            ["AI Agent Hackathon", "ICSR Room 1", "10:00 AM - 12:00 PM"],
            ["IPL Arena (Finals - Day 2)", "CRC 102", "10:00 AM - 12:00 PM"],
            ["Ranneeti 3.0: BGMI", "CRC 201", "10:00 AM - 01:00 PM"],
            ["Ranneeti 3.0: Free fire", "CRC 202", "10:00 AM - 01:00 PM"],
            ["Ranneeti 3.0: Valorant", "CRC 203", "10:00 AM - 1:00 PM"],
            ["Qutopia - Finals", "CRC 101", "10:00 AM - 01:00 PM"],
            ["Becoming Billionaire", "TJ Jagganathan", "10:30 AM - 12:00 PM"],
            ["EncryptID", "ICSR Room 3", "01:00 PM - 02:00 PM"],
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