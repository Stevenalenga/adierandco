import Image from 'next/image'

export default function AboutFirmPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[rgb(10,35,41)] mb-8">About The Firm</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[rgb(157,67,43)] mb-6">Welcome To Adier & Co. Legal</h2>
        <p className="text-lg text-[rgb(10,35,41)] mb-4">
          We are a boutique law firm with offices in Nairobi, Kenya with a practice grounded in industry and sector knowledge. Our work ranges from negotiating agreements, drafting contracts, employment, data protection and legal audits, litigation and dispute resolution and helping business in commercial matters.
        </p>
        <p className="text-lg text-[rgb(10,35,41)] mb-4">
          Our lawyers handle both contentious and non-contentious legal matters and provide bespoke legal services in various sectors and we pride ourselves in the clarity, promptness and straightforwardness of our response and pragmatic advice. Understanding your objectives and operating environment is important to us. Therefore, we listen and take time to understand your commercial and personal interests and objectives.
        </p>
      </section>

      <section className="mb-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <Image
            src="/team/adier.jpeg"
            alt="Stephen Adier"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h3 className="text-2xl font-semibold text-[rgb(10,35,41)] mb-4">STEPHEN ADIER</h3>
          <p className="text-xl text-[rgb(157,67,43)] mb-4">Managing Partner, Adier & Co. Legal</p>
          <p className="text-lg text-[rgb(10,35,41)]">
            Adier & Co. Legal is a full service law firm headquartered in Nairobi, Kenya. We offer top level legal and business services to both local and international clients. Our expertise on legal issues cuts across borders.
          </p>
        </div>
      </section>

      <section className="bg-[rgb(10,35,41)] text-white p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Quick Contact Info</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            12th Flr, West Park Towers, Westlands, Nairobi
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +254 705 820 063
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@adierandco.com
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Mon – Fri: 09:00 - 06:00
          </li>
        </ul>
      </section>
    </div>
  )
}
