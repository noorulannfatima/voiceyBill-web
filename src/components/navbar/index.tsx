import { useState } from "react";
import { Menu } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { PROTECTED_ROUTES } from "@/routes/common/routePath";
import { cn } from "@/lib/utils";
import Logo from "../logo/logo";
import { Button } from "../ui/button";
import { Sheet, SheetContent } from "../ui/sheet";
import { UserNav } from "./user-nav";
import LogoutDialog from "./logout-dialog";
import { useTypedSelector } from "@/app/hook";

const Navbar = () => {
  const { pathname } = useLocation();
  const { user } = useTypedSelector((state) => state.auth);

  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const routes = [
    { href: PROTECTED_ROUTES.OVERVIEW, label: "Overview" },
    { href: PROTECTED_ROUTES.TRANSACTIONS, label: "Transactions" },
    { href: PROTECTED_ROUTES.REPORTS, label: "Reports" },
    { href: PROTECTED_ROUTES.SETTINGS, label: "Settings" },
  ];

  return (
    <>
      <header className="w-full bg-[var(--secondary-dark-color)] text-white">
        <div className="w-full flex h-14 max-w-[var(--max-width)] items-center mx-auto px-4 sm:px-6">
          <div className="w-full flex items-center justify-between">

            {/* Left: hamburger + logo */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="inline-flex md:hidden text-white hover:bg-white/10"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div className="text-white [&_span]:text-white [&_img]:opacity-95">
                <Logo />
              </div>
            </div>

            {/* Center: desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {routes.map((route) => (
                <Button
                  key={route.href}
                  size="sm"
                  variant="ghost"
                  className={cn(
                    "font-normal text-white/60 hover:text-white hover:bg-white/10 transition-colors text-[14px]",
                    pathname === route.href && "text-white bg-white/10"
                  )}
                  asChild
                >
                  <NavLink to={route.href}>{route.label}</NavLink>
                </Button>
              ))}
            </nav>

            {/* Mobile nav drawer */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetContent side="left" className="bg-background border-r border-[var(--surface-border)] w-64">
                <div className="mb-6 pt-2">
                  <Logo />
                </div>
                <nav className="flex flex-col gap-1">
                  {routes.map((route) => (
                    <Button
                      key={route.href}
                      size="sm"
                      variant="ghost"
                      className={cn(
                        "w-full justify-start font-normal text-foreground/60 hover:text-foreground hover:bg-[var(--surface-subtle)]",
                        pathname === route.href && "bg-[var(--surface-subtle)] text-foreground font-medium"
                      )}
                      asChild
                    >
                      <NavLink to={route.href} onClick={() => setIsOpen(false)}>
                        {route.label}
                      </NavLink>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            {/* Right: user */}
            <div className="flex items-center gap-3">
              <UserNav
                userName={user?.name || ""}
                profilePicture={user?.profilePicture || ""}
                onLogout={() => setIsLogoutDialogOpen(true)}
              />
            </div>
          </div>
        </div>
      </header>

      <LogoutDialog
        isOpen={isLogoutDialogOpen}
        setIsOpen={setIsLogoutDialogOpen}
      />
    </>
  );
};

export default Navbar;
