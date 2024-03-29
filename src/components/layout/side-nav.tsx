'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import Logo from '../ui/logo';

import { DATA } from './data';

interface SideNavProps {
  children: React.ReactNode;
}

const SideNav: React.FC<SideNavProps> = (props) => {
  const { children } = props;
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel
          defaultSize={7}
          collapsedSize={7}
          collapsible={true}
          minSize={12}
          maxSize={15}
          onCollapse={setIsCollapsed.bind(null, true)}
          onExpand={setIsCollapsed.bind(null, false)}
          className={cn(
            'hidden lg:flex bg-soil-brown-100 flex-col py-8 px-4',
            isCollapsed && 'transition-all duration-300 ease-in-out px-0'
          )}
          tagName='aside'
        >
          <div className='flex justify-center'>
            <Logo isCollapsed={isCollapsed} />
          </div>
          <div
            data-collapsed={isCollapsed}
            className='group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 mt-32'
          >
            <nav className='grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
              {DATA.map((link, index) =>
                isCollapsed ? (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Link
                        href='#'
                        className={cn(
                          buttonVariants({
                            size: 'icon',
                          }),
                          'h-12 w-12 bg-soil-brown-100 shadow-none hover:bg-soil-brown-200',
                          pathname === link.pathname && 'bg-soil-brown-200'
                        )}
                      >
                        <link.icon className='h-6 w-6' />
                        <span className='sr-only'>{link.title}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side='right'
                      className='flex items-center gap-4 bg-soil-brown-200'
                    >
                      {link.title}
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <Link
                    key={index}
                    href='#'
                    className={cn(
                      buttonVariants({ size: 'lg' }),
                      'h-12 px-4 justify-start bg-soil-brown-100 shadow-none hover:bg-soil-brown-200',
                      pathname === link.pathname && 'bg-soil-brown-200'
                    )}
                  >
                    <link.icon className='mr-2 h-6 w-6' />
                    {link.title}
                  </Link>
                )
              )}
            </nav>
          </div>
          <div className='flex justify-center mt-auto'>
            <Button
              className='w-14 h-14 rounded-full shadow-md'
              asChild
              variant='outline'
              size='icon'
            >
              <Link href='#'>
                <Settings strokeWidth={2.25} className='h-7 w-7' />
              </Link>
            </Button>
          </div>
        </ResizablePanel>
        <ResizableHandle className='hidden lg:flex' withHandle />
        <ResizablePanel defaultSize={93} maxSize={93} minSize={85}>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default SideNav;
