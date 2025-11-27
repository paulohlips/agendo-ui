import React, { useState } from "react";
import { LoginSignup } from "./components/auth/LoginSignup";
import { BookingPage } from "./components/client/BookingPage";
import { SearchProfessionals } from "./components/client/SearchProfessionals";
import { Appointments } from "./components/professional/Appointments";
import { Calendar } from "./components/professional/Calendar";
import { Dashboard } from "./components/professional/Dashboard";
import { AppointmentConfirmation } from "./components/shared/AppointmentConfirmation";
import { Settings } from "./components/shared/Settings";
import { Sidebar } from "./components/shared/Sidebar";

type UserType = "professional" | "client" | null;
type AppView =
  | "login"
  | "client-search"
  | "client-booking"
  | "confirmation"
  | "professional-dashboard";

const App = () => {
  const [userType, setUserType] = useState<UserType>(null);
  const [currentView, setCurrentView] = useState<AppView>("login");
  const [selectedProfessional, setSelectedProfessional] = useState<
    number | null
  >(null);
  const [appointmentData, setAppointmentData] = useState<{
    date: string;
    time: string;
  } | null>(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogin = (_email: string, userType: "professional" | "client") => {
    setUserType(userType);
    if (userType === "client") {
      setCurrentView("client-search");
    } else {
      setCurrentView("professional-dashboard");
    }
  };

  const handleSelectProfessional = (professionalId: number) => {
    setSelectedProfessional(professionalId);
    setCurrentView("client-booking");
  };

  const handleConfirmBooking = (date: string, time: string) => {
    setAppointmentData({ date, time });
    setCurrentView("confirmation");
  };

  const handleBackToSearch = () => {
    setCurrentView("client-search");
  };

  const handleAddToCalendar = () => {
    alert("Added to calendar!");
  };

  const handleBackToHome = () => {
    setCurrentView("client-search");
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "login":
        return <LoginSignup onLogin={handleLogin} />;

      case "client-search":
        return (
          <SearchProfessionals
            onSelectProfessional={handleSelectProfessional}
          />
        );

      case "client-booking":
        return selectedProfessional ? (
          <BookingPage
            professionalId={selectedProfessional}
            onConfirmBooking={handleConfirmBooking}
            onBack={handleBackToSearch}
          />
        ) : null;

      case "confirmation":
        return appointmentData ? (
          <AppointmentConfirmation
            date={appointmentData.date}
            time={appointmentData.time}
            professionalName="Dr. Sarah Smith"
            onAddToCalendar={handleAddToCalendar}
            onBackToHome={handleBackToHome}
          />
        ) : null;

      case "professional-dashboard":
        return (
          <div style={{ display: "flex", height: "100vh" }}>
            <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
            <div style={{ flex: 1, overflow: "auto" }}>
              {activeTab === "dashboard" && <Dashboard />}
              {activeTab === "calendar" && <Calendar />}
              {activeTab === "appointments" && <Appointments />}
              {activeTab === "settings" && <Settings />}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <div>{renderCurrentView()}</div>;
};

export default App;
