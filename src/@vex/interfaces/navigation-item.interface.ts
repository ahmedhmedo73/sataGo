export type NavigationItem =
  | NavigationLink
  | NavigationDropdown
  | NavigationSubheading;

export interface NavigationSubheading {
  type: "subheading";
  id: number;
  title: string;
  title_en: string;
  class: string;
  path: string | any;
  role: number;
  roles: [Roles];
  extralink: boolean;
  sort: number;
  sub: number;
  color: string;
  icon?: string;
  submenu: Array<NavigationLink | NavigationDropdown>;
}

export interface NavigationDropdown {
  type: "dropdown";
  id: number;
  title: string;
  path: string | any;
  title_en: string;
  icon?: string;
  sort: number;
  sub: number;
  class: string;
  role: number;
  color: string;
  extralink: number;
  submenu: Array<NavigationLink | NavigationDropdown>;
  badge?: {
    value: string;
    bgClass: string;
    textClass: string;
  };
}
export interface NavigationLink {
  type: "link";
  path: string | any;
  title_en: string;
  fragment?: string;
  title: string;
  id: number;
  sort: number;
  sub: number;
  role: number;
  class: string;
  color: string;
  extralink: number;
  icon?: string;
  routerLinkActiveOptions?: { exact: boolean };
  badge?: {
    value: string;
    bgClass: string;
    textClass: string;
  };
}
export interface Roles {
  id: number;
  parent_id: number;
  registration_allowed: number;
  name: string;
  created: string;
  modified: string;
  description: string;
}
