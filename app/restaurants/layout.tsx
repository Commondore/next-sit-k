export default function RestaurantLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <aside>Sidebar for restaurant</aside>
      <div>{children}</div>
    </div>
  );
}
