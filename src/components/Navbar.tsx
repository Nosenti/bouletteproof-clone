import React from 'react'
import Input from './Input'
import Image from 'next/image'
import Avatar from '@/images/avatar-user.jpeg';
import { Search, Bell, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
		<div className='flex justify-between bg-white px-6 py-3'>
			<span className='flex items-center w-[60%]'>
				<Input
					icon={<Search className='w-4 h-4' />}
					placeholder='Type to search'
					className='flex-grow'
				/>
			</span>
			<span className='flex items-center gap-5'>
				<span>
					<select className='rounded py-1 text-sm'>
						<option value='en'>EN</option>
						<option value='fr'>FR</option>
					</select>
				</span>

				<div className='relative h-10 w-10 rounded-[50%] bg-accent flex items-center justify-center'>
					<Bell className='text-white size-5' />
					<span className='absolute top-0 right-0 transform translate-x-1.5 -translate-y-1.5 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
						4
					</span>
				</div>
				<div className='bg-accent flex items-center gap-2 h-full py-1 rounded-3xl px-2'>
					<Image
						src={Avatar}
						width={25}
						height={25}
						alt='Avatar'
						className='rounded-[50%]'
				  />
				  <p className='text-white text-xs font-semibold'>Lilian Smith</p>
				  <ChevronDown className='text-white size-5'/>
				</div>
			</span>
		</div>
	);
}
