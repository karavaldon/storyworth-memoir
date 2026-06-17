import { useState, useRef, useEffect, useLayoutEffect } from 'react'

// Figma asset URLs — valid for 7 days. Replace with permanent assets in /public/assets/.
const imgIcon1 = "https://www.figma.com/api/mcp/asset/336ec853-d321-4a58-aa97-7d758fb88627";
const imgPhoto1 = "https://www.figma.com/api/mcp/asset/5f979193-4b47-472c-8d48-c8edeb0f8ea8";
const img3 = "https://www.figma.com/api/mcp/asset/6be8cd1e-69a3-4b27-95eb-52e7e61bb4e4";
const imgPhoto2 = "https://www.figma.com/api/mcp/asset/5c281eb9-409b-4314-b508-b165a1b4956c";
const imgPhoto3 = "https://www.figma.com/api/mcp/asset/60fe0288-8fbd-455e-9116-318ab6ca1ca2";
const imgPhoto4 = "https://www.figma.com/api/mcp/asset/3aa2ff32-cc23-46f6-9144-470537a0c127";
const imgPhoto5 = "https://www.figma.com/api/mcp/asset/c7081c74-1d13-40ec-b82b-c0a443280742";
const imgStoryworthWordmark = "https://www.figma.com/api/mcp/asset/7c2d33e4-a6a1-422b-a757-1322a7846553";
const imgStoryworthMark = "https://www.figma.com/api/mcp/asset/7210ece4-e04d-401e-9379-bb77ffb56695";
const imgEllipse25 = "https://www.figma.com/api/mcp/asset/8e5582e8-ce5b-43ee-aea8-edde718ad727";
const imgEllipse26 = "https://www.figma.com/api/mcp/asset/f4dcf0b6-d30b-43dd-ad6c-2f9938365cb8";
const imgPolygon1 = "https://www.figma.com/api/mcp/asset/9a25b6eb-6639-444c-b9ae-433d1a61df59";
const imgFrame = "https://www.figma.com/api/mcp/asset/3a5676f8-d428-4da3-a661-ab7e968d51be";
// Stories bar action button icons (node 1:646)
const imgReorderIcon = "https://www.figma.com/api/mcp/asset/5f04b2a7-7492-4d90-a5d1-75251892d4fb";
// Book card hover-state button icons (node 1:798)
const imgEditCoverIcon = "https://www.figma.com/api/mcp/asset/787def91-0b2d-43ee-9040-568b41159dd1";
const imgPreviewBookIcon = "https://www.figma.com/api/mcp/asset/214f0276-0857-44b8-8082-1b891eb13c00";

const imgHeart = "https://www.figma.com/api/mcp/asset/7546f9e9-6e41-44f2-92aa-ece8b45cee3a";
const imgChat = "https://www.figma.com/api/mcp/asset/1c19f4f9-a182-4ad0-b4ff-4e21f44a4a75";
const imgBookIlloA = "https://www.figma.com/api/mcp/asset/837238c7-da8e-4b08-952a-059501a12a7e";
const imgBookIlloB = "https://www.figma.com/api/mcp/asset/c3c80253-c57d-4258-b5f7-04f0d1a50708";
const imgPencilIcon = "https://www.figma.com/api/mcp/asset/b7092174-1c39-4c5d-8a04-457f16cdcf55";
const imgArrowLeft = "https://www.figma.com/api/mcp/asset/78352b67-73d4-4798-add2-458ae76b1ec3";
const imgArrowRight = "https://www.figma.com/api/mcp/asset/043abce7-f102-4967-bb4e-8a05b7721b05";
const imgPhoto6 = "https://www.figma.com/api/mcp/asset/b4d5ff05-4330-4455-8b33-929b1064931c";
const imgPhoto7 = "https://www.figma.com/api/mcp/asset/a11e0c40-e463-40c8-8776-f0ae31452d32";
const imgPhoto8 = "https://www.figma.com/api/mcp/asset/10ae6512-65f9-45fe-86eb-5962e1181b9a";
const imgWavingHandA = "https://www.figma.com/api/mcp/asset/60e78d47-c6b4-4807-a91f-663aa168a5f1";
const imgPhoneBannerArrow = "https://www.figma.com/api/mcp/asset/2557390a-6cea-4552-a8cc-42abfa2b4c0f";

// ─── Sub-components ────────────────────────────────────────────────────────


function GiftIcon() {
  return (
    <div className="overflow-clip relative size-8">
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-4.17%]">
          <img alt="" className="block max-w-none size-full" src={imgIcon1} />
        </div>
      </div>
    </div>
  );
}

// ─── Dev tools ───────────────────────────────────────────────────────────────

const devScenarios: { label: string; id: string; implemented: boolean; hidden?: boolean }[] = [
  { label: 'Option A — New user',  id: 'a-new',    implemented: true  },
  { label: 'Option A — Mid sub',   id: 'a-month4', implemented: true  },
  { label: 'Option A — End',       id: 'a-end',    implemented: true  },
  { label: 'Option B — New user',  id: 'b-new',    implemented: true,  hidden: true },
  { label: 'Option B — Mid sub',   id: 'b-month4', implemented: true,  hidden: true },
  { label: 'Option B — Month 10',  id: 'b-month10',implemented: false, hidden: true },
  { label: 'Option C — New user',   id: 'c-new',    implemented: true  },
  { label: 'Option C — Mid sub',   id: 'c-month4', implemented: true  },
  { label: 'Option C — End',       id: 'c-end',    implemented: true  },
]

