import React from 'react';
import clsx from 'clsx';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	value: number;
	percentageChange: number,
	bgColor?: string;
	decrease?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
	(
		{
			title,
			value,
			percentageChange,
			bgColor = 'bg-card',
			className,
			...props
		},
		ref
	) => {
		return (
			<div
				ref={ref}
				className={clsx(bgColor, 'shadow rounded-lg p-4', className)}
				{...props}
			>
				<h2
					className={clsx(
						'text-sm font-bold mb-2 uppercase text-muted-foreground'
					)}
				>
					{title}
				</h2>
				<div className='flex justify-between items-end'>
					<p className='text-3xl font-bold text-white'>
						{value.toLocaleString()}
					</p>
					<div className='flex items-center'>
						<p className={clsx(
							percentageChange < 0 ? 'text-destructive' : 'text-success',
							'font-medium'
						)}>
							{percentageChange > 0 ? `+${percentageChange.toFixed(0)}` : percentageChange.toFixed(0)}%
						</p>
						{percentageChange < 0 ? (
							<ArrowDown className='text-destructive ml-1 size-4' />
						) : (
							<ArrowUp className='text-success ml-1 size-4' />
						)}
					</div>
				</div>
			</div>
		);
	}
);

Card.displayName = 'Card';

export default Card;
