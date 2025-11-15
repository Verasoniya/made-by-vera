import React from 'react';

type BadgeProps = {
  label: string;
};

const Badge = ({ label }: BadgeProps) => {
  let color = '';
  switch (label.toLowerCase()) {
    case 'personal project':
      color = 'bg-white/50 border-primary text-primary';
      break;
    case 'work project':
      color = 'bg-tertiary border-tertiary text-white';
      break;
    default:
      color = 'bg-secondary/50 border-secondary text-secondary';
      break;
  }
  return (
    <div
      className={`px-2 py-1 border rounded-full w-fit text-xs font-medium font-montserrat ${color}`}
    >
      {label}
    </div>
  );
};

export default Badge;
