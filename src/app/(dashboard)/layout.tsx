import Link from "next/link";
import Image from "next/image";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[15%] md:w-[8%] lg:w-[16%]  p-4">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-semibold">SchoolDev</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[85%] md:w-[92%] lg:w-[84%]  bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
