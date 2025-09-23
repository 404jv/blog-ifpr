import RetroPlayer from "@/components/player";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Lateral Esquerda */}
      <aside className="w-120 bg-black/50 border-r-4 border-pink-500 flex flex-col justify-between py-6 items-center">
       <RetroPlayer />

        <img
          src="https://media.giphy.com/media/l0HlOvJ7yaacpuSas/giphy.gif"
          alt="Matrix"
          className="w-full border-2 border-yellow-400"
        />
        <img
          src="/baby_vintage.gif"
          alt="Pikachu"
          className="w-full border-2 border-lime-400"
        />
      </aside>

      {/* Conteúdo Central */}
      <main className="flex-1 flex justify-center items-center overflow-y-auto p-10">
        <article className="flex flex-col gap-10 text-center w-full h-full bg-pink-900/70 border-4 border-yellow-300 shadow-[10px_10px_0px_black] p-10">
          <h2 className="text-5xl font-extrabold text-cyan-300 underline decoration-wavy decoration-yellow-400 drop-shadow-lg">
            Startup Enxuta
          </h2>

          <p className="text-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora impedit incidunt et quos, quia repellendus eveniet obcaecati, labore voluptas ipsum dolores doloribus unde expedita ratione! Illum sunt repellat alias!
          </p>

          <div className="bg-black/70 border-2 border-yellow-400 p-6 shadow-inner">
            <p className="font-mono text-green-300 text-lg">
              &gt; Olá mundo...
            </p>
          </div>

          <img
            src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
            alt="Gif retrô"
            className="mx-auto border-4 border-lime-300 shadow-[8px_8px_0px_black] w-64"
          />

          <p className="text-xl">
            Obrigado por visitar! Sinta-se em casa e curta o clima nostálgico.
            <span className="animate-pulse text-pink-400 text-2xl"> 💖</span>
          </p>
        </article>
      </main>

      {/* Lateral Direita */}
      <aside className="w-120 bg-black/50 border-l-4 border-cyan-500 flex flex-col justify-between py-6 items-center">
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="Windows XP"
          className="w-full border-2 border-cyan-400"
        />
        <img
          src="https://www.animatedgif.net/fire/fireani_e0.gif"
          alt="Fire flames"
          className="w-full border-2 border-red-500"
        />
        <img
          src="https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif"
          alt="Hacker gif"
          className="w-full border-2 border-green-400"
        />
      </aside>
    </div>
  );
}
