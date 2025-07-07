import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">GlycoNova</h3>
          <p className="text-gray-400">
            Empowering your Type 1 Diabetes journey with data-driven insights.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
          </ul>
        </div>
        <div></div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="https://github.com/devaanshsinha/glyconova" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/devaanshsinha/" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>© 2025 GlycoNova. All rights reserved.</p>
      </div>
    </footer>
  );
}