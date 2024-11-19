'use client';
import React from 'react';
import Button from './Button';
import {
	AreaChart,
	CartesianGrid,
	XAxis,
	Area,
	Tooltip,
	ResponsiveContainer
} from 'recharts';
import analyticsData from '@/lib/data/data.json';

const data = analyticsData.analytics;

export default function Analytics() {
	return (
		<div className='shadow-lg rounded-lg p-6 flex flex-col gap-8 mt-6 bg-white'>
			<div className='flex justify-between'>
				<span className='flex items-center gap-4'>
					<p className='font-bold text-lg'>Analytics</p>
					<span className='text-sm flex gap-4'>
						<span className='flex items-center gap-2'>
							<div className='h-1.5 w-1.5 rounded-[50%] flex justify-center items-center bg-success'></div>
							<span>Leads</span>
						</span>
						<span className='flex items-center gap-2'>
							<div className='h-1.5 w-1.5 rounded-[50%] flex justify-center items-center bg-primary'></div>
							<span>Campaign</span>
						</span>
					</span>
				</span>
				<div className='flex gap-2'>
					<Button
						size='sm'
						className='bg-transparent text-foreground border border-muted-foreground  hover:bg-muted-foreground px-8 font-bold'
					>
						Daily
					</Button>
					<Button
						size='sm'
						className='bg-transparent text-foreground border border-muted-foreground  hover:bg-muted-foreground px-8 font-bold'
					>
						Monthly
					</Button>
					<Button
						size='sm'
						className='bg-transparent text-foreground border border-muted-foreground  hover:bg-muted-foreground px-8 font-bold'
					>
						Yearly
					</Button>
				</div>
			</div>

			<div style={{ height: '300px', width: '100%' }}>
				<ResponsiveContainer>
					<AreaChart
						data={data}
						margin={{
							top: 10,
							right: 0,
							left: 0,
							bottom: 0
						}}
					>
						<CartesianGrid horizontal={true} vertical={false} />
						<XAxis dataKey='name' tick={{ fontSize: 12 }} />
						<Tooltip
							cursor={{ stroke: 'none' }}
							content={({ active, payload, label }) => {
								if (active && payload && payload.length) {
									return (
										<div className='custom-tooltip bg-white p-2 shadow rounded-lg'>
											<p className='label text-muted-foreground'>{`${label} 2021`}</p>
											{payload.map((entry, index) => (
												<p
													key={`item-${index}`}
													className='intro font-bold'
													style={{ color: entry.color }}
												>{`${entry.value}`}</p>
											))}
										</div>
									);
								}
								return null;
							}}
						/>

						<Area
							type='monotone'
							dataKey='leads'
							stackId='1'
							stroke='#00D084'
							strokeWidth={2}
							fill='#d1f5f8'
						/>
						<Area
							type='monotone'
							dataKey='campaigns'
							stackId='1'
							stroke='#07BDCB'
							strokeWidth={2}
							fill='#d1f5f8'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
