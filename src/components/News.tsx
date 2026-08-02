import React from "react";
import { motion } from "motion/react";

export default function News() {
  const newsItems = [
    {
      tag: "News",
      title: "Russell-Cooke advises on the sale of a leading...",
      date: "05 Mar 2024",
    },
    {
      tag: "News",
      title: "Firm-wide promotion round announced for 2024",
      date: "01 Mar 2024",
    },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto">
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
          {newsItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[280px] md:min-w-[400px] flex-shrink-0 border-t-4 border-[#002B36] pt-4"
            >
              <span className="inline-block bg-[#002B36] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest mb-4">
                {item.tag}
              </span>
              <h3 className="text-[18px] md:text-[22px] font-bold text-[#002B36] leading-tight mb-4 hover:underline cursor-pointer">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs font-medium">{item.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
