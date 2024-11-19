import {
	ArrowDown,
	ChevronsUpDown,
	Link2,
	PencilLine,
	Trash2
} from 'lucide-react';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import { useEffect, useState } from 'react';

const DateCell = ({ date }: { date: string | Date }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const formatDate = (date: string | Date) => {
		const d = new Date(date);
		return d.toLocaleDateString('en-GB', {
			day: '2-digit',
			month: 'short',
			year: 'numeric'
		});
	};

	return <div className='text-muted-foreground'>{formatDate(date)}</div>;
};

export const columns = [
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
