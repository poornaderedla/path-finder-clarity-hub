import { Link } from "react-router-dom";
import { Brain, Users } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-20 xl:gap-28">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">PathFinder</span>
            </div>
            <p className="text-white/70 text-sm">
              Helping students discover their perfect academic and career paths through research-backed assessments.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Assessments</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/assessments" className="hover:text-white transition-colors">Skills & Software</Link></li>
              <li><Link to="/assessments" className="hover:text-white transition-colors">Career & Roles</Link></li>
              <li><Link to="/assessments" className="hover:text-white transition-colors">Subject Fit</Link></li>
              <li><Link to="/assessments" className="hover:text-white transition-colors">Stream Switching</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <p className="text-white/70 text-sm mb-4">
              Follow us for the latest updates and career insights.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-white/10 rounded-lg hover:bg-white/20 cursor-pointer transition-colors">
                <Users className="h-4 w-4 text-white" />
              </div>
              <div className="p-2 bg-white/10 rounded-lg hover:bg-white/20 cursor-pointer transition-colors">
                <Brain className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          <p>2024 PathFinder. All rights reserved. 2 Built with  for students</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 