import type { Component } from 'solid-js'

export const CopyIcon: Component = () => {
	return (
		<svg
			stroke='currentColor'
			fill='currentColor'
			stroke-width='0'
			viewBox='0 0 16 16'
			height='1.2em'
			width='1.2em'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M4 4l1-1h5.414L14 6.586V14l-1 1H5l-1-1V4zm9 3l-3-3H5v10h8V7z'
			></path>
			<path fill-rule='evenodd' clip-rule='evenodd' d='M3 1L2 2v10l1 1V2h6.414l-1-1H3z'></path>
		</svg>
	)
}
