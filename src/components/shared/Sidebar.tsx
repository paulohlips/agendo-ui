import {
  IconCalendar,
  IconClipboardList,
  IconLayoutDashboard,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";
import React from "react";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: IconLayoutDashboard },
    { id: "calendar", label: "Calendar", icon: IconCalendar },
    { id: "appointments", label: "Appointments", icon: IconClipboardList },
    { id: "settings", label: "Settings", icon: IconSettings },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.logo}>AgendoPro</h2>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
            >
              <Icon className={styles.menuIcon} stroke={1.5} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <button className={styles.logoutButton}>
          <IconLogout className={styles.menuIcon} stroke={1.5} />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
}
