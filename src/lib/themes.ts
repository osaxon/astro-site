export const themeMap = new Map();
export const sizeMap = new Map();

themeMap.set("feijoa", "bg-[#8fd57b] text-[#1f2668]");
themeMap.set("chambray", "bg-[#30528e] text-[#acdb78]");

sizeMap.set("small", "h-[40vh]");
sizeMap.set("default", "h-[60vh]");
sizeMap.set("large", "h-[80vh]");

export type Keys = "feijoa" | "chambray";
export type Sizes = "small" | "default" | "large";

export interface SectionProps {
    variant: Keys;
    size: Sizes;
}
