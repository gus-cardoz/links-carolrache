const blocks = [
  {
    title: 'Seja minha aluna',
    body: (
      <>
        Melhore sua vida pessoal{' '}<br className="md:hidden" />
        e profissional<span className="hidden md:inline"><br /></span>{' '}aumentando{' '}<br className="md:hidden" />sua segurança e{' '}<br className="md:hidden" /><span className="hidden md:inline"><br /></span>inteligência emocional.
      </>
    ),
    image: '/assets/ft%20links%201.webp',
    imageDesktop: '/assets/ft%20links%201%20desktop.webp',
    href: 'https://acendasualuz.com.br/',
  },
  {
    title: (
      <>
        Seja formada{' '}<br /> pessoalmente{' '}<span className="hidden md:inline"><br /></span>
        por mim
      </>
    ),
    body: (
      <>
        Para aplicar profissionalmente<span className="hidden md:inline"><br /></span> meu método de Inteligência Emocional.{' '}
        <span className="hidden md:inline"><br /></span><span className="text-[10px] md:text-[16px]">(para líderes, terapeutas e profissionais liberais)</span>
      </>
    ),
    image: '/assets/ft%20links%202.webp',
    imageDesktop: '/assets/ft%20links%202%20desktop.webp',
    href: 'https://fi.carolrache.com.br/listaespera',
  },
  {
    title: (
      <>
        Contrate uma<br />
        palestra minha!
      </>
    ),
    body: '',
    image: '/assets/ft%20links%203.webp',
    imageDesktop: '/assets/ft%20links%203%20desktop.webp',
    href: 'https://namah.vc/palestra',
  },
  {
    title: (
      <>
        Faça uma{' '}<br className="md:hidden" />
        solicitação<span className="hidden md:inline"><br /></span> de parceria{' '}<br className="md:hidden" />
        para<span className="hidden md:inline"><br /></span> a sua marca!
      </>
    ),
    body: '',
    image: '/assets/ft%20links%204.webp',
    imageDesktop: '/assets/ft%20links%204%20desktop.webp',
    href: 'https://namah.vc/Publicidades',
  },
]

function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#FCFCF2] md:bg-[url('/assets/bg1%20links%20desktop.png')] md:bg-cover md:bg-center md:bg-fixed text-brand-dark">
      <div className="relative z-10 max-w-[1140px] mx-auto px-5 py-10 md:py-16">
        <div className="max-w-[360px] md:max-w-[640px] mx-auto">
          <header className="text-center mb-6 md:mb-10">
            <img
              src="/assets/logo%20CR.svg"
              alt="Carol Rache"
              className="mx-auto h-8 md:h-11 w-auto"
            />
          </header>

          <div className="flex flex-col items-center gap-3 md:gap-5">
            {blocks.map((b, i) => (
              <a
                key={i}
                href={b.href}
                className="group relative block w-[320px] h-[125px] md:w-full md:h-[380px] overflow-hidden rounded-lg md:rounded-xl transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center md:hidden"
                  style={{ backgroundImage: `url(${b.image})` }}
                />
                <div
                  className="absolute inset-0 bg-cover bg-center hidden md:block"
                  style={{ backgroundImage: `url(${b.imageDesktop})` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_50%,rgba(0,0,0,0)_100%)] md:bg-[linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.7)_30%,rgba(0,0,0,0)_65%)]" />
                <div className="relative h-full flex flex-col justify-center items-start text-left p-6 md:p-8 md:min-h-[120px]">
                  <h2 className="font-sans font-medium text-[18px] md:text-[36px] leading-[1.1] text-[#FCFCF2]">
                    {b.title}
                  </h2>
                  {b.body && (
                    <p className="mt-2 font-sans text-[11px] md:text-[18px] font-normal leading-[1.4] text-[#FCFCF2]/75">
                      {b.body}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
      <hr className="mt-10 border-t border-brand-dark/20" />
      <footer className="py-6 text-center text-sm text-black">
        Copyright © 2026 Carol Rache<br />
        Todos os Direitos Reservados
      </footer>
    </div>
  )
}

export default App
