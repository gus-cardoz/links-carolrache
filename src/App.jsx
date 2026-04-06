const blocks = [
  {
    title: 'Seja minha aluna',
    body: (
      <>
        Melhore sua vida pessoal{' '}<br className="md:hidden" />
        e profissional<span className="hidden md:inline"><br /></span>{' '}aumentando sua segurança e<span className="hidden md:inline"><br /></span> inteligência emocional.
      </>
    ),
    image: '/assets/ft%20links%201.png',
    imageDesktop: '/assets/ft%20links%201%20desktop.png',
    href: '#',
  },
  {
    title: (
      <>
        Seja formada<span className="hidden md:inline"><br /></span> pessoalmente{' '}<br className="md:hidden" />
        por mim
      </>
    ),
    body: (
      <>
        Para aplicar profissionalmente<span className="hidden md:inline"><br /></span> meu método de Inteligência Emocional.{' '}
        <span className="hidden md:inline"><br /></span><span className="text-[12px] md:text-[16px]">(para líderes, terapeutas e profissionais liberais)</span>
      </>
    ),
    image: '/assets/ft%20links%202.png',
    imageDesktop: '/assets/ft%20links%202%20desktop.png',
    href: '#',
  },
  {
    title: (
      <>
        Contrate uma<br />
        palestra minha!
      </>
    ),
    body: '',
    image: '/assets/ft%20links%203.png',
    imageDesktop: '/assets/ft%20links%203%20desktop.png',
    href: '#',
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
    image: '/assets/ft%20links%204.png',
    imageDesktop: '/assets/ft%20links%204%20desktop.png',
    href: '#',
  },
]

function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#FCFCF2] text-brand-dark">
      <div className="relative z-10 max-w-[1140px] mx-auto px-5 py-10 md:py-16">
        <div className="max-w-[360px] md:max-w-[640px] mx-auto">
          <header className="text-center mb-6 md:mb-10">
            <img
              src="/assets/logo%20CR.svg"
              alt="Carol Rache"
              className="mx-auto h-8 md:h-11 w-auto"
            />
          </header>

          <div className="flex flex-col items-center gap-4 md:gap-5">
            {blocks.map((b, i) => (
              <a
                key={i}
                href={b.href}
                className="group relative block w-[320px] h-[230px] md:w-full md:h-[380px] overflow-hidden rounded-xl transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center md:hidden"
                  style={{ backgroundImage: `url(${b.image})` }}
                />
                <div
                  className="absolute inset-0 bg-cover bg-center hidden md:block"
                  style={{ backgroundImage: `url(${b.imageDesktop})` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.7)_30%,rgba(0,0,0,0)_65%)]" />
                <div className="relative h-full flex flex-col justify-center items-start text-left p-6 md:p-8 md:min-h-[120px]">
                  <h2 className="font-sans font-medium text-[22px] md:text-[36px] leading-[1.1] text-[#FCFCF2]">
                    {b.title}
                  </h2>
                  {b.body && (
                    <p className="mt-2 font-sans text-[14px] md:text-[18px] font-normal leading-[1.4] text-[#FCFCF2]/75">
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
      <footer className="py-6 text-center text-sm opacity-70">
        Copyright © 2026 Carol Rache<br />
        Todos os Direitos Reservados
      </footer>
    </div>
  )
}

export default App
