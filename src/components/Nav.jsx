import React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from './ui/button'
import { Menu, Sun, Moon } from 'lucide-react'
import { Link } from 'react-scroll';
import { useTheme } from '@/lib/ThemeProvider';

const Nav = () => {
  const { theme, toggleTheme } = useTheme();
    
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' }
  ];
  
  
  return (
    <nav className='fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-gray-200 dark:border-gray-800 shadow-sm'>
      <div className='max-w-7xl mx-auto flex w-full justify-between items-center px-6 md:px-10 py-4'>
        {/* brand */}
        <Link to='/' className='flex items-center gap-2 group'>
          <div className='flex flex-col'>
            <h1 className='text-xl font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
              Immaculate Khaoma | Portfolio
            </h1>
          </div>
        </Link>
        
        {/* mobile menu */}
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className='hover:bg-gray-100 dark:hover:bg-gray-800'>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white dark:bg-slate-950">
              <SheetHeader className='text-left mb-8'>
                <SheetTitle className='text-2xl font-bold text-black dark:text-white'>Menu</SheetTitle>
                <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
              </SheetHeader>
              <div className='flex flex-col space-y-4'>
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={600}
                    className={`p-3 rounded-lg transition-colors ${
                      isActive(item.to)
                        ? 'bg-blue-500/10 hover:bg-blue-700/10 text-blue-500 dark:text-blue-400 border-l-4 border-blue-500'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span className="text-lg font-medium">{item.label}</span>
                  </Link>
                ))}
                <div className='pt-4 border-t border-gray-200 dark:border-gray-700'>
                  <Button
                    variant="outline"
                    onClick={toggleTheme}
                    className='w-full justify-center gap-2 dark:text-white'
                  >
                    {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* desktop menu */}
        <div className='hidden md:flex items-center gap-1'>
          <NavigationMenu>
            <NavigationMenuList className='gap-2'>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.to}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.to}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(item.to)
                          ? 'bg-blue-500 hover:bg-blue-700 text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className='ml-4 hover:bg-gray-100 dark:hover:bg-gray-800'
                    title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                  >
                    {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  )
}

export default Nav
