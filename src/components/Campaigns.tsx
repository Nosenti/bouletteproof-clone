"use client";
import Link from 'next/link';
import React, { useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './Table';
import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table';
import data from '@/lib/data/data.json'
import { columns } from './columns';

const campaigns = data.campaigns;

export default function Campaigns() {
	const [rowSelection, setRowSelection] = React.useState({});
	const cols = useMemo(() => columns, []);
	const data_ = useMemo(() => campaigns, []);

	const table = useReactTable({
		columns: cols,
		data: data_,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		enableSorting: true,
		enableColumnFilters: true,
		enableRowSelection: true,
		onRowSelectionChange: setRowSelection,
		state: {
			rowSelection
		}
	});
	return (
		<div className='shadow-lg rounded-lg border border-gray-200 p-6 flex flex-col mt-6 bg-white h-[450px] overflow-hidden mb-4'>
			<div className='flex justify-between mb-8'>
				<p className='font-bold text-lg'>Recent Campaigns</p>
				<Link
					href='#'
					className='flex gap-1 items-center text-primary hover:text-primary/50'
				>
					<span className='text-sm'>See All Campaigns</span>{' '}
					<ChevronRight className='size-5' />
				</Link>
			</div>
			<div className=''>
				<Table className=''>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead
										key={header.id}
										className='py-3 text-muted-foreground'
									>
										{flexRender(
											header.column.columnDef.header,
											header.getContext()
										)}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getPaginationRowModel().rows.map((row) => (
							<TableRow key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id} className='py-4'>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
