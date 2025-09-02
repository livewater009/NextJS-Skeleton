export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside className="p-4 bg-gray-200">Sidebar</aside>
      <section className="p-6">{children}</section>
    </div>
  );
}
