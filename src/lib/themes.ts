export const THEME_OBJ = {
    light: "bg-light text-light-content border-light-content",
    dark: "bg-dark text-dark-content border-dark-content",
    lightAlt: "bg-light-alt text-light-alt-content border-light-alt-content",
    grain: "bg-grain bg-center text-[#473354]",
};

export const SIZE_MAP = {
    small: "h-[40vh]",
    default: "h-[60vh]",
    large: "h-[80vh]",
    full: "h-screen",
};

export type Keys = keyof typeof THEME_OBJ;
export type Sizes = keyof typeof SIZE_MAP;

export interface ISectionProps {
    variant: Keys;
    size: Sizes;
}
