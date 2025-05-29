import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-black py-8">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <span className="text-xl font-bold text-orange-400">Budget Bondhu</span>
          </Link>
          <p className="text-sm text-zinc-400">Making financial education fun and accessible for children under 17.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-zinc-400 hover:text-orange-400">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-orange-400">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-orange-400">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-orange-400">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-orange-400">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/articles" className="text-zinc-400 hover:text-orange-400">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-zinc-400 hover:text-orange-400">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/games" className="text-zinc-400 hover:text-orange-400">
                Games
              </Link>
            </li>
            <li>
              <Link href="/learn" className="text-zinc-400 hover:text-orange-400">
                Learn
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-orange-400">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-zinc-400 hover:text-orange-400">
                Our Mission
              </Link>
            </li>
            <li>
              <Link href="/about#vision" className="text-zinc-400 hover:text-orange-400">
                Our Vision
              </Link>
            </li>
            <li>
              <Link href="/about#team" className="text-zinc-400 hover:text-orange-400">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-zinc-400 hover:text-orange-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-orange-400">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="text-zinc-400 hover:text-orange-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-zinc-400 hover:text-orange-400">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-zinc-400 hover:text-orange-400">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t border-zinc-800 pt-8 px-4 md:px-6">
        <p className="text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} Budget Bondhu. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
