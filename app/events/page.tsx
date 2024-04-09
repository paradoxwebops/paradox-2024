import {East_Sea_Dokdo} from 'next/font/google'

const eastSeaDokdo = East_Sea_Dokdo({weight: "400", subsets: ['latin']})

export default function EventsPage() {
  return (
    <>
    <h2 className={`${eastSeaDokdo.className} text-7xl text-center`} style={{color: '#550083'}}>No events available for now. Please check in later.</h2>
    </>
  );
}
