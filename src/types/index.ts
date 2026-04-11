// ─── Profile / ID Card ────────────────────────────────────────

export interface ProfileData {
  name: string;
  title: string;
  image: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
}

export interface LicenseData {
  profile: ProfileData;
  location: string;
  idNumber: string;
  expiration: string;
  stats: Stat[];
  status: string;
  endorsements: string;
}

// ─── Projects ─────────────────────────────────────────────────

export interface Project {
  id: string;
  slug: string;
  title: string;
  img: string;
  tags: string[];
  year: string;
  description: string;
  challenge?: string;
  zIndex: number;
  scale: number;
  rotate: number;
  images?: string[];
}

// ─── Route State ──────────────────────────────────────────────

export interface RouteState {
  isHome: boolean;
  isProjects: boolean;
  isWorkDetail: boolean;
  isAbout: boolean;
}
