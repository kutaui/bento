import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Divide } from 'lucide-react'

type TileCardProps = {
	title?: string
	description?: string
	href?: string
	image?: string
	background?: string
}

export const TileCard = ({
	title = 'more',
	description = 'soon',
	href = '/',
	image = '/loading.png',
	background = '',
}: TileCardProps) => {
	return (
		<a href={href} target="_blank" className="group">
			<Card
				className={cn(
					'w-64 hover:animate-wiggle animate-once animate-ease-in-out' +
						' bg-zinc-900 transition rounded-3xl h-36' +
						' overflow-hidden hover:scale-[1.02] hover:border-[3px] hover:cursor-pointer bg-cover',
					background
				)}
			>
				<CardHeader className="relative pt-10">
					<CardTitle className="text-white translate-y-6 group-hover:translate-y-0 transition text-lg font-semibold ">
						{image !== 'false' ? (
							<Image
								src={image}
								alt="asd"
								width={25}
								height={20}
								className="pb-2"
							/>
						) : (
							<div className="w-[25px] h-[33px] pb-2" />
						)}
						{title}
					</CardTitle>
					<CardDescription className="text-white font-medium translate-y-6 group-hover:translate-y-0 z-10 opacity-0 group-hover:opacity-100 transition">
						{description}
					</CardDescription>
				</CardHeader>
			</Card>
		</a>
	)
}
