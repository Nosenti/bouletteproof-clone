import Image from 'next/image';
import React from 'react';
import Logo from '@/images/JPG_1_.svg';
import Button from './Button';
import { LayoutGrid, Megaphone, Globe, Users } from 'lucide-react';

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
  return (
		<div className='bg-card h-full p-4'>
			<span className='mt-8'>
				<Image className='mt-4' src={Logo} height={60} width={170} alt='logo' />
			</span>

			<div className='mt-8'>
				<span className='flex flex-col'>
					{navItems.map((item, index) => (
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
				<span></span>
			</div>
		</div>
	);
}
