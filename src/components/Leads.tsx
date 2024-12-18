import Link from 'next/link';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import leadsData from '@/lib/data/data.json';

export default function Leads() {
	const data = leadsData.leads;
	return (
		<div className='shadow-lg rounded-lg border border-gray-200 p-6 flex flex-col mt-6 bg-white gap-6 h-[450px]'>
			<p className='font-bold text-lg'>Recent Leads</p>
			<span className=''>
				<div className='flex flex-col'>
					{data.map((user, index) => (
						<div className='flex gap-3 my-4' key={index}>
							<Image
								src={`${user.avatar}`}
								width={45}
								height={45}
								alt='name'
								className='rounded-[50%]'
							/>
							<div className='text-sm flex flex-col justify-between'>
								<p className='font-bold'>{user.name}</p>
								<p className='text-muted-foreground'>{user.email}</p>
							</div>
						</div>
					))}
				</div>
				<Link
					href='#'
					className='font-semibold flex gap-1 items-center text-muted-foreground hover:text-accent uppercase mt-4'
				>
					<span className='text-sm'>See All Leads</span>{' '}
					<ChevronRight className='size-5' />
				</Link>
			</span>
		</div>
	);
}
