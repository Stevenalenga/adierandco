import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const teamMembers = [
  {
    name: "STEPHEN ADIER",
    position: "Managing Partner",
    image: "/placeholder.svg?height=400&width=300",
    description: "Stephen Adier is the Managing Partner at Adier & Co. Legal. With years of experience in corporate law, he leads our team with vision and expertise."
  },
  {
    name: "LIZZAH AQUILIAH",
    position: "Senior Associate",
    image: "/placeholder.svg?height=400&width=300",
    description: "Lizzah Aquiliah specializes in employment law and dispute resolution. Her analytical skills and attention to detail are invaluable to our clients."
  },
  {
    name: "GEOFFREY KOECH",
    position: "Associate",
    image: "/placeholder.svg?height=400&width=300",
    description: "Geoffrey Koech focuses on intellectual property and technology law. His innovative approach helps our clients navigate complex legal landscapes."
  },
  {
    name: "KIBET AYUB KIPROP",
    position: "Associate",
    image: "/placeholder.svg?height=400&width=300",
    description: "Kibet Ayub Kiprop specializes in banking and finance law. His expertise in this area provides crucial support to our corporate clients."
  }
]

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-[rgb(10,35,41)] text-center mb-12">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={400}
                className="w-full h-auto object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl font-semibold text-[rgb(157,67,43)] mb-2">{member.name}</CardTitle>
              <p className="text-sm text-gray-600 mb-4">{member.position}</p>
              <p className="text-sm text-[rgb(10,35,41)]">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