function DevToolsMenu({ onClose, scenario, onSelect }: { onClose: () => void; scenario: string; onSelect: (id: string) => void }) {
  const aScenarios = devScenarios.filter(s => s.id.startsWith('a-'))
  const cScenarios = devScenarios.filter(s => s.id.startsWith('c-'))

  function ScenarioBtn({ s }: { s: typeof devScenarios[0] }) {
    const isCurrent = s.id === scenario
    const label = s.label.replace(/^Option [AC] — /, '')
    return (
      <button
        key={s.id}
        type="button"
        onClick={s.implemented ? () => { onSelect(s.id); onClose() } : undefined}
        className={`flex items-center justify-between gap-2 w-full px-[12px] py-[10px] text-left transition-colors font-mono text-[12px] tracking-[0.5px]
          ${isCurrent ? 'bg-[#1a3a2a] text-[#4ade80]' : s.implemented ? 'text-[#ccc] hover:bg-[#222] cursor-pointer' : 'text-[#444] cursor-not-allowed'}`}
      >
        <span>{label}</span>
        {isCurrent && <span className="text-[10px] bg-[#166534] text-[#4ade80] px-[6px] py-[2px] rounded-full">current</span>}
      </button>
    )
  }

  return (
    <div className="absolute left-0 top-[calc(100%+8px)] bg-[#111] border border-[#333] rounded-[8px] z-[100] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)]" style={{ minWidth: 340 }}>
      <div className="px-[12px] py-[8px] border-b border-[#333]">
        <span className="font-mono text-[10px] text-[#666] uppercase tracking-[1.5px]">Dev tools</span>
      </div>
      <div className="grid grid-cols-2">
        <div className="border-r border-[#333]">
          <div className="px-[12px] py-[8px] border-b border-[#2a2a2a]">
            <span className="font-mono text-[11px] text-[#888] uppercase tracking-[1.5px] font-semibold">Option A</span>
          </div>
          {aScenarios.map(s => <ScenarioBtn key={s.id} s={s} />)}
        </div>
        <div>
          <div className="px-[12px] py-[8px] border-b border-[#2a2a2a]">
            <span className="font-mono text-[11px] text-[#888] uppercase tracking-[1.5px] font-semibold">Option C</span>
          </div>
          {cScenarios.map(s => <ScenarioBtn key={s.id} s={s} />)}
        </div>
      </div>
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({ scenario, onScenarioChange }: { scenario: string; onScenarioChange: (id: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [devOpen, setDevOpen] = useState(false)
  const devRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (devRef.current && !devRef.current.contains(e.target as Node)) setDevOpen(false)
    }
    if (devOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [devOpen])

  return (
    <header className="bg-white border-b border-[#d1d1d1]">
      <div className="flex h-[70px] md:h-[105px] items-center justify-between px-4 sm:px-6 lg:px-10 w-full">

        {/* Logo */}
        <div className="flex items-center gap-4 md:gap-[60px]">
          <div ref={devRef} className="relative flex-shrink-0">
            <button
              type="button"
              onClick={() => setDevOpen((v) => !v)}
              className="h-[34px] md:h-[41px] relative w-[160px] md:w-[189px] block cursor-pointer opacity-100 hover:opacity-80 transition-opacity"
              title="Dev tools"
            >
              <div className="absolute inset-[31.63%_0_32.49%_18.99%]">
                <img alt="Storyworth" className="absolute block inset-0 max-w-none size-full" src={imgStoryworthWordmark} />
              </div>
              <div className="absolute inset-[0_86.05%_0_0]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStoryworthMark} />
              </div>
            </button>
            {devOpen && <DevToolsMenu onClose={() => setDevOpen(false)} scenario={scenario} onSelect={onScenarioChange} />}
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex font-['GT_America:Medium'] gap-[64px] items-center leading-[20px] text-[16px] text-[color:var(--green\/1000,#042a21)] tracking-[1.6px] uppercase whitespace-nowrap">
            <a href="#" className="hover:opacity-70 transition-opacity">HOME</a>
            <a href="#" className="hover:opacity-70 transition-opacity">QUESTIONS</a>
            <a href="#" className="hover:opacity-70 transition-opacity">PRIVACY</a>
            <a href="#" className="hover:opacity-70 transition-opacity">HELP</a>
          </nav>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-5 md:gap-10">
          <button type="button" className="cursor-pointer hidden sm:block hover:opacity-70 transition-opacity" aria-label="Gift">
            <GiftIcon />
          </button>

          {/* Avatar + name */}
          <button type="button" className="flex gap-2 items-center">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative size-11">
              <div
                className="col-1 row-1 relative size-11"
                style={{ maskImage: `url("${imgEllipse25}")`, WebkitMaskImage: `url("${imgEllipse25}")`, maskSize: '44px 44px', maskRepeat: 'no-repeat' }}
              >
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse26} />
              </div>
              <p
                className="col-1 row-1 font-['GT_America:Medium'] ml-[11px] mt-[10px] relative text-[16px] text-[color:var(--green\/900,#12473a)] tracking-[1.6px] uppercase whitespace-nowrap z-10"
                style={{ maskImage: `url("${imgEllipse25}")`, WebkitMaskImage: `url("${imgEllipse25}")`, maskSize: '44px 44px', maskPosition: '-11px -10px', maskRepeat: 'no-repeat' }}
              >
                BL
              </p>
            </div>
            <span className="hidden md:inline font-['GT_America:Medium'] text-[#15372f] text-[16px] tracking-[1.6px] uppercase whitespace-nowrap">
              brian l.
            </span>
            <div className="hidden md:block rotate-180 h-[9px] w-[14px] relative">
              <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                <img alt="" className="block max-w-none size-full" src={imgPolygon1} />
              </div>
            </div>
          </button>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            className="lg:hidden flex flex-col gap-[5px] p-1"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-5 h-0.5 bg-[#042a21]" />
            <span className="block w-5 h-0.5 bg-[#042a21]" />
            <span className="block w-5 h-0.5 bg-[#042a21]" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-[#d1d1d1] bg-white px-4 py-4 flex flex-col gap-4">
          {['HOME', 'QUESTIONS', 'PRIVACY', 'HELP'].map((label) => (
            <a
              key={label}
              href="#"
              className="font-['GT_America:Medium'] text-[14px] text-[color:var(--green\/1000,#042a21)] tracking-[1.6px] uppercase py-1"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

function BookCard({ variant = 'a' }: { variant?: 'a' | 'b' }) {
  const [hovered, setHovered] = useState(false)

  if (variant === 'b') {
    return (
      <div
        className="flex flex-col items-center pt-[32px] px-[32px] pb-[30px] rounded-[12px] flex-none cursor-pointer relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="h-[336px] w-[284px] relative">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBookIlloB} />
        </div>
        <button
          type="button"
          style={{ width: hovered ? '168px' : '40px' }}
          className="absolute left-[12px] top-[56px] h-[40px] flex items-center overflow-hidden transition-[width] duration-200 cursor-pointer"
        >
          <div className="absolute bg-white border-2 border-[#068089] inset-0 rounded-[24px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)]" />
          <div className="relative z-10 flex-shrink-0 w-[36px] h-[36px] ml-[1px] flex items-center justify-center">
            <div className="size-[20px] relative overflow-hidden">
              <div className="absolute inset-[15%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencilIcon} />
              </div>
            </div>
          </div>
          <span className={`relative z-10 font-['GT_America:Medium'] text-[#07777e] text-[16px] tracking-[1.6px] uppercase whitespace-nowrap flex-shrink-0 pr-[10px] transition-opacity duration-150 delay-75 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            Edit Cover
          </span>
        </button>
      </div>
    )
  }

  return (
    <div
      className="bg-[#faf7f5] border-2 border-[#eae0d7] flex items-center justify-center p-[32px] relative rounded-[12px] flex-none self-center lg:self-start cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="h-[194px] w-[164px] relative flex-shrink-0">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBookIlloA} />
      </div>

      {/* Hover buttons */}
      <div className={`transition-opacity duration-200 ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button type="button" className="-translate-x-1/2 -translate-y-1/2 absolute h-[40px] left-1/2 top-[calc(50%-27.92px)] w-[180px]">
          <div className="absolute bg-white border-2 border-[var(--teal\/800,#068089)] inset-0 rounded-[24px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)]" />
          <div className="-translate-x-1/2 absolute flex gap-[10px] items-center left-[calc(50%-0.5px)] top-[7.73px]">
            <div className="relative size-[24px] flex-shrink-0">
              <div className="absolute inset-[8.33%_16.67%]">
                <div className="absolute inset-[-5%_-6.25%]">
                  <img alt="" className="block max-w-none size-full" src={imgEditCoverIcon} />
                </div>
              </div>
            </div>
            <span className="font-['GT_America:Medium'] leading-[20px] text-[#07777e] text-[16px] tracking-[1.6px] uppercase whitespace-nowrap">Edit Cover</span>
          </div>
        </button>
        <button type="button" className="-translate-x-1/2 -translate-y-1/2 absolute h-[40px] left-1/2 top-[calc(50%+22.97px)] w-[203px]">
          <div className="absolute bg-white border-2 border-[var(--teal\/800,#068089)] inset-0 rounded-[24px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)]" />
          <div className="-translate-x-1/2 absolute flex gap-[10px] items-center left-1/2 top-[7.73px]">
            <div className="relative size-[24px] flex-shrink-0">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPreviewBookIcon} />
            </div>
            <span className="font-['GT_America:Medium'] leading-[20px] text-[#07777e] text-[16px] tracking-[1.6px] uppercase whitespace-nowrap">Preview Book</span>
          </div>
        </button>
      </div>
    </div>
  )
}

const weekQuestions = [
  "Who was your favorite teacher growing up?",
  "What are your favorite movies?",
  "What was your first car?",
  "If you could have dinner with anyone—living or dead—who would it be?",
  "What are your favorite books?",
  "Which musicians or bands have you most enjoyed seeing perform live?",
]

function ShuffleHint({
  isShuffled, shufflePos, total,
  onShuffle, onPrev, onNext,
  variant = 'a',
}: {
  isShuffled: boolean
  shufflePos: number
  total: number
  onShuffle: () => void
  onPrev: () => void
  onNext: () => void
  variant?: 'a' | 'b'
}) {
  if (!isShuffled) {
    return (
      <p className="font-['GT_America:Regular'] leading-[20px] text-[14px] text-[#61706f] whitespace-nowrap">
        Not feeling it?{' '}
        {variant === 'b' ? (
          <>
            <button type="button" className="cursor-pointer underline decoration-solid hover:opacity-70 transition-opacity">
              Pick a new one
            </button>
            {' or '}
            <button type="button" onClick={onShuffle} className="cursor-pointer underline decoration-solid hover:opacity-70 transition-opacity">
              shuffle this question
            </button>
          </>
        ) : (
          <>
            <button type="button" className="cursor-pointer underline decoration-solid hover:opacity-70 transition-opacity">
              Pick a new one
            </button>
            {' or '}
            <button type="button" onClick={onShuffle} className="cursor-pointer underline decoration-solid hover:opacity-70 transition-opacity">
              shuffle this question
            </button>
          </>
        )}
      </p>
    )
  }
  return (
    <div className="flex gap-[24px] items-center">
      <button type="button" onClick={onPrev} className={`cursor-pointer transition-opacity ${shufflePos > 1 ? 'opacity-100 hover:opacity-60' : 'opacity-30 cursor-default'}`} aria-label="Previous question">
        <div className="relative size-[24px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} />
        </div>
      </button>
      <span className="font-['GT_America:Regular'] leading-[20px] text-[14px] text-[#61706f] whitespace-nowrap">
        Shuffle {shufflePos} of {total}
      </span>
      <button
        type="button"
        onClick={onNext}
        className={`cursor-pointer transition-opacity ${shufflePos < total ? 'opacity-100 hover:opacity-60' : 'opacity-30 cursor-default'}`}
        aria-label="Next question"
      >
        <div className="flex-none rotate-180">
          <div className="relative size-[24px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight} />
          </div>
        </div>
      </button>
    </div>
  )
}


const shuffleAskers = ['Raymond', 'Storyworth', 'Raymond', 'Storyworth', 'Raymond']

function ThisWeekSection() {
  const [shufflePos, setShufflePos] = useState<number | null>(null)
  const onShufflePosChange = setShufflePos
  const isShuffled = shufflePos !== null
  const currentQuestion = isShuffled ? weekQuestions[shufflePos] : weekQuestions[0]
  const total = weekQuestions.length - 1
  const asker = isShuffled ? shuffleAskers[(shufflePos - 1) % shuffleAskers.length] : 'Alex'
  const questionRef = useRef<HTMLParagraphElement>(null)

  useLayoutEffect(() => {
    const el = questionRef.current
    if (!el) return
    let size = 32
    el.style.fontSize = `${size}px`
    while (el.clientHeight > 38 && size > 18) {
      size -= 1
      el.style.fontSize = `${size}px`
    }
  }, [currentQuestion])

  return (
    <div className="flex flex-col gap-[24px] items-center w-full">
      <div className="w-full">
        <div className="bg-white border-2 border-transparent cursor-pointer drop-shadow-[0px_8px_17px_rgba(137,137,137,0.12)] flex flex-col gap-[32px] items-start justify-center pb-[30px] pt-[27px] px-[24px] rounded-[12px] transition-all duration-200 hover:-translate-y-1 hover:bg-[#f0faf9] hover:border-[#068089] w-full">
          <div className="flex flex-col gap-[26px] items-center w-full">
            <div className="flex flex-col gap-[22px] items-center w-full">
              <p className="font-['GT_America:Regular'] leading-[20px] text-[16px] text-[#12473a] whitespace-nowrap">
                For you this week • Asked by {asker}
              </p>
              <div className="flex items-center justify-center w-full max-w-[900px]">
                <p ref={questionRef} className="font-['GT_Super_Display:Regular'] leading-[36px] max-w-[900px] text-[32px] text-[color:var(--green\/1000,#042a21)] tracking-[-0.32px] text-center">
                  {currentQuestion}
                </p>
              </div>
            </div>
            <button type="button" className="bg-[var(--teal\/800,#068089)] cursor-pointer flex h-[40px] items-center justify-center px-[32px] rounded-[24px] hover:opacity-90 transition-opacity">
              <span className="font-['GT_America:Medium'] leading-[20px] text-[16px] text-white tracking-[1.6px] uppercase whitespace-nowrap">
                tell my story
              </span>
            </button>
          </div>
        </div>
      </div>
      <ShuffleHint
        isShuffled={isShuffled}
        shufflePos={shufflePos ?? 0}
        total={total}
        onShuffle={() => onShufflePosChange(1)}
        onPrev={() => onShufflePosChange(shufflePos! > 1 ? shufflePos! - 1 : null)}
        onNext={() => shufflePos! < total && onShufflePosChange(shufflePos! + 1)}
        variant="b"
      />
    </div>
  )
}

function WelcomeCard() {
  return (
    <div className="bg-[#d7e9e4] border-2 border-[#a4c1b9] rounded-[8px] px-[24px] py-[16px] flex gap-[22px] items-center justify-center drop-shadow-[0px_4px_10px_rgba(6,128,137,0.06)] w-full">
      <img alt="" className="flex-shrink-0 w-[87px] h-[82px] object-cover pointer-events-none" src={imgWavingHandA} />
      <div className="flex flex-col gap-[10px] items-center text-center">
        <p className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#12473a] m-0">
          Hi, Brian! Welcome to Storyworth —{' '}
          <span className="font-['GT_America:Medium']">Explore your upcoming questions below, week-by-week.</span>
        </p>
        <p className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#445f59] m-0">
          You can always{' '}
          <button type="button" className="underline [text-decoration-skip-ink:none] cursor-pointer hover:opacity-70 transition-opacity">change your questions</button>
          {' '}or{' '}
          <button type="button" className="underline [text-decoration-skip-ink:none] cursor-pointer hover:opacity-70 transition-opacity">reorder them</button>.
        </p>
      </div>
    </div>
  )
}

type Story = {
  id: number
  question: string
  excerpt: string
  engagement: string
  engagementHighlight?: string
  photos: string[]
  reactions: { icon: string; count: number }[]
  readers: { initials: string; color: string; photo?: string }[]
}

const stories: Story[] = [
  {
    id: 1,
    question: "What was your first day at West Point like?",
    excerpt: '"I was so excited and nervous to go to West Point. My dad was so eager for me to get there! We\'d boarded..."',
    engagement: "Read by Raymond",
    photos: [imgPhoto1],
    reactions: [{ icon: imgHeart, count: 1 }],
    readers: [{ initials: "RS", color: "#9fb5af" }],
  },
  {
    id: 2,
    question: "How would you like to be remembered?",
    excerpt: '"I hope my kids and grandkids will think of me as someone who was always making jokes, poking fun and..."',
    engagement: "Read by Raymond and Sarah",
    photos: [],
    reactions: [{ icon: imgChat, count: 1 }],
    readers: [
      { initials: "", color: "#d8a577", photo: img3 },
      { initials: "RS", color: "#9fb5af" },
    ],
  },
  {
    id: 3,
    question: "What is one of the greatest physical challenges you have ever had to go through? What gave you strength?",
    excerpt: '"Many years ago we were caught in a very sudden flood in Puerto Rico. We had to camp out in our truck for 4 days until..."',
    engagement: "Read by Raymond",
    photos: [imgPhoto2, imgPhoto3, imgPhoto4],
    reactions: [],
    readers: [{ initials: "RS", color: "#9fb5af" }],
  },
  {
    id: 4,
    question: "What kinds of jobs did you have in high school?",
    excerpt: '"I always had some hustle in high school. Fixing cars, breaking cars... I\'d make $10, $20 here and there."',
    engagement: "Read by Raymond",
    photos: [imgPhoto5],
    reactions: [],
    readers: [{ initials: "RS", color: "#9fb5af" }],
  },
  {
    id: 5,
    question: "What do you want your college experience to be remembered for?",
    excerpt: '"I hope my friends and family will remember me as someone who embraced every opportunity, made lifelong connections, and..."',
    engagement: "Shared with Raymond and Sarah",
    photos: [],
    reactions: [],
    readers: [],
  },
  {
    id: 6,
    question: "What legacy do you want to leave behind?",
    excerpt: '"I want to be remembered as a person who made a difference in the community, someone who stood up for others and..."',
    engagement: "Shared with Raymond and Sarah",
    photos: [],
    reactions: [],
    readers: [],
  },
  {
    id: 7,
    question: "What do you hope your friends will remember most about you?",
    excerpt: '"I wish they\'ll recall me as a steadfast companion, always there to share a laugh and lend support when needed, and..."',
    engagement: "Shared with Raymond and Sarah",
    photos: [],
    reactions: [],
    readers: [],
  },
  {
    id: 8,
    question: "What memories from your childhood would you like to share with future generations?",
    excerpt: '"I hope my children and grandchildren remember me as a playful spirit, always ready to share a laugh and tell a..."',
    engagement: "Read by Raymond, Sarah and ",
    engagementHighlight: "2 more",
    photos: [imgPhoto6, imgPhoto7, imgPhoto8],
    reactions: [{ icon: imgChat, count: 1 }],
    readers: [
      { initials: "", color: "#d8a577", photo: img3 },
      { initials: "RS", color: "#9fb5af" },
      { initials: "+2", color: "#bebebe" },
    ],
  },
  {
    id: 9,
    question: "How would you like to be remembered?",
    excerpt: '"I hope my kids and grandkids will think of me as someone who was always making jokes, poking fun and..."',
    engagement: "Read by Raymond and Sarah",
    photos: [],
    reactions: [{ icon: imgHeart, count: 1 }, { icon: imgChat, count: 1 }],
    readers: [
      { initials: "", color: "#d8a577", photo: img3 },
      { initials: "RS", color: "#9fb5af" },
    ],
  },
  {
    id: 10,
    question: "What was the most memorable moment of your first day at the Academy?",
    excerpt: '"I remember stepping off the bus, heart racing with anticipation. My father was beaming with pride beside me!..."',
    engagement: "Read by Raymond",
    photos: [imgPhoto1],
    reactions: [{ icon: imgHeart, count: 1 }],
    readers: [{ initials: "RS", color: "#9fb5af" }],
  },
]

function ReaderAvatars({ readers }: { readers: Story['readers'] }) {
  return (
    <div className="flex items-center">
      {readers.map((reader, i) => (
        <div
          key={i}
          className="border-2 border-solid border-white rounded-full size-[38px] md:size-[46px] relative flex items-center justify-center flex-shrink-0"
          style={{
            backgroundColor: reader.photo ? undefined : reader.color,
            marginRight: i < readers.length - 1 ? '-6px' : '0',
            zIndex: readers.length - i,
          }}
        >
          {reader.photo
            ? <img alt="" className="absolute max-w-none object-cover rounded-full size-full" src={reader.photo} />
            : <span className="font-['GT_America:Medium'] text-[13px] md:text-[16px] text-center text-white tracking-[0.96px]">{reader.initials}</span>
          }
        </div>
      ))}
    </div>
  )
}

function StoryRow({ story }: { story: Story }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="border-b border-[#d1d1d1] cursor-pointer py-4 sm:py-[24px] px-0 sm:px-[16px] w-full hover:bg-[#fafafa] transition-colors"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between gap-4 sm:gap-[32px]">

        {/* Left: body text + photos below */}
        <div className="flex-1 min-w-0 max-w-[600px]">
          <div className="flex flex-col gap-2 sm:gap-[12px]">
            <p className="font-['GT_Super_Display:Medium'] leading-[26px] sm:leading-[34px] text-[15px] sm:text-[20px] text-[color:var(--green\/1000,#042a21)] tracking-[-0.2px]">
              {story.question}
            </p>
            <p className="font-['GT_Super_Text:Book'] leading-[24px] sm:leading-[28px] text-[14px] sm:text-[18px] text-[color:var(--green\/800,#445f59)]">
              {story.excerpt}
            </p>
            {story.photos.length > 0 && (
              <div className="flex items-center">
                {story.photos.map((photo, i) => (
                  <div
                    key={i}
                    className="border-2 border-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] relative flex-shrink-0"
                    style={{
                      width: 'clamp(40px, 5vw, 60px)',
                      height: 'clamp(52px, 6.5vw, 77px)',
                      marginRight: i < story.photos.length - 1 ? '-12px' : '0',
                    }}
                  >
                    <img alt="" className="absolute inset-0 size-full object-cover" src={photo} />
                  </div>
                ))}
              </div>
            )}
            {story.reactions.length > 0 && (
              <div className="flex gap-[12px] items-center">
                {story.reactions.map((r, i) => (
                  <div key={i} className="flex gap-[8px] items-center">
                    <div className="relative size-5 sm:size-[24px] flex-shrink-0">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={r.icon} />
                    </div>
                    <span className="font-['GT_America:Regular'] text-[14px] sm:text-[16px] text-[color:var(--teal\/900,#07777e)]">
                      {r.count}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: engagement / open story on hover — both always in DOM to avoid width shift */}
        <div className="relative flex-shrink-0 flex justify-end">
          <div className={`flex gap-[12px] items-center transition-opacity duration-150 ${hovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <span className="hidden sm:inline font-['GT_America:Regular'] leading-[28px] text-[14px] md:text-[16px] text-[color:var(--green\/800,#445f59)] whitespace-nowrap">
              {story.engagement}{story.engagementHighlight && (
                <span className="underline">{story.engagementHighlight}</span>
              )}
            </span>
            <ReaderAvatars readers={story.readers} />
          </div>
          <button
            type="button"
            className={`absolute right-0 top-1/2 -translate-y-1/2 border-2 border-[#068089] cursor-pointer flex h-[36px] items-center justify-center px-[16px] rounded-[24px] transition-opacity duration-150 ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <span className="font-['GT_America:Medium'] leading-[20px] text-[14px] text-[#068089] tracking-[1.4px] uppercase whitespace-nowrap">
              open story
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Hero menu button + dropdown (node 1:895 + 1:453) ────────────────────

const dropdownItems = [
  'Edit book cover',
  'Preview book',
  'Manage questions',
  'Add readers',
]

function DropdownMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute right-0 top-[calc(100%+8px)] bg-white border border-[#d1d1d1] drop-shadow-[0px_4px_3px_rgba(0,0,0,0.12)] flex flex-col items-start p-[16px] rounded-[8px] z-50 min-w-[210px]">
      {dropdownItems.map((item, i) => (
        <div key={item} className="w-full">
          {i > 0 && <div className="w-full h-px bg-[#d1d1d1]" />}
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer font-['GT_America:Medium'] leading-[20px] text-[16px] text-[color:var(--teal\/900,#07777e)] tracking-[1.6px] uppercase whitespace-nowrap px-[6px] py-[16px] w-full text-left transition-colors hover:bg-[#dae4e1]"
          >
            {item}
          </button>
        </div>
      ))}
    </div>
  )
}

function HeroMenuButton({ paddingX = '16px' }: { paddingX?: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="bg-white border border-[#d1d1d1] cursor-pointer flex gap-[20px] items-center justify-center py-[10px] rounded-[8px] hover:opacity-80 transition-opacity whitespace-nowrap"
        style={{ paddingLeft: paddingX, paddingRight: paddingX }}
      >
        <div className="flex gap-[8px] items-center">
          <div className="relative size-[24px] flex-shrink-0">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <span className="font-['GT_America:Medium'] text-[#07777e] text-[16px] tracking-[1.6px] uppercase whitespace-nowrap">
            My memoir
          </span>
        </div>
        <div className="rotate-180 h-[9px] w-[14px] relative flex-shrink-0">
          <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
            <img alt="" className="block max-w-none size-full" src={imgPolygon1} />
          </div>
        </div>
      </button>
      {open && <DropdownMenu onClose={() => setOpen(false)} />}
    </div>
  )
}

type Tab = 'week-by-week' | 'stories' | 'drafts'

// ─── Shared hero content (book + title + My Memoir button) ──────────────────

function HeroContent({ variant = 'a', scenarioId = 'a-month4' }: { variant?: 'a' | 'b'; scenarioId?: string }) {
  const isB = variant === 'b'
  const isNew = scenarioId === 'a-new' || scenarioId === 'b-new'
  return (
    <div className="flex items-start justify-between gap-4">
      <div className={`flex gap-6 sm:gap-[32px] ${isB ? 'flex-row items-start' : 'flex-col sm:flex-row sm:items-center'}`}>
        <BookCard variant={variant} />
        <div className={`flex flex-col gap-[16px] lg:w-[470px] ${isB ? 'pt-[44px]' : ''}`}>
          {isNew ? (
            <>
              <div className="flex gap-[16px] items-center">
                <h1 className="font-['GT_Super_Display:Regular'] text-[#15372f] text-[50px] leading-[64px] tracking-[-0.5px] m-0">
                  My Life Stories
                </h1>
                <div className="relative size-[40px] flex-shrink-0">
                  <div className="absolute bg-white border-2 border-[#068089] inset-0 rounded-[24px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)]" />
                  <div className="absolute inset-1/4 overflow-clip">
                    <div className="absolute inset-[15%]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencilIcon} />
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="font-['GT_Super_Display:Regular'] text-[#15372f] text-[32px] tracking-[-0.32px] m-0 leading-[normal]">
                by Brian Little
              </h2>
              <p className="font-['GT_Super_Text:Book'] leading-[28px] text-[20px] text-[color:var(--green\/900,#12473a)]">
                Welcome to your memoir—your stories are waiting to be written.
              </p>
              <p className="font-['GT_Super_Text:Book'] leading-[28px] text-[20px] text-[color:var(--green\/900,#12473a)]">
                Read by{' '}
                <button type="button" className="cursor-pointer underline decoration-solid hover:opacity-70 transition-opacity">
                  1 person
                </button>
              </p>
            </>
          ) : (
            <>
              <div className="flex gap-[16px] items-center">
                <h1 className="font-['GT_Super_Display:Regular'] text-[#15372f] text-[50px] leading-[64px] tracking-[-0.5px] m-0">
                  Brian Little
                </h1>
              </div>
              <h2 className="font-['GT_Super_Display:Regular'] text-[#15372f] text-[32px] tracking-[-0.32px] m-0 leading-[normal]">
                My Life Stories
              </h2>
              <p className="font-['GT_Super_Text:Book'] leading-[28px] text-[20px] text-[color:var(--green\/900,#12473a)]">
                10 stories · 54 pages ·{' '}
                <button type="button" className="cursor-pointer underline decoration-solid hover:opacity-70 transition-opacity">
                  read by 2 people
                </button>
              </p>
              <p className="font-['GT_Super_Text:Book'] leading-[28px] text-[20px] text-[color:var(--green\/900,#12473a)]">
                Week 13 of 52
              </p>
            </>
          )}
        </div>
      </div>
      <div className={`flex-none ${isB ? 'pt-[44px]' : 'pt-[24px]'}`}>
        <HeroMenuButton paddingX="18px" />
      </div>
    </div>
  )
}

// ─── Option C Mid-sub ────────────────────────────────────────────────────────

const thisWeekQuestionPool = [
  'What kinds of jobs did you have in high school?',
  'What was your most memorable birthday growing up?',
  'What do you remember about your first car?',
  'What was the greatest piece of advice you ever received?',
  'Describe the home you grew up in.',
  'What was the bravest thing you ever did?',
  'Who had the biggest influence on who you became?',
  'What is something you wish you had told your parents?',
]

const optionCWeeks: {
  weekNum: number
  asker?: string
  question: string
  story?: Story
  isThisWeek?: boolean
  isUpcoming?: boolean
}[] = [
  { weekNum: 1,  question: stories[0].question, story: stories[0] },
  { weekNum: 2,  question: stories[1].question, story: stories[1] },
  { weekNum: 3,  question: stories[2].question, story: stories[2] },
  { weekNum: 4,  question: stories[3].question, story: stories[3] },
  { weekNum: 5,  question: stories[4].question, story: stories[4] },
  { weekNum: 6,  question: stories[5].question, story: stories[5] },
  { weekNum: 7,  question: stories[6].question, story: stories[6] },
  { weekNum: 8,  question: stories[7].question, story: stories[7] },
  { weekNum: 9,  question: stories[8].question, story: stories[8] },
  { weekNum: 10, question: stories[9].question, story: stories[9] },
  { weekNum: 11, asker: 'Raymond',    question: 'What is your earliest memory from childhood?', isUpcoming: true },
  { weekNum: 12, asker: 'Storyworth', question: 'What hobbies brought you the most joy growing up?', isUpcoming: true },
  { weekNum: 13, asker: 'Storyworth', question: 'Describe a meal or recipe that holds a special place in your memory.', isThisWeek: true },
  { weekNum: 14, asker: 'Raymond',    question: 'What world event had the biggest impact on your life?', isUpcoming: true },
  { weekNum: 15, asker: 'Storyworth', question: 'Who was your childhood hero, and why?', isUpcoming: true },
  { weekNum: 16, asker: 'Storyworth', question: 'What is the bravest thing you\'ve ever done?', isUpcoming: true },
  { weekNum: 17, asker: 'Raymond',    question: 'How did your family celebrate the holidays when you were young?', isUpcoming: true },
  { weekNum: 18, asker: 'Storyworth', question: 'What is the most important lesson your parents ever taught you?', isUpcoming: true },
  { weekNum: 19, asker: 'Storyworth', question: 'Describe a time when you had to make a very difficult decision.', isUpcoming: true },
  { weekNum: 20, asker: 'Raymond',    question: 'What place in the world feels most like home to you, and why?', isUpcoming: true },
  { weekNum: 21, asker: 'Storyworth', question: 'What was your favorite book or story as a child?', isUpcoming: true },
  { weekNum: 22, asker: 'Storyworth', question: 'How did you decide on your career path?', isUpcoming: true },
  { weekNum: 23, asker: 'Raymond',    question: 'What is the most spontaneous thing you\'ve ever done?', isUpcoming: true },
  { weekNum: 24, asker: 'Storyworth', question: 'Describe a friendship that changed your life.', isUpcoming: true },
  { weekNum: 25, asker: 'Storyworth', question: 'What invention or technology has changed your daily life the most?', isUpcoming: true },
  { weekNum: 26, asker: 'Raymond',    question: 'What is the most beautiful thing you\'ve ever witnessed?', isUpcoming: true },
  { weekNum: 27, asker: 'Storyworth', question: 'How have your beliefs or values shifted as you\'ve grown older?', isUpcoming: true },
  { weekNum: 28, asker: 'Storyworth', question: 'What is a skill you wish you had learned when you were younger?', isUpcoming: true },
  { weekNum: 29, asker: 'Raymond',    question: 'Describe your favorite vacation or adventure.', isUpcoming: true },
  { weekNum: 30, asker: 'Storyworth', question: 'What is the funniest thing that has ever happened to you?', isUpcoming: true },
  { weekNum: 31, asker: 'Storyworth', question: 'How did you handle a time when life didn\'t go as planned?', isUpcoming: true },
  { weekNum: 32, asker: 'Raymond',    question: 'What cause or issue do you feel most passionate about?', isUpcoming: true },
  { weekNum: 33, asker: 'Storyworth', question: 'Describe a moment when you felt genuinely proud of yourself.', isUpcoming: true },
  { weekNum: 34, asker: 'Storyworth', question: 'What is something important you\'ve changed your mind about over the years?', isUpcoming: true },
  { weekNum: 35, asker: 'Raymond',    question: 'What piece of advice would you give your younger self?', isUpcoming: true },
  { weekNum: 36, asker: 'Storyworth', question: 'Describe a time when a stranger showed you unexpected kindness.', isUpcoming: true },
  { weekNum: 37, asker: 'Storyworth', question: 'What did a typical weekend look like for you as a teenager?', isUpcoming: true },
  { weekNum: 38, asker: 'Raymond',    question: 'What is the greatest risk you ever took, and how did it turn out?', isUpcoming: true },
  { weekNum: 39, asker: 'Storyworth', question: 'Who in your family do you feel most similar to, and why?', isUpcoming: true },
  { weekNum: 40, asker: 'Storyworth', question: 'What is a secret talent or passion most people don\'t know you have?', isUpcoming: true },
  { weekNum: 41, asker: 'Raymond',    question: 'Describe your ideal day from morning to night.', isUpcoming: true },
  { weekNum: 42, asker: 'Storyworth', question: 'What do you wish you had spent more time doing in your life?', isUpcoming: true },
  { weekNum: 43, asker: 'Storyworth', question: 'What historical moment did you witness that you\'ll never forget?', isUpcoming: true },
  { weekNum: 44, asker: 'Raymond',    question: 'How did you navigate your first real heartbreak or disappointment?', isUpcoming: true },
  { weekNum: 45, asker: 'Storyworth', question: 'What goal did you set and achieve that you\'re most proud of?', isUpcoming: true },
  { weekNum: 46, asker: 'Storyworth', question: 'Describe the house or neighborhood you grew up in.', isUpcoming: true },
  { weekNum: 47, asker: 'Raymond',    question: 'What is one thing you would do differently if you could go back?', isUpcoming: true },
  { weekNum: 48, asker: 'Storyworth', question: 'Who has been the most influential mentor in your life?', isUpcoming: true },
  { weekNum: 49, asker: 'Storyworth', question: 'What smell or sound instantly takes you back to your childhood?', isUpcoming: true },
  { weekNum: 50, asker: 'Raymond',    question: 'Describe the moment in your life when you felt most alive.', isUpcoming: true },
  { weekNum: 51, asker: 'Storyworth', question: 'What does family mean to you?', isUpcoming: true },
  { weekNum: 52, asker: 'Storyworth', question: 'If you could leave one message for future generations of your family, what would it be?', isUpcoming: true },
]

const WEEKS_PER_PAGE = 10

const MILESTONE_GRADIENT = 'linear-gradient(-88.38deg, rgb(85, 160, 140) 32.357%, rgb(59, 121, 148) 111.6%)'

function MilestoneTimeline({ variant }: { variant: 'new' | 'mid' | 'end' }) {
  const fills = variant === 'end' ? [1, 1, 1, 1, 1]
    : variant === 'mid' ? [1, 1, 0.3, 0, 0]
    : [0.1447, 0, 0, 0, 0]
  return (
    <div className="flex flex-col gap-[10px] pt-[16px] pb-[4px]">
      <div className="flex gap-[10px] w-full">
        {fills.map((fill, i) => (
          <div key={i} className="relative flex-1 h-[20px] rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-[#f7f7f7] border border-[#eaeaea] rounded-full" />
            {fill > 0 && (
              <div className="absolute top-0 left-0 h-full rounded-full"
                style={{ width: `${fill * 100}%`, backgroundImage: MILESTONE_GRADIENT }} />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-[16px]">
        {variant === 'end' ? (
          <>
            <span className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#4c4c4c]">🎉 Congratulations! You've written <span className="font-['GT_America:Medium']">44 stories</span> in your memoir!</span>
            <span className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#777] whitespace-nowrap">Week 52</span>
          </>
        ) : variant === 'mid' ? (
          <>
            <span className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#4c4c4c]">⛰️ Upcoming milestone: <span className="font-['GT_America:Medium']">20 stories written.</span></span>
            <span className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#777] whitespace-nowrap">Week 13</span>
          </>
        ) : (
          <>
            <span className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#4c4c4c]">⛰️ Upcoming milestone: <span className="font-['GT_America:Medium']">Write your first story.</span></span>
            <span className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#777] whitespace-nowrap">Week 1</span>
          </>
        )}
      </div>
    </div>
  )
}

function OptionCNew() {
  const weekRowRefs = useRef<(HTMLDivElement | null)[]>([])
  const tabBarSentinelRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [pendingScrollWeek, setPendingScrollWeek] = useState<number | null>(null)

  const totalPages = Math.ceil(optionCWeeks.length / WEEKS_PER_PAGE)
  const pageWeeks = optionCWeeks.slice((currentPage - 1) * WEEKS_PER_PAGE, currentPage * WEEKS_PER_PAGE)
  const pageWeeksRef = useRef(pageWeeks)
  pageWeeksRef.current = pageWeeks
  useEffect(() => {
    if (pendingScrollWeek === null) return
    const idx = pageWeeks.findIndex(w => w.weekNum === pendingScrollWeek)
    if (idx >= 0) weekRowRefs.current[idx]?.scrollIntoView({ block: 'center', behavior: 'smooth' })
    setPendingScrollWeek(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingScrollWeek])

  return (
    <div className="flex bg-[#f8f4f1] min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-105px)]">

      {/* ── Left sticky panel ── */}
      <div
        className="sticky top-0 self-start flex-none w-[382px] pl-[60px] pr-[22px] pt-[32px] flex flex-col gap-[24px] overflow-hidden"
        style={{ height: '100vh' }}
      >
        <div className="flex items-start">
          <div className="h-[166px] w-[140px] relative flex-shrink-0">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBookIlloB} />
          </div>
        </div>
        <div className="flex flex-col gap-[16px] w-full">
          <div className="flex flex-col gap-[12px] w-full">
            <h1 className="font-['GT_Super_Display:Regular'] text-[35px] leading-[normal] tracking-[-0.35px] text-[#15372f] m-0">My Life Stories</h1>
            <h2 className="font-['GT_Super_Display:Regular'] text-[26px] leading-[normal] tracking-[-0.26px] text-[#15372f] m-0">by Brian Little</h2>
          </div>
          <div className="flex flex-col gap-[16px] pb-[10px]">
            <p className="font-['GT_Super_Text:Book'] text-[18px] leading-[28px] text-[#12473a] m-0">
              Welcome to your memoir—your stories are waiting to be written.
            </p>
            <p className="font-['GT_Super_Text:Book'] text-[18px] leading-[28px] text-[#12473a] m-0">
              Read by{' '}
              <button type="button" className="underline [text-decoration-skip-ink:none] cursor-pointer hover:opacity-70 transition-opacity">2 people</button>
            </p>
          </div>
          <div className="h-px bg-[#d1d1d1] w-full" />
          <div className="flex flex-col">
            {['Edit book cover', 'Preview book', 'Add readers', 'Manage questions'].map((label) => (
              <button key={label} type="button" className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#07777e] py-[16px] text-left cursor-pointer hover:opacity-70 transition-opacity">
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right story list ── */}
      <div className="flex-1 min-w-0 bg-white drop-shadow-[0px_22px_15px_rgba(0,0,0,0.07)] pl-[16px] pr-[60px] pb-[80px]">

        {/* Welcome card */}
        <div className="py-[24px] px-[24px] w-full">
          <div className="bg-[#d7e9e4] border-2 border-[#a4c1b9] rounded-[8px] px-[24px] py-[16px] flex gap-[22px] items-center justify-center drop-shadow-[0px_4px_10px_rgba(6,128,137,0.06)] w-full">
            <img alt="" className="flex-shrink-0 w-[87px] h-[82px] object-cover pointer-events-none" src="https://www.figma.com/api/mcp/asset/3d86d6dd-52e3-4f8a-bd8a-624d9b92b3da" />
            <div className="flex flex-col gap-[10px] items-center text-center">
              <p className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#12473a] m-0">
                Hi, Brian! Welcome to Storyworth —{' '}
                <span className="font-['GT_America:Medium']">Explore your upcoming questions below, week-by-week.</span>
              </p>
              <p className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#445f59] m-0">
                You can always{' '}
                <button type="button" className="underline [text-decoration-skip-ink:none] cursor-pointer hover:opacity-70 transition-opacity">change your questions</button>
                {' '}or{' '}
                <button type="button" className="underline [text-decoration-skip-ink:none] cursor-pointer hover:opacity-70 transition-opacity">reorder them</button>.
              </p>
            </div>
          </div>
        </div>

        {/* Sentinel */}
        <div ref={tabBarSentinelRef} className="h-0" aria-hidden />

        {/* Sticky tab bar */}
        <div className="sticky top-0 z-10 bg-white border-b border-[#ebebeb] px-[24px] pt-[24px] pb-[16px] flex flex-col gap-[12px]">
          <div className="flex items-center justify-between">
            <div className="bg-[#f3f3f3] flex items-center p-[4px] rounded-[25px]">
              <div className="flex items-center">
                <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.06)] px-[16px] py-[10px] rounded-[22px] cursor-pointer">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#12473a] whitespace-nowrap">week by week</span>
                </div>
                <button type="button" className="px-[16px] py-[10px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap">stories</span>
                </button>
                <button type="button" className="px-[16px] py-[10px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap">drafts</span>
                </button>
              </div>
            </div>
            <div className="flex gap-[12px] items-center">
              <button type="button" className="bg-white flex gap-[10px] h-[40px] items-center justify-center px-[16px] rounded-[24px] cursor-pointer hover:opacity-70 transition-opacity">
                <div className="overflow-clip relative size-[24px] flex-shrink-0">
                  <div className="absolute inset-[12.5%]">
                    <div className="absolute inset-[-4.17%]">
                      <img alt="" className="block max-w-none size-full" src={imgReorderIcon} />
                    </div>
                  </div>
                </div>
                <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#068089] whitespace-nowrap">reorder</span>
              </button>
              <button type="button" aria-label="Search" className="border-2 border-[#068089] size-[40px] flex items-center justify-center rounded-full cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <circle cx="10.5" cy="10.5" r="6.5" stroke="#068089" strokeWidth="1.5"/>
                  <path d="M15.5 15.5L20.5 20.5" stroke="#068089" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <button type="button" className="border-2 border-[#068089] flex gap-[10px] h-[40px] items-center justify-center pl-[10px] pr-[24px] rounded-[24px] cursor-pointer hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="flex-shrink-0">
                  <circle cx="12" cy="12" r="9" stroke="#068089" strokeWidth="1.5"/>
                  <path d="M12 8v8M8 12h8" stroke="#068089" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#068089] whitespace-nowrap">new story</span>
              </button>
            </div>
          </div>
          <MilestoneTimeline variant="new" />
        </div>

        {/* Week rows */}
        {pageWeeks.flatMap((week, i) => {
          const row = (
            <div
              key={week.weekNum}
              ref={el => { weekRowRefs.current[i] = el }}
              className={`${week.weekNum === 3 ? '' : 'border-b border-[#ebebeb] '}py-[24px] px-[24px] flex items-center justify-between gap-[24px] group transition-all cursor-pointer hover:bg-[#f7f7f7]`}
            >
              <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                <p className="font-['GT_America:Regular'] text-[14px] lg:text-[16px] leading-[28px] text-[#61706f] m-0">
                  {week.weekNum === 1
                    ? `Week 1 · Asked by Raymond (Sends Monday, June 3rd)`
                    : week.weekNum === 2 || week.weekNum === 3
                      ? `Week ${week.weekNum} · Asked by Raymond`
                      : `Week ${week.weekNum} · Asked by ${week.asker}`}
                </p>
                <p className="font-['GT_Super_Display:Medium'] text-[18px] lg:text-[20px] leading-[34px] tracking-[-0.2px] text-[#042a21] m-0">
                  {week.question}
                </p>
              </div>
              <button type="button" className="invisible group-hover:visible flex-none border-2 border-[#07777e] h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity">
                <span className="font-['GT_America:Medium'] text-[16px] text-[#07777e] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">answer</span>
              </button>
            </div>
          )
          if (week.weekNum === 3) {
            return [row, (
              <div key="phone-banner" className="px-[24px] py-[32px]">
                <div className="bg-[#e8f3f8] border-2 border-[#b1d8ea] rounded-[8px] px-[24px] py-[16px] flex items-center justify-between gap-[16px] cursor-pointer hover:opacity-90 transition-opacity">
                  <div className="flex gap-[10px] items-center flex-1 min-w-0 flex-wrap">
                    <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] text-[#12473a] whitespace-nowrap">📱 Want to get your weekly questions by text?</span>
                    <span className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#445f59] whitespace-nowrap">Add your phone number so you never miss a week!</span>
                  </div>
                  <div className="relative size-[24px] flex-shrink-0">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhoneBannerArrow} />
                  </div>
                </div>
              </div>
            )]
          }
          return [row]
        })}

        {/* Pagination */}
        <div className="flex gap-[24px] items-center justify-center py-[32px]">
          <button type="button" disabled={currentPage === 1}
            onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); tabBarSentinelRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) }}
            className={`relative size-[40px] flex-none bg-white border-2 border-[#068089] rounded-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] flex items-center justify-center transition-opacity ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
            aria-label="Previous page">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M10 3L5.5 8L10 13" stroke="#068089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex gap-[10px] items-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button key={n} type="button"
                onClick={() => { setCurrentPage(n); tabBarSentinelRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) }}
                className={`flex items-center justify-center rounded-[12px] size-[40px] cursor-pointer transition-colors ${n === currentPage ? 'bg-[#edf2f0]' : 'hover:bg-[#f7f7f7]'}`}>
                <span className="font-['GT_America:Regular'] text-[18px] leading-[28px] text-[#042a21] text-center">{n}</span>
              </button>
            ))}
            <span className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#445f59] whitespace-nowrap">
              {(currentPage - 1) * WEEKS_PER_PAGE + 1}–{Math.min(currentPage * WEEKS_PER_PAGE, optionCWeeks.length)} of {optionCWeeks.length}
            </span>
          </div>
          <button type="button" disabled={currentPage === totalPages}
            onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); tabBarSentinelRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) }}
            className={`relative size-[40px] flex-none bg-white border-2 border-[#068089] rounded-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] flex items-center justify-center transition-opacity ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
            aria-label="Next page">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M6 3L10.5 8L6 13" stroke="#068089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

function OptionCMidSub() {
  const thisWeekRef = useRef<HTMLDivElement>(null)
  const [showGoBtn, setShowGoBtn] = useState(true)
  const [thisWeekQuestion, setThisWeekQuestion] = useState(thisWeekQuestionPool[0])

  function shuffleQuestion() {
    const others = thisWeekQuestionPool.filter(q => q !== thisWeekQuestion)
    setThisWeekQuestion(others[Math.floor(Math.random() * others.length)])
  }
  // Hide go-to button when this week card is visible
  useEffect(() => {
    const el = thisWeekRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => setShowGoBtn(!e.isIntersecting),
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const weekRowRefs = useRef<(HTMLDivElement | null)[]>([])
  const tabBarSentinelRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [pendingScrollWeek, setPendingScrollWeek] = useState<number | null>(null)
  const [focusThisWeek, setFocusThisWeek] = useState(false)
  const focusThisWeekRef = useRef(false)

  const totalPages = Math.ceil(optionCWeeks.length / WEEKS_PER_PAGE)
  const pageWeeks = optionCWeeks.slice((currentPage - 1) * WEEKS_PER_PAGE, currentPage * WEEKS_PER_PAGE)
  const pageWeeksRef = useRef(pageWeeks)
  pageWeeksRef.current = pageWeeks

  useEffect(() => {
    function handleScroll() {
      const viewportMid = window.scrollY + window.innerHeight / 2
      let closestWeek = pageWeeksRef.current[0]?.weekNum ?? 1
      let closestDist = Infinity
      weekRowRefs.current.forEach((ref, idx) => {
        if (!ref) return
        const rect = ref.getBoundingClientRect()
        const rowMid = window.scrollY + rect.top + rect.height / 2
        const dist = Math.abs(rowMid - viewportMid)
        if (dist < closestDist) {
          closestDist = dist
          closestWeek = pageWeeksRef.current[idx]?.weekNum ?? closestWeek
        }
      })
      if (focusThisWeekRef.current) {
        focusThisWeekRef.current = false
        setFocusThisWeek(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (pendingScrollWeek === null) return
    const idxInPage = pageWeeks.findIndex(w => w.weekNum === pendingScrollWeek)
    if (idxInPage >= 0) {
      weekRowRefs.current[idxInPage]?.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
    setPendingScrollWeek(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingScrollWeek])

  return (
    // Outer: tan bg fills full left side via background bleed
    <div className="flex bg-[#f8f4f1] min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-105px)]">

      {/* ── Left sticky panel ── */}
      <div
        className="sticky top-0 self-start flex-none w-[382px]
                   pl-[60px] pr-[22px] pt-[32px] flex flex-col gap-[24px] overflow-hidden"
        style={{ height: '100vh' }}
      >
        <div className="flex items-start">
          <div className="h-[166px] w-[140px] relative flex-shrink-0">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBookIlloB} />
          </div>
        </div>
        <div className="flex flex-col gap-[16px] w-full">
          <div className="flex flex-col gap-[12px] w-full">
            <h1 className="font-['GT_Super_Display:Regular'] text-[35px] leading-[normal] tracking-[-0.35px] text-[#15372f] m-0">
              My Life Stories
            </h1>
            <h2 className="font-['GT_Super_Display:Regular'] text-[26px] leading-[normal] tracking-[-0.26px] text-[#15372f] m-0">
              by Brian Little
            </h2>
          </div>
          <div className="flex flex-col gap-[16px] pb-[10px]">
            <p className="font-['GT_Super_Text:Book'] text-[18px] leading-[28px] text-[#12473a] m-0">
              10 stories · 54 pages
            </p>
            <p className="font-['GT_Super_Text:Book'] text-[18px] leading-[28px] text-[#12473a] m-0">
              Read by{' '}
              <button type="button" className="underline [text-decoration-skip-ink:none] cursor-pointer hover:opacity-70 transition-opacity">
                2 people
              </button>
            </p>
          </div>
          <div className="h-px bg-[#d1d1d1] w-full" />
          <div className="flex flex-col">
            {['Edit book cover', 'Preview book', 'Add readers', 'Manage questions'].map((label) => (
              <button
                key={label}
                type="button"
                className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[color:var(--teal\/900,#07777e)] py-[16px] text-left cursor-pointer hover:opacity-70 transition-opacity"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Story list */}
      <div className="flex-1 min-w-0 bg-white drop-shadow-[0px_22px_15px_rgba(0,0,0,0.07)] pl-[16px] pr-[60px] pb-[80px]">

        {/* Floating notification — only visible when this-week card is off-screen */}
        {showGoBtn && (
          <div
            className="flex items-center justify-center pt-[62px] pb-[50px] w-full"
            style={{ animation: 'gentle-bounce 2.4s ease-in-out infinite' }}
          >
            <button
              type="button"
              onClick={() => {
                const thisWeekIdx = optionCWeeks.findIndex(w => w.isThisWeek)
                const thisWeekNum = optionCWeeks[thisWeekIdx]?.weekNum ?? 13
                const targetPage = Math.ceil((thisWeekIdx + 1) / WEEKS_PER_PAGE)
                focusThisWeekRef.current = true
                setFocusThisWeek(true)
                if (currentPage !== targetPage) {
                  setCurrentPage(targetPage)
                  setPendingScrollWeek(thisWeekNum)
                } else {
                  const el = thisWeekRef.current
                  if (el) {
                    const rect = el.getBoundingClientRect()
                    window.scrollTo({ top: window.scrollY + rect.top - window.innerHeight / 2 + el.offsetHeight / 2, behavior: 'smooth' })
                  }
                }
              }}
              className="bg-[#288068] border-2 border-[#288068] hover:opacity-90 rounded-[8px] px-[24px] py-[16px] flex gap-[16px] items-center justify-center drop-shadow-[0px_4px_10px_rgba(6,128,137,0.06)] cursor-pointer transition-opacity"
            >
              <p className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-white text-center whitespace-nowrap m-0">
                Hi, Brian! Raymond asked a question this week —{' '}
                <span className="font-['GT_America:Medium']">See what they asked</span>
              </p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="flex-none">
                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}

        {/* Sentinel — when this leaves the viewport the tab bar is stuck */}
        <div ref={tabBarSentinelRef} className="h-0" aria-hidden />

        {/* Sticky tab bar */}
        <div className="sticky top-0 z-10 bg-white border-b border-[#ebebeb] px-[24px] pt-[24px] pb-[16px] flex flex-col gap-[12px]">
          <div className="flex items-center justify-between">
            <div className="bg-[#f3f3f3] flex items-center p-[4px] rounded-[25px]">
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => { setCurrentPage(1); tabBarSentinelRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) }}
                  className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.06)] px-[16px] py-[10px] rounded-[22px] cursor-pointer"
                >
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#12473a] whitespace-nowrap">
                    week by week
                  </span>
                </button>
                <button type="button" className="px-[16px] py-[10px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap">
                    stories (4)
                  </span>
                </button>
                <button type="button" className="px-[16px] py-[10px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap">
                    drafts (2)
                  </span>
                </button>
              </div>
            </div>
            <div className="flex gap-[12px] items-center">
              <button type="button" className="bg-white flex gap-[10px] h-[40px] items-center justify-center px-[16px] rounded-[24px] cursor-pointer hover:opacity-70 transition-opacity">
                <div className="overflow-clip relative size-[24px] flex-shrink-0">
                  <div className="absolute inset-[12.5%]">
                    <div className="absolute inset-[-4.17%]">
                      <img alt="" className="block max-w-none size-full" src={imgReorderIcon} />
                    </div>
                  </div>
                </div>
                <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#068089] whitespace-nowrap">
                  reorder
                </span>
              </button>
              <button type="button" aria-label="Search" className="border-2 border-[#068089] size-[40px] flex items-center justify-center rounded-full cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <circle cx="10.5" cy="10.5" r="6.5" stroke="#068089" strokeWidth="1.5"/>
                  <path d="M15.5 15.5L20.5 20.5" stroke="#068089" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <button type="button" className="border-2 border-[#068089] flex gap-[10px] h-[40px] items-center justify-center pl-[10px] pr-[24px] rounded-[24px] cursor-pointer hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="flex-shrink-0">
                  <circle cx="12" cy="12" r="9" stroke="#068089" strokeWidth="1.5"/>
                  <path d="M12 8v8M8 12h8" stroke="#068089" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#068089] whitespace-nowrap">
                  new story
                </span>
              </button>
            </div>
          </div>


          <MilestoneTimeline variant="mid" />
        </div>

        {pageWeeks.map((week, i) => {
          if (week.isThisWeek) {
            return (
              <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }} className="py-[72px] px-[24px] flex flex-col gap-[24px] items-center">
                <div
                  ref={thisWeekRef}
                  className="bg-white border border-[#288068] rounded-[12px] drop-shadow-[0px_4px_15px_rgba(68,95,89,0.06)] px-[24px] py-[36px] flex items-center justify-between gap-[16px] w-full cursor-pointer hover:bg-[#f0f7f4] hover:-translate-y-1 transition-all"
                >
                  <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                    <div className="flex gap-[12px] items-center">
                      <div className="bg-[#d8e8e3] px-[12px] py-[2px] rounded-[6px] flex-shrink-0">
                        <span className="font-['GT_America:Regular'] text-[20px] leading-[28px] text-[#117459] whitespace-nowrap">Week {week.weekNum}</span>
                      </div>
                      <span className="font-['GT_America:Regular'] text-[20px] leading-[28px] text-[#61706f] whitespace-nowrap">This week {week.asker} asked:</span>
                    </div>
                    <p className="font-['GT_Super_Display:Medium'] text-[24px] leading-[34px] tracking-[-0.24px] text-[#042a21] m-0 max-w-[600px]">
                      {thisWeekQuestion}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex-none bg-[#288068] h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    <span className="font-['GT_America:Medium'] text-[16px] text-white leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">
                      tell my story
                    </span>
                  </button>
                </div>
                <p className="font-['GT_America:Regular'] text-[14px] leading-[20px] text-[#61706f] m-0 text-center">
                  Not feeling it?{' '}
                  <button type="button" onClick={shuffleQuestion} className="underline [text-decoration-skip-ink:none] cursor-pointer hover:opacity-70 transition-opacity">Pick a new one</button>
                  {' '}or{' '}
                  <button type="button" onClick={shuffleQuestion} className="underline [text-decoration-skip-ink:none] cursor-pointer hover:opacity-70 transition-opacity">shuffle this question</button>
                </p>
              </div>
            )
          }

          if (week.isUpcoming) {
            return (
              <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }} className={`border-b border-[#ebebeb] py-[24px] px-[24px] flex items-center justify-between gap-[24px] group transition-all cursor-pointer ${focusThisWeek ? 'opacity-50' : 'hover:bg-[#f7f7f7]'}`}>
                <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                  <p className="font-['GT_America:Regular'] text-[14px] lg:text-[16px] leading-[28px] text-[color:var(--green\/700,#61706f)] m-0">
                    Week {week.weekNum} · Asked by {week.asker}
                  </p>
                  <p className="font-['GT_Super_Display:Medium'] text-[18px] lg:text-[20px] leading-[34px] tracking-[-0.2px] text-[color:var(--green\/1000,#042a21)] m-0">
                    {week.question}
                  </p>
                </div>
                <button
                  type="button"
                  className="invisible group-hover:visible flex flex-none border-2 border-[#07777e] h-[40px] items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <span className="font-['GT_America:Medium'] text-[16px] text-[#07777e] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">
                    answer
                  </span>
                </button>
              </div>
            )
          }

          const story = week.story!
          const isLastBeforeThisWeek = pageWeeks[i + 1]?.isThisWeek
          return (
            <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }} className={`${isLastBeforeThisWeek ? '' : 'border-b border-[#ebebeb] '}py-[24px] px-[24px] flex items-start justify-between gap-[24px] cursor-pointer transition-all ${focusThisWeek ? 'opacity-50' : 'hover:bg-[#f7f7f7]'}`}>
              <div className="flex flex-col gap-[12px] flex-1 min-w-0 max-w-[600px]">
                <p className="font-['GT_America:Regular'] text-[14px] lg:text-[16px] leading-[28px] text-[color:var(--green\/700,#61706f)] m-0">
                  Week {week.weekNum}
                </p>
                <p className="font-['GT_Super_Display:Medium'] text-[18px] lg:text-[20px] leading-[34px] tracking-[-0.2px] text-[color:var(--green\/1000,#042a21)] m-0">
                  {story.question}
                </p>
                <div className="flex gap-[24px] items-start">
                  {story.photos.length > 0 && (
                    <div className="border-2 border-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] w-[60px] h-[77px] relative flex-shrink-0">
                      <img alt="" className="absolute inset-0 size-full object-cover" src={story.photos[0]} />
                    </div>
                  )}
                  <p className="font-['GT_Super_Text:Book'] text-[16px] lg:text-[18px] leading-[28px] text-[color:var(--green\/800,#445f59)] m-0 flex-1 min-w-0">
                    {story.excerpt}
                  </p>
                </div>
                {story.reactions.length > 0 && (
                  <div className="flex gap-[8px] items-center">
                    {story.reactions.map((r, i) => (
                      <div key={i} className="flex gap-[8px] items-center">
                        <div className="relative size-[24px] flex-shrink-0">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={r.icon} />
                        </div>
                        <span className="font-['GT_America:Regular'] text-[16px] text-[color:var(--teal\/900,#07777e)]">{r.count}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex-none pt-[40px]">
                <ReaderAvatars readers={story.readers} />
              </div>
            </div>
          )
        })}

        {/* Pagination */}
        <div className="flex gap-[24px] items-center justify-center py-[32px]">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); tabBarSentinelRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) }}
            className={`relative size-[40px] flex-none bg-white border-2 border-[#068089] rounded-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] flex items-center justify-center transition-opacity ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
            aria-label="Previous page"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M10 3L5.5 8L10 13" stroke="#068089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex gap-[10px] items-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button
                key={n}
                type="button"
                onClick={() => { setCurrentPage(n); tabBarSentinelRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) }}
                className={`flex items-center justify-center rounded-[12px] size-[40px] cursor-pointer transition-colors ${n === currentPage ? 'bg-[#edf2f0]' : 'hover:bg-[#f7f7f7]'}`}
              >
                <span className="font-['GT_America:Regular'] text-[18px] leading-[28px] text-[#042a21] text-center">{n}</span>
              </button>
            ))}
            <span className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#445f59] whitespace-nowrap">
              {(currentPage - 1) * WEEKS_PER_PAGE + 1}–{Math.min(currentPage * WEEKS_PER_PAGE, optionCWeeks.length)} of {optionCWeeks.length}
            </span>
          </div>
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); tabBarSentinelRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) }}
            className={`relative size-[40px] flex-none bg-white border-2 border-[#068089] rounded-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] flex items-center justify-center transition-opacity ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
            aria-label="Next page"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M6 3L10.5 8L6 13" stroke="#068089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

    </div>
  )
}

// ─── Option C: End ───────────────────────────────────────────────────────────

const C_END_UNANSWERED = new Set([11, 19, 26, 34, 40, 46, 50, 52])

const optionCEndWeeks = optionCWeeks.map((w, i) => {
  if (C_END_UNANSWERED.has(w.weekNum)) {
    return { weekNum: w.weekNum, asker: w.asker, question: w.question, isUpcoming: true as const }
  }
  const tmpl = stories[i % stories.length]
  return { weekNum: w.weekNum, question: w.question, story: { ...tmpl, question: w.question } }
}) as typeof optionCWeeks

function OptionCEnd() {
  const weekRowRefs = useRef<(HTMLDivElement | null)[]>([])
  const tabBarSentinelRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [pendingScrollWeek, setPendingScrollWeek] = useState<number | null>(null)

  const totalPages = Math.ceil(optionCEndWeeks.length / WEEKS_PER_PAGE)
  const pageWeeks = optionCEndWeeks.slice((currentPage - 1) * WEEKS_PER_PAGE, currentPage * WEEKS_PER_PAGE)
  const pageWeeksRef = useRef(pageWeeks)
  pageWeeksRef.current = pageWeeks

  useEffect(() => {
    if (pendingScrollWeek === null) return
    const idxInPage = pageWeeks.findIndex(w => w.weekNum === pendingScrollWeek)
    if (idxInPage >= 0) weekRowRefs.current[idxInPage]?.scrollIntoView({ block: 'center', behavior: 'smooth' })
    setPendingScrollWeek(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingScrollWeek])

  return (
    <div className="flex bg-[#f8f4f1] min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-105px)]">

      {/* ── Left sticky panel ── */}
      <div className="sticky top-0 self-start flex-none w-[382px] pl-[60px] pr-[22px] pt-[32px] flex flex-col gap-[24px] overflow-hidden" style={{ height: '100vh' }}>
        <div className="flex items-start">
          <div className="h-[166px] w-[140px] relative flex-shrink-0">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBookIlloB} />
          </div>
        </div>
        <div className="flex flex-col gap-[16px] w-full">
          <div className="flex flex-col gap-[12px] w-full">
            <h1 className="font-['GT_Super_Display:Regular'] text-[35px] leading-[normal] tracking-[-0.35px] text-[#15372f] m-0">My Life Stories</h1>
            <h2 className="font-['GT_Super_Display:Regular'] text-[26px] leading-[normal] tracking-[-0.26px] text-[#15372f] m-0">by Brian Little</h2>
          </div>
          <div className="flex flex-col gap-[16px] pb-[10px]">
            <p className="font-['GT_Super_Text:Book'] text-[18px] leading-[28px] text-[#12473a] m-0">44 stories · 154 pages</p>
            <p className="font-['GT_Super_Text:Book'] text-[18px] leading-[28px] text-[#12473a] m-0">
              Read by{' '}
              <button type="button" className="underline [text-decoration-skip-ink:none] cursor-pointer hover:opacity-70 transition-opacity">2 people</button>
            </p>
          </div>
          <div className="h-px bg-[#d1d1d1] w-full" />
          <div className="flex flex-col">
            {['Edit book cover', 'Preview book', 'Add readers', 'Manage questions'].map((label) => (
              <button key={label} type="button" className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[color:var(--teal\/900,#07777e)] py-[16px] text-left cursor-pointer hover:opacity-70 transition-opacity">{label}</button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right story list ── */}
      <div className="flex-1 min-w-0 bg-white drop-shadow-[0px_22px_15px_rgba(0,0,0,0.07)] pl-[16px] pr-[60px] pb-[80px]">

        {/* Print banner */}
        <div className="py-[24px] px-[24px] w-full">
          <div className="relative bg-[#d7e9e4] border-2 border-[#a4c1b9] rounded-[8px] px-[24px] py-[16px] flex items-center justify-between gap-[22px] drop-shadow-[0px_4px_10px_rgba(6,128,137,0.06)] overflow-hidden">
            {/* Confetti pieces */}
            <div className="absolute pointer-events-none" style={{ left: 109, top: 104 }}><div style={{ transform: 'rotate(-23deg)', background: '#9d6cb4', width: 16.6, height: 6.5, borderRadius: 1 }} /></div>
            <div className="absolute pointer-events-none" style={{ left: 285, top: 10 }}><div style={{ transform: 'rotate(19.5deg)', background: '#29b58f', width: 16.6, height: 6.5, borderRadius: 1 }} /></div>
            <div className="absolute pointer-events-none" style={{ left: 427, top: 117 }}><div style={{ transform: 'rotate(-40.3deg)', background: '#3d96bc', width: 16.6, height: 6.5, borderRadius: 1 }} /></div>
            <div className="absolute pointer-events-none" style={{ left: -4, top: 21 }}><div style={{ transform: 'rotate(12.8deg)', background: '#3d96bc', width: 16.6, height: 6.5, borderRadius: 1 }} /></div>
            <div className="absolute pointer-events-none" style={{ left: 606, top: -6 }}><div style={{ transform: 'rotate(122.9deg)', background: '#9d6cb4', width: 16.6, height: 6.5, borderRadius: 1 }} /></div>
            <div className="absolute pointer-events-none" style={{ left: 597, top: 88 }}><div style={{ transform: 'rotate(12.75deg)', background: '#3d96bc', width: 16.6, height: 6.5, borderRadius: 1 }} /></div>
            <div className="absolute pointer-events-none" style={{ left: 866, top: 102 }}><div style={{ transform: 'rotate(24.3deg)', background: '#29b58f', width: 16.6, height: 6.5, borderRadius: 1 }} /></div>
            {/* Image + text */}
            <div className="flex gap-[22px] items-center flex-1 min-w-0">
              <img alt="" className="flex-shrink-0 w-[87px] h-[82px] object-cover pointer-events-none" src="https://www.figma.com/api/mcp/asset/e859026b-7f94-407c-83c6-6bd34b1b0e8a" />
              <div className="flex flex-col gap-[10px]">
                <p className="font-['GT_America:Medium'] text-[16px] leading-[20px] text-[#12473a] m-0">You've written 44 stories, and your book is waiting to be printed!</p>
                <p className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#445f59] m-0">Print today and get your book by June 24th.</p>
              </div>
            </div>
            {/* CTA */}
            <button type="button" className="flex-shrink-0 bg-[#068089] text-white flex h-[40px] items-center justify-center px-[24px] rounded-[24px] cursor-pointer hover:opacity-90 transition-opacity">
              <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">preview and print</span>
            </button>
          </div>
        </div>

        {/* Sentinel */}
        <div ref={tabBarSentinelRef} className="h-0" aria-hidden />

        {/* Sticky tab bar */}
        <div className="sticky top-0 z-10 bg-white border-b border-[#ebebeb] px-[24px] pt-[24px] pb-[16px] flex flex-col gap-[12px]">
          <div className="flex items-center justify-between">
            <div className="bg-[#f3f3f3] flex items-center p-[4px] rounded-[25px]">
              <div className="flex items-center">
                <button type="button" onClick={() => { setCurrentPage(1); tabBarSentinelRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) }} className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.06)] px-[16px] py-[10px] rounded-[22px] cursor-pointer">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#12473a] whitespace-nowrap">week by week</span>
                </button>
                <button type="button" className="px-[16px] py-[10px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap">stories (44)</span>
                </button>
                <button type="button" className="px-[16px] py-[10px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap">drafts (2)</span>
                </button>
              </div>
            </div>
            <div className="flex gap-[12px] items-center">
              <button type="button" className="bg-white flex gap-[10px] h-[40px] items-center justify-center px-[16px] rounded-[24px] cursor-pointer hover:opacity-70 transition-opacity">
                <div className="overflow-clip relative size-[24px] flex-shrink-0">
                  <div className="absolute inset-[12.5%]"><div className="absolute inset-[-4.17%]"><img alt="" className="block max-w-none size-full" src={imgReorderIcon} /></div></div>
                </div>
                <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#068089] whitespace-nowrap">reorder</span>
              </button>
              <button type="button" aria-label="Search" className="border-2 border-[#068089] size-[40px] flex items-center justify-center rounded-full cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <circle cx="10.5" cy="10.5" r="6.5" stroke="#068089" strokeWidth="1.5"/>
                  <path d="M15.5 15.5L20.5 20.5" stroke="#068089" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <button type="button" className="border-2 border-[#068089] flex gap-[10px] h-[40px] items-center justify-center pl-[10px] pr-[24px] rounded-[24px] cursor-pointer hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="flex-shrink-0">
                  <circle cx="12" cy="12" r="9" stroke="#068089" strokeWidth="1.5"/><path d="M12 8v8M8 12h8" stroke="#068089" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#068089] whitespace-nowrap">new story</span>
              </button>
            </div>
          </div>

          <MilestoneTimeline variant="end" />
        </div>

        {/* Week rows */}
        {pageWeeks.map((week, i) => {
          if (week.isUpcoming) {
            return (
              <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }} className="border-b border-[#ebebeb] py-[24px] px-[24px] flex items-center justify-between gap-[24px] group transition-all cursor-pointer bg-[#fafafa] hover:bg-[#f4f4f4]">
                <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                  <p className="font-['GT_America:Regular'] text-[14px] lg:text-[16px] leading-[28px] text-[color:var(--green\/700,#61706f)] m-0">Week {week.weekNum} · Asked by {week.asker}</p>
                  <p className="font-['GT_Super_Display:Medium'] text-[18px] lg:text-[20px] leading-[34px] tracking-[-0.2px] text-[color:var(--green\/1000,#042a21)] m-0">{week.question}</p>
                </div>
                <button type="button" className="invisible group-hover:visible flex flex-none border-2 border-[#07777e] h-[40px] items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] text-[#07777e] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">answer</span>
                </button>
              </div>
            )
          }
          const story = week.story!
          return (
            <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }} className="border-b border-[#ebebeb] py-[24px] px-[24px] flex items-start justify-between gap-[24px] cursor-pointer transition-all hover:bg-[#f7f7f7]">
              <div className="flex flex-col gap-[12px] flex-1 min-w-0 max-w-[600px]">
                <p className="font-['GT_America:Regular'] text-[14px] lg:text-[16px] leading-[28px] text-[color:var(--green\/700,#61706f)] m-0">Week {week.weekNum}</p>
                <p className="font-['GT_Super_Display:Medium'] text-[18px] lg:text-[20px] leading-[34px] tracking-[-0.2px] text-[color:var(--green\/1000,#042a21)] m-0">{week.question}</p>
                <div className="flex gap-[24px] items-start">
                  {story.photos.length > 0 && (
                    <div className="border-2 border-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] w-[60px] h-[77px] relative flex-shrink-0">
                      <img alt="" className="absolute inset-0 size-full object-cover" src={story.photos[0]} />
                    </div>
                  )}
                  <p className="font-['GT_Super_Text:Book'] text-[16px] lg:text-[18px] leading-[28px] text-[color:var(--green\/800,#445f59)] m-0 flex-1 min-w-0">{story.excerpt}</p>
                </div>
                {story.reactions.length > 0 && (
                  <div className="flex gap-[8px] items-center">
                    {story.reactions.map((r, ri) => (
                      <div key={ri} className="flex gap-[8px] items-center">
                        <div className="relative size-[24px] flex-shrink-0"><img alt="" className="absolute block inset-0 max-w-none size-full" src={r.icon} /></div>
                        <span className="font-['GT_America:Regular'] text-[16px] text-[color:var(--teal\/900,#07777e)]">{r.count}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex-none pt-[40px]"><ReaderAvatars readers={story.readers} /></div>
            </div>
          )
        })}

        {/* Pagination */}
        <div className="flex gap-[24px] items-center justify-center py-[32px]">
          <button type="button" disabled={currentPage === 1}
            onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); tabBarSentinelRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) }}
            className={`relative size-[40px] flex-none bg-white border-2 border-[#068089] rounded-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] flex items-center justify-center transition-opacity ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
            aria-label="Previous page">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M10 3L5.5 8L10 13" stroke="#068089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="flex gap-[10px] items-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button key={n} type="button"
                onClick={() => { setCurrentPage(n); tabBarSentinelRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) }}
                className={`flex items-center justify-center rounded-[12px] size-[40px] cursor-pointer transition-colors ${n === currentPage ? 'bg-[#edf2f0]' : 'hover:bg-[#f7f7f7]'}`}>
                <span className="font-['GT_America:Regular'] text-[18px] leading-[28px] text-[#042a21] text-center">{n}</span>
              </button>
            ))}
            <span className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#445f59] whitespace-nowrap">
              {(currentPage - 1) * WEEKS_PER_PAGE + 1}–{Math.min(currentPage * WEEKS_PER_PAGE, optionCEndWeeks.length)} of {optionCEndWeeks.length}
            </span>
          </div>
          <button type="button" disabled={currentPage === totalPages}
            onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); tabBarSentinelRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) }}
            className={`relative size-[40px] flex-none bg-white border-2 border-[#068089] rounded-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] flex items-center justify-center transition-opacity ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
            aria-label="Next page">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M6 3L10.5 8L6 13" stroke="#068089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

      </div>
    </div>
  )
}

// ─── Option A: End ───────────────────────────────────────────────────────────

function OptionAEnd() {
  const weekRowRefs = useRef<(HTMLDivElement | null)[]>([])
  const tabBarSentinelRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [pendingScrollWeek, setPendingScrollWeek] = useState<number | null>(null)

  const totalPages = Math.ceil(optionCEndWeeks.length / WEEKS_PER_PAGE)
  const pageWeeks = optionCEndWeeks.slice((currentPage - 1) * WEEKS_PER_PAGE, currentPage * WEEKS_PER_PAGE)
  const pageWeeksRef = useRef(pageWeeks)
  pageWeeksRef.current = pageWeeks

  useEffect(() => {
    if (pendingScrollWeek === null) return
    const idxInPage = pageWeeks.findIndex(w => w.weekNum === pendingScrollWeek)
    if (idxInPage >= 0) weekRowRefs.current[idxInPage]?.scrollIntoView({ block: 'center', behavior: 'smooth' })
    setPendingScrollWeek(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingScrollWeek])

  return (
    <div className="bg-white min-h-screen">

      {/* ── Tan hero ── */}
      <section className="bg-[#f8f4f1]">
        <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-[50px] pb-8 sm:pb-[138px]">
          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-6 sm:gap-[32px] flex-col sm:flex-row sm:items-center">
              <BookCard variant="a" />
              <div className="flex flex-col gap-[16px] lg:w-[470px]">
                <h1 className="font-['GT_Super_Display:Regular'] text-[#15372f] text-[50px] leading-[64px] tracking-[-0.5px] m-0">
                  My Life Stories
                </h1>
                <h2 className="font-['GT_Super_Display:Regular'] text-[#15372f] text-[32px] tracking-[-0.32px] m-0 leading-[normal]">
                  by Brian Little
                </h2>
                <p className="font-['GT_Super_Text:Book'] leading-[28px] text-[20px] text-[color:var(--green\/900,#12473a)] m-0">
                  44 stories · 154 pages ·{' '}
                  <button type="button" className="cursor-pointer underline decoration-solid hover:opacity-70 transition-opacity">
                    read by 2 people
                  </button>
                </p>
                <p className="font-['GT_Super_Text:Book'] leading-[28px] text-[20px] m-0">
                  <button type="button" className="cursor-pointer underline [text-decoration-skip-ink:none] text-[#068089] hover:opacity-70 transition-opacity">
                    Restart weekly questions
                  </button>
                </p>
              </div>
            </div>
            <div className="flex-none pt-[24px]">
              <HeroMenuButton paddingX="18px" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Print banner (overlaps tan hero) ── */}
      <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 sm:-mt-[62px] pb-[20px]">
        <div className="relative bg-[#d7e9e4] border-2 border-[#a4c1b9] rounded-[8px] px-[24px] py-[16px] flex items-center justify-between gap-[22px] drop-shadow-[0px_4px_10px_rgba(6,128,137,0.06)] overflow-hidden">
          <div className="absolute pointer-events-none" style={{ left: 109, top: 104 }}><div style={{ transform: 'rotate(-23deg)', background: '#9d6cb4', width: 16.6, height: 6.5, borderRadius: 1 }} /></div>
          <div className="absolute pointer-events-none" style={{ left: 285, top: 10 }}><div style={{ transform: 'rotate(19.5deg)', background: '#29b58f', width: 16.6, height: 6.5, borderRadius: 1 }} /></div>
          <div className="absolute pointer-events-none" style={{ left: 427, top: 117 }}><div style={{ transform: 'rotate(-40.3deg)', background: '#3d96bc', width: 16.6, height: 6.5, borderRadius: 1 }} /></div>
          <div className="absolute pointer-events-none" style={{ left: -4, top: 21 }}><div style={{ transform: 'rotate(12.8deg)', background: '#3d96bc', width: 16.6, height: 6.5, borderRadius: 1 }} /></div>
          <div className="absolute pointer-events-none" style={{ left: 606, top: -6 }}><div style={{ transform: 'rotate(122.9deg)', background: '#9d6cb4', width: 16.6, height: 6.5, borderRadius: 1 }} /></div>
          <div className="absolute pointer-events-none" style={{ left: 597, top: 88 }}><div style={{ transform: 'rotate(12.75deg)', background: '#3d96bc', width: 16.6, height: 6.5, borderRadius: 1 }} /></div>
          <div className="absolute pointer-events-none" style={{ left: 866, top: 102 }}><div style={{ transform: 'rotate(24.3deg)', background: '#29b58f', width: 16.6, height: 6.5, borderRadius: 1 }} /></div>
          <div className="flex gap-[22px] items-center flex-1 min-w-0">
            <img alt="" className="flex-shrink-0 w-[87px] h-[82px] object-cover pointer-events-none"
              src="https://www.figma.com/api/mcp/asset/e859026b-7f94-407c-83c6-6bd34b1b0e8a" />
            <div className="flex flex-col gap-[10px]">
              <p className="font-['GT_America:Medium'] text-[16px] leading-[20px] text-[#12473a] m-0">You've written 44 stories, and your book is waiting to be printed!</p>
              <p className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#445f59] m-0">Print today and get your book by June 24th.</p>
            </div>
          </div>
          <button type="button" className="flex-shrink-0 bg-[#068089] text-white flex h-[40px] items-center justify-center px-[24px] rounded-[24px] cursor-pointer hover:opacity-90 transition-opacity">
            <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">preview and print</span>
          </button>
        </div>
      </div>

      {/* ── "My stories" heading ── */}
      <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 pt-[68px] pb-[2px] flex flex-col gap-[16px]">
        <h2 className="font-['GT_Super_Display:Regular'] leading-[36px] text-[32px] text-[color:var(--green\/1000,#042a21)] tracking-[-0.32px] m-0">
          My stories
        </h2>
        <p className="font-['GT_Super_Text:Book'] leading-[28px] text-[18px] text-[#445f59] max-w-[748px]">
          🏆 What an achievement! You've written 44 stories for your memoir.
        </p>
      </div>

      {/* Sentinel */}
      <div ref={tabBarSentinelRef} className="h-0" aria-hidden />

      {/* ── Sticky tab bar ── */}
      <div className="sticky top-0 z-20 bg-white">
        <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 pt-[22px] pb-[24px]">
          <div className="flex items-center justify-between gap-4">
            <div className="bg-[#f3f3f3] flex items-center p-[4px] rounded-[25px] overflow-x-auto flex-shrink-0">
              <div className="flex items-center min-w-max">
                <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.06)] px-[16px] py-[10px] rounded-[22px] cursor-pointer">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#12473a] whitespace-nowrap">week by week</span>
                </div>
                <button type="button" className="px-[16px] py-[10px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap">stories (44)</span>
                </button>
                <button type="button" className="px-[16px] py-[10px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap">drafts (2)</span>
                </button>
              </div>
            </div>
            <div className="hidden sm:flex gap-[16px] items-center flex-shrink-0">
              <button type="button" className="bg-white cursor-pointer flex gap-[10px] h-[40px] items-center justify-center px-[16px] rounded-[24px] hover:opacity-70 transition-opacity">
                <div className="overflow-clip relative size-[24px] flex-shrink-0">
                  <div className="absolute inset-[12.5%]"><div className="absolute inset-[-4.17%]"><img alt="" className="block max-w-none size-full" src={imgReorderIcon} /></div></div>
                </div>
                <span className="font-['GT_America:Medium'] leading-[20px] text-[16px] text-[color:var(--teal\/800,#068089)] tracking-[1.6px] uppercase whitespace-nowrap">reorder</span>
              </button>
              <button type="button" aria-label="Search" className="border-2 border-[#068089] size-[40px] flex items-center justify-center rounded-full cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <circle cx="10.5" cy="10.5" r="6.5" stroke="#068089" strokeWidth="1.5"/>
                  <path d="M15.5 15.5L20.5 20.5" stroke="#068089" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <button type="button" className="border-2 border-[#068089] flex gap-[10px] h-[40px] items-center justify-center pl-[10px] pr-[24px] rounded-[24px] cursor-pointer hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="flex-shrink-0">
                  <circle cx="12" cy="12" r="9" stroke="#068089" strokeWidth="1.5"/>
                  <path d="M12 8v8M8 12h8" stroke="#068089" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="font-['GT_America:Medium'] leading-[20px] text-[16px] text-[#068089] tracking-[1.6px] uppercase whitespace-nowrap">new story</span>
              </button>
            </div>
          </div>

          <MilestoneTimeline variant="end" />
        </div>
      </div>

      {/* ── Story list ── */}
      <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-[80px]">
        {pageWeeks.map((week, i) => (
          <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }}>
            {week.story ? (
              <StoryRow story={week.story} />
            ) : (
              <div className="border-b border-[#d1d1d1] py-4 sm:py-[24px] px-0 sm:px-[16px] flex items-center justify-between gap-4 cursor-pointer hover:bg-[#f7f7f7] transition-all">
                <p className="font-['GT_Super_Display:Medium'] leading-[26px] sm:leading-[34px] text-[15px] sm:text-[20px] text-[color:var(--green\/1000,#042a21)] tracking-[-0.2px] flex-1 min-w-0">
                  {week.question}
                </p>
                <span className="flex-shrink-0 font-['GT_America:Regular'] text-[14px] sm:text-[16px] text-[#61706f] whitespace-nowrap">Unanswered</span>
              </div>
            )}
          </div>
        ))}

        {/* Pagination */}
        <div className="flex gap-[24px] items-center justify-center py-[32px]">
          <button type="button" disabled={currentPage === 1}
            onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); tabBarSentinelRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) }}
            className={`relative size-[40px] flex-none bg-white border-2 border-[#068089] rounded-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] flex items-center justify-center transition-opacity ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
            aria-label="Previous page">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M10 3L5.5 8L10 13" stroke="#068089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="flex gap-[10px] items-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button key={n} type="button"
                onClick={() => { setCurrentPage(n); tabBarSentinelRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) }}
                className={`flex items-center justify-center rounded-[12px] size-[40px] cursor-pointer transition-colors ${n === currentPage ? 'bg-[#edf2f0]' : 'hover:bg-[#f7f7f7]'}`}>
                <span className="font-['GT_America:Regular'] text-[18px] leading-[28px] text-[#042a21] text-center">{n}</span>
              </button>
            ))}
            <span className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#445f59] whitespace-nowrap">
              {(currentPage - 1) * WEEKS_PER_PAGE + 1}–{Math.min(currentPage * WEEKS_PER_PAGE, optionCEndWeeks.length)} of {optionCEndWeeks.length}
            </span>
          </div>
          <button type="button" disabled={currentPage === totalPages}
            onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); tabBarSentinelRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) }}
            className={`relative size-[40px] flex-none bg-white border-2 border-[#068089] rounded-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] flex items-center justify-center transition-opacity ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
            aria-label="Next page">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M6 3L10.5 8L6 13" stroke="#068089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

    </div>
  )
}

// ─── Option A: Week-by-week tab panel ───────────────────────────────────────

function WeekByWeekPanel({
  isNewUser,
  currentPage, setCurrentPage,
  pendingScrollWeek, setPendingScrollWeek,
}: {
  isNewUser: boolean
  currentPage: number
  setCurrentPage: (p: number | ((prev: number) => number)) => void
  pendingScrollWeek: number | null
  setPendingScrollWeek: (w: number | null) => void
}) {
  const thisWeekRef = useRef<HTMLDivElement>(null)
  const weekRowRefs = useRef<(HTMLDivElement | null)[]>([])
  const panelTopRef = useRef<HTMLDivElement>(null)
  const [thisWeekQuestion, setThisWeekQuestion] = useState(thisWeekQuestionPool[0])

  const totalPages = Math.ceil(optionCWeeks.length / WEEKS_PER_PAGE)
  const pageWeeks = optionCWeeks.slice((currentPage - 1) * WEEKS_PER_PAGE, currentPage * WEEKS_PER_PAGE)
  const pageWeeksRef = useRef(pageWeeks)
  pageWeeksRef.current = pageWeeks

  useEffect(() => {
    if (pendingScrollWeek === null) return
    const idx = pageWeeks.findIndex(w => w.weekNum === pendingScrollWeek)
    if (idx >= 0) weekRowRefs.current[idx]?.scrollIntoView({ block: 'center', behavior: 'smooth' })
    setPendingScrollWeek(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingScrollWeek])

  function shuffleQuestion() {
    const others = thisWeekQuestionPool.filter(q => q !== thisWeekQuestion)
    setThisWeekQuestion(others[Math.floor(Math.random() * others.length)])
  }

  function snapToTop() {
    panelTopRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' })
  }

  return (
    <div>
      <div ref={panelTopRef} className="h-0" aria-hidden />

      {/* Week rows */}
      <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10">
        {pageWeeks.flatMap((week, i) => {
          const row = (() => {
          // This-week card (mid-sub only)
          if (week.isThisWeek && !isNewUser) {
            return (
              <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }} className="py-[72px] flex flex-col gap-[24px] items-center">
                <div ref={thisWeekRef} className="bg-white border border-[#288068] rounded-[12px] drop-shadow-[0px_4px_15px_rgba(68,95,89,0.06)] px-[24px] py-[36px] flex items-center justify-between gap-[16px] w-full cursor-pointer hover:bg-[#f0f7f4] hover:-translate-y-1 transition-all">
                  <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                    <div className="flex gap-[12px] items-center">
                      <div className="bg-[#d8e8e3] px-[12px] py-[2px] rounded-[6px] flex-shrink-0">
                        <span className="font-['GT_America:Regular'] text-[20px] leading-[28px] text-[#117459] whitespace-nowrap">Week {week.weekNum}</span>
                      </div>
                      <span className="font-['GT_America:Regular'] text-[20px] leading-[28px] text-[#61706f] whitespace-nowrap">This week {week.asker} asked:</span>
                    </div>
                    <p className="font-['GT_Super_Display:Medium'] text-[24px] leading-[34px] tracking-[-0.24px] text-[#042a21] m-0 max-w-[600px]">{thisWeekQuestion}</p>
                  </div>
                  <button type="button" className="flex-none bg-[#288068] h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-90 transition-opacity">
                    <span className="font-['GT_America:Medium'] text-[16px] text-white leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">tell my story</span>
                  </button>
                </div>
                <p className="font-['GT_America:Regular'] text-[14px] leading-[20px] text-[#61706f] m-0 text-center">
                  Not feeling it?{' '}
                  <button type="button" onClick={shuffleQuestion} className="underline [text-decoration-skip-ink:none] cursor-pointer hover:opacity-70 transition-opacity">Pick a new one</button>
                  {' '}or{' '}
                  <button type="button" onClick={shuffleQuestion} className="underline [text-decoration-skip-ink:none] cursor-pointer hover:opacity-70 transition-opacity">shuffle this question</button>
                </p>
              </div>
            )
          }

          // Upcoming rows (and all rows for new user)
          if (week.isUpcoming || isNewUser || (week.isThisWeek && isNewUser)) {
            return (
              <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }}
                className={`${isNewUser && week.weekNum === 3 ? '' : 'border-b border-[#ebebeb] '}py-[24px] flex items-center justify-between gap-[24px] group transition-all cursor-pointer hover:bg-[#f7f7f7]`}>
                <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                  <p className="font-['GT_America:Regular'] text-[14px] lg:text-[16px] leading-[28px] text-[#61706f] m-0">
                    Week {week.weekNum} · Asked by {week.asker ?? 'Storyworth'}
                  </p>
                  <p className="font-['GT_Super_Display:Medium'] text-[18px] lg:text-[20px] leading-[34px] tracking-[-0.2px] text-[#042a21] m-0">{week.question}</p>
                </div>
                <button type="button" className="invisible group-hover:visible flex-none border-2 border-[#07777e] h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] text-[#07777e] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">answer</span>
                </button>
              </div>
            )
          }

          // Story rows (mid-sub weeks 1-3)
          const story = week.story!
          const isLastBeforeThisWeek = pageWeeks[i + 1]?.isThisWeek
          return (
            <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }}
              className={`${isLastBeforeThisWeek ? '' : 'border-b border-[#ebebeb] '}py-[24px] flex items-start justify-between gap-[24px] cursor-pointer hover:bg-[#f7f7f7] transition-all`}>
              <div className="flex flex-col gap-[12px] flex-1 min-w-0 max-w-[600px]">
                <p className="font-['GT_America:Regular'] text-[14px] lg:text-[16px] leading-[28px] text-[#61706f] m-0">Week {week.weekNum}</p>
                <p className="font-['GT_Super_Display:Medium'] text-[18px] lg:text-[20px] leading-[34px] tracking-[-0.2px] text-[#042a21] m-0">{story.question}</p>
                <div className="flex gap-[24px] items-start">
                  {story.photos.length > 0 && (
                    <div className="border-2 border-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] w-[60px] h-[77px] relative flex-shrink-0">
                      <img alt="" className="absolute inset-0 size-full object-cover" src={story.photos[0]} />
                    </div>
                  )}
                  <p className="font-['GT_Super_Text:Book'] text-[16px] lg:text-[18px] leading-[28px] text-[#445f59] m-0 flex-1 min-w-0">{story.excerpt}</p>
                </div>
                {story.reactions.length > 0 && (
                  <div className="flex gap-[8px] items-center">
                    {story.reactions.map((r, ri) => (
                      <div key={ri} className="flex gap-[8px] items-center">
                        <div className="relative size-[24px] flex-shrink-0">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={r.icon} />
                        </div>
                        <span className="font-['GT_America:Regular'] text-[16px] text-[#07777e]">{r.count}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex-none pt-[40px]">
                <ReaderAvatars readers={story.readers} />
              </div>
            </div>
          )
        })()
          if (isNewUser && week.weekNum === 3) {
            return [row, (
              <div key="phone-banner" className="py-[32px]">
                <div className="bg-[#e8f3f8] border-2 border-[#b1d8ea] rounded-[8px] px-[24px] py-[16px] flex items-center justify-between gap-[16px] cursor-pointer hover:opacity-90 transition-opacity">
                  <div className="flex gap-[10px] items-center flex-1 min-w-0 flex-wrap">
                    <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] text-[#12473a] whitespace-nowrap">📱 Want to get your weekly questions by text?</span>
                    <span className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#445f59] whitespace-nowrap">Add your phone number so you never miss a week!</span>
                  </div>
                  <div className="relative size-[24px] flex-shrink-0">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhoneBannerArrow} />
                  </div>
                </div>
              </div>
            )]
          }
          return [row]
        })}
      </div>

      {/* Pagination */}
      <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex gap-[24px] items-center justify-center py-[32px]">
          <button type="button" disabled={currentPage === 1}
            onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); snapToTop() }}
            className={`relative size-[40px] flex-none bg-white border-2 border-[#068089] rounded-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] flex items-center justify-center transition-opacity ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
            aria-label="Previous page">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M10 3L5.5 8L10 13" stroke="#068089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex gap-[10px] items-center">
            {Array.from({ length: totalPages }, (_, j) => j + 1).map(n => (
              <button key={n} type="button"
                onClick={() => { setCurrentPage(n); snapToTop() }}
                className={`flex items-center justify-center rounded-[12px] size-[40px] cursor-pointer transition-colors ${n === currentPage ? 'bg-[#edf2f0]' : 'hover:bg-[#f7f7f7]'}`}>
                <span className="font-['GT_America:Regular'] text-[18px] leading-[28px] text-[#042a21] text-center">{n}</span>
              </button>
            ))}
            <span className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#445f59] whitespace-nowrap">
              {(currentPage - 1) * WEEKS_PER_PAGE + 1}–{Math.min(currentPage * WEEKS_PER_PAGE, optionCWeeks.length)} of {optionCWeeks.length}
            </span>
          </div>
          <button type="button" disabled={currentPage === totalPages}
            onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); snapToTop() }}
            className={`relative size-[40px] flex-none bg-white border-2 border-[#068089] rounded-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] flex items-center justify-center transition-opacity ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'}`}
            aria-label="Next page">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M6 3L10.5 8L6 13" stroke="#068089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Main Page ──────────────────────────────────────────────────────────────

export default function MemoirPage() {
  const [scenario, setScenario] = useState('a-new')
  const [activeTab, setActiveTab] = useState<Tab>('week-by-week')
  const [showReorderModal, setShowReorderModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pendingScrollWeek, setPendingScrollWeek] = useState<number | null>(null)

  useEffect(() => {
    setCurrentPage(1)
    setPendingScrollWeek(null)
  }, [scenario])

  const isOptionB = scenario.startsWith('b-')
  const isOptionC = scenario.startsWith('c-')
  const isAEnd = scenario === 'a-end'
  const isNewUser = scenario === 'a-new' || scenario === 'b-new'

  const tabs: { key: Tab; label: string }[] = [
    { key: 'week-by-week', label: 'Week by week' },
    { key: 'stories', label: 'Stories' },
    { key: 'drafts', label: 'Drafts' },
  ]

  return (
    <div className="bg-white min-h-screen">
      <Navbar scenario={scenario} onScenarioChange={setScenario} />

      {scenario === 'c-new' ? <OptionCNew /> : scenario === 'c-month4' ? <OptionCMidSub /> : scenario === 'c-end' ? <OptionCEnd /> : scenario === 'a-end' ? <OptionAEnd /> : null}

      {!isOptionC && !isAEnd && (isOptionB ? (
        <>
          {/* Option B: this-week question in tan hero, book/title below on white */}
          <section className={`bg-[#f8f4f1] relative flex flex-col justify-center${isNewUser ? ' min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-105px)]' : ' min-h-[calc(80vh-70px)] md:min-h-[calc(80vh-105px)]'}`}>
            <div className={`w-full max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-[74px] pb-8 sm:pb-[60px]${isNewUser ? ' -mt-[60px]' : ''}`}>
              {isNewUser ? <WelcomeCard /> : <ThisWeekSection />}
            </div>
            {isNewUser && (
              <div className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none">
                <div className="flex flex-col items-center gap-[6px] text-[#61706f]" style={{ animation: 'gentle-bounce 2.4s ease-in-out infinite' }}>
                  <span className="font-['GT_America:Regular'] text-[13px]">Explore my memoir</span>
                  <div className="relative size-[24px] -rotate-90">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} style={{ filter: 'grayscale(1) opacity(0.65)' }} />
                  </div>
                </div>
              </div>
            )}
          </section>
          <section>
            <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-[50px] pb-8 sm:pb-[50px]">
              <HeroContent variant="b" scenarioId={scenario} />
            </div>
            <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 pt-[4px]">
              <div className="h-px bg-[#d1d1d1]" />
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Option A variants: book/title in tan hero, card half-overlapping below */}
          <section className="bg-[#f8f4f1]">
            <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-[50px] pb-8 sm:pb-[138px]">
              <HeroContent scenarioId={scenario} />
            </div>
          </section>
          <div className={`max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 ${isNewUser ? 'sm:-mt-[62px]' : 'sm:-mt-[78px]'} pb-[20px]`}>
            {isNewUser ? <WelcomeCard /> : <ThisWeekSection />}
          </div>
        </>
      ))}

      {!isOptionC && !isAEnd && <>{/* Progress message */}
      <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 pt-[68px] pb-[2px] flex flex-col gap-[16px]">
        <h2 className="font-['GT_Super_Display:Regular'] leading-[36px] text-[32px] text-[color:var(--green\/1000,#042a21)] tracking-[-0.32px] m-0">
          My memoir
        </h2>
        {isNewUser && (
          <p className="font-['GT_Super_Text:Book'] leading-[28px] text-[18px] text-[#445f59] max-w-[748px]">
            You can write, record and reply by email—your stories will appear here as you go.
          </p>
        )}
      </div>

      {/* Sticky tab bar — full-width so bg covers edge-to-edge */}
      <div className="sticky top-0 z-20 bg-white">
        <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 pt-[22px] pb-[24px]">
          <div className="flex items-center justify-between gap-4">

            {/* Pill tab switcher */}
            <div className="bg-[#f3f3f3] flex items-center p-[4px] rounded-[25px] overflow-x-auto flex-shrink-0">
              <div className="flex items-center min-w-max">
                {tabs.map(({ key, label }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveTab(key)}
                    className={[
                      "cursor-pointer px-[16px] py-[10px] rounded-[22px] whitespace-nowrap font-['GT_America:Medium'] text-[13px] md:text-[16px] tracking-[1.6px] uppercase transition-colors duration-200",
                      activeTab === key
                        ? 'bg-white text-[color:var(--green\/900,#12473a)]'
                        : 'text-[#61706f] hover:text-[color:var(--green\/900,#12473a)]',
                    ].join(' ')}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="hidden sm:flex gap-[16px] items-center flex-shrink-0">
              <button
                type="button"
                className="bg-white cursor-pointer flex gap-[10px] h-[40px] items-center justify-center px-[16px] rounded-[24px] hover:opacity-70 transition-opacity"
                onClick={() => setShowReorderModal(true)}
              >
                <div className="overflow-clip relative size-[24px] flex-shrink-0">
                  <div className="absolute inset-[12.5%]">
                    <div className="absolute inset-[-4.17%]">
                      <img alt="" className="block max-w-none size-full" src={imgReorderIcon} />
                    </div>
                  </div>
                </div>
                <span className="font-['GT_America:Medium'] leading-[20px] text-[16px] text-[color:var(--teal\/800,#068089)] tracking-[1.6px] uppercase whitespace-nowrap">
                  reorder
                </span>
              </button>
              <button type="button" aria-label="Search" className="border-2 border-[#068089] size-[40px] flex items-center justify-center rounded-full cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <circle cx="10.5" cy="10.5" r="6.5" stroke="#068089" strokeWidth="1.5"/>
                  <path d="M15.5 15.5L20.5 20.5" stroke="#068089" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <button
                type="button"
                className="border-2 border-[#068089] flex gap-[10px] h-[40px] items-center justify-center pl-[10px] pr-[24px] rounded-[24px] cursor-pointer hover:opacity-70 transition-opacity"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="flex-shrink-0">
                  <circle cx="12" cy="12" r="9" stroke="#068089" strokeWidth="1.5"/>
                  <path d="M12 8v8M8 12h8" stroke="#068089" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="font-['GT_America:Medium'] leading-[20px] text-[16px] text-[#068089] tracking-[1.6px] uppercase whitespace-nowrap">
                  new story
                </span>
              </button>
            </div>

          </div>

          <MilestoneTimeline variant={isNewUser ? 'new' : 'mid'} />
        </div>
      </div>

      {/* Tab content */}
      {activeTab === 'week-by-week' ? (
        <WeekByWeekPanel
          isNewUser={isNewUser}
          currentPage={currentPage} setCurrentPage={setCurrentPage}
          pendingScrollWeek={pendingScrollWeek} setPendingScrollWeek={setPendingScrollWeek}
        />
      ) : activeTab === 'stories' ? (
        <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-[80px] mt-4 sm:mt-0">
          {isNewUser ? (
            <div className="flex flex-col items-center justify-center py-[24px] px-[16px]">
              <div className="flex flex-col gap-[24px] items-center text-center max-w-[600px] py-[40px]">
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['GT_Super_Display:Medium'] leading-[34px] text-[20px] text-[color:var(--green\/1000,#042a21)] tracking-[-0.2px]">No stories yet.</p>
                  <p className="font-['GT_Super_Text:Book'] leading-[28px] text-[18px] text-[#445f59]">
                    Curious to see what's coming?<br />Explore your upcoming questions, or create your own.
                  </p>
                </div>
                <button type="button" onClick={() => setActiveTab('week-by-week')} className="bg-white border-2 border-[#068089] cursor-pointer flex h-[40px] items-center justify-center px-[32px] rounded-[24px] hover:opacity-80 transition-opacity">
                  <span className="font-['GT_America:Medium'] leading-[20px] text-[16px] text-[#068089] tracking-[1.6px] uppercase whitespace-nowrap">explore upcoming questions</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full">
              {stories.map((story) => (
                <StoryRow key={story.id} story={story} />
              ))}
            </div>
          )}
        </div>
      ) : null}
      </>}

      {showReorderModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setShowReorderModal(false)}
        >
          <div
            className="bg-white rounded-[16px] shadow-[0px_16px_48px_rgba(0,0,0,0.18)] max-w-[560px] w-full mx-4 p-[40px] flex flex-col gap-[24px]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-['GT_Super_Display:Regular'] text-[28px] leading-[36px] tracking-[-0.28px] text-[color:var(--green\/1000,#042a21)] m-0">
              Reorder Chapters
            </h2>
            <div className="font-['GT_Super_Text:Book'] text-[18px] leading-[28px] text-[#445f59] flex flex-col gap-[16px]">
              <p className="m-0">Hi! This UI isn't done yet but a few notes —</p>
              <ol className="m-0 pl-[20px] flex flex-col gap-[12px]">
                <li>
                  I'd advocate we move dragging and dropping here for 2 reasons:
                  <ol className="mt-[8px] pl-[20px] flex flex-col gap-[8px]" style={{ listStyleType: 'lower-alpha' }}>
                    <li>The "portfolio" we display on the memoir page should be stable, static and secure. I'd move any option other than "open" away from that page.</li>
                    <li>We also want to create a space to move stories to another volume. This is that space.</li>
                  </ol>
                </li>
                <li>As a bonus, nest other edit options like deleting a story here.</li>
              </ol>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-[#068089] cursor-pointer flex h-[40px] items-center justify-center px-[24px] rounded-[24px] hover:opacity-90 transition-opacity"
                onClick={() => setShowReorderModal(false)}
              >
                <span className="font-['GT_America:Medium'] text-[14px] text-white tracking-[1.4px] uppercase">
                  Got it
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
