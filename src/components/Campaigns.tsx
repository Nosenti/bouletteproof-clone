import Link from 'next/link';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Table, TableHead, TableHeader } from './Table';
import {
	ColumnDef,
	ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	PaginationState,
	SortingState,
	useReactTable
} from '@tanstack/react-table';

export default function Campaigns() {
	return (
		<div className='shadow-lg rounded-lg p-6 flex flex-col mt-6 bg-white'>
			<div className='flex justify-between'>
				<p className='font-bold text-lg'>Recent Campaigns</p>
				<Link
					href='#'
					className='flex gap-1 items-center text-primary hover:text-primary/50'
				>
					<span className='text-sm'>See All Campaigns</span>{' '}
					<ChevronRight className='size-5' />
				</Link>
			</div>
			<div>
				<Table>
					<TableHeader>

					</TableHeader>
				</Table>
			</div>
		</div>
	);
}
