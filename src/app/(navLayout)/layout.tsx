import { Navbar } from "@/src/components/navbar";

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Navbar />
      <main className="container mx-auto">{children}</main>
    </div>
  );
}
