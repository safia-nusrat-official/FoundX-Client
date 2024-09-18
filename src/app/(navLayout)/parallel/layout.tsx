export default function NavLayout({
  children,
  posts
}: {
  children: React.ReactNode;
  posts: React.ReactNode;
}) {
  return (
    <div className="">
      <main className="container mx-auto">
        {children}
        {posts}
      </main>
    </div>
  );
}
