'use client'

import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion-variants'

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const mutation = useMutation({
        mutationFn: async (data) => {
            // Replace with your actual EmailJS credentials later
            // return emailjs.send('service_xxx', 'template_xxx', data, 'user_xxx')

            // Simulating API call for now to demonstrate UI
            return new Promise((resolve) => setTimeout(resolve, 2000))
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
        <motion.section
            id="contact"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="py-20 px-4 md:px-8 bg-base-100"
        >
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Let's Build <br /><span className="text-primary">Something Great.</span></h2>
                    <p className="text-white/60 font-medium mb-8 leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-white/80 font-bold uppercase tracking-widest text-xs">
                            <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">📧</span>
                            jahanebnadelower@gmail.com
                        </div>
                        <div className="flex items-center gap-4 text-white/80 font-bold uppercase tracking-widest text-xs">
                            <span className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">📍</span>
                            Dhaka, Bangladesh
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="card bg-base-200 border border-white/5 shadow-2xl p-8 space-y-6">
                    <div className="form-control">
                        <label className="label text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Name</label>
                        <input
                            type="text"
                            className="input input-bordered bg-base-300 border-white/5 focus:border-primary/50 text-white font-medium"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Email</label>
                        <input
                            type="email"
                            className="input input-bordered bg-base-300 border-white/5 focus:border-primary/50 text-white font-medium"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Message</label>
                        <textarea
                            className="textarea textarea-bordered bg-base-300 border-white/5 focus:border-primary/50 text-white font-medium h-32"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className={`btn btn-primary w-full font-black uppercase tracking-widest ${mutation.isPending ? 'loading' : ''}`}
                        disabled={mutation.isPending}
                    >
                        {mutation.isPending ? 'Sending...' : 'Send Message'}
                    </button>

                    {mutation.isSuccess && (
                        <div className="alert alert-success bg-success/20 border-success/30 text-success text-xs font-bold uppercase tracking-widest">
                            <span>Message sent successfully!</span>
                        </div>
                    )}
                </form>
            </div>
        </motion.section>
    )
}
