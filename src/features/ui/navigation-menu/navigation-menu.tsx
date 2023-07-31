import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown, LifeBuoy } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative ", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "relative flex items-center pl-page_l pr-page_r max-w-page w-full my-auto mx-0 header-line-bottom",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const navigationMenuItemStyle = cva("list-none flex items-center shrink-0	m-0");

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item> & {
    href: string;
  }
>(({ className, children, href, ...props }, ref) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    className={cn(navigationMenuItemStyle(), "ml-6", className)}
    {...props}
  >
    <a
      href={href}
      className="whitespace-nowrap text-sm leading-header h-header text-silver font-medium	text-center	text-shadow-primary hover:text-silver_low"
    >
      {children}
    </a>
  </NavigationMenuPrimitive.Item>
));

NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName;

const NavigationMenuItemLogo = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    className={cn(navigationMenuItemStyle(), className)}
    {...props}
  >
    <a href="/" className="flex items-center h-header select-none text-silver">
      <LifeBuoy className="mr-1" aria-hidden="true" /> {children}
    </a>
  </NavigationMenuPrimitive.Item>
));
NavigationMenuItemLogo.displayName = NavigationMenuPrimitive.Item.displayName;

const NavigationMenuItemLogin = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    className={cn(
      "ml-48 text-sm font-medium shrink-0 flex items-center",
      className
    )}
    {...props}
  >
    <a href="/auth" className="text-silver hover:text-silver_low">
      {children}
    </a>
  </NavigationMenuPrimitive.Item>
));
NavigationMenuItemLogin.displayName = NavigationMenuPrimitive.Item.displayName;

const NavigationMenuItemSignup = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    className={cn("ml-6 flex items-center shrink-0", className)}
    {...props}
  >
    <a
      href="/auth"
      className="appearance-none cursor-pointer relative inline-flex items-center justify-center white-space-collapse text-wrap select-none max-w-full shrink-0 text-inherit h-8 text-shadow-signup gap-2	m-0 border-radius-btn-9999px px-4 py-0 border-width-initial border-none border-color-initial border-image-initial background-btn-signup"
    >
      {children}
    </a>
  </NavigationMenuPrimitive.Item>
));
NavigationMenuItemSignup.displayName = NavigationMenuPrimitive.Item.displayName;

const navigationMenuTriggerStyle = cva("");

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "", className)}
    {...props}
  >
    {children} <ChevronDown className="" aria-hidden="true" />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("")}>
    <NavigationMenuPrimitive.Viewport
      className={cn("", className)}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn("", className)}
    {...props}
  >
    <div className="" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuItemLogin,
  NavigationMenuItemSignup,
  NavigationMenuItemLogo,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
