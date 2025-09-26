"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function FadeInSection({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} 
      // once: false = เล่นซ้ำทุกครั้งเมื่อ scroll มาเจอ
      // amount: 0.2 = trigger เมื่อ section โผล่มาอย่างน้อย 20%
    >
      {children}
    </motion.div>
  )
}
