import { INavAttributes, INavData, INavLinkProps } from '@coreui/angular';
export interface INavWrapper {
  attributes: INavAttributes;
  element: string;
}
export interface INavBadge {
  text: string;
  color: string;
  size?: string;
  class?: string;
}
export interface INavLabel {
  class?: string;
  variant: string;
}
export interface INavDataNew {
  name?: string;
  url?: string | any[];
  href?: string;
  icon?: string;
  iconComponent?: any;
  badge?: INavBadge;
  title?: boolean;
  children?: INavData[];
  variant?: string;
  attributes?: INavAttributes;
  divider?: boolean;
  class?: string;
  label?: INavLabel;
  wrapper?: INavWrapper;
  linkProps?: INavLinkProps;
  expanded?: boolean;
}

