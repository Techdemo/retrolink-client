export type OnClick<Element, ReturnType = void> = (event: React.MouseEvent<Element, MouseEvent>) => ReturnType;

export type ButtonType =
  React.ButtonHTMLAttributes<HTMLButtonElement>
  & React.AnchorHTMLAttributes<HTMLAnchorElement>
  & {
    as?: any;
    children?: React.ReactNode;
    disabled?: boolean;
    href?: string;
    iconOnly?: boolean;
    iconOnlyOnMobile?: boolean;
    isLoading?: boolean;
    onClick?: OnClick<HTMLButtonElement>;
    ref?: React.RefObject<HTMLButtonElement>;
    to?: string;
    urlTarget?: 'blank' | 'self' | 'parent' | 'top';
    noArrow?: boolean;
    isValid?: boolean;
  };

export type IconType = {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
};

export type ButtonVariantsType = {
  variant?: 'primary' | 'secondary' | 'CTA' | 'outlined' | 'warning' | 'outlined-white';
};

export type ButtonSizeType = {
  size?: 'auto' | 'fullWidth' | 'small';
};

export type ButtonProps =
  ButtonType
  & ButtonSizeType
  & ButtonVariantsType
  & IconType;
