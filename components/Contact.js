'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion-variants'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [formErrors, setFormErrors] = useState({})

    const validateForm = () => {
        const errors = {}
        if (!formData.name.trim()) errors.name = 'Full name is required'
        if (!formData.email.trim()) {
            errors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email address'
        }
        if (!formData.message.trim()) {
            errors.message = 'Message cannot be empty'
        } else if (formData.message.length < 10) {
            errors.message = 'Message should be at least 10 characters'
        }
        return errors
    }

    const mutation = useMutation({
        mutationFn: async (data) => {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('Email service is not configured correctly.')
            }

            return emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    reply_to: data.email, // Explicitly set for better template control
                    message: data.message,
                },
                publicKey
            )
        },
        onSuccess: () => {
            setFormData({ name: '', email: '', message: '' })
            setFormErrors({})
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validateForm()
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors)
            return
        }
        mutation.mutate(formData)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }))
        }
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
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`input bg-transparent border-0 border-b transition-all rounded-none pl-0 text-white font-medium h-12 w-full focus:outline-none placeholder:text-white/10 ${formErrors.name ? 'border-error' : 'border-white/10 focus:border-primary'}`}
                            />
                            {formErrors.name && <span className="text-error text-[10px] uppercase font-bold mt-1 tracking-widest">{formErrors.name}</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label mb-2">
                                <span className="label-text font-bold uppercase text-[12px] tracking-widest text-white/90">Email <span className="text-primary">*</span></span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email address"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`input bg-transparent border-0 border-b transition-all rounded-none pl-0 text-white font-medium h-12 w-full focus:outline-none placeholder:text-white/10 ${formErrors.email ? 'border-error' : 'border-white/10 focus:border-primary'}`}
                            />
                            {formErrors.email && <span className="text-error text-[10px] uppercase font-bold mt-1 tracking-widest">{formErrors.email}</span>}
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label mb-2">
                            <span className="label-text font-bold uppercase text-[12px] tracking-widest text-white/90">Message <span className="text-primary">*</span></span>
                        </label>
                        <textarea
                            name="message"
                            placeholder="Write your message here..."
                            value={formData.message}
                            onChange={handleInputChange}
                            className={`textarea bg-transparent border-0 border-b transition-all rounded-none pl-0 text-white font-medium min-h-[120px] leading-relaxed w-full focus:outline-none placeholder:text-white/10 ${formErrors.message ? 'border-error' : 'border-white/10 focus:border-primary'}`}
                        ></textarea>
                        {formErrors.message && <span className="text-error text-[10px] uppercase font-bold mt-1 tracking-widest">{formErrors.message}</span>}
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
                                {mutation.error.message || 'Failed to send message. Please try again or email me directly.'}
                            </motion.p>
                        )}
                    </div>
                </motion.form>
            </motion.div>
        </section>
    )
}
