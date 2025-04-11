import React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

export default function FlooringIcon({ 
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
      {/* Custom flooring/tiling icon */}
      <rect x="2" y="2" width="5" height="5" />
      <rect x="9.5" y="2" width="5" height="5" />
      <rect x="17" y="2" width="5" height="5" />
      <rect x="2" y="9.5" width="5" height="5" />
      <rect x="9.5" y="9.5" width="5" height="5" />
      <rect x="17" y="9.5" width="5" height="5" />
      <rect x="2" y="17" width="5" height="5" />
      <rect x="9.5" y="17" width="5" height="5" />
      <rect x="17" y="17" width="5" height="5" />
    </svg>
  );
}