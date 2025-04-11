import React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

export default function GarageDoorIcon({ 
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
      {/* Custom garage door icon */}
      <rect x="2" y="3" width="20" height="18" rx="1" />
      <line x1="2" y1="7" x2="22" y2="7" />
      <line x1="2" y1="11" x2="22" y2="11" />
      <line x1="2" y1="15" x2="22" y2="15" />
      <line x1="2" y1="19" x2="22" y2="19" />
      <rect x="16" y="13" width="2" height="4" rx="1" />
    </svg>
  );
}