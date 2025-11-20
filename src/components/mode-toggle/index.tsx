import React from 'react';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';

const ModeToggle = () => {
  const { setTheme } = useTheme();
  const mode = [
    {
      name: 'Light',
    },
    {
      name: 'Dark',
    },
    {
      name: 'System',
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'outline'}
          size={'icon'}
          className="border-secondary bg-salmon-pink/40"
        >
          <Sun className="h-10 w-10 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-10 w-10 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {mode.map((item) => (
          <DropdownMenuItem
            key={item.name}
            onClick={() => setTheme(item.name.toLowerCase())}
          >
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
