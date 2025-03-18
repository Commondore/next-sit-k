export interface NavData {
  href: string;
  label: string;
}

export const navData: NavData[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/restaurants",
    label: "Рестораны",
  },
  {
    href: "/promos",
    label: "Акции",
  },
];
