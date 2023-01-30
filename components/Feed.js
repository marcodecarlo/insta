import Stories from "./Stories";

export default function Feed() {
    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto`}>
            <section className="md:col-span-2">
                {/* Stories */}
                <Stories/>

                {/* Posts */}
            </section>

            <section className="hidden md:inline-grid md:col-span-1">
                <div className="fixed w-[380px]">
                    {/* Mini Profile */}

                    {/* Suggestions */}
                </div>
            </section>
        </main>
    );
}