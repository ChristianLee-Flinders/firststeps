import React from 'react'
import { createPageUrl } from '@/lib/utils'
import { Building2, ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from './command'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContent, DropdownMenuTrigger } from './dropdown-menu'

type Nursery = {
  id?: string
  name?: string
}

type NurserySwitcherProps = {
  currentNursery?: Nursery | null
  className?: string
}

export default function NurserySwitcher({ currentNursery, className }: NurserySwitcherProps) {
  return (
    <>
      {/* Nursery Switcher - Super Admin Only */}
      <div className={`p-4 border-t border-slate-100 ${className ?? ''}`}>
        <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Current Nursery</p>
        <DropdownMenu>
            <DropdownMenuTrigger className='w-full text-start'>
                <div className="px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-100 hover:bg-emerald-100 transition-colors">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold">
                            {currentNursery?.name?.[0] ?? '?'}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-emerald-800 truncate">
                            {currentNursery?.name ?? 'Select Nursery'}
                            </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-emerald-600" />
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent side='right' className='mb-4'>
                <Command>
                    <CommandInput placeholder="Nursery search..." />
                    <CommandList>
                    <CommandEmpty>No nurseries.</CommandEmpty>
                    <CommandGroup heading="Recents">
                        <CommandItem>Chillwell</CommandItem>
                        <CommandItem>Longeaton</CommandItem>
                        <CommandItem>Grange (OOS)</CommandItem>
                        <CommandItem>Demo 2</CommandItem>
                        <CommandItem>test 1</CommandItem>
                        <CommandItem>Grange (OOS)</CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup>
                        <CommandItem>Create new</CommandItem>
                    </CommandGroup>
                    </CommandList>
                </Command>
            </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}