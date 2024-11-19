import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	variant?: 'default' | 'outline' | 'filled';
	size?: 'sm' | 'md' | 'lg';
	icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			variant = 'default',
			size = 'sm',
			type = 'text',
			icon,
			...props
		},
		ref
	) => {
		const baseClasses =
			'block w-full rounded-md transition-colors focus:outline-none   disabled:opacity-50 disabled:cursor-not-allowed';

		const variantClasses = {
			default:
				'bg-white border border-gray-200 focus:border-blue-500 focus:ring-blue-500',
			outline:
				'bg-transparent border border-gray-300 focus:border-blue-500 focus:ring-blue-500',
			filled:
				'bg-gray-100 border border-transparent focus:border-blue-500 focus:ring-blue-500'
		};

		const sizeClasses = {
			sm: 'px-2 py-2 text-sm',
			md: 'px-3 py-2 text-base',
			lg: 'px-4 py-3 text-lg'
		};

		const inputClasses = twMerge(
			baseClasses,
			variantClasses[variant],
			sizeClasses[size],
			icon && 'pl-10', 
			className
		);

		return (
			<div className='relative w-full'>
				{icon && (
					<div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
						{icon}
					</div>
				)}
				<input ref={ref} type={type} className={inputClasses} {...props} />
			</div>
		);
	}
);

Input.displayName = 'Input';

export default Input;
