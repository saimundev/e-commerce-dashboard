import DashboardContent from "@/components/dashboard/DashboardContent";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import DashboardRecentSales from "@/components/dashboard/DashboardRecentSales";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text_primary">Dashboard</h1>
      <DashboardContent />
      <div className="grid grid-cols-[2fr_1fr] gap-4 mt-4 h-[600px] overflow-hidden">
        <DashboardOverview />
        <DashboardRecentSales />
      </div>
    </div>
  );
};

export default DashboardPage;
