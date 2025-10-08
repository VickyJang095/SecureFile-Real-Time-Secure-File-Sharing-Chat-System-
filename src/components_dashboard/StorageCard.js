import React, { useEffect, useState } from "react";

export default function StorageCard() {
  const [used, setUsed] = useState(0);
  const maxStorage = 128 * 1024 * 1024 * 1024; 

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    const totalUsed = storedFiles.reduce((acc, file) => acc + (file.size || 0), 0); 
    setUsed(totalUsed);
  }, []);

  const percent = Math.min(((used / maxStorage) * 100).toFixed(2), 100); 
  const usedGB = (used / (1024 ** 3)).toFixed(2); 

  return (
    <div className="relative w-64 h-64 bg-black/20 backdrop-blur-[20px] border border-white/10 rounded-3xl flex flex-col items-center justify-center">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/10 via-transparent to-purple-500/10 opacity-40 pointer-events-none"></div>

      <h2 className="text-lg font-semibold text-white mb-4 z-10">Storage Summary</h2>
      
      <svg className="w-24 h-24 z-10" viewBox="0 0 36 36">
        <path
          className="circle-bg"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#444" 
          strokeWidth="3"
          strokeDasharray="100, 100"
        />
        <path
          className="circle"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#a855f7" 
          strokeWidth="3"
          strokeDasharray={`${percent}, 100`} 
          strokeLinecap="round" 
        />
        <text x="18" y="20.35" className="percentage" fill="white" fontSize="0.5em" textAnchor="middle" dy=".3em">
          {percent}%
        </text>
      </svg>
      
      <p className="mt-3 text-sm text-gray-200 z-10">
        {usedGB} GB / 128 GB
      </p>
    </div>
  );
}