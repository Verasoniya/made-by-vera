export type TechProps = {
  label: string;
  icon: any;
};

export type ProjectCardProps = {
  image: any;
  name: string;
  summarize: string;
  type?: string;
  tech: TechProps[];
};
