import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ROIChartProps {
  data: any[];
}

export default function ROIChart({ data }: ROIChartProps) {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00A3B1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00A3B1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorAuth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C5A059" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#C5A059" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "#999" }}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              borderRadius: "16px",
              border: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          />
          <Area
            type="monotone"
            dataKey="authority"
            name="Autoridade Digital"
            stroke="#C5A059"
            fillOpacity={1}
            fill="url(#colorAuth)"
            strokeWidth={3}
          />
          <Area
            type="monotone"
            dataKey="leads"
            name="Leads Qualificados"
            stroke="#00A3B1"
            fillOpacity={1}
            fill="url(#colorLeads)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
