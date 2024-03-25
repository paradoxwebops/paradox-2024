import {East_Sea_Dokdo, Bricolage_Grotesque} from 'next/font/google'

const eastSeaDokdo = East_Sea_Dokdo({weight: "400", subsets: ['latin']})

const secretaryData = [
  {
    name: 'Ashwin R.',
    img: '/ashwin_r.png',
  },
  {
    name: 'Shruthi B.',
    img: '/shruthi_b.png',
  },
  {
    name: 'Anurag M.',
    img: '/anurag_m.png',
  },
]

const coresData = [
  {
    name: 'Owais Shaikh',
    department: 'Multimedia',
    img: '/owais_shaikh.png',
  },
  {
    name: 'Manish S',
    department: 'WebOps',
    img: '/manish_s.png',
  },
  {
    name: 'Shriprasad S',
    department: 'Student Relations',
    img: '/shriprasad_s.png',
  },
  {
    name: 'Farhat Qadri',
    department: 'Sports',
    img: '/farhat_qadri.png',
  },
  {
    name: 'Vivek Vibhuti',
    department: 'Technicals',
    img: '/vivek_vibhuti.png',
  },
  {
    name: 'Robin Justin',
    department: 'Culturals',
    img: '/robin_justin.png',
  },
  {
    name: 'Mayank Jaiswal',
    department: 'Sponsorship',
    img: '/mayank_jaiswal.png',
  },
  {
    name: 'B Subash',
    department: 'Finance & Operations',
    img: '/b_subash.png',
  },
  {
    name: 'Tanmay Srivastava',
    department: 'Hospitality',
    img: '/tanmay_srivastava.png',
  },
  {
    name: 'Mithun Raj',
    department: 'Merch & Stalls',
    img: '/mithun_raj.png',
  },
]

export default function EventsPage() {
  return (
    <>
    <div className="w-full px-6 md:px-48">
      <h2 className={`${eastSeaDokdo.className} text-8xl text-center my-12`} style={{color: '#EA9C41'}}>Secretary</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {secretaryData.map(({img, name}, ind) => {
          return (
            <div className="flex flex-col" key={`${name}_${ind}`}>
              <div className="w-full border-4 border-white bg-[#FFBB6C] rounded-2xl">
                <img className='w-full h-auto' src={img} />
              </div>
              <div className="w-full bg-[#FFF8E8] text-center p-3 mt-6 rounded-2xl">
                <div className="uppercase font-semibold text-black text-xl">
                  {name}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <h2 className={`${eastSeaDokdo.className} text-8xl text-center my-12`} style={{color: '#EA9C41'}}>Cores</h2>
      
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
        {coresData.map(({img, name, department}, ind) => {
          return (
            <div className="flex flex-col" key={`${name}_${ind}`}>
              <div className="w-full border-4 border-white bg-[#FFBB6C] rounded-2xl">
                <img className='w-full h-auto' src={img} />
              </div>
              <div className="w-full bg-[#FFF8E8] text-center p-3 mt-6 rounded-2xl">
                <div className="uppercase font-semibold text-black text-xl">
                  {name}
                </div>
                <div className="capitalise text-lg text-black/50">
                  {department}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </>
  );
}