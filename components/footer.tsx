import Link from "next/link"
import { MapPin, Mail, Phone, Calendar } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white tracking-tight">WITS 2026</h3>
            <p className="text-slate-400 font-medium">Workshop on Information Technologies & Systems</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-400">
                <Calendar className="w-5 h-5" />
                <span>August 20-22, 2026</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin className="w-5 h-5" />
                <span>Fez, Morocco</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Conference</h4>
            <div className="space-y-3">
              <Link
                href="/keynote-speakers"
                className="block text-slate-400 hover:text-white transition-colors font-medium"
              >
                Keynote Speakers
              </Link>
              <Link href="/program" className="block text-slate-400 hover:text-white transition-colors font-medium">
                Program
              </Link>
              <Link
                href="/call-for-papers"
                className="block text-slate-400 hover:text-white transition-colors font-medium"
              >
                Call for Papers
              </Link>
              <Link
                href="/registration"
                className="block text-slate-400 hover:text-white transition-colors font-medium"
              >
                Registration
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Information</h4>
            <div className="space-y-3">
              <Link href="/venue" className="block text-slate-400 hover:text-white transition-colors font-medium">
                Venue & Travel
              </Link>
              <Link href="/committees" className="block text-slate-400 hover:text-white transition-colors font-medium">
                Committees
              </Link>
              <Link href="/contact" className="block text-slate-400 hover:text-white transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-5 h-5" />
                <span>info@wits2026.org</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-5 h-5" />
                <span>+212 5XX XX XX XX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-400">
          <p>&copy; 2026 WITS Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
