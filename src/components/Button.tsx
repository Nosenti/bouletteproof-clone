import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'destructive'
		| 'outline'
		| 'ghost'
		| 'link';
	size?: 'sm' | 'md' | 'lg' | 'icon';
	asChild?: boolean;
}

const baseButtonClasses =
	'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none  disabled:opacity-50 disabled:pointer-events-none';

const variantClasses: { [key: string]: string } = {
	default: 'bg-gray-800 text-white hover:bg-gray-700',
	primary: 'bg-primary text-white hover:bg-primary/70 focus:ring-blue-500',
	secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
	destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
	outline:
		'border border-primary text-primary hover:bg-primary/10',
	ghost: 'bg-transparent hover:bg-accent text-white focus:bg-accent',
	link: 'text-primary hover:underline focus:ring-primary/70'
};

const sizeClasses: { [key: string]: string } = {
	sm: 'h-8 px-3 text-xs',
	md: 'h-10 px-4 text-sm',
	lg: 'h-12 px-6 text-base',
	icon: 'h-10 w-10'
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant = 'default', size = 'md', children, ...props },
		ref
	) => {
		const classes = twMerge(
			baseButtonClasses,
			variantClasses[variant],
			sizeClasses[size],
			className
		);

		return (
			<button className={classes} ref={ref} {...props}>
				{children}
			</button>
		);
	}
);

Button.displayName = 'Button';

export default Button;
