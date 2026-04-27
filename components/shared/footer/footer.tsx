import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const services = [
  { label: "Truck Repair",          href: "/services" },
  { label: "Fleet Maintenance",     href: "/services" },
  { label: "Used Spare Parts",      href: "/services" },
  { label: "Truck & Car Wash",      href: "/services" },
  { label: "Oil Change Point",      href: "/services" },
  { label: "Accessories Store",     href: "/services" },
];

const company = [
  { label: "Home",       href: "/" },
  { label: "About Us",   href: "/about" },
  { label: "Catalog",    href: "/catalog" },
  { label: "Services",   href: "/services" },
  { label: "Contact",    href: "/contacts" },
];

const socials = [
  { icon: FaFacebook,  href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube,   href: "#", label: "YouTube" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      {/* Subtle noise texture overlay */}
      <div
        className="relative"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        }}
      >
        <div className="container mx-auto px-4 py-14 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

            {/* ── Brand column ── */}
            <div className="space-y-5 sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo.png"
                  alt="EURO TRUCK SERVICE"
                  width={160}
                  height={36}
                  style={{ width: "160px", height: "auto" }}
                />
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Professional truck repair and fleet maintenance services across
                9 locations in Switzerland. Keeping your fleet on the road.
              </p>
              {/* Socials */}
              <div className="flex items-center gap-3 pt-1">
                {socials.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex items-center justify-center size-9 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-primary hover:border-primary/30 transition-colors duration-200 shadow-sm"
                  >
                    <Icon className="size-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Services column ── */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-foreground">
                Our Services
              </h4>
              <ul className="space-y-2.5">
                {services.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-slate-500 hover:text-primary transition-colors duration-150 flex items-center gap-1.5 group"
                    >
                      <span className="size-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-150 shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Company column ── */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-foreground">
                Company
              </h4>
              <ul className="space-y-2.5">
                {company.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-slate-500 hover:text-primary transition-colors duration-150 flex items-center gap-1.5 group"
                    >
                      <span className="size-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-150 shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact column ── */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-foreground">
                Contact Us
              </h4>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href="tel:+41000000000"
                    className="flex items-start gap-3 text-sm text-slate-500 hover:text-primary transition-colors group"
                  >
                    <div className="size-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/30 transition-colors">
                      <Phone className="size-3.5 text-primary" />
                    </div>
                    <span className="pt-1">+41 (0) 00 000 00 00</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@rsfleet.ch"
                    className="flex items-start gap-3 text-sm text-slate-500 hover:text-primary transition-colors group"
                  >
                    <div className="size-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/30 transition-colors">
                      <Mail className="size-3.5 text-primary" />
                    </div>
                    <span className="pt-1">info@rsfleet.ch</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-slate-500">
                    <div className="size-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="size-3.5 text-primary" />
                    </div>
                    <span className="pt-1">Zurich, Switzerland<br />& 8 more locations</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-slate-500">
                    <div className="size-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                      <Clock className="size-3.5 text-primary" />
                    </div>
                    <span className="pt-1">Mon – Sat: 8:00 AM – 6:00 PM<br />Sun: Closed</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ── Bottom bar ── */}
        <Separator className="bg-slate-200" />
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <p>© {year} RS Fleet Service. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms"   className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
