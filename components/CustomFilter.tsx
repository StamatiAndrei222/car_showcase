"use client";
import React from 'react'

interface CustomFilterProps {
  title: string;
}

const CustomFilter: React.FC<CustomFilterProps> = ({ title }) => {
  return (
    <div className="custom-filter">
      <h2>{title}</h2>
      
    </div>
  )
}

export default CustomFilter;