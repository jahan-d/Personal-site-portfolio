import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Basic check to ensure keys are set
        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS environment variables are missing.");
            setSubmitStatus('error');
            setIsSubmitting(false);
            return;
        }

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            reply_to: formData.email, // Standard EmailJS templates often use this
            message: formData.message,
            to_name: 'Jahan',
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error("Failed to send email:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        }
    };

    return (
        <div className="max-w-2xl mx-auto pt-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden"
            >
                {/* Background Glow Effect */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

                <h2 className="text-3xl font-bold text-white mb-2 text-center">Get in <span className="text-cyan-400">Touch</span></h2>
                <p className="text-slate-400 text-center mb-8">
                    Have a project in mind? Let's build something together.<br />
                    Email: <span className="text-cyan-400 select-all">jahanebnadelower@gmail.com</span><br />
                    Facebook: <a href="https://www.facebook.com/jahan.d47/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">jahan.d47</a>
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label text-slate-300 text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Jahan Ebna Delower"
                                className={`input bg-slate-900/50 border-slate-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 w-full transition-all duration-300 ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                            />
                            {errors.name && <span className="text-red-400 text-xs mt-1 ml-1">{errors.name}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label text-slate-300 text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="jahanebnadelower@gmail.com"
                                className={`input bg-slate-900/50 border-slate-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 w-full transition-all duration-300 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                            />
                            {errors.email && <span className="text-red-400 text-xs mt-1 ml-1">{errors.email}</span>}
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label text-slate-300 text-sm font-medium mb-1">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`textarea bg-slate-900/50 border-slate-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 h-32 w-full resize-none transition-all duration-300 ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                            placeholder="Tell me about your project..."
                        ></textarea>
                        {errors.message && <span className="text-red-400 text-xs mt-1 ml-1">{errors.message}</span>}
                    </div>

                    <AnimatePresence>
                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="alert alert-success bg-emerald-500/20 border border-emerald-500/50 text-emerald-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Message sent successfully! I'll get back to you soon.</span>
                            </motion.div>
                        )}
                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="alert alert-error bg-red-500/20 border border-red-500/50 text-red-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Failed to send message. Please try again or email me directly.</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        disabled={isSubmitting}
                        className="btn w-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white border-none text-lg normal-case shadow-[0_0_20px_rgba(56,189,248,0.3)] disabled:opacity-70 disabled:text-white/50"
                    >
                        {isSubmitting ? (
                            <span className="loading loading-spinner loading-md"></span>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default ContactPage;
