"use client";

import {
  HEADER_HEIGHT,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_COLLAPSE,
} from "@/constant/constant";
import React, { useState } from "react";

import NavItem from "./NavItem";
import SubRoutes from "./SubRoutes";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { routes } from "@/routes/Routes";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <motion.div
      initial={{ width: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_COLLAPSE }}
      animate={{ width: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_COLLAPSE }}
      transition={{ duration: 0.3 }}
      className="h-screen border-r border-gra-200 relative "
    >
      <div
        style={{ height: HEADER_HEIGHT }}
        className={`flex items-center justify-center px-4  border-b border_light_primary`}
      >
        <h3
          className={cn(
            "font-bold text-2xl text-gray-700 text-center duration-300 origin-center",
            sidebarOpen ? "opacity-1 scale-1" : "opacity-0 scale-0"
          )}
        >
          Gray <span className="text-orange-500">shop</span>
        </h3>
      </div>

      <nav className="space-y-1 px-2 pt-2 overflow-hidden">
        {routes.map((route, index) => {
          if (route.subRoutes) {
            return (
              <SubRoutes key={index} routes={route} sidebarOpen={sidebarOpen} />
            );
          }
          return (
            <NavItem key={index} NavItem={route} sidebarOpen={sidebarOpen} />
          );
        })}

        <div
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="absolute bottom-4 -right-5 border border_light_primary p-2 rounded-full bg-white cursor-pointer"
        >
          <RightArrowIcon
            className={cn(
              "duration-300",
              sidebarOpen ? "rotate-180" : "rotate-0"
            )}
          />
        </div>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
