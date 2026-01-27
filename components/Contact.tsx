import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, handle submission here
        alert('Thank you for your inquiry. We will be in touch shortly.');
        setFormState({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 bg-beige-dark/20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-5xl md:text-6xl text-hunter mb-4">Let's Talk</h2>
                    <p className="text-hunter/70 max-w-xl mx-auto">
                        We take a limited number of events each year to give you our full attention. Contact us today to check availability.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/3 space-y-8 lg:pt-10"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-hunter rounded-full flex items-center justify-center text-beige">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-hunter uppercase text-sm tracking-wider">Call Us</h4>
                                <a href="tel:4379797532" className="text-hunter/80 font-light hover:text-hunter-light transition-colors">(437) 979-7532</a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-hunter rounded-full flex items-center justify-center text-beige">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-hunter uppercase text-sm tracking-wider">Email Us</h4>
                                <p className="text-hunter/80 font-light break-all">bookings@prosperityeventsplanning.com</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-2/3"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-hunter font-semibold">Name</label>
                                <input 
                                    type="text" 
                                    value={formState.name}
                                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                                    required
                                    className="w-full bg-transparent border-b border-hunter/30 py-3 focus:outline-none focus:border-hunter transition-colors text-hunter placeholder-hunter/30"
                                    placeholder="Your Full Name"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-hunter font-semibold">Email</label>
                                    <input 
                                        type="email" 
                                        value={formState.email}
                                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                                        required
                                        className="w-full bg-transparent border-b border-hunter/30 py-3 focus:outline-none focus:border-hunter transition-colors text-hunter placeholder-hunter/30"
                                        placeholder="Your Email Address"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-hunter font-semibold">Phone</label>
                                    <input 
                                        type="tel" 
                                        value={formState.phone}
                                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                                        className="w-full bg-transparent border-b border-hunter/30 py-3 focus:outline-none focus:border-hunter transition-colors text-hunter placeholder-hunter/30"
                                        placeholder="Your Phone Number"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-hunter font-semibold">Message</label>
                                <textarea 
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                                    required
                                    className="w-full bg-transparent border-b border-hunter/30 py-3 focus:outline-none focus:border-hunter transition-colors text-hunter placeholder-hunter/30 resize-none"
                                    placeholder="Tell us about your event..."
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="px-10 py-4 bg-hunter text-beige text-sm tracking-widest uppercase hover:bg-hunter-light transition-all shadow-md"
                            >
                                Send Inquiry
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;