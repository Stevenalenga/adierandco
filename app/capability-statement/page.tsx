import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CapabilityStatementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[rgb(10,35,41)] mb-8">ADIER And Co. CAPABILITY STATEMENT</h1>
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
          We combine international experience with local expertise to ensure that our level of advice and provision of legal service is unrivalled by our competition. 
          We are building a reputation as the &quot;go-to&quot; firm for all litigious matters, corporate transactions and commercial matters. 
          And are seen as trusted advisors for both our international and local clients.
        </p>
        <p className="mb-4">
          In Kenya, Tanzania and throughout East Africa, 
          we are dedicated to leveraging our relationships to provide a wide range of legal services tailored to support the way you operate.
        </p>
        <p className="mb-4">
          Having close relationships with internationally qualified lawyers complementing local qualifications is a model which allows us to deliver a much more responsive service than other law firms established in the region.
        </p>
      </section>

      <Button asChild className="bg-[rgb(157,67,43)] hover:bg-[rgb(10,35,41)] text-white">
        <Link href="/contact">Contact Us for More Information</Link>
      </Button>
    </div>
  );
}
