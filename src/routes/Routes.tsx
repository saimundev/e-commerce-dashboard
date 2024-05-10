import DashboardIcon from "@/components/icons/DashboardIcon";

export const routes = [
  { name: "Dashboard", path: "/", icon: <DashboardIcon /> },
  { name: "Orders", path: "/order", icon: <DashboardIcon /> },
  { name: "Users", path: "/user", icon: <DashboardIcon /> },
  { name: "Product", path: "/product", icon: <DashboardIcon /> },
  { name: "Category", path: "/category", icon: <DashboardIcon /> },
  {
    name: "Add Banner",
    path: "/add-banner",
    icon: <DashboardIcon />,
  },
  {
    name: "Add Coupon",
    path: "/add-coupon",
    icon: <DashboardIcon />,
  },
  {
    name: "Add Role",
    path: "/add-role",
    icon: <DashboardIcon />,
  },
  {
    name: "Setting",
    path: "/setting",
    icon: <DashboardIcon />,
    subRoutes: [
      {
        name: "Add Brand Name",
        path: "/setting/add-brand-name",
        icon: <DashboardIcon />,
      },
      {
        name: "Add Brand Logo",
        path: "/setting/add-brand-logo",
        icon: <DashboardIcon />,
      },
      {
        name: "Theme Color",
        path: "/setting/theme-color",
        icon: <DashboardIcon />,
      },
      {
        name: "Change Logo",
        path: "/dashboard/change-logo",
        icon: <DashboardIcon />,
      },
      {
        name: "Change Logo",
        path: "/dashboard/change-logo",
        icon: <DashboardIcon />,
      },
    ],
  },
];
