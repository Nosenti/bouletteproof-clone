"use client";
import Image from 'next/image';
import React from 'react';
import Logo from '@/images/JPG_1_.svg';
import Button from './Button';
import { LayoutGrid, Megaphone, Globe, Users, Settings, Headphones, LogOut, TrendingDown } from 'lucide-react';
import ExpandableSection from './ExpandableSection';
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';

type NavItemType = {
  path: string;
	name: string;
	icon: React.ReactNode;
};

export default function Sidebar() {
	const navItems: NavItemType[] = [
		{
			path: '/dashboard',
			name: 'Dashboard',
			icon: <LayoutGrid />
		},
		{
			path: '#',
			name: 'Campaigns',
			icon: <Megaphone />
		},
		{
			path: '#',
			name: 'Leads',
			icon: <Users className=''/>
		}
	];
	const navItemsB: NavItemType[] = [
		{
			path: '#',
			name: 'Support',
			icon: <Headphones />
		},
		{
			path: '#',
			name: 'Settings',
			icon: <Settings />
		},
		{
			path: '#',
			name: 'Logout',
			icon: <LogOut className=''/>
		}
	];
	const pathname = usePathname();
  return (
		<div className='bg-card h-full p-4 sticky top-0'>
			<span className='mt-8'>
				<Image className='mt-4' src={Logo} height={60} width={170} alt='logo' />
			</span>

			<div className='mt-8'>
				<span className='flex flex-col gap-1'>
					{navItems.map((item, index) => (
						<Button
							variant='ghost'
							className={twMerge(
								'hover:text-primary flex justify-start items-center focus:text-primary',
								pathname === item.path && 'text-primary bg-accent'
							)}
							key={index}
						>
							<span className='mr-2'>{item.icon}</span>
							<span className='text-base'>{item.name}</span>
						</Button>
					))}
					<ExpandableSection icon={<Globe />} title='Website Analysis'>
						<Button
							variant='ghost'
							className='hover:text-primary flex justify-start items-center focus:text-primary'
						>
							<span className='mr-2'>{<TrendingDown />}</span>
							<span className='text-base'>Churn Analysis</span>
						</Button>
					</ExpandableSection>
				</span>
				<hr className='mb-8 mt-24 border-t border-muted-foreground' />
				<span className='flex flex-col'>
					{navItemsB.map((item, index) => (
						<Button
							variant='ghost'
							className='hover:text-primary flex justify-start items-center focus:text-primary'
							key={index}
						>
							<span className='mr-2'>{item.icon}</span>
							<span className='text-base'>{item.name}</span>
						</Button>
					))}
				</span>
			</div>
		</div>
	);
}
