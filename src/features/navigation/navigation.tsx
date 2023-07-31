import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuItemLogin,
  NavigationMenuItemLogo,
  NavigationMenuItemSignup,
  NavigationMenuList,
} from "@/features/ui/navigation-menu/navigation-menu";

const Navigation = () => {
  return (
    <header className="fixed top-0 flex flex-col left-0 right-0 items-center h-header z-header transition duration-300 ease-in">
      <div className="header-bg-blur"></div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItemLogo>Sysfixer</NavigationMenuItemLogo>
          <NavigationMenuItem href="/blog">Blog</NavigationMenuItem>
          <NavigationMenuItem href="/changelog">Changelog</NavigationMenuItem>
          <NavigationMenuItem href="/pricing">Pricing</NavigationMenuItem>
          <NavigationMenuItem href="/docs">Docs</NavigationMenuItem>
          <NavigationMenuItem href="/support">Support</NavigationMenuItem>
          
          <NavigationMenuItemLogin>Log in</NavigationMenuItemLogin>
          <NavigationMenuItemSignup>Sign up</NavigationMenuItemSignup>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navigation;
