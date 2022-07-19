export type NavigationItem = NavigationLink | NavigationDropdown | NavigationSubheading;

export interface NavigationLink {
  type: 'link';
  path: string | any;
  fragment?: string;
  title: string;
  role:number;
  id:number;
  icon?: string;
  extralink?: { exact: boolean };
  submenu: Array<NavigationLink | NavigationDropdown>;
  
  
}

export interface NavigationDropdown {
  type: 'dropdown';
  title: string;
  icon?: string;
  role:number;
  id:number;
  path: string | any;
  submenu: Array<NavigationLink | NavigationDropdown>;
  
}

export interface NavigationSubheading {
  type: 'subheading';
  title: string;
  role:number;
  id:number;
  path: string | any;
  submenu: Array<NavigationLink | NavigationDropdown>;
  icon?: string;
}
