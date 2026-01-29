import React from 'react';
import WarningBar from './components/WarningBar';
import Testimonials from './components/Testimonials';
import Button from './components/Button';
import { Flame, Lock, ShieldCheck, Zap, Heart, UserX, Star } from 'lucide-react';

// Images
const IMG_1 = "https://feiticosecretosdoamor.netlify.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FrJhARQH.jpeg&w=750&q=75";
const IMG_SACERDOTISA = "https://feiticosecretosdoamor.netlify.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FkkGFDp4.jpeg&w=640&q=75";
const IMG_TEMPLE = "https://feiticosecretosdoamor.netlify.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FRfnM0Aw.jpeg&w=750&q=75";
const IMG_RITUAL = "https://feiticosecretosdoamor.netlify.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FEcmtW16.jpeg&w=750&q=75";
const IMG_ROYALTY = "https://feiticosecretosdoamor.netlify.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2F1sAIPUI.jpeg&w=750&q=75";
const IMG_AZARA = "https://feiticosecretosdoamor.netlify.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FS0BPoDO.jpeg&w=640&q=75";
const IMG_URGENCY = "https://feiticosecretosdoamor.netlify.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FgLqf1pr.jpeg&w=750&q=75";

function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans">
      <WarningBar />

      <main className="max-w-3xl mx-auto px-5 py-8 md:py-12 space-y-10">
        
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <p className="text-xl md:text-2xl font-medium leading-relaxed">
            Sussurre o nome da pessoa desejada nesta chama sagrada… e em até 5 noites, ela vai ficar totalmente obcecada por você ou alguém novo surgirá, tomado por um desejo impossível de ignorar.
          </p>

          <img src={IMG_1} alt="Mãos segurando uma chama sagrada" className="w-full rounded-lg shadow-lg border border-red-900/30" />

          <p className="text-lg leading-relaxed">
            Ele ou ela vai se revirar na cama à noite, incapaz de tirar você da cabeça. E, na quinta noite, vai rastejar de volta para você — ou surgir na sua vida com uma intensidade inexplicável — como se a vida dele(a) dependesse disso.
          </p>
        </section>

        {/* Narrative Section */}
        <section className="space-y-6 text-lg text-zinc-300">
          <p>Eu não imploro para ninguém.</p>
          <p>Eu não corro atrás de homens ou mulheres.</p>
          <p>E com certeza não fico sentada(o) chorando, me perguntando por que a pessoa que eu quero “precisa de espaço”.</p>
          <p className="font-bold text-white text-xl">
            Porque eu encontrei algo mais antigo.<br/>
            Mais sombrio.<br/>
            Algo contra o qual nenhum coração humano consegue lutar.
          </p>
          <p>
            Tudo o que fiz foi entregar o nome da pessoa que eu queria trazer de volta — ou atrair pela primeira vez — a uma sacerdotisa que guarda uma chama antiga que queima há mais de 1.500 anos.
          </p>
          <p>Ela sussurrou o nome dele ou dela no fogo.</p>
          <p>E em menos de 48 horas, minha realidade começou a mudar.</p>
          
          <ul className="space-y-2 font-medium text-red-400">
            <li className="flex items-center gap-2"><Flame size={18}/> Mensagens.</li>
            <li className="flex items-center gap-2"><Flame size={18}/> Sinais.</li>
            <li className="flex items-center gap-2"><Flame size={18}/> Atenção inesperada.</li>
            <li className="flex items-center gap-2"><Flame size={18}/> Conexões surgindo do nada.</li>
          </ul>

          <p>
            Implorando. Chorando. Rastejando de volta — ou se aproximando com uma intensidade que eu nunca tinha vivido antes — como alguém que perdeu completamente o controle.
          </p>
        </section>

        {/* Before/After Section */}
        <section className="space-y-6 text-lg bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
          <h2 className="text-2xl font-bold text-white mb-4">A Última Vez Que Ele (Ou Ela) Se Afastou…</h2>
          <p>Ou quando ninguém especial parecia aparecer na minha vida…</p>
          <p>A pessoa achou que podia simplesmente sumir.</p>
          <p>Ou o universo parecia me ignorar.</p>
          <p>Me deixar no vácuo.</p>
          <p>Agir como se o que eu sentia não tivesse significado nada.</p>
          <p className="italic text-yellow-400">Ahhh… que fofo.</p>
        </section>

        <section className="space-y-6 text-lg">
          <p>
            Entreguei o nome — ou a intenção clara de atrair o amor certo — à Sacerdotisa Azara.
            Ela acendeu a vela sagrada em seu templo de fogo, pronunciou o nome ou abriu o caminho energético, e deixou o fogo fazer o trabalho.
          </p>
          
          <figure className="text-center">
            <img src={IMG_SACERDOTISA} alt="Sacerdotisa Azara" className="w-full rounded-lg shadow-lg border border-red-900/30" />
            <figcaption className="text-sm text-zinc-500 mt-2 tracking-widest uppercase font-bold">SACERDOTISA</figcaption>
          </figure>
          
          <div className="space-y-6 mt-8">
            <div className="bg-zinc-800 p-5 rounded-md border-l-4 border-yellow-500">
              <h3 className="font-bold text-white text-xl mb-2">Na manhã seguinte?</h3>
              <p>Uma mensagem do nada.</p>
              <p>Um encontro inesperado.</p>
              <p>Ou alguém dizendo:</p>
              <p className="italic text-yellow-200 mt-2">“Tive o sonho mais estranho com você. Não consigo parar de pensar em você.”</p>
            </div>

            <div className="bg-zinc-800 p-5 rounded-md border-l-4 border-orange-500">
              <h3 className="font-bold text-white text-xl mb-2">Na terceira noite?</h3>
              <p>37 ligações perdidas.</p>
              <p>Mensagens sem parar.</p>
              <p>Ou uma conexão tão intensa que parecia destino:</p>
              <p className="italic text-yellow-200 mt-2">“Me desculpa… não sei o que está acontecendo comigo. Eu preciso te ver.”</p>
            </div>

            <div className="bg-zinc-800 p-5 rounded-md border-l-4 border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
              <h3 className="font-bold text-white text-xl mb-2">Na quinta noite?</h3>
              <p>Ele ou ela estava na minha porta.</p>
              <p>Ou totalmente presente na minha vida.</p>
              <p>Olhos vermelhos. Voz tremendo.</p>
              <p>Jurando que nunca mais iria embora.</p>
              <p className="mt-4 font-semibold text-white">Disse que sentia o peito em chamas e que eu era a única coisa capaz de apagar aquele fogo.</p>
              <p className="mt-2 text-red-400 font-bold uppercase">Tudo isso em menos de 5 noites.</p>
            </div>
          </div>
        </section>

        {/* Why it works */}
        <section className="space-y-6 text-lg">
          <h2 className="text-2xl font-bold text-white">Por Que Isso Funciona (E Por Que Todo o Resto Falha)</h2>
          <p>A maioria das pessoas faz tudo errado.</p>
          <ul className="list-disc pl-5 space-y-2 text-zinc-400">
            <li>Choram abraçadas ao travesseiro.</li>
            <li>Imploram atenção.</li>
            <li>Stalkeiam redes sociais.</li>
            <li>Ou simplesmente esperam o “amor aparecer”.</li>
          </ul>
          <p>Ouvem amigos dizendo: <span className="italic text-white">“Dá tempo ao tempo.”</span></p>
          
          <div className="bg-red-900/20 border border-red-900 p-6 rounded-xl">
            <p className="font-bold text-white mb-4">Deixa eu te contar a verdade:</p>
            <p className="mb-2">O amor não volta por espaço.</p>
            <p className="mb-4">E não aparece por acaso.</p>
            <p className="text-xl font-bold text-red-400">Ele volta — ou surge — quando algo se agarra à alma e não solta mais.</p>
            <p className="mt-4">E é exatamente isso que essa chama faz.</p>
          </div>

          <p>Ela não pede.</p>
          <p>Não convence.</p>
          <p className="font-bold text-white">Ela queima o seu nome — ou a sua energia — no espírito da pessoa certa até você ser tudo em que ela consegue pensar.</p>
        </section>

        {/* Persian Secret */}
        <section className="space-y-6 text-lg">
          <h2 className="text-3xl font-bold text-yellow-500 text-center leading-tight">O Segredo Proibido dos Templos de Fogo da Pérsia</h2>
          <img src={IMG_TEMPLE} alt="Templo de Fogo" className="w-full rounded-lg shadow-lg" />
          
          <p>Isso não é um truque moderno de “manifestação”.</p>
          <p>Não são velas de loja barata nem pensamentos positivos.</p>
          <p>É um ritual de fogo antigo que remonta a mais de 3.000 anos, às sacerdotisas zoroastristas da Pérsia.</p>
          
          <p>Elas sabiam algo que foi escondido das pessoas por séculos:</p>
          <p className="font-bold text-xl text-center border-y border-zinc-700 py-4">
            Todo ser humano tem um ponto na alma que pode ser incendiado. E quando é aceso, ele queima por uma única pessoa — e apenas uma.
          </p>

          <p>Rainhas e reis usavam isso para manter seus amores leais. Tão leais que abandonavam amantes, largavam guerras pela metade e atravessavam reinos inteiros apenas para estar perto de quem incendiou sua alma novamente.</p>
          <p>Os sacerdotes odiavam isso.</p>
          <p>Chamavam de perigoso.</p>
          <p>Tentaram enterrar esse conhecimento.</p>
          <p>Mas os sussurros nunca cessaram.</p>
          
          <div className="bg-zinc-800 p-6 rounded-lg">
            <p className="font-bold text-white">Porque toda pessoa que usava sabia a verdade:</p>
            <p className="mt-2 text-yellow-400">Uma vez que o nome entra na chama sagrada, a alma fica ligada a você.</p>
            <p className="mt-1 text-red-500 font-bold uppercase">E esse fogo nunca se apaga.</p>
          </div>
        </section>

        {/* The Switch */}
        <section className="space-y-6 text-lg">
          <h2 className="text-2xl font-bold uppercase text-white">AS PESSOAS ACHAM QUE ESTÃO NO CONTROLE DE TUDO.</h2>
          <p className="text-red-500 font-bold text-xl">Não estão !!</p>
          <p>Todo ser humano tem um interruptor escondido dentro de si.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 p-4 rounded border-t-4 border-green-500">
              <h4 className="font-bold text-green-400 mb-2">Quando está ligado?</h4>
              <p>Não consegue pensar.</p>
              <p>Não dorme.</p>
              <p>Não para de imaginar você.</p>
            </div>
            <div className="bg-zinc-800 p-4 rounded border-t-4 border-zinc-500">
              <h4 className="font-bold text-zinc-400 mb-2">Quando está desligado?</h4>
              <p>Fica frio. Distante. Some.</p>
            </div>
          </div>

          <p>O Ritual da Chama de 5 Noites liga esse interruptor novamente.</p>
          <p>Por isso as pessoas chamam de <span className="text-yellow-500 font-bold">"ritual das pessoas em CHAMAS!"</span></p>
          <p className="font-bold text-white">Porque quando o nome toca na chama, essa pessoa vai se queimar por você. E SOMENTE POR VOCÊ</p>
        </section>

        {/* 5 Nights Breakdown */}
        <section className="space-y-8 text-lg">
          <h2 className="text-2xl font-bold text-center">O Que Acontece Ao Longo das 5 Noites</h2>
          <img src={IMG_RITUAL} alt="Ritual de Fogo" className="w-full rounded-lg shadow-lg" />
          
          <div className="space-y-2">
            <p>Isso não são meses de espera.</p>
            <p>Não são anos de terapia.</p>
            <p>Não é “manifestar por seis meses e torcer para dar certo”.</p>
            <p className="font-medium text-white">A Sacerdotisa Azara sussurra o nome na chama sagrada e, em até 5 noites, o mundo da pessoa vira de cabeça para baixo.</p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-yellow-600">
              <h3 className="text-xl font-bold text-yellow-500">Noite 1: A Primeira Faísca</h3>
              <p className="mt-2 text-zinc-300">No momento em que o nome entra na chama, algo muda. A pessoa vai se sentir inquieta naquela noite. Vai se revirar às 3 da manhã sem saber por quê. Seu rosto vai piscar na mente dela. Sentirá uma dor estranha no peito que não consegue explicar.</p>
            </div>
            
            <div className="relative pl-6 border-l-2 border-orange-500">
              <h3 className="text-xl font-bold text-orange-500">Noite 2: O Calor Aumenta</h3>
              <p className="mt-2 text-zinc-300">Começa a pensar em você mais. Muito mais. Vai se pegar olhando fotos antigas suas. Revivendo conversas. A ideia de você com outra pessoa vai deixá-la enjoada.</p>
            </div>

            <div className="relative pl-6 border-l-2 border-orange-600">
              <h3 className="text-xl font-bold text-orange-600">Noite 3: O Fogo se Espalha</h3>
              <p className="mt-2 text-zinc-300">Agora não consegue mais se livrar de você. Vai sonhar com você de forma tão real que acorda confusa. Os amigos vão perceber que algo está errado. Vai mandar uma mensagem fraca só para “testar o terreno”, porque não aguenta mais a pressão.</p>
            </div>

            <div className="relative pl-6 border-l-2 border-red-500">
              <h3 className="text-xl font-bold text-red-500">Noite 4: O Incêndio</h3>
              <p className="mt-2 text-zinc-300">Está perdendo o controle. Não consegue focar no trabalho. Não sente prazer em nada. Todas as outras pessoas parecem sem graça perto de você. O fogo queimou tudo. Só você restou na mente dela.</p>
            </div>

            <div className="relative pl-6 border-l-2 border-red-700 bg-red-900/10 py-2 pr-2">
              <h3 className="text-xl font-bold text-red-500">Noite 5: Rendição Total</h3>
              <p className="mt-2 text-zinc-200">Ela quebra. O orgulho? Sumiu. As defesas? Viraram cinzas. Liga. Manda mensagem. Aparece. Chora, pede desculpas e jura que nunca mais vai te deixar. Diz coisas como: “Não sei o que aconteceu comigo, mas não consigo viver sem você.”</p>
            </div>
          </div>

          <p>Ou… se não havia ninguém específico, alguém novo surge, dominado por esse mesmo fogo.</p>
        </section>

        {/* Warning */}
        <section className="bg-red-950/40 p-8 rounded-xl border border-red-900 text-center space-y-4">
          <h3 className="text-2xl font-bold text-red-500 uppercase">Mas Preciso Te Avisar…</h3>
          <p className="text-lg">Isso não é brincadeira.</p>
          <p>Quando a Sacerdotisa Azara realiza esse ritual, as pessoas não apenas voltam.</p>
          <ul className="font-bold text-white space-y-1">
            <li>Elas grudam.</li>
            <li>Elas se tornam obcecadas.</li>
            <li>Elas não se cansam de você.</li>
          </ul>
          <p className="italic text-zinc-400">Se você não está pronta(o) para essa pessoa te desejar a cada segundo de todos os dias… não faça isso.</p>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-center text-xl font-bold mb-4">Histórias reais de pessoas que usaram a chama</h2>
          <Testimonials />
        </section>

        {/* History */}
        <section className="space-y-6 text-lg">
          <h2 className="text-2xl font-bold">A História Proibida Que Tentaram Enterrar</h2>
          <p>Acha que eu inventei isso?</p>
          <p className="font-bold">Não.</p>
          <p>Esse ritual é mais antigo que a igreja.</p>
          <p>Mais antigo que a terapia.</p>
          <p>Mais antigo que qualquer conselho de relacionamento que você já ouviu.</p>
          <p>Pessoas usam o fogo para ligar corações há milhares de anos.</p>
          <p>Em templos persas antigos. Em câmaras escondidas. Em cerimônias secretas passadas de geração em geração.</p>
          <div className="bg-zinc-800 p-4 rounded text-center">
            <p className="font-bold text-yellow-500">Porque quem aprendia isso sabia de uma coisa:</p>
            <p className="mt-2">Todo ser humano tem um ponto fraco na alma.</p>
            <p>Todo ser humano pode ser ligado.</p>
            <p>Todo ser humano pode ser incendiado por alguém.</p>
          </div>
          <p>E o fogo era como isso era feito.</p>
        </section>

        {/* Kings and Queens */}
        <section className="space-y-6 text-lg">
          <h2 className="text-2xl font-bold text-yellow-500">Rainhas e Reis Que Fizeram Amores Rastejarem</h2>
          <img src={IMG_ROYALTY} alt="Rainhas e Reis Antigos" className="w-full rounded-lg shadow-lg" />
          
          <p>Existem histórias — sussurradas, apagadas dos livros de história — sobre rainhas e reis que usaram a chama sagrada para trazer seus amores de volta.</p>
          <p>Uma rainha — ou um rei — mandou realizar o ritual enquanto a pessoa amada estava longe, envolvida em outra relação, em outra vida, em outro caminho.</p>
          <p className="font-bold text-white">Cinco noites depois?</p>
          <p>Ela ou ele abandonou o amante.</p>
          <p>Abandonou a distração.</p>
          <p>Abandonou tudo o que achava importante.</p>
          <p className="italic text-yellow-200">Voltou correndo, pálido(a) e tremendo(a), sussurrando:</p>
          <p className="font-bold text-center text-xl text-white">“Não consigo respirar sem você.”</p>
          <p>Os generais chamaram de loucura. Os sacerdotes chamaram de bruxaria. Quem usou a chama chamou de poder.</p>
        </section>

        {/* They Tried to Destroy This */}
        <section className="space-y-6 text-lg">
          <h2 className="text-2xl font-bold">Tentaram Destruir Isso</h2>
          <p>Quando os sacerdotes perceberam o que as guardiãs do fogo faziam com a chama sagrada? Entraram em pânico. Chamaram de mal. Disseram que ameaçava a ordem natural.</p>
          <p className="font-bold">Por quê?</p>
          <p>Porque funcionava.</p>
          <p>Porque pessoas “lógicas” desmoronavam como crianças.</p>
          <p>Porque pessoas “fortes” choravam como bebês.</p>
          <p>Porque pessoas “fiéis” abandonavam tudo para rastejar de volta a quem incendiou sua alma.</p>
          <p>Então proibiram. Queimaram os textos. Espalharam as sacerdotisas e guardiões.</p>
          <p className="font-bold text-red-500">Mas sussurros nunca morrem.</p>
          <p>O conhecimento sobreviveu. Passado em segredo, de guardiã para guardião, de geração em geração.</p>
          <p className="text-xl font-bold text-white text-center">E agora está aqui. Pronto para ligar a alma da pessoa que você deseja à sua.</p>
        </section>

        {/* Who is Azara */}
        <section className="space-y-6 text-lg">
          <h2 className="text-2xl font-bold text-yellow-500">Quem É a Sacerdotisa Azara?</h2>
          <img src={IMG_AZARA} alt="Sacerdotisa Azara Portrait" className="w-full max-w-sm mx-auto rounded-lg shadow-lg" />
          <p>A Sacerdotisa Azara é descendente direta dos guardiões do fogo zoroastristas da antiga Pérsia.</p>
          <p>A família dela guarda a chama sagrada há mais de 1.500 anos. Quando os templos foram destruídos, eles fugiram com as brasas, mantendo a tradição viva em segredo.</p>
          <p>Hoje, ela realiza o ritual da chama em seu templo particular para um número limitado de pessoas por semana.</p>
          <p>Ela não faz isso por dinheiro. É o chamado dela. O propósito dela. Garantir que esse poder antigo não se perca no mundo.</p>
          <p>Mas o ritual a drena. Cada um exige dias de preparação e recuperação. Por isso ela só pode ajudar um número limitado de pessoas.</p>
        </section>

        {/* How It Works Steps */}
        <section className="space-y-6 text-lg">
          <h2 className="text-2xl font-bold">Como Funciona</h2>
          <p>É simples.</p>
          <div className="space-y-4">
             <div className="flex gap-4">
               <span className="font-bold text-yellow-500 text-xl">1 –</span>
               <p>Você clica no botão abaixo e preenche um formulário curto com o nome da pessoa desejada ou solicita a abertura para um novo amor.</p>
             </div>
             <div className="flex gap-4">
               <span className="font-bold text-yellow-500 text-xl">2 –</span>
               <p>A Sacerdotisa Azara realiza o Ritual da Chama de 5 Noites em seu templo.</p>
             </div>
             <div className="flex gap-4">
               <span className="font-bold text-yellow-500 text-xl">3 –</span>
               <p>Você segue com a sua vida enquanto a chama faz o trabalho.</p>
             </div>
             <div className="flex gap-4">
               <span className="font-bold text-yellow-500 text-xl">4 –</span>
               <p>Em até 5 noites, veja o fogo agir.</p>
             </div>
          </div>
          <p className="font-bold text-white text-center mt-4">É isso. Você não precisa fazer nada além de estar pronta(o) quando o universo se mover.</p>
        </section>

        {/* Value Proposition */}
        <section className="space-y-6 text-lg text-center bg-zinc-900 p-8 rounded-xl">
          <h2 className="text-2xl font-bold">Quanto Vale a Obsessão Dessa Pessoa Para Você?</h2>
          <p>Seja honesta(o).</p>
          <p>Quanto você pagaria para acabar com a humilhação de ser ignorada(o)?</p>
          <p>Para cortar qualquer outra pessoa da vida dela de vez?</p>
          <p>Para vê-la de joelhos, implorando por outra chance?</p>
          <p className="text-sm text-zinc-400">Pessoas gastam milhares em terapia e coaches que não funcionam. Perdem meses com estratégias de “nenhum contato” que não levam a lugar nenhum.</p>
          <p className="font-bold text-red-400">Nada disso liga o interruptor da obsessão dessa pessoa.</p>
          <p className="font-bold text-red-400">Nada disso queima seu nome na alma dela.</p>
          <p className="text-xl font-black text-white uppercase">Mas isso faz.</p>
        </section>

        {/* Pricing */}
        <section className="space-y-6 text-lg text-center">
          <h2 className="text-2xl font-bold text-green-400">Seu Preço Hoje</h2>
          <p>A Sacerdotisa Azara não faz isso por lucro. Mas precisamos cobrir os custos de manter este site e o templo dela.</p>
          <p>Então concordamos em um valor acessível para qualquer pessoa, independentemente da situação.</p>
          
          <div className="space-y-2 text-zinc-400 line-through text-xl">
            <p>Não R$500.</p>
            <p>Não R$200.</p>
            <p>Nem mesmo R$100.</p>
          </div>

          <div className="bg-zinc-800 p-8 rounded-2xl border-2 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
            <p className="mb-4">Hoje, você pode ter o Ritual da Chama de 5 Noites realizado por apenas <span className="text-4xl font-bold text-white">R$37</span>.</p>
            <p className="text-green-400 font-bold text-2xl mb-2">Vinte e sete reais.</p>
            <p className="text-sm text-zinc-400 mb-6">Menos que um jantar fora.</p>
            <p className="font-bold text-white uppercase tracking-widest">Pelo poder de fazer essa pessoa queimar por você para sempre.</p>
          </div>
        </section>

        {/* Bonuses */}
        <section className="bg-zinc-900 border border-yellow-600/50 rounded-xl p-6 md:p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">🎁 BÔNUS EXCLUSIVOS PARA QUEM FAZER O RITUAL HOJE</h2>
            <p className="text-red-500 font-bold text-sm bg-red-950/50 inline-block px-3 py-1 rounded">⚠️ ATENÇÃO: Estes bônus não são vendidos separadamente. Eles só são liberados para quem ativa o Ritual do Fogo HOJE.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h3 className="text-yellow-400 font-bold flex items-center gap-2"><Flame className="fill-yellow-500" size={20}/> BÔNUS #1 – Ativação do Vínculo Energético Noturno</h3>
              <p className="text-xs text-zinc-400 mb-2">Valor real: R$97</p>
              <p className="text-sm">Ativação extra durante as 5 noites do ritual, fortalecendo o vínculo enquanto a pessoa dorme, intensificando sonhos, pensamentos involuntários e o chamado emocional.</p>
            </div>

            <div className="bg-zinc-800 p-4 rounded-lg">
              <h3 className="text-yellow-400 font-bold flex items-center gap-2"><UserX className="text-yellow-500" size={20}/> BÔNUS #2 – Ritual de Corte de Terceiras Pessoas</h3>
              <p className="text-xs text-zinc-400 mb-2">Valor real: R$127</p>
              <p className="text-sm">Ritual silencioso para esfriar qualquer interferência externa, afastando rivais e conexões paralelas sem confronto ou conflitos.</p>
            </div>

            <div className="bg-zinc-800 p-4 rounded-lg">
              <h3 className="text-yellow-400 font-bold flex items-center gap-2"><Lock className="text-yellow-500" size={20}/> BÔNUS #3 – Selamento da Chama (Anti-Arrependimento)</h3>
              <p className="text-xs text-zinc-400 mb-2">Valor real: R$147</p>
              <p className="text-sm">Após a quinta noite, a chama é selada para evitar esfriamento, afastamentos futuros ou recaídas emocionais.</p>
            </div>

            <div className="bg-zinc-800 p-4 rounded-lg">
              <h3 className="text-yellow-400 font-bold flex items-center gap-2"><Heart className="fill-yellow-500" size={20}/> BÔNUS #4 – Abertura para Amor Novo (se não houver nome específico)</h3>
              <p className="text-xs text-zinc-400 mb-2">Valor real: R$97</p>
              <p className="text-sm">Ativação energética para atrair uma nova pessoa alinhada, com conexão intensa desde o primeiro contato.</p>
            </div>

            <div className="bg-zinc-800 p-4 rounded-lg">
              <h3 className="text-yellow-400 font-bold flex items-center gap-2"><ShieldCheck className="text-yellow-500" size={20}/> BÔNUS #5 – Proteção Energética da Chama</h3>
              <p className="text-xs text-zinc-400 mb-2">Valor real: R$87</p>
              <p className="text-sm">Blindagem contra inveja, interferências externas e energias negativas que possam enfraquecer o ritual.</p>
            </div>

            <div className="bg-zinc-800 p-4 rounded-lg">
              <h3 className="text-yellow-400 font-bold flex items-center gap-2"><Zap className="fill-yellow-500" size={20}/> BÔNUS #6 – Prioridade Máxima no Templo</h3>
              <p className="text-xs text-zinc-400 mb-2">Valor real: R$67</p>
              <p className="text-sm">Seu ritual é iniciado imediatamente, na mesma noite, sem fila de espera.</p>
            </div>
          </div>

          <div className="text-center space-y-4 pt-4 border-t border-zinc-700">
             <p className="text-zinc-500 line-through">👉 VALOR TOTAL REAL: R$819</p>
             <p className="text-yellow-500 font-bold uppercase">⚠️ MAS FAZENDO HOJE…</p>
             <div className="bg-green-900/30 p-4 rounded text-green-400 font-bold text-sm md:text-base space-y-2">
               <p>FAZENDO HOJE O RITUAL DO FOGO VOCÊ GANHA TOTALMENTE GRÁTIS:</p>
               <ul className="space-y-1">
                 <li>✔️ TODOS OS 6 BÔNUS</li>
                 <li>✔️ ATIVAÇÃO IMEDIATA</li>
                 <li>✔️ PRIORIDADE NO TEMPLO</li>
               </ul>
             </div>
          </div>
          
          <Button fullWidth>ACENDA A CHAMA</Button>
        </section>

        {/* Urgency */}
        <section className="space-y-6 text-lg">
          <h2 className="text-2xl font-bold text-red-500 uppercase">Mas Você Precisa Agir Agora</h2>
          <img src={IMG_URGENCY} alt="Vela acesa urgencia" className="w-full rounded-lg shadow-lg" />
          
          <p>A Sacerdotisa Azara só consegue realizar um número limitado de rituais por semana. A energia dela não é infinita. Quando as vagas acabam, acabam — até ela se recuperar.</p>
          <p className="font-bold">Se você fechar esta página e voltar amanhã, sua vaga pode já ter sido tomada.</p>
          <p>Cada noite que você espera é mais uma noite em que essa pessoa se afasta.</p>
          <p>Mais uma noite em que outra pessoa crava as garras mais fundo nela.</p>
          <p>Mais uma noite que você perde.</p>
          
          <div className="bg-zinc-900 border-l-4 border-red-600 p-6">
             <h3 className="text-xl font-bold text-white mb-2">E Aqui Está a Verdade Mais Sombria…</h3>
             <p>Esta página pode não ficar no ar.</p>
             <p className="mt-2">Eles já tentaram enterrar esse ritual antes.</p>
             <p>Terapeutas, coaches de relacionamento, toda a indústria de “autoajuda” — eles adorariam ver isso desaparecer.</p>
             <p className="mt-2 text-white font-bold">Porque quando as pessoas têm esse poder, ninguém tem chance.</p>
             <p className="mt-4">Não posso prometer que esta página estará aqui amanhã.</p>
             <p className="mt-2">Mas posso prometer isto:</p>
             <ul className="mt-4 space-y-2 font-bold text-yellow-400">
               <li>👉 Se você agir agora, a Sacerdotisa Azara começará seu ritual ainda hoje à noite.</li>
               <li>👉 Se você esperar, talvez nunca mais veja esta página — ou essa pessoa — novamente.</li>
             </ul>
          </div>
          
          <Button fullWidth>EU QUERO, ESTOU PRONTA(O)</Button>
        </section>

        {/* Guarantee */}
        <section className="bg-white text-zinc-900 p-8 rounded-xl shadow-xl text-center space-y-4">
          <ShieldCheck className="mx-auto text-green-600 w-16 h-16" />
          <h2 className="text-3xl font-black uppercase text-green-700">O RISCO É 100% MEU</h2>
          <p className="text-lg font-bold">Você tem 7 dias completos para ver os resultados.</p>
          <p>Se essa pessoa não estiver queimando de obsessão por você…</p>
          <p>Se essa pessoa não voltar rastejando, implorando pelo seu perdão…</p>
          <p>Se você não ficar completamente chocado(a) com o nível de desespero dessa pessoa por você…</p>
          <p className="font-bold text-lg">Basta enviar um e-mail e você recebe cada centavo de volta. Sem perguntas. Sem complicações.</p>
          <p>Ou você recupera essa pessoa, totalmente devota a você, ou recebe seu dinheiro de volta.</p>
          <p className="font-black uppercase text-xl">Não há risco.</p>
          
          <div className="pt-6">
            <Button fullWidth>GARANTIR O RITUAL</Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-8 pb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Perguntas Frequentes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-yellow-500 text-lg">E se essa pessoa estiver com outra pessoa?</h3>
              <p className="text-zinc-300 mt-1">Ótimo. Essa outra pessoa é apenas um espaço vazio. A chama não compete — ela apaga. A conexão dela com essa pessoa esfria. O toque parece errado. A voz irrita. Ela olha e sente apenas vazio. E então corre de volta para você.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-yellow-500 text-lg">E se essa pessoa me bloqueou em tudo?</h3>
              <p className="text-zinc-300 mt-1">Melhor ainda. O bloqueio não protege. Ele prende a pessoa dentro da própria cabeça com o fogo. Ela ficará tão obcecada que dará um jeito de falar com você — uma conta nova, um e-mail, aparecendo pessoalmente. O bloqueio vira a prisão dela, e você é a única saída.</p>
            </div>

            <div>
              <h3 className="font-bold text-yellow-500 text-lg">E se já se passaram meses ou anos?</h3>
              <p className="text-zinc-300 mt-1">Não importa. O tempo não apaga essa chama. A conexão entre vocês ainda existe como uma brasa enterrada. Esse ritual é o vento que transforma essa brasa em incêndio. Quanto mais tempo passou, mais forte as memórias batem quando voltam.</p>
            </div>

            <div>
              <h3 className="font-bold text-yellow-500 text-lg">E se essa pessoa jurou que nunca voltaria?</h3>
              <p className="text-zinc-300 mt-1">Pessoas dizem muitas coisas. Palavras grandes. Mas palavras não significam nada quando a alma está em chamas. Na quinta noite, ela nem vai lembrar do que jurou. Estará ocupada demais implorando para você aceitá-la de volta.</p>
            </div>

            <div>
              <h3 className="font-bold text-yellow-500 text-lg">E se eu não acreditar nisso?</h3>
              <p className="text-zinc-300 mt-1">Você não precisa acreditar. O fogo não liga para crença. Ele queima de qualquer forma. Tudo o que você precisa fazer é entregar o nome à Sacerdotisa Azara. Ela cuida do resto.</p>
            </div>

            <div>
              <h3 className="font-bold text-yellow-500 text-lg">Isso é permanente?</h3>
              <p className="text-zinc-300 mt-1">Sim. Por isso eu avisei. Não é temporário. Uma vez que o nome entra na chama, o vínculo é selado. Não faça isso se não tiver certeza de que quer essa pessoa ligada a você.</p>
            </div>
          </div>

          <div className="sticky bottom-4 z-40 shadow-2xl">
             <Button fullWidth>QUERO AGORA</Button>
          </div>
        </section>

        <footer className="text-center text-xs text-zinc-600 py-8 border-t border-zinc-800">
          <p>© {new Date().getFullYear()} Feitiços Secretos do Amor. Todos os direitos reservados.</p>
          <p className="mt-2">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
        </footer>

      </main>
    </div>
  );
}

export default App;