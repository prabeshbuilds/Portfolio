export default function MyWorksLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen flex flex-col gap-10 py-16">
      {children}
    </section>
  );
}