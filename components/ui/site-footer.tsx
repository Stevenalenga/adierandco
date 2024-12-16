import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const SocialIcon = ({ href, icon, hoverColor }: { href: string; icon: React.ReactNode; hoverColor: string }) => (
  <Link href={href} className={`text-white hover:${hoverColor} transition-colors duration-200`}>
    {icon}
  </Link>
)

export function SiteFooter() {
  return (
    <footer className="bg-[rgb(10,35,41)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/adierandco.png"
              alt="Adier & Co Logo"
              width={192}
              height={57}
              className="h-auto w-48 mb-4"
            />
            <p className="mb-4">Adier & Co. Legal is a full service law firm headquartered in Nairobi, Kenya. We offer top level legal and business services to both local and international clients. Our expertise on legal issues cuts across borders.</p>
            <div className="space-y-2">
              <p className="flex items-center"><MapPin className="mr-2" size={16} /> 12th Floor, Westpark Towers, Mpesi Lane – Off Muthithi Road</p>
              <p className="flex items-center"><Mail className="mr-2" size={16} /> P.O. Box 1570 – 00606, Nairobi, Kenya</p>
              <p className="flex items-center"><Phone className="mr-2" size={16} /> +254705820063, +254719725219</p>
              <p className="flex items-center"><Clock className="mr-2" size={16} /> Mon – Fri: 09:00 - 06:00</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Latest Articles</h3>
            <div className="flex items-center mb-4">
              <Image
                src="/adierandco.png"
                alt="Article thumbnail"
                width={50}
                height={50}
                className="rounded mr-4"
              />
              <div>
                <h4 className="font-semibold">What Startups Need To Know About SAFEs</h4>
                <p className="text-sm text-gray-400">May 13th, 2023</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <div className="flex space-x-4 mb-4">
              <SocialIcon
                href="https://twitter.com/adierandco"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                }
                hoverColor="text-[#1DA1F2]"
              />
              <SocialIcon
                href="https://www.linkedin.com/company/adierandco"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                }
                hoverColor="text-[#0077B5]"
              />
              <SocialIcon
                href="https://www.instagram.com/adierandco"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                }
                hoverColor="text-[#E4405F]"
              />
            </div>
            <p className="mb-4">Subscribe to receive regular updates from Adier & Co. Legal</p>
            <form className="flex flex-col space-y-4">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white text-[rgb(10,35,41)]"
              />
              <Button type="submit" className="bg-[rgb(157,67,43)] hover:bg-[rgb(157,67,43)/80]">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Adier & Co. All Rights Reserved</p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><Link href="/privacy-policy" className="hover:text-[rgb(157,67,43)]">Privacy Policy</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

