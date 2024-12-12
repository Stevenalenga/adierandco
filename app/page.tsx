import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const values = [
  {
    title: "Innovation",
    description: "We are dedicated to finding more efficient and dynamic ways to serve our clients."
  },
  {
    title: "Excellence",
    description: "Our passion and commitment to excellence is evident in our delivery of quality services."
  },
  {
    title: "Client Relationship",
    description: "We believe that our clients are the life wire of our practice. We do everything within our ability to keep them satisfied."
  },
  {
    title: "Team Spirit",
    description: "We believe in working together as a family to achieve the best results."
  },
  {
    title: "Integrity",
    description: "Our word is our bond and we hold ourselves to the highest industry standards."
  }
]

const clients = [
  { name: "Apollo Agriculture", logo: "/clients/apollo.png" },
  { name: "Neural Labs", logo: "/clients/neural_labs.jpg" },
  { name: "Nexus Systems Tech Limited", logo: "/clients/nexus.jpg" },
  { name: "Weatherman Africa", logo: "/clients/weatherman.jpg" },
]

const practiceAreas = [
  {
    title: "CORPORATE & COMMERCIAL PRACTICE",
    description: "From start-ups looking to disrupt the market to recognised global conglomerates, we provide specialised commercial legal services regardless of where your business sits on the maturity curve. We are therefore committed to tailoring our contractual so..."
  },
  {
    title: "LITIGATON AND DISPUTE RESOLUTION",
    description: "We continue to create a team of lawyers whose practical experience, technical strength and strategic insight is unmatched. We strive to deliver successful outcomes in some of the most complex and sensitive disputes and investigations in the market. O..."
  },
  {
    title: "EMPLOYMENT & LABOUR RELATIONS",
    description: "From start-ups, listed companies, individuals to charitable organisations, we advise our clients on their most difficult and sensitive employment issues. We understand that this is one area where one size does not fit all. We therefore offer a depth ..."
  },
  {
    title: "BANKING, FINANCE & REAL ESTATE",
    description: "Banking, Finance & Real Estate forms a key part of the global and local investment market. We have considerable experience advising individuals, corporate occupiers, investors, developers, governments and funders on the legal requirements and strateg..."
  },
  {
    title: "IMMIGRATION ADVISORY",
    description: "We pride ourselves in our ability to help businesses set up in the country through our continued assistance of our Clients with bespoke legal and practical advice on immigration issues relating to their employees. We not only offer a depth of technic..."
  },
  {
    title: "INTELLECTUAL PROPERTIES AND TECHNOLOGY",
    description: "Companies around the world turn to us for their most important intellectual property registration and advice. We undertake various intellectual property registrations as well as institute and defend intellectual property claims before tribunals and ..."
  },
  {
    title: "DATA PROTECTION AND PRIVACY",
    description: "Knowing data protection challenges can arise at any time, we guide our Clients through the regulatory and reputational challenges. We are trusted advisors of companies and individuals we represent whether in responding to breaches, dealing with regul..."
  }
]

export default function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[rgb(10,35,41)] mb-6">
            Welcome To
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-[rgb(157,67,43)] mb-12">
            Adier & Co.
          </h2>
          <p className="text-lg md:text-xl text-[rgb(10,35,41)] max-w-3xl mx-auto mb-12">
            Adier & Co. Legal is a full service law firm headquartered in Nairobi, Kenya. 
            We offer top level legal and business services to both local and international clients. 
            Our expertise on legal issues cuts across borders.
          </p>
          <Button asChild className="bg-[rgb(157,67,43)] hover:bg-[rgb(10,35,41)] text-white">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[url('/law.jpg')] bg-cover bg-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/90 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-[rgb(157,67,43)] mb-4">{value.title}</h3>
                <p className="text-[rgb(10,35,41)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[rgb(10,35,41)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Trusted Clients</h2>
          <div className="overflow-hidden">
            <div className="flex animate-marquee">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="flex-shrink-0 w-64 mx-8">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={200}
                    height={100}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(10,35,41)] text-center mb-12">Our Practice Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[rgb(157,67,43)]">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[rgb(10,35,41)]">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-[rgb(157,67,43)] hover:bg-[rgb(10,35,41)] text-white">
              <Link href="/practice-areas">View All Practice Areas</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

