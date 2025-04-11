import React from 'react';
import { IconProps } from '@/types';

// Extend the base IconProps to add color
interface CarpentryIconProps extends IconProps {
  color?: string;
}

export default function CarpentryIcon({
  className = '',
  width = 24,
  height = 24,
  color = 'currentColor'
}: CarpentryIconProps) {
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
      {/* Custom carpentry icon - hammer and saw */}
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      <path d="M2 18L8 12" />
      <path d="M18 2L14 6" />
      <path d="M22 6L18 10" />
    </svg>
  );
}