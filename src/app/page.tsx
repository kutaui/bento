import { TileCard } from '@/components/tile-card';

export default function Home(this: any) {
    return <main className="max-w-[1180px] mx-auto px-10 py-36">
        <section className="flex flex-wrap gap-4 animate-fade-left animate-ease-in-out w-full">
            <TileCard href="https://github.com/kutaui" title="github/kutaui" description="my code" image="/github-mark-white.png" background="bg-[url('/github-graph.png')]"/>
            <TileCard href="https://medium.com/@kutaui" title="medium/kutaui" description="stuff i wrote" image="/medium.png" background="bg-[url('/bubble.png')] bg-contain bg-right bg-no-repeat"/>
            <TileCard href="https://www.linkedin.com/in/kutaybekleric/" title="linkedin" description="professional" image="/linkedin.png" background="bg-[url('/linkedin-bg.jpg')] bg-[0px_230px] pt-1" />
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
