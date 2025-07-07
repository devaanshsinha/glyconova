'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, BarChart3, Activity, Target, Shield, Upload, Home, HelpCircle } from 'lucide-react';

export function NavigationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigationSections = [
    {
      title: "Dashboard",
      items: [
        { name: "Dashboard", href: "/dashboard", icon: Home, description: "Your main analytics dashboard" }
      ]
    },
    {
      title: "Upload Data",
      items: [
        { name: "Dexcom Data", href: "/upload-dexcom", icon: Upload, description: "Upload glucose data from Dexcom Clarity" },
        { name: "Omnipod Data", href: "/upload-omnipod", icon: Upload, description: "Upload insulin data from Omnipod" }
      ]
    },
    {
      title: "Learn About Features",
      items: [
        { name: "Glucose Patterns", href: "/info-glucose", icon: BarChart3, description: "Visualize glucose trends and patterns" },
        { name: "Insulin Tracking", href: "/info-insulin", icon: Activity, description: "Track and analyze insulin usage" },
        { name: "Target Goals", href: "/info-targets", icon: Target, description: "Set targets and get recommendations" },
        { name: "Security & Privacy", href: "/info-security", icon: Shield, description: "How we protect your data" }
      ]
    },
    {
      title: "Support",
      items: [
        { name: "About", href: "/about", icon: HelpCircle, description: "Learn more about GlycoNova" },
        { name: "Contact", href: "/contact", icon: HelpCircle, description: "Get help and support" },
        { name: "Privacy Policy", href: "/privacy", icon: Shield, description: "Our privacy and data protection policy" }
      ]
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-gray-50"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-sm font-medium">Quick Nav</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-2">
            {navigationSections.map((section, sectionIndex) => (
              <div key={section.title} className={sectionIndex > 0 ? "border-t border-gray-100" : ""}>
                <div className="px-4 py-2">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-start space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      <item.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}