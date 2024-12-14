import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CapabilityStatementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[rgb(10,35,41)] mb-8">ADIER & Co. CAPABILITY STATEMENT</h1>
      <p className="text-xl mb-8">Building relationships, focus on results.</p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[rgb(157,67,43)] mb-4">EXECUTIVE SUMMARY</h2>
        <p className="mb-4">
          We have the pleasure of setting out the details of our capability to support you in relation to your activities in Kenya and elsewhere in the region.
        </p>
        <p className="mb-4">
          We are a boutique law firm with offices in Nairobi, Kenya. Our practice is grounded in industry and sector knowledge. We like to think of ourselves as an extension of our clients. Our work ranges from negotiating agreements, drafting contracts, employment, litigation and dispute resolution and helping businesses in commercial matters.
        </p>
        <p className="mb-4">
          Our lawyers handle contentious and non-contentious legal matters and provide bespoke legal services in various sectors. We have particular expertise in dispute resolution.
        </p>
        <p className="mb-4">
          We pride ourselves in clarity, promptness and straightforwardness of our response and pragmatic advice. Understanding your objectives and operating environment is valuable to us. Therefore, we listen and take time to understand your commercial and personal interests and objectives.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[rgb(157,67,43)] mb-4">INTERNATIONAL STANDARDS WITH LOCAL EXPERTISE</h2>
        <p className="mb-4">
        
We seamlessly blend international experience with local expertise, 
delivering legal services and advice that set us apart from the competition.

Recognized for our excellence,
 we are establishing ourselves as the "go-to" firm for litigious matters, 
 corporate transactions, and commercial issues. Our commitment to providing reliable,
 insightful, and effective solutions has earned us the trust of both international and local clients, 
 cementing our reputation as their trusted advisors.
        </p>
        <p className="mb-4">
        Across Kenya, Tanzania, and the wider East African region, 
        we are committed to leveraging our extensive networks and relationships to deliver a comprehensive range of legal services.
         Our solutions are thoughtfully tailored to align with your operations, 
         ensuring seamless support for your unique needs.
        </p>
        <p className="mb-4">
        Our close partnerships with internationally qualified lawyers,
         combined with strong local expertise, 
         enable us to deliver a highly responsive and efficient service.
          This unique model sets us apart from other law firms in the region, ensuring our clients receive seamless, 
          world-class legal solutions tailored to their needs.
        </p>
      </section>

      <Button asChild className="bg-[rgb(157,67,43)] hover:bg-[rgb(10,35,41)] text-white">
        <Link href="/contact">Contact Us for More Information</Link>
      </Button>
    </div>
  )
}

