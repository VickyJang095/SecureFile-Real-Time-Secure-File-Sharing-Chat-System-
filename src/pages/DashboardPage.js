import React, { useState, useEffect } from "react";
import Sidebar from "../components_dashboard/Sidebar"; 
import StorageCard from "../components_dashboard/StorageCard";
import RecentActivity from "../components_dashboard/RecentActivity";
import Notifications from "../components_dashboard/Notifications";
import UserInfo from "../components_dashboard/UserInfo";
import UploadPage from "./UploadPage";
import FilePage from "./FilePage";
import FavoritePage from "./FavoritePage";
import MessengerPage from "./MessengerPage";
import backgroundImage from "../assets/background.jpg";

export default function DashboardPage({ user, onLogout }) {
  const [activePage, setActivePage] = useState("dashboard");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    setUploadedFiles(storedFiles);
  }, []);

  useEffect(() => {
    localStorage.setItem("uploadedFiles", JSON.stringify(uploadedFiles));
  }, [uploadedFiles]);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <>
            <div className="flex flex-wrap gap-4">
              <StorageCard files={uploadedFiles} />
              <RecentActivity files={uploadedFiles} />
            </div>
            <div className="mt-6">
              <Notifications />
            </div>
          </>
        );

      case "upload":
        return (
          <UploadPage
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
            user={user}
            onLogout={onLogout}
          />
        );

      case "myfiles":
        return <FilePage uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles} />;

      case "favorite":
        return <FavoritePage uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles} />;
       
      case "messenger":
        return <MessengerPage user={user} />;

      default:
        return <div className="text-center text-gray-300"><p>Coming soon...</p></div>;
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative w-[80%] h-[80vh] bg-white/5 border border-purple-400/20 rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.25)] flex overflow-hidden transition-all duration-500">
        <div className="w-1/5 bg-black/50 backdrop-blur-[20px] p-4 flex flex-col justify-between border-r border-white/5 relative z-10">
          <Sidebar onNavigate={setActivePage} onLogout={onLogout} activePage={activePage} />
        </div>

        <div className="w-4/5 p-8 relative z-10 text-white overflow-y-auto">
          <div className="absolute top-5 right-8">
            <UserInfo user={user} />
          </div>
          <div className="mt-12">{renderPage()}</div>
        </div>
      </div>
    </div>
  );
}
