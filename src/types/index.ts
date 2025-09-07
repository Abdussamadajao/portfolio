export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  category: string[];
  github_url: string;
  key_techs: string[];
}

export interface IService {
  title: string;
  about: string;
  Icon: React.ComponentType<{ className?: string }>;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: React.ComponentType<{ className?: string }>;
}
