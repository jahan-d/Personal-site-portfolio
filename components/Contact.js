'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion-variants'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import emailjs from 'emailjs-com'
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const mutation = useMutation({
        mutationFn: async (data) => {
            // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' 
            // with your actual EmailJS values
            return emailjs.send(
                'service_7xic0rr',
                'template_nu7fi5o',
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                },
                'Brrb8VAvhH4NhCinp'
            )
        },
        onSuccess: () => {
            setFormData({ name: '', email: '', message: '' })
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        mutation.mutate(formData)
    }

    return (
        <section id="contact" className="py-24 border-t border-white/5">
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl"
            >
                {/* Section Label */}
                <motion.div variants={fadeUp} className="section-label mb-10">
                    <FaEnvelope className="text-sm" /> CONTACT
                </motion.div>

                {/* Headline */}
                <motion.h2
                    variants={fadeUp}
                    className="text-[45px] md:text-[60px] font-light mb-12 leading-[1.1] tracking-tight text-white italic"
                >
                    Let's work <span className="text-primary font-bold not-italic">Together!</span>
                </motion.h2>

                {/* Contact Form */}
                <motion.form
                    variants={fadeUp}
                    onSubmit={handleSubmit}
                    className="space-y-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="form-control w-full">
                            <label className="label mb-2">
                                <span className="label-text font-bold uppercase text-[12px] tracking-widest text-white/90">Full Name <span className="text-primary">*</span></span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="input bg-transparent border-0 border-b border-white/10 focus:border-primary transition-all rounded-none pl-0 text-white font-medium h-12 w-full focus:outline-none placeholder:text-white/10"
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label mb-2">
                                <span className="label-text font-bold uppercase text-[12px] tracking-widest text-white/90">Email <span className="text-primary">*</span></span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="input bg-transparent border-0 border-b border-white/10 focus:border-primary transition-all rounded-none pl-0 text-white font-medium h-12 w-full focus:outline-none placeholder:text-white/10"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label mb-2">
                            <span className="label-text font-bold uppercase text-[12px] tracking-widest text-white/90">Message <span className="text-primary">*</span></span>
                        </label>
                        <textarea
                            placeholder="Write your message here..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="textarea bg-transparent border-0 border-b border-white/10 focus:border-primary transition-all rounded-none pl-0 text-white font-medium min-h-[120px] leading-relaxed w-full focus:outline-none placeholder:text-white/10"
                            required
                        ></textarea>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={mutation.isPending}
                            className={`btn h-[60px] rounded-full px-12 font-bold tracking-widest transition-all uppercase flex items-center gap-3 bg-primary text-black border-none ${mutation.isPending ? 'opacity-50' : 'hover:bg-primary/90 hover:scale-105'}`}
                        >
                            {mutation.isPending ? 'Sending...' : (
                                <>
                                    <FaPaperPlane size={14} />
                                    Send message
                                </>
                            )}
                        </button>

                        {mutation.isSuccess && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 text-primary font-bold uppercase text-xs tracking-widest"
                            >
                                Message sent successfully! I'll get back to you soon.
                            </motion.p>
                        )}

                        {mutation.isError && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 text-error font-bold uppercase text-xs tracking-widest"
                            >
                                Failed to send message. Please try again or email me directly.
                            </motion.p>
                        )}
                    </div>
                </motion.form>
            </motion.div>
        </section>
    )
}
