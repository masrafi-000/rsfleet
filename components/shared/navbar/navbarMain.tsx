'use client'

import * as React from "react"
import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navItems = [
  { title: "Home", href: "/" },
  { title: "Catalog", href: "/catalog", 
    items: [
      { title: "Passenger Cars", href: "/catalog/cars", description: "City car rentals for your comfort." },
      { title: "SUVs", href: "/catalog/suv", description: "Powerful vehicles for any terrain." },
      { title: "Minivans", href: "/catalog/vans", description: "Perfect for groups and long trips." },
    ]
  },
  { title: "Services", href: "/services" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contacts" },
]

const NavbarMain = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-2">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
            <Image 
              src="/images/logo.png" 
              alt="EURO TRUCK SERVICE" 
              width={180} 
              height={40} 
              priority
              className="object-contain w-[180px] h-auto"
            />
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items.map((subItem) => (
                            <ListItem
                              key={subItem.title}
                              title={subItem.title}
                              href={subItem.href}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href={item.href}>
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="default" className="ml-2 px-8">
              Request a Call
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-transparent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col p-0 border-l shadow-2xl">
              <SheetHeader className="p-6 border-b bg-white text-left">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Use this menu to navigate the site and contact us.
                </SheetDescription>
                <div className="flex items-center gap-1 border-b-2 border-slate-900 pb-1 w-fit">
                  <Image 
                    src="/images/logo.png" 
                    alt="EURO TRUCK SERVICE" 
                    width={140} 
                    height={30} 
                    className="object-contain w-[140px] h-auto"
                  />
                </div>
              </SheetHeader>
              
              <nav className="flex-1 overflow-y-auto py-6 px-6 bg-white">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <div key={item.title} className="flex flex-col border-b border-slate-50 last:border-0">
                      {item.items ? (
                        <Collapsible className="w-full group/collapsible">
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="w-full flex items-center justify-between py-6 px-0 text-lg font-bold text-slate-900 hover:bg-transparent hover:text-blue-600 transition-all">
                              {item.title}
                              <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="flex flex-col gap-1 pl-4 pb-4 animate-in fade-in-0 zoom-in-95 duration-200">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="py-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <Link
                          href={item.href}
                          className="group flex items-center justify-between py-4 text-lg font-bold text-slate-900 transition-all hover:text-blue-600"
                        >
                          <span className="relative inline-block">
                            {item.title}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                          </span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </nav>

              <div className="p-8 bg-slate-50 border-t space-y-8">
                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Get in Touch</p>
                  <div className="space-y-3">
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-black text-slate-900 tracking-tight">+7 (708) 51 51 518</p>
                      <p className="text-lg font-black text-slate-900 tracking-tight">+7 (700) 51 51 518</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full h-14 text-base font-black transition-all active:scale-[0.98]">
                  Request a Call
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
 React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href!}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavbarMain
