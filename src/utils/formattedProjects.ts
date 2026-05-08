import { iconMap } from '@/assets/datas/images';

export const formatProjectsData = (rawSheetsData: any[]) => {
  return rawSheetsData.map((item, index) => {
    const techArray = item.tech
      ? item.tech.split(',').map((techName: string, idx: number) => {
          const cleanName = techName.trim();
          return {
            id: idx,
            label: cleanName,
            icon: iconMap[cleanName],
          };
        })
      : [];

    const jobdescArray = item.jobdesc
      ? item.jobdesc.split('\n').map((desc: string, idx: number) => {
          return {
            id: idx,
            label: desc.trim(),
          };
        })
      : [];

    return {
      id: Number(item.id) || index,
      name: item.name,
      time: item.time,
      role: item.role,
      image: item.image,
      summarize: item.summarize,
      type: item.type,
      tech: techArray,
      jobdesc: jobdescArray,
    };
  });
};
