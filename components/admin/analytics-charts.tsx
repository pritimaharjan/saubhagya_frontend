"use client";

import { useMemo } from "react";
import { useAdmin } from "@/contexts/admin-context";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  AreaChart,
  Area,
} from "recharts";

const COLORS = ["#8b6068", "#5c8a6b", "#c49a5c", "#a67a80", "#e5e5e5", "#b85c5c"];

export function CategoryBarChart() {
  const { products, categories } = useAdmin();

  const data = useMemo(() => {
    return categories.map((cat) => ({
      name: cat.name,
      count: products.filter(
        (p) =>
          p.category.slug === cat.slug ||
          p.category.slug.startsWith(cat.slug)
      ).length,
    }));
  }, [products, categories]);

  return (
    <div className="rounded-xl border border-border/50 bg-card p-6">
      <h3 className="mb-4 font-heading text-base font-semibold text-foreground">
        Products by Category
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="count" fill="#8b6068" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CategoryPieChart() {
  const { products, categories } = useAdmin();

  const data = useMemo(() => {
    return categories.map((cat) => ({
      name: cat.name,
      value: products.filter(
        (p) =>
          p.category.slug === cat.slug ||
          p.category.slug.startsWith(cat.slug)
      ).length,
    }));
  }, [products, categories]);

  return (
    <div className="rounded-xl border border-border/50 bg-card p-6">
      <h3 className="mb-4 font-heading text-base font-semibold text-foreground">
        Category Distribution
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function MonthlyTrendsChart() {
  const data = useMemo(() => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const currentMonth = new Date().getMonth();
    const mockValues = [
      { inquiries: 24, views: 320 },
      { inquiries: 31, views: 410 },
      { inquiries: 18, views: 280 },
      { inquiries: 35, views: 450 },
      { inquiries: 28, views: 380 },
      { inquiries: 42, views: 520 },
    ];
    return Array.from({ length: 6 }, (_, i) => {
      const monthIndex = (currentMonth - 5 + i + 12) % 12;
      return {
        month: months[monthIndex],
        ...mockValues[i],
      };
    });
  }, []);

  return (
    <div className="rounded-xl border border-border/50 bg-card p-6">
      <h3 className="mb-4 font-heading text-base font-semibold text-foreground">
        Monthly Trends
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorInquiries" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b6068" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#8b6068" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="inquiries"
            stroke="#8b6068"
            fillOpacity={1}
            fill="url(#colorInquiries)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function TopProductsChart() {
  const { products } = useAdmin();

  const data = useMemo(() => {
    return [...products]
      .sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0))
      .slice(0, 5)
      .map((p) => ({
        name: p.name.length > 20 ? p.name.slice(0, 20) + "..." : p.name,
        reviews: p.reviewCount ?? 0,
      }));
  }, [products]);

  return (
    <div className="rounded-xl border border-border/50 bg-card p-6">
      <h3 className="mb-4 font-heading text-base font-semibold text-foreground">
        Top Products by Reviews
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis type="number" tick={{ fontSize: 12 }} />
          <YAxis
            type="category"
            dataKey="name"
            width={150}
            tick={{ fontSize: 12 }}
          />
          <Tooltip />
          <Bar dataKey="reviews" fill="#8b6068" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
