import React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

export default function PaintingIcon({ 
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
      {/* Custom painting icon - paint brush and roller */}
      <path d="M19 3h-4a2 2 0 0 0-2 2v12a4 4 0 0 0 8 0V5a2 2 0 0 0-2-2z" />
      <path d="M13 7.35V5" />
      <path d="M13 12v-2" />
      <path d="M13 17v-2" />
      <path d="M2 21h10" />
      <path d="M5 16c0 2.5 2 5 5 5" />
      <path d="M5 10v6" />
      <path d="M5 10a3 3 0 0 1 3-3h2" />
    </svg>
  );
}