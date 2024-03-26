import { Card } from "@/components";

export default function ContactPage() {
  const data = [
    {
      title: 'General Inquiries',
      img: '',
    },
    {
      title: 'Grievances',
      img: '',
    },
    {
      title: 'Event Related Queries',
      img: '',
    },
    {
      title: 'Payment Related Queries',
      img: '',
    },
  ]

  return (
    <>
      <h2 className={`text-8xl my-12`} style={{color: '#000'}}>Paradox 2024 Contact Information</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map(({title, img}, ind) => {
          return (
            <Card bgColor="#03190F" className="flex items-end">
              <h3 className="text-white text-7xl">{title}</h3>
            </Card>
          )
        })}
      </div>
    </>
  );
}
