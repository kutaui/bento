import { TileCard } from '@/components/tile-card';

export default function Home(this: any) {
    return <main className="max-w-[1300px] mx-auto px-10 py-36">
        <section className="flex flex-wrap gap-2">
            <TileCard href="https://github.com/kutaui" title="github/kutaui" description="my code" image="/github-mark-white.png" background="bg-[url('/github-graph.png')]"/>
            <TileCard href="https://medium.com/@kutaui" title="blog" description="stuff i wrote" image="/medium.png" background="bg-[url('/blog.png')]"/>
            <TileCard/>
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
