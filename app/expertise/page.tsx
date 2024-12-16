import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CapabilityStatementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[rgb(10,35,41)] mb-8">ADIER &amp; Co. CAPABILITY STATEMENT</h1>
      <p className="text-xl mb-8 text-[rgb(157,67,43)]">Building Relationships and Delivering Results</p>

      <section className="mb-12">
       
        <p className="mb-4">
          At ADIER & Co., we are pleased to present our capability to support your legal needs in Kenya and across the East African region.
        </p>
        <p className="mb-4">
          As a boutique law firm based in Nairobi, Kenya, we pride ourselves on deep industry and sector knowledge. Our approach is to function as an extension of our clients, aligning with their goals to deliver practical and effective solutions. Our areas of expertise include negotiating agreements, drafting contracts, employment law, litigation and dispute resolution, and guiding businesses through complex commercial matters.
        </p>
        <p className="mb-4">
          Our lawyers are skilled in handling both contentious and non-contentious legal issues, offering tailored services across diverse sectors. With a strong emphasis on dispute resolution, we excel in providing effective, client-focused solutions.
        </p>
        <p className="mb-4">
          We are committed to delivering clear, prompt, and pragmatic advice. Understanding your unique objectives and operational environment is central to our work. We listen, analyze, and take the time to align our services with your commercial and personal interests.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[rgb(157,67,43)] mb-4">International Standards and Local Expertise</h2>
        <p className="mb-4">
          ADIER and Co. merges international experience with local expertise, ensuring that our legal advice and services stand out in the competitive landscape. We are recognized as the &quot;go-to&quot; firm for litigation, corporate transactions, and commercial matters, trusted by both international and local clients.
        </p>
        <p className="mb-4">
          Operating in Kenya, Tanzania, and throughout East Africa, we leverage our relationships and regional knowledge to deliver legal solutions tailored to your specific operations.
        </p>
        <p className="mb-4">
          Our unique model combines close collaboration with internationally qualified lawyers and local expertise. This enables us to provide a responsive, seamless, and superior service unmatched by other firms in the region.
        </p>
      </section>

      <Button asChild className="bg-[rgb(157,67,43)] hover:bg-[rgb(10,35,41)] text-white">
        <Link href="/contact">Contact Us for More Information</Link>
      </Button>
    </div>
  )
}

