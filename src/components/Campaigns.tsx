"use client";
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import { ChevronRight, ArrowDown, ChevronDown, ChevronsUpDown, Trash2, Link2, PencilLine } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './Table';
import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table';
import { intlFormat } from 'date-fns';

const IndeterminateCheckbox = React.forwardRef(
	({ indeterminate, className = '', ...rest }: any, ref: any) => {
		const defaultRef = React.useRef();
		const resolvedRef = (ref || defaultRef) as any;

		React.useEffect(() => {
			if (typeof indeterminate === 'boolean') {
				resolvedRef.current.indeterminate = !rest.checked && indeterminate;
			}
		}, [resolvedRef, indeterminate]);

		return (
			<input
				type='checkbox'
				ref={resolvedRef}
				className={className + ' cursor-pointer border-red-400'}
				{...rest}
			/>
		);
	}
);

const DateCell = ({ date }: { date: string | Date }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return <div className='text-muted-foreground'>{intlFormat(new Date(date), { month: 'short', day: '2-digit', year: 'numeric' })}</div>;
};

const columns = [
	{
		id: 'select',
		header: ({ table }: any) => (
			<IndeterminateCheckbox
				{...{
					checked: table.getIsAllRowsSelected(),
					indeterminate: table.getIsSomeRowsSelected(),
					onChange: table.getToggleAllRowsSelectedHandler()
				}}
			/>
		),
		cell: ({ row }: any) => (
			<div>
				<IndeterminateCheckbox
					{...{
						checked: row.getIsSelected(),
						disabled: !row.getCanSelect(),
						indeterminate: row.getIsSomeSelected(),
						onChange: row.getToggleSelectedHandler()
					}}
				/>
			</div>
		)
	},
	{
		id: 'name',
		accessorKey: 'name',
		header: () => {
			return (
				<div className='flex items-center gap-1'>
					<p>Name</p>
					<ChevronsUpDown className='size-4' />
				</div>
			);
		}
	},
	{
		id: 'platform',
		accessorKey: 'platform',
		header: () => {
			return (
				<div className='flex items-center gap-1'>
					<p>Platform</p>
					<ChevronsUpDown className='size-4' />
				</div>
			);
		}
	},
	{
		id: 'createDate',
		accessorKey: 'createDate',
		header: () => {
			return (
				<div className='flex items-center gap-1'>
					<p>Create Date</p>
					<ChevronsUpDown className='size-4' />
				</div>
			);
		},
		cell: ({ row }: { row: any }) => {
			return <DateCell date={row.original.createDate} />;
		}
	},
	{
		id: 'leads',
		accessorKey: 'leads',
		header: () => {
			return (
				<div className='flex items-center gap-1'>
					<p>Leads</p>
					<ArrowDown className='size-4' />
				</div>
			);
		},
		cell: ({ row }: { row: any }) => {
			return <div className='text-primary underline'>{row.original.leads}</div>;
		}
	},
	{
		id: 'actions',
		accessorKey: 'actions',
		header: '',
		cell: () => {
			return (
				<div className='flex gap-3'>
					
						<Trash2 className='size-4 text-destructive' />
				
				
						<Link2 className='size-4 text-primary' />
					
						<PencilLine className='size-4 text-muted-foreground' />
					
				</div>
			);
		}
	}
];
const data = [
	{
		name: 'Campaign 1',
		platform: 'Facebook',
		createDate: '2023-01-01',
		leads: 100,
	},
	{
		name: 'Campaign 2',
		platform: 'Google',
		createDate: '2023-01-02',
		leads: 150,
	},
	{
		name: 'Campaign 3',
		platform: 'Instagram',
		createDate: '2023-01-03',
		leads: 200,
	},
	{
		name: 'Campaign 4',
		platform: 'LinkedIn',
		createDate: '2023-01-04',
		leads: 250,
	},
	{
		name: 'Campaign 5',
		platform: 'Twitter',
		createDate: '2023-01-05',
		leads: 300,
	},
	{
		name: 'Campaign 6',
		platform: 'Snapchat',
		createDate: '2023-01-06',
		leads: 350,
	},
	{
		name: 'Campaign 7',
		platform: 'Pinterest',
		createDate: '2023-01-07',
		leads: 400,
	},
	{
		name: 'Campaign 8',
		platform: 'TikTok',
		createDate: '2023-01-08',
		leads: 450,
	},
	{
		name: 'Campaign 9',
		platform: 'YouTube',
		createDate: '2023-01-09',
		leads: 500,
	},
	{
		name: 'Campaign 10',
		platform: 'Reddit',
		createDate: '2023-01-10',
		leads: 550,
	}
];

export default function Campaigns() {
	const [rowSelection, setRowSelection] = React.useState({});
	const cols = useMemo(() => columns, []);
	const data_ = useMemo(() => data, []);

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
