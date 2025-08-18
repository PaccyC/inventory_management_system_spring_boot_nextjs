"use client";

import { ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", ordered: 4000, delivered: 2400 },
  { name: "Feb", ordered: 3000, delivered: 2210 },
  { name: "Mar", ordered: 2000, delivered: 2290 },
  { name: "Apr", ordered: 2780, delivered: 2000 },
  { name: "May", ordered: 1890, delivered: 2181 },
  { name: "Jun", ordered: 2390, delivered: 2500 },
  { name: "Jul", ordered: 3490, delivered: 2100 },
  { name: "Aug", ordered: 4000, delivered: 2400 },
  { name: "Sept", ordered: 3000, delivered: 2210 },
  { name: "Oct", ordered: 2000, delivered: 2290 },
  { name: "Nov", ordered: 2780, delivered: 2000 },
  { name: "Dec", ordered: 1890, delivered: 2181 },
];

const SalesAndPurchaseReportChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <ComposedChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorOrdered" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis dataKey="name" />
        <YAxis />
        {/* <CartesianGrid strokeDasharray="3 0" /> */}
        <Tooltip />
       <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            content={({ payload }) => (
                <div className="flex gap-4 mt-2">
                {payload?.map((entry, index) => (
                    <div key={`item-${index}`} className="flex items-center gap-2">
                    <span
                        className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
            />
            <span className="text-gray-600 text-sm">{entry.value}</span>
            </div>
                ))}
                </div>
            )}
            />

        <Area
          type="monotone"
          dataKey="ordered"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorOrdered)"
          name="Ordered"
        />

        <Line
          type="monotone"
          dataKey="delivered"
          stroke="#82ca9d"
          strokeWidth={2}
          dot={{ r: 3 }}
          activeDot={{ r: 5 }}
          name="Delivered"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default SalesAndPurchaseReportChart;
