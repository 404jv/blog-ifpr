import CommentSection from "@/components/Comment";
import RetroPlayer from "@/components/player";

export default function Home() {
  return (
    <div className="flex h-full">
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
      <main className="flex-1 flex flex-col justify-center items-center overflow-y-auto p-10">
        <article className="flex flex-col gap-10 text-center w-full h-full bg-pink-900/70 border-4 border-yellow-300 shadow-[10px_10px_0px_black] p-10">
          <h2 className="text-5xl font-extrabold text-cyan-300 underline decoration-wavy decoration-yellow-400 drop-shadow-lg">
            Startup Enxuta
          </h2>

          <div className="bg-black/70 border-2 border-yellow-400 p-6 shadow-inner">
          
          <p className="font-mono text-green-300 text-lg">
              &gt; Olá mundo... Startup Enxuta: esse livro pode deixar todo programador rico?
            </p>
          </div>

          <img
            src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
            alt="Gif retrô"
            className="mx-auto border-4 border-lime-300 shadow-[8px_8px_0px_black] w-64"
          />

          <p className="text-2xl leading-relaxed">Inspirado na metodologia Manufatura Enxuta, criada no Japão após a Segunda Guerra Mundial e feita pelo Sistema Toyota de Produção (STP). Surgiu assim, a Startup Enxuta, ambas metodologias com foco em eliminar desperdícios e focar naquilo que realmente importa para os clientes finais, enquanto a Manufatura da Toyota elimina retrabalhos da máquina ou estoques em excesso, a Startup Enxuta elimina funcionalidades desnecessárias e achismos. Por isso, um dos focos principais dita pelo Eric Ries no livro, é construir, medir e aprender. Vamos analisar cada parte disso durante esse post.</p>

          <p className="text-2xl leading-relaxed">Startup Lean, ou Startup Enxuta surgiu em 2008, porém somente em 2011 que ganhou um livro consolidando os conhecimentos da metodologia. Rapidamente isso se espalhou em diversos locais do mundo, não só aplicada em empresas privadas, mas também em órgãos governamentais e até ONGs. A grande razão para o motivo disso ter acontecido, foi a falta de método científico no desenvolvimento de software mundial. A comunidade não tinha uma forma de seguir um passo à passo para garantir que aquilo que está sendo feito vai ser realmente usado pelo consumidor final. Portanto, o primeiro passo da metodologia é construir uma versão mais simples possível do sistema ou funcionalidade, conhecido como MVP (Produto Mínimo Viável). Mas, isso não significa que é algo que não funciona, ao contrário, é funcional e somente isso, não tem design diferenciado, performance melhorada e nem nada do tipo, é focado em criar aquilo o mais rápido possível e em algumas situações até com bugs não previstos. Com isso, será possível validar a ideia de forma rápida.</p>

          <p className="text-2xl leading-relaxed">O segundo ponto é medir, nessa etapa a empresa ou seja quem for que está aplicando a metodologia, deve perguntar para os usuários o que eles estão achando da ferramenta, colher dados e feedbacks. Com base nisso tomar as decisões, vale ressaltar que só pelo fato da ausência de resposta por parte dos usuários, não é uma pesquisa indefinida e sim um resultado esperado, caso ninguém esteja reclamando ou elogiando é porque a funcionalidade não atende o seu público no momento e deve se tomar decisões na próxima etapa com isso. Algo parecido acontece com muitas respostas negativas, se tem muita gente reclamando de um funcionalidade de MVP, não significa necessariamente que o projeto é ruim e precisa ser parado, pode significar que a empresa deve focar mais energia naquela funcionalidade porque as pessoas querem tanto a ponto de reclamar.</p>

          <p className="text-2xl leading-relaxed">Um exemplo disso tudo é o caso da Apple quando lançou o iPod com a iTunes Store. No início, o produto não era perfeito, possuía limitações no design e na integração com o sistema operacional, mas permitiu que a empresa testasse rapidamente a aceitação do público em relação à compra de músicas digitais. Com base no feedback inicial, a Apple foi ajustando funcionalidades, melhorando a experiência do usuário e expandindo o serviço de forma contínua. Esse ciclo de construir, medir e aprender permitiu à empresa reduzir riscos e criar um produto que realmente atendesse às necessidades do consumidor.</p>

          <p className="text-2xl leading-relaxed">A última etapa, aprender, é talvez a mais importante da metodologia. Com os dados e feedbacks obtidos, a equipe deve analisar criticamente o que funcionou, o que não funcionou e o que precisa ser ajustado. Isso envolve decisões estratégicas, como continuar investindo em uma funcionalidade, pivotar, ou seja, mudar o rumo do produto, ou até mesmo abandonar algo que não agrega valor. O aprendizado constante garante que o desenvolvimento seja guiado por evidências, e não apenas por intuição ou achismos.</p>

          <p className="text-2xl leading-relaxed">Aplicar a Startup Enxuta não se limita a produtos de tecnologia. Qualquer projeto que envolva inovação, desde novos serviços até campanhas sociais, pode se beneficiar da abordagem enxuta. A chave está em manter o foco no aprendizado rápido e iterativo, evitando desperdícios de tempo, dinheiro e esforço em ideias que não trazem resultados reais para o público-alvo.</p>

          <p className="text-2xl leading-relaxed">Em resumo, a Startup Enxuta é uma metodologia que transforma incerteza em oportunidade, usando ciclos curtos de experimentação para validar hipóteses. Ao seguir os passos de construir, medir e aprender, as empresas conseguem desenvolver soluções mais eficientes, reduzir riscos e criar produtos que realmente têm valor para o usuário final. Essa abordagem ágil e pragmática continua a influenciar empreendedores em todo o mundo, mostrando que a eficiência e a inovação podem andar de mãos dadas.</p>

          <p className="text-xl">
            Obrigado por visitar! Feito com
            <span className="animate-pulse text-pink-400 text-2xl"> 💖</span>
            {' '}por João Victor Ramalho Alves
          </p>
        </article>
        <CommentSection />
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
