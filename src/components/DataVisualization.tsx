
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const DataVisualization = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const peaceIndexData = [
    { year: "2020", index: 30 },
    { year: "2021", index: 42 },
    { year: "2022", index: 55 },
    { year: "2023", index: 65 },
    { year: "2024", index: 78 },
  ];

  const regionalImpactData = [
    { region: "East Africa", value: 35, color: "#1A6340" },
    { region: "Central Africa", value: 28, color: "#344E41" },
    { region: "West Africa", value: 22, color: "#A4B494" },
    { region: "Southern Africa", value: 15, color: "#E07A5F" },
  ];

  const outreachData = [
    { month: "Jan", workshops: 12, participants: 240 },
    { month: "Feb", workshops: 15, participants: 320 },
    { month: "Mar", workshops: 20, participants: 450 },
    { month: "Apr", workshops: 18, participants: 380 },
    { month: "May", workshops: 25, participants: 520 },
    { month: "Jun", workshops: 30, participants: 640 },
  ];

  return (
    <div
      ref={ref}
      className={`py-24 px-4 sm:px-6 bg-white transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="data-visualization"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-api-terracotta mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-midnight mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-api-midnight/80 max-w-2xl mx-auto">
            Visual representation of how our initiatives are creating change across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-500 transform ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`} style={{ transitionDelay: "100ms" }}>
            <h3 className="text-xl font-bold font-montserrat text-api-midnight mb-4">Peace Index Growth</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={peaceIndexData}>
                  <defs>
                    <linearGradient id="colorIndex" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1A6340" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#1A6340" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="index" stroke="#1A6340" fillOpacity={1} fill="url(#colorIndex)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-api-midnight/70 mt-4">
              Yearly increase in our Peace Index score across target regions
            </p>
          </div>

          <div className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-500 transform ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`} style={{ transitionDelay: "200ms" }}>
            <h3 className="text-xl font-bold font-montserrat text-api-midnight mb-4">Regional Impact</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={regionalImpactData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {regionalImpactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-api-midnight/70 mt-4">
              Distribution of our peace initiatives across different regions
            </p>
          </div>

          <div className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-500 transform ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`} style={{ transitionDelay: "300ms" }}>
            <h3 className="text-xl font-bold font-montserrat text-api-midnight mb-4">Community Outreach</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={outreachData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" orientation="left" stroke="#1A6340" />
                  <YAxis yAxisId="right" orientation="right" stroke="#E07A5F" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="workshops" fill="#1A6340" name="Workshops" />
                  <Bar yAxisId="right" dataKey="participants" fill="#E07A5F" name="Participants" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-api-midnight/70 mt-4">
              Monthly workshops conducted and participants reached
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
