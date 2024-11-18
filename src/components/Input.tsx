import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	variant?: 'default' | 'outline' | 'filled';
	size?: 'sm' | 'md' | 'lg';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{ className, variant = 'default', size = 'sm', type = 'text', ...props },
		ref
	) => {
		const baseClasses =
			'block w-full rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

		const variantClasses = {
			default:
				'bg-white border border-gray-300 focus:border-blue-500 focus:ring-blue-500',
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

		const classes = twMerge(
			baseClasses,
			variantClasses[variant],
			sizeClasses[size],
			className
		);

		return <input ref={ref} type={type} className={classes} {...props} />;
	}
);

Input.displayName = 'Input';

export default Input;
