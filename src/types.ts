export interface NavItem {
  label: string;
  href: string;
}

export interface HighlightStat {
  id: string;
  icon: 'graduation' | 'zap' | 'video' | 'shield';
  title: string;
  description: string;
  colorClass: string;
  iconColor: string;
  borderColor: string;
}

export interface WhatIDoItem {
  id: string;
  title: string;
  description: string;
  iconType: 'sparkles' | 'code' | 'video';
  doodleText: string;
  doodleRotate: string;
  tags: string[];
  colorTheme: 'indigo' | 'core-focus' | 'pink';
}

export interface ProjectItem {
  id: string;
  category: 'university' | 'ai-experiment' | 'social-media';
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  badge?: string;
  metaInfo?: {
    team?: string;
    focus?: string;
    platform?: string;
  };
  imageUrl?: string;
  doodleCaption?: string;
  linkText: string;
  linkUrl?: string;
  details?: {
    fullDescription: string;
    keyFeatures: string[];
    technologies: string[];
    role: string;
    impact: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: 'bolt' | 'tool' | 'heart';
  doodleBadge: string;
  doodleBottom: string;
  skills: string[];
  themeColor: 'indigo' | 'amber' | 'purple';
}

export interface ContactChannel {
  id: string;
  name: string;
  value: string;
  href: string;
  icon: 'mail' | 'linkedin' | 'github' | 'phone' | 'instagram';
  bgClass: string;
  borderHover: string;
  textHover: string;
}
