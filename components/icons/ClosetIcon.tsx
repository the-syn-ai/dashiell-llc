import React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

export default function ClosetIcon({ 
  className = '', 
  width = 24, 
  height = 24, 
  color = 'currentColor' 
}: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Custom closet installation icon */}
      <rect x="3" y="2" width="18" height="20" rx="1" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
      <circle cx="7.5" cy="14" r="1" />
      <circle cx="16.5" cy="14" r="1" />
      <line x1="7.5" y1="10" x2="7.5" y2="14" />
      <line x1="16.5" y1="10" x2="16.5" y2="14" />
    </svg>
  );
}