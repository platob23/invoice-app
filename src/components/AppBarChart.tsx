"use client";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
    onetime: {
        label: "Onetime",
        color: "var(--chart-1)",
    },
    abonement: {
        label: "Abonement",
        color: "var(--chart-4)",
    },
} satisfies ChartConfig;

const chartData = [
    { month: "January", onetime: 3, abonement: 3 },
    { month: "February", onetime: 1, abonement: 3 },
    { month: "March", onetime: 0, abonement: 4 },
    { month: "April", onetime: 2, abonement: 5 },
    { month: "May", onetime: 1, abonement: 5 },
    { month: "June", onetime: 0, abonement: 5 },
    { month: "July", onetime: 0, abonement: 5 },
    { month: "August", onetime: 7, abonement: 10 },
    { month: "September", onetime: 2, abonement: 11 },
    { month: "October", onetime: 1, abonement: 12 },
    { month: "November", onetime: 3, abonement: 15 },
    { month: "December", onetime: 1, abonement: 16 },
];

const AppBarChart = () => {
    return (
        <div className="">
            <h1 className="text-lg font-medium mb-6">Total Invoices sent</h1>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="onetime" fill="var(--color-onetime)" radius={4} />
                    <Bar dataKey="abonement" fill="var(--color-abonement)" radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    );
};

export default AppBarChart;