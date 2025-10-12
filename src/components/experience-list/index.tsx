import React from 'react';

type ExperienceListProps = {
  periode: string;
  role: string;
  office: string;
};

const ExperienceList = ({ periode, role, office }: ExperienceListProps) => {
  return (
    <div className="space-y-1 text-left">
      <h6 className="text-lg font-semibold font-montserrat">
        {periode} <span className="italic">{role}</span>
      </h6>
      <h6 className="text-base font-montserrat font-medium">{office}</h6>
    </div>
  );
};

export default ExperienceList;
