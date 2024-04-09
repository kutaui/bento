import { TileCard } from '@/components/tile-card'

export default function Home(this: any) {
	return (
		<main className="max-w-[1180px] mx-auto px-10 py-36">
			<section className="flex flex-wrap gap-4 animate-fade-left animate-ease-in-out w-full">
				<TileCard
					href="https://github.com/kutaui"
					title="github/kutaui"
					description="my code"
					image="/github-mark-white.png"
					background="bg-[url('/github-graph.png')]"
				/>
				<TileCard
					href="https://blog.kutaybekleric.com"
					title="blog"
					description="stuff i wrote"
					image="/medium.png"
					background="bg-[url('/bubble.png')] bg-contain bg-right bg-no-repeat"
				/>
				<TileCard
					href="https://kutaybekleric.com"
					title="my"
					description="projects"
					image="false"
					background="bg-[url('/portfolio.png')] bg-contain bg-center bg-no-repeat"
				/>
				<TileCard />
				<TileCard />
				<TileCard />
				<TileCard />
				<TileCard />
				<TileCard />
				<TileCard />
				<TileCard />
				<TileCard />
			</section>
		</main>
	)
}
