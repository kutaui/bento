import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

export const metadata: Metadata = {
	title: 'kutay',
	description: "Kutay's bento, links for his socials and projects.",
	keywords: [
		'webdev',
		'kutaui',
		'webdevelopment',
		'frontend',
		'bento',
		'portfolio',
	],
	robots: 'index, follow',
	creator: 'kutaui',
	metadataBase: new URL('https://kutay.boo'),
	openGraph: {
		title: 'kutay',
		siteName: 'kutaui',
		description: "Kutay's bento, links for his socials and projects.",
		url: 'https://kutay.boo',
		type: 'website',
		locale: 'en_US',
		images: [
			{
				url: 'https://kutay.boo/thorfinn.png',
				alt: 'thorfinn',
			},
		],
	},
	twitter: {
		title: 'kutay',
		description: "Kutay's bento, links for his socials and projects.",
		card: 'summary',
		site: 'https://kutay.boo',
		creator: '@kutaul',
		images: [
			{
				url: 'https://kutay.boo/thorfinn.png',
				alt: 'thorfinn',
			},
		],
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className='font-["Space_Grotesk"]'>
				{children}
				<Analytics />
			</body>
			<Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-9SWB5V36QB" />
		</html>
	)
}
