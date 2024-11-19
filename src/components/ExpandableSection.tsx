'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import Button from './Button';

interface ExpandableSectionProps {
	title: string;
	icon?: React.ReactNode;
	children: React.ReactNode;
	defaultExpanded?: boolean;
	className?: string;
	headerClassName?: string;
	contentClassName?: string;
}

export default function ExpandableSection({
	title,
	icon,
	children,
	defaultExpanded = false,
	className,
	headerClassName,
	contentClassName
}: ExpandableSectionProps) {
	const [isExpanded, setIsExpanded] = useState(defaultExpanded);

	return (
		<div
			className={twMerge(
				'w-full rounded-lg bg-transparent flex flex-col',
				className
			)}
		>
			<Button
				variant='ghost'
				onClick={() => setIsExpanded(!isExpanded)}
				className={twMerge(
					'flex w-full items-center justify-between px-4 py-3',
					'text-left font-medium hover:bg-accent text-base',
					headerClassName
				)}
			>
				<span className='flex items-center gap-2 justify-center'>
					{icon && <span className='flex items-center h-6 w-6 size-9'>{icon}</span>}
					{title}
				</span>
				{isExpanded ? (
					<ChevronUp className='h-4 w-4 text-white' />
				) : (
					<ChevronDown className='h-4 w-4 text-white' />
				)}
			</Button>

			<div
				className={twMerge(
					'overflow-hidden transition-all duration-200 ease-in-out',
					isExpanded ? 'max-h-[1000px]' : 'max-h-0',
					contentClassName
				)}
			>
				<div className='px-4 py-3'>{children}</div>
			</div>
		</div>
	);
}
