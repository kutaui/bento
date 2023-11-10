import { TileCard } from '@/components/tile-card';

export default function Home(this: any) {
    return <main className="max-w-[1180px] mx-auto px-10 py-36">
        <section className="flex flex-wrap gap-4 animate-fade-left animate-ease-in-out w-full">
            <TileCard href="https://github.com/kutaui" title="github/kutaui" description="my code" image="/github-mark-white.png" background="bg-[url('/github-graph.png')]"/>
            <TileCard href="https://medium.com/@kutaui" title="medium/kutaui" description="stuff i wrote" image="/medium.png" background="bg-[url('/bubble.png')] bg-contain bg-right bg-no-repeat"/>
            <TileCard href="https://twitter.com/kutaul" title="twitter" description="yeah i know" image="/twitter.png" background="bg-[url('/twitter-bg.jpg')] bg-no-repeat" />
            <TileCard/>
            <TileCard/>
            <TileCard/>
            <TileCard/>
            <TileCard/>
            <TileCard/>
            <TileCard/>
            <TileCard/>
            <TileCard/>
        </section>
        <section>

        </section>
    </main>;

}
