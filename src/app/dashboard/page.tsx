import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
	title: 'Dashboard'
};

export default function page() {

  return (
	<div>
	  <p className='text-primary'>Dashboard</p>
	</div>
  )
}
