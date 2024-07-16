import { UserButton } from "@clerk/nextjs";
import { LinksDropdown } from "@/components/LinksDropdown";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between">
      <div>
        <LinksDropdown />
      </div>

      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export { Navbar };
