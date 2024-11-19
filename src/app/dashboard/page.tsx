import Analytics from '@/components/Analytics';
import Button from '@/components/Button';
import Campaigns from '@/components/Campaigns';
import Card from '@/components/Card';
import Leads from '@/components/Leads';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Dashboard'
};

export default function page() {
	return (
		<div className=''>
			<div className='flex justify-between my-6'>
				<span className='flex'>
					<p className='font-bold'>Hey Lilian - </p>{' '}
					<span className='text-muted-foreground'>
						{' '}
						here's what's happening today
					</span>
				</span>
				<span className='flex gap-3'>
					<Button variant='outline'>Add Website</Button>
					<Button variant='primary'>Add Campaign</Button>
				</span>
			</div>
			<span className='grid grid-cols-3 w-full gap-3'>
				<Card title='number of leads' value={2048} percentageChange={-0.01} />
				<Card title='number of campaigns' value={123} percentageChange={0.01} />
				<Card title='number of websites' value={12} percentageChange={0.01} />
			</span>

				<Analytics />
			
			<span className='flex flex-col md:flex-row gap-6'>
				<span className='w-3/5'>
					<Campaigns/>
				</span>
				<span className='w-2/5'>
					<Leads/>
				</span>
			</span>
		</div>
	);
}
