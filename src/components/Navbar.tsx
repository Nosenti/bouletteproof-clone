import React from 'react'
import Input from './Input'
import Image from 'next/image'
import Avatar from '@/images/avatar-user.jpeg'

export default function Navbar() {
  return (
	<div className='flex justify-between bg-white'>
		  <span>
			  <Input/>
		  </span>
		  <span>
			  <span>
				  <Image src={Avatar} width={50} height={50} alt='Avatar' className='rounded-[50%]'/>
			  </span>
			  <span></span>
			  <span></span>
		  </span>
	</div>
  )
}
