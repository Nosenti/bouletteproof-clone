import React from 'react';
import clsx from 'clsx';

/**
 * Table Component
 * Uses React.HTMLAttributes<HTMLTableElement> directly.
 */
export const Table = React.forwardRef<
	HTMLTableElement,
	React.HTMLAttributes<HTMLTableElement>
>(({ className, children, ...props }, ref) => {
	return (
		<div className='relative w-full overflow-auto'>
			<table
				ref={ref}
				className={clsx('w-full text-sm caption-bottom', className)}
				{...props}
			>
				{children}
			</table>
		</div>
	);
});

Table.displayName = 'Table';

export const TableHeader = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, children, ...props }, ref) => {
	return (
		<thead ref={ref} className={clsx('bg-gray-50', className)} {...props}>
			{children}
		</thead>
	);
});

TableHeader.displayName = 'TableHeader';

export const TableBody = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, children, ...props }, ref) => {
	return (
		<tbody
			ref={ref}
			className={clsx('divide-y divide-gray-200', className)}
			{...props}
		>
			{children}
		</tbody>
	);
});

TableBody.displayName = 'TableBody';

export const TableFooter = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, children, ...props }, ref) => {
	return (
		<tfoot ref={ref} className={clsx('bg-gray-50', className)} {...props}>
			{children}
		</tfoot>
	);
});

TableFooter.displayName = 'TableFooter';

export const TableRow = React.forwardRef<
	HTMLTableRowElement,
	React.HTMLAttributes<HTMLTableRowElement>
>(({ className, children, ...props }, ref) => {
	return (
		<tr
			ref={ref}
			className={clsx('hover:bg-gray-100 transition-colors', className)}
			{...props}
		>
			{children}
		</tr>
	);
});

TableRow.displayName = 'TableRow';

export const TableHead = React.forwardRef<
	HTMLTableCellElement,
	React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, children, ...props }, ref) => {
	return (
		<th
			ref={ref}
			className={clsx(
				'px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
				className
			)}
			{...props}
		>
			{children}
		</th>
	);
});

TableHead.displayName = 'TableHead';

export const TableCell = React.forwardRef<
	HTMLTableCellElement,
	React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, children, ...props }, ref) => {
	return (
		<td
			ref={ref}
			className={clsx(
				'px-4 py-2 whitespace-nowrap text-sm text-gray-700',
				className
			)}
			{...props}
		>
			{children}
		</td>
	);
});

TableCell.displayName = 'TableCell';

export const TableCaption = React.forwardRef<
	HTMLTableCaptionElement,
	React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, children, ...props }, ref) => {
	return (
		<caption
			ref={ref}
			className={clsx('mt-2 text-sm text-gray-500', className)}
			{...props}
		>
			{children}
		</caption>
	);
});

TableCaption.displayName = 'TableCaption';
