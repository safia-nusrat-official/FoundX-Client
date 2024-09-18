export default function FoundItemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col text-center gap-4 ">
      <div className="text-center justify-center">
        {children}
      </div>
    </section>
  );
}
