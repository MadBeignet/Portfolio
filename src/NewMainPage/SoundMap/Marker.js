// import { LatLngLiteral } from 'google-maps-react-markers'
import React from 'react'
// import marker from './reddot.png';

// interface MarkerProps {
// 	className?: string
// 	draggable: boolean
// 	lat: number
// 	lng: number
// 	markerId: string
// 	onClick?: (
// 		e: React.MouseEvent<HTMLImageElement, MouseEvent>,
// 		props: { lat: number; lng: number; markerId: string },
// 	) => void
// 	onDrag?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>, props: { latLng: LatLngLiteral }) => void
// 	onDragEnd?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>, props: { latLng: LatLngLiteral }) => void
// 	onDragStart?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>, props: { latLng: LatLngLiteral }) => void
// }

const Marker = ({
	className,
	lat,
	lng,
	markerId,
    audio,
    text,
    pic,
	onClick,
	draggable,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onDrag,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onDragEnd,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onDragStart,
	...props
}) =>
	lat && lng ? (
        <div
        className={className}
			// src={marker}
			// lat={lat}
			// lng={lng}
			onClick={(e) => (onClick ? onClick(e, { markerId, lat, lng, audio, text, pic }) : null)}
			style={{ fontSize: 20 }}
			// alt={markerId}
			// width={25}
			// height={25}
			{...props}>
            {markerId}
        </div>
		
		// <img
		// 	className={className}
		// 	src={marker}
		// 	// lat={lat}
		// 	// lng={lng}
		// 	onClick={(e) => (onClick ? onClick(e, { markerId, lat, lng, audio }) : null)}
		// 	style={{ fontSize: 28 }}
		// 	alt={markerId}
		// 	width={25}
		// 	height={25}
		// 	{...props}
		// />
	) : null

export default Marker