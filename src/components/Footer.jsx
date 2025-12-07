import React from 'react';
import { PawPrint, Heart, Mail, MapPin, X, Facebook, Instagram, ClipboardList, BookOpen, Lightbulb, CreditCard } from 'lucide-react'; 

const PetCareFooter = () => {
    
    const paymentIcons = [
        { name: 'Visa', icon: CreditCard, color: 'text-blue-700' }, 
        { name: 'MasterCard', icon: CreditCard, color: 'text-red-600' }, 
        { name: 'Amex', icon: CreditCard, color: 'text-indigo-900' }, 
    ];

    const servicesLinks = [
        { name: 'Grooming', icon: ClipboardList },
        { name: 'Training', icon: BookOpen },
        { name: 'Wellness Check', icon: Heart },
        { name: 'Emergency Care', icon: Lightbulb }
    ];

    const companyLinks = [
        { name: 'Our Story', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press Center', href: '#' }
    ];

    const legalLinks = [
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Cookie Policy', href: '#' }
    ];

    return (
        <>
            <div className="relative bottom-0 left-0 right-0 z-10 -mb-1">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full text-[#093672]">
                    <path fill="currentColor" d="M0 100L1440 100V40C1290 80 940 100 720 100C500 100 150 80 0 40V100Z"/>
                </svg>
            </div>

            <footer className="bg-linear-to-r bg-[#093672] text-white shadow-inner border-t border-gray-200">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        
                        
                        <div className="col-span-2 md:col-span-1 flex flex-col items-start space-y-4">
                            <div className="flex items-center text-3xl font-bold text-blue-300">
                                <PawPrint className="w-8 h-8 mr-2 text-blue-300" />
                                  Petpaws
                            </div>
                            <p className="text-sm text-gray-300 max-w-[200px]">
                                Your trusted partner in pet wellness and happiness.
                            </p>
                            <div className="flex space-x-4">
                                
                                <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-blue-400 transition duration-150"><Facebook className="w-6 h-6" /></a>
                                <a href="#" aria-label="X (formerly Twitter)" className="text-gray-300 hover:text-white transition duration-150">
                                    <X className="w-6 h-6" />
                                </a>
                                <a href="#" aria-label="Instagram" className="text-blue-300 hover:text-blue-500 transition duration-150"><Instagram className="w-6 h-6" /></a>
                            </div>
                        </div>

                        
                        <nav className="space-y-4">
                            <h6 className="text-lg font-semibold text-white border-b-2 border-blue-400 pb-1 inline-block">Our Services</h6>
                            {servicesLinks.map(link => (
                                <a 
                                    key={link.name}
                                    href="#" 
                                    className="flex items-center text-sm link link-hover text-gray-300 hover:text-blue-400 transition duration-150"
                                >
                                    <link.icon className="w-4 h-4 mr-2 text-blue-400" />
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        
                        <nav className="space-y-4">
                            <h6 className="text-lg font-semibold text-white border-b-2 border-blue-400 pb-1 inline-block">About Us</h6>
                            {companyLinks.map(link => (
                                <a 
                                    key={link.name}
                                    href={link.href} 
                                    className="block text-sm link link-hover text-gray-300 hover:text-blue-400 transition duration-150"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        
                        <nav className="space-y-4">
                            <h6 className="text-lg font-semibold text-white border-b-2 border-blue-400 pb-1 inline-block">Legal</h6>
                            {legalLinks.map(link => (
                                <a 
                                    key={link.name}
                                    href={link.href} 
                                    className="block text-sm link link-hover text-gray-300 hover:text-blue-400 transition duration-150"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                        
                        
                        <nav className="space-y-4">
                            <h6 className="text-lg font-semibold text-white border-b-2 border-blue-400 pb-1 inline-block">Get In Touch</h6>
                            <p className="flex items-start text-sm text-gray-300">
                                <MapPin className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" />
                                123 Paw Lane, Petville, CA 90210
                            </p>
                            <p className="flex items-center text-sm text-gray-300">
                                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                                support@petpulse.com
                            </p>
                        </nav>
                    </div>
                    

                    
                    <div className="mt-12 pt-6 border-t border-gray-500">
                        
                        
                        <div className="mb-4 flex justify-center items-center space-x-4">
                            <span className="text-sm font-semibold text-gray-300">We Accept:</span>
                            {paymentIcons.map(icon => (
                                <div key={icon.name} className={`flex items-center space-x-1 ${icon.color}`}>
                                    <icon.icon className="w-6 h-6" />
                                    <span className="text-sm font-medium">{icon.name}</span>
                                </div>
                            ))}
                        </div>
                        
                        
                        <div className="text-center">
                            <p className="text-sm text-gray-400">
                                &copy; {new Date().getFullYear()} PetPaws. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default PetCareFooter;