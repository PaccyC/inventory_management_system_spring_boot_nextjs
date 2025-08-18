"use client"

import { ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import {  ChartContainer } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const chartData = [
  { month: "Jan", Purchase: 186, Sales: 80 },
  { month: "Feb", Purchase: 305, Sales: 200 },
  { month: "Mar", Purchase: 237, Sales: 120 },
  { month: "Apr", Purchase: 73, Sales: 190 },
  { month: "May", Purchase: 209, Sales: 130 },
  { month: "Jun", Purchase: 214, Sales: 140 },
  { month: "Jul", Purchase: 186, Sales: 80 },
  { month: "Aug", Purchase: 305, Sales: 200 },
  { month: "Sept", Purchase: 237, Sales: 120 },
  { month: "Oct", Purchase: 73, Sales: 190 },
  { month: "Nov", Purchase: 209, Sales: 130 },
  { month: "Dec", Purchase: 214, Sales: 140 },
]


const chartConfig = {
  purchases: {
    label: "Purchase",
    color: "#74B0FA",
  },
  sales: {
    label: "Sales",
    color: "#51CC5D",
  },
} satisfies ChartConfig

const SalesAndPurchaseChart = () => {
  return (
    <ChartContainer config={chartConfig} className="h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <YAxis/>
    
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="Purchase" fill="var(--color-purchases)" radius={4} />
    <Bar dataKey="Sales" fill="var(--color-sales)" radius={4} />
  </BarChart>
</ChartContainer>
  )
}

export default SalesAndPurchaseChart
