
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const NetflixFooter = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-8">
          <Facebook className="cursor-pointer hover:text-white transition-colors" size={24} />
          <Instagram className="cursor-pointer hover:text-white transition-colors" size={24} />
          <Twitter className="cursor-pointer hover:text-white transition-colors" size={24} />
          <Youtube className="cursor-pointer hover:text-white transition-colors" size={24} />
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="space-y-3">
            <a href="#" className="block hover:underline">Audio Description</a>
            <a href="#" className="block hover:underline">Help Center</a>
            <a href="#" className="block hover:underline">Gift Cards</a>
            <a href="#" className="block hover:underline">Media Center</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block hover:underline">Investor Relations</a>
            <a href="#" className="block hover:underline">Jobs</a>
            <a href="#" className="block hover:underline">Terms of Use</a>
            <a href="#" className="block hover:underline">Privacy</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block hover:underline">Legal Notices</a>
            <a href="#" className="block hover:underline">Cookie Preferences</a>
            <a href="#" className="block hover:underline">Corporate Information</a>
            <a href="#" className="block hover:underline">Contact Us</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block hover:underline">Account</a>
            <a href="#" className="block hover:underline">Ways to Watch</a>
            <a href="#" className="block hover:underline">Only on Netflix</a>
            <a href="#" className="block hover:underline">Speed Test</a>
          </div>
        </div>

        {/* Service Code */}
        <div className="mb-6">
          <button className="border border-gray-400 px-4 py-2 text-sm hover:text-white transition-colors">
            Service Code
          </button>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          © 1997-2024 Netflix, Inc.
        </div>
      </div>
    </footer>
  );
};

export default NetflixFooter;
