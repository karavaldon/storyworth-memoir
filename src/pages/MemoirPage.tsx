import React, { useState, useRef, useEffect, useLayoutEffect, useMemo, Fragment } from 'react'
import confetti from 'canvas-confetti'

// Local assets
import logoHorizontal from '../../assets/logo/storyworth-logo-horizontal.svg'
import imgPolygon1 from '../../assets/icons/chevron.svg'
import imgReorderIcon from '../../assets/icons/reorder.svg'
import imgFilterHorizontalIcon from '../../assets/icons/filter-horizontal.svg'
import imgEditCoverIcon from '../../assets/icons/book.svg'
import imgMenuIcon from '../../assets/icons/menu.svg'
import imgChevronDown from '../../assets/icons/chevron-down.svg'
import imgNewStoryIcon from '../../assets/icons/new-story.svg'
import imgPencilIcon from '../../assets/icons/pencil.svg'
import imgEditPencilIcon from '../../assets/icons/edit-pencil.svg'
import imgReplaceIcon from '../../assets/icons/replace.svg'
import imgTrashIcon from '../../assets/icons/trash.svg'
import imgPreviewBookIcon from '../../assets/icons/open-book.svg'
import imgHeart from '../../assets/icons/heart.svg'
import imgChat from '../../assets/icons/comment.svg'
import imgVoice from '../../assets/icons/voice.svg'
import imgStoryPhoto1 from '../../assets/photos/photo1.jpg'
import imgStoryPhoto2 from '../../assets/photos/photo2.jpg'
import imgStoryPhoto3 from '../../assets/photos/photo3.jpg'
import imgStoryPhoto4 from '../../assets/photos/photo4.jpg'
import imgArrowLeft from '../../assets/icons/left-arrow.svg'
import imgArrowRight from '../../assets/icons/right-arrow.svg'
import imgClouds from '../../assets/coulds.svg'
import imgMilestoneBadge from '../../assets/icons/milestone-badge.svg'
import imgMilestoneBadge2 from '../../assets/icons/milestone-badge-2.svg'
import imgMilestoneBadge3 from '../../assets/icons/milestone-badge-3.svg'
import imgMilestoneBadge4 from '../../assets/icons/milestone-badge-4.svg'
import imgMilestoneBadge5 from '../../assets/icons/milestone-badge-5.svg'
import imgMilestoneCircleUnearned from '../../assets/icons/milestone-circle-unearned.png'
import imgScrollArrow from '../../assets/arrow.svg'
import imgManageQuestionsIcon from '../../assets/icons/manage-questions.svg'
import imgReadersIcon from '../../assets/icons/readers.svg'
const imgPhoneBannerArrow = imgArrowRight

// Figma asset URLs — need permanent replacements (photos, illustrations, gift icon, pencil, waving hand)
const imgPhoto1 = "https://www.figma.com/api/mcp/asset/5f979193-4b47-472c-8d48-c8edeb0f8ea8";
const img3 = "https://www.figma.com/api/mcp/asset/6be8cd1e-69a3-4b27-95eb-52e7e61bb4e4";
const imgPhoto2 = "https://www.figma.com/api/mcp/asset/5c281eb9-409b-4314-b508-b165a1b4956c";
const imgPhoto3 = "https://www.figma.com/api/mcp/asset/60fe0288-8fbd-455e-9116-318ab6ca1ca2";
const imgPhoto4 = "https://www.figma.com/api/mcp/asset/3aa2ff32-cc23-46f6-9144-470537a0c127";
const imgPhoto5 = "https://www.figma.com/api/mcp/asset/c7081c74-1d13-40ec-b82b-c0a443280742";
import imgBookIlloA from '../../assets/book-cover.png'
import imgPrintBookCover from '../../assets/print-book-cover-new.png'
import imgPrintBookOpen from '../../assets/print-book-open-new.jpg'
const imgBookIlloB = imgBookIlloA
const imgPhoto6 = "https://www.figma.com/api/mcp/asset/b4d5ff05-4330-4455-8b33-929b1064931c";
const imgPhoto7 = "https://www.figma.com/api/mcp/asset/a11e0c40-e463-40c8-8776-f0ae31452d32";
const imgPhoto8 = "https://www.figma.com/api/mcp/asset/10ae6512-65f9-45fe-86eb-5962e1181b9a";
const imgWavingHandA = "https://www.figma.com/api/mcp/asset/60e78d47-c6b4-4807-a91f-663aa168a5f1";

import imgV2ExploreQ     from '../../assets/milestone v2/questions.svg'
import imgV2AddStory     from '../../assets/milestone v2/first-story.svg'
import imgV2AddReader    from '../../assets/milestone v2/reader.svg'
import imgV2MagicQ       from '../../assets/milestone v2/magic-qs.svg'
import imgV2RecordPhone  from '../../assets/milestone v2/record.svg'
import imgV2Podcast      from '../../assets/milestone v2/podcast.svg'
import imgV2Unearned     from '../../assets/milestone v2/unearned.svg'
import imgMiniGreen  from '../../assets/milestone v2/mini-green.svg'
import imgMiniBlue   from '../../assets/milestone v2/mini-blue.svg'
import imgMiniTan    from '../../assets/milestone v2/mini-tan.svg'
import imgMiniRed    from '../../assets/milestone v2/mini-red.svg'

// ─── Sub-components ────────────────────────────────────────────────────────


// ─── Dev tools ───────────────────────────────────────────────────────────────

const devScenarios: { label: string; id: string; implemented: boolean; hidden?: boolean }[] = [
  { label: 'Option A.1 — New user',              id: 'a1-new',                     implemented: true  },
  { label: 'Option A.1 — First question',        id: 'a1-first-question',          implemented: true  },
  { label: 'Option A.1 — First q. answered',     id: 'a1-first-question-answered', implemented: true  },
  { label: 'Option A.1 — 5 answered',            id: 'a1-five-answered',           implemented: true  },
  { label: 'Option A.1 — Milestones v2',          id: 'a1-five-answered-v2',         implemented: true  },
  { label: 'Option A.1 — Unengaged (2 mo.)',     id: 'a1-unengaged',               implemented: true  },
  { label: 'Option A.1 — Near end (avg.)',        id: 'a1-near-end',                implemented: true  },
  { label: 'Option A.1 — Sub. ended',            id: 'a1-sub-ended',               implemented: true  },
  { label: 'Option A.1 — Sub. ended, low content', id: 'a1-sub-ended-low',         implemented: true  },
  { label: 'Option A.1 — Mid sub',         id: 'a1-month4',         implemented: true, hidden: true },
  { label: 'Option A — New user',   id: 'a-new',     implemented: true,  hidden: true },
  { label: 'Option A — Mid sub',    id: 'a-month4',  implemented: true,  hidden: true },
  { label: 'Option A — End',        id: 'a-end',     implemented: true,  hidden: true },
  { label: 'Option B — New user',   id: 'b-new',     implemented: true,  hidden: true },
  { label: 'Option B — Mid sub',    id: 'b-month4',  implemented: true,  hidden: true },
  { label: 'Option B — Month 10',   id: 'b-month10', implemented: false, hidden: true },
  { label: 'Option C — New user',   id: 'c-new',     implemented: true,  hidden: true },
  { label: 'Option C — Mid sub',    id: 'c-month4',  implemented: true,  hidden: true },
  { label: 'Option C — End',        id: 'c-end',     implemented: true,  hidden: true },
]

function DevToolsMenu({ onClose, scenario, onSelect }: { onClose: () => void; scenario: string; onSelect: (id: string) => void }) {
  const aScenarios = devScenarios.filter(s => s.id.startsWith('a') && !s.hidden)
  const cScenarios = devScenarios.filter(s => s.id.startsWith('c-') && !s.hidden)

  function ScenarioBtn({ s }: { s: typeof devScenarios[0] }) {
    const isCurrent = s.id === scenario
    const label = s.label.replace(/^Option \S+ — /, '')
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
      <div className={`grid ${cScenarios.length > 0 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        <div className={cScenarios.length > 0 ? 'border-r border-[#333]' : ''}>
          <div className="px-[12px] py-[8px] border-b border-[#2a2a2a]">
            <span className="font-mono text-[11px] text-[#888] uppercase tracking-[1.5px] font-semibold">Option A</span>
          </div>
          {aScenarios.map(s => <ScenarioBtn key={s.id} s={s} />)}
        </div>
        {cScenarios.length > 0 && (
          <div>
            <div className="px-[12px] py-[8px] border-b border-[#2a2a2a]">
              <span className="font-mono text-[11px] text-[#888] uppercase tracking-[1.5px] font-semibold">Option C</span>
            </div>
            {cScenarios.map(s => <ScenarioBtn key={s.id} s={s} />)}
          </div>
        )}
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
              <img alt="Storyworth" className="absolute inset-0 w-full h-full object-contain object-left" src={logoHorizontal} />
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
          {/* Avatar + name */}
          <button type="button" className="flex gap-2 items-center">
            <div className="flex-shrink-0 size-11 rounded-full bg-[#c5d8d2] flex items-center justify-center">
              <span className="font-['GT_America:Medium'] text-[13px] leading-none text-[#12473a] tracking-[1.4px] uppercase">BL</span>
            </div>
            <span className="hidden md:inline font-['GT_America:Medium'] text-[#15372f] text-[16px] tracking-[1.6px] uppercase whitespace-nowrap">
              brian l.
            </span>
            <div className="hidden md:block h-[9px] w-[14px] relative">
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

function HoverBook() {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="relative cursor-pointer h-[234px] w-[304px] flex-shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`absolute inset-0 transition-transform duration-300 ${hovered ? 'scale-[1.08]' : 'scale-100'}`}>
        <img alt="Your memoir book" className="absolute block inset-0 max-w-none size-full object-contain" src={imgBookIlloA} />
      </div>
      <div className={`absolute inset-0 flex flex-col items-center justify-center gap-[8px] transition-opacity duration-200 ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button type="button" className="relative h-[40px] w-[180px] group/btn">
          <div className="absolute bg-white group-hover/btn:bg-[#e6f4f4] border-2 border-[#068089] inset-0 rounded-[24px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] transition-colors duration-150" />
          <div className="relative z-10 flex gap-[8px] items-center justify-center h-full">
            <div className="size-[20px] relative flex-shrink-0"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEditCoverIcon} /></div>
            <span className="font-['GT_America:Medium'] text-[#07777e] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">Edit Cover</span>
          </div>
        </button>
        <button type="button" className="relative h-[40px] w-[180px] group/btn2">
          <div className="absolute bg-white group-hover/btn2:bg-[#e6f4f4] border-2 border-[#068089] inset-0 rounded-[24px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] transition-colors duration-150" />
          <div className="relative z-10 flex gap-[8px] items-center justify-center h-full">
            <div className="size-[20px] relative flex-shrink-0"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPreviewBookIcon} /></div>
            <span className="font-['GT_America:Medium'] text-[#07777e] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">Preview Book</span>
          </div>
        </button>
      </div>
    </div>
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
      <div className={`h-[194px] w-[164px] relative flex-shrink-0 transition-transform duration-300 ${hovered ? 'scale-[1.08]' : 'scale-100'}`}>
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
    <div className="flex gap-[16px] items-center">
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
        <div className="flex-none">
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
    <div className="flex flex-col gap-[16px] items-center w-full">
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

function WelcomeCard({ variant = 'a' }: { variant?: 'a' | 'a1' }) {
  return (
    <div className="bg-[#d7e9e4] border-2 border-[#a4c1b9] rounded-[8px] px-[24px] py-[16px] flex gap-[22px] items-center justify-center drop-shadow-[0px_4px_10px_rgba(6,128,137,0.06)] w-full">
      <img alt="" className="flex-shrink-0 w-[87px] h-[82px] object-cover pointer-events-none" src={imgWavingHandA} />
      <div className="flex flex-col gap-[10px] items-center text-center">
        {variant === 'a1' ? (
          <>
            <p className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#12473a] m-0">
              Hi, Brian! Welcome to Storyworth —{' '}
              <span className="font-['GT_America:Medium']">an easy way to write and record your life story over the next year.</span>
            </p>
            <p className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#445f59] m-0">
              Each week we'll send a question. Explore them below!
            </p>
          </>
        ) : (
          <>
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
          </>
        )}
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
            className="cursor-pointer font-['GT_America:Medium'] leading-[20px] text-[14px] text-[#61706f] tracking-[1.4px] uppercase whitespace-nowrap px-[6px] py-[16px] w-full text-left transition-colors hover:bg-[#f5f5f5]"
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
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPreviewBookIcon} />
          </div>
          <span className="font-['GT_America:Medium'] text-[#07777e] text-[16px] tracking-[1.6px] uppercase whitespace-nowrap">
            My memoir
          </span>
        </div>
        <div className="h-[9px] w-[14px] relative flex-shrink-0">
          <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
            <img alt="" className="block max-w-none size-full" src={imgPolygon1} />
          </div>
        </div>
      </button>
      {open && <DropdownMenu onClose={() => setOpen(false)} />}
    </div>
  )
}

type Tab = 'week-by-week' | 'stories' | 'drafts' | 'upcoming' | 'unanswered'

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
const PURPLE_GRADIENT = 'linear-gradient(89.88deg, rgb(109, 55, 134) 34.53%, rgb(190, 129, 219) 145.06%)'
const RED_MAGENTA_GRADIENT = 'linear-gradient(89.88deg, rgb(149, 21, 23) 34.53%, rgb(217, 24, 175) 145.06%)'


type MilestoneItem = { label: string; earned?: boolean; link?: string; earnedLink?: string; subtext?: string; earnedSubtext?: string; countTarget?: number; badgeSrc?: string }

const MILESTONE_LIST: MilestoneItem[] = [
  { label: 'Explore questions', earned: true, link: 'Keep exploring →' },
  { label: 'Add your first story', link: 'Tell a story →', earnedLink: 'Keep telling stories →', badgeSrc: imgMilestoneBadge2 },
  { label: 'Explore Magic Questions', link: 'Make personalized questions →' },
  { label: 'Record over the phone', subtext: 'Open any new story to record', badgeSrc: imgMilestoneBadge3 },
  { label: 'Add a photo', subtext: 'Open any story to upload photos', badgeSrc: imgMilestoneBadge5 },
  { label: 'Share as a podcast', link: 'Publish your podcast →' },
  { label: 'Add 5 stories', subtext: '1 of 5 written', earnedSubtext: '5 of 5 written', countTarget: 5, badgeSrc: imgMilestoneBadge4 },
  { label: 'Add 10 stories', subtext: '1 of 10 written', earnedSubtext: '10 of 10 written', countTarget: 10 },
  { label: 'Add 20 stories', subtext: '1 of 20 written', earnedSubtext: '20 of 20 written', countTarget: 20 },
  { label: 'Design your cover', link: 'Open cover editor →' },
  { label: 'Preview your book', link: 'Open book preview →' },
  { label: 'Print your book', link: 'Print →' },
]

function MilestoneModalRow({ label, earned, link, earnedLink, subtext, earnedSubtext, countTarget, badgeSrc, storyCount }: MilestoneItem & { storyCount?: number }) {
  const [hovered, setHovered] = useState(false)
  const activeBadgeSrc = earned ? (badgeSrc ?? imgMilestoneBadge) : imgMilestoneCircleUnearned
  const activeLink = earned && earnedLink ? earnedLink : link

  return (
    <div
      className={`flex gap-[12px] items-center p-[8px] rounded-[4px] w-full shrink-0 ${activeLink ? 'cursor-pointer' : 'cursor-default'}`}
      style={{ background: hovered ? '#f5f5f5' : 'transparent' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative shrink-0 size-[38px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={activeBadgeSrc} />
        <span className="absolute text-[16px] leading-none"
          style={{ top: '8px', left: '50%', transform: 'translateX(-50%)', opacity: earned ? 1 : 0.5 }}>⛰️</span>
      </div>

      {/* Fixed-height text container — row height never changes */}
      <div className="relative overflow-hidden min-w-0 flex-1" style={{ height: '38px' }}>
        {/* Label row — centered at rest (top:10px), slides up on hover (top:0) */}
        <div
          className="absolute left-0 right-0 flex items-center gap-[8px] transition-[top] duration-[180ms] ease-out"
          style={{ top: hovered ? '0px' : '10px' }}
        >
          <p className={`font-['GT_America:${earned ? 'Medium' : 'Regular'}'] text-[14px] leading-[18px] text-[#042a21] whitespace-nowrap`}>
            {label}
          </p>
          {earned && (
            <div className="bg-[#D6ECF5] flex items-center px-[5px] py-[2px] rounded-[2px] shrink-0 ml-auto">
              <p className="font-['GT_America:Regular'] text-[12px] leading-none text-[#068089]">Reached</p>
            </div>
          )}
        </div>

        {/* Subtitle / link — always at top:20px, fades in on hover */}
        {(activeLink || subtext) && (
          <p
            className={`absolute left-0 right-0 font-['GT_America:Regular'] text-[14px] leading-[18px] transition-opacity duration-[180ms] ${activeLink ? 'text-[#07777e] underline [text-decoration-skip-ink:none] [text-underline-position:from-font]' : 'text-[#4c4c4c]'}`}
            style={{ top: '20px', opacity: hovered ? 1 : 0 }}
          >
            {(earned && earnedSubtext) ? earnedSubtext : (!earned && countTarget && storyCount) ? `${storyCount} of ${countTarget} written` : (activeLink ?? subtext)}
          </p>
        )}
      </div>
    </div>
  )
}

const MENU_ITEMS = [
  { icon: imgEditCoverIcon,       label: 'Edit book cover'   },
  { icon: imgPreviewBookIcon,     label: 'Preview book'      },
  { icon: imgManageQuestionsIcon, label: 'Manage questions'  },
  { icon: imgReadersIcon,         label: 'Manage readers'    },
]

function SubEndedLowPrintModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40" onMouseDown={onClose}>
      <div
        className="bg-white rounded-[16px] p-[32px] flex flex-col gap-[24px] w-full max-w-[480px] mx-[24px]"
        style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.18)' }}
        onMouseDown={e => e.stopPropagation()}
      >
        <div className="flex flex-col gap-[12px]">
          <p className="font-['GT_Super_Display:Regular'] text-[24px] leading-[32px] tracking-[-0.24px] text-[#042a21] m-0">You only need 12 more pages to print your book!</p>
          <p className="font-['GT_America:Regular'] text-[16px] leading-[24px] text-[#61706f] m-0">The minimum book length is 25 pages. Add a few more stories or photos to reach the minimum so we can get your book on your shelf!</p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <button type="button"
            className="w-full h-[48px] rounded-[24px] flex items-center justify-center cursor-pointer bg-[#068089] hover:opacity-80 transition-opacity"
            onClick={onClose}
          >
            <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-white whitespace-nowrap">Answer questions</span>
          </button>
          <button type="button"
            className="group w-full h-[48px] rounded-[24px] flex items-center justify-center cursor-pointer border-2 border-[#d1d1d1] hover:border-[#042a21] transition-colors"
            onClick={onClose}
          >
            <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] group-hover:text-[#042a21] whitespace-nowrap transition-colors duration-150">Preview my book</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function SubEndedNewStoryModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40" onMouseDown={onClose}>
      <div
        className="bg-white rounded-[16px] p-[32px] flex flex-col gap-[24px] w-full max-w-[480px] mx-[24px]"
        style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.18)' }}
        onMouseDown={e => e.stopPropagation()}
      >
        <div className="flex flex-col gap-[12px]">
          <p className="font-['GT_Super_Display:Regular'] text-[24px] leading-[32px] tracking-[-0.24px] text-[#042a21] m-0">Heads up, your subscription has ended.</p>
          <p className="font-['GT_America:Regular'] text-[16px] leading-[24px] text-[#61706f] m-0">We're offering 3 more months to edit your stories and print your book. Please renew your subscription if you'd like to continue to receive weekly questions.</p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <button type="button"
            className="w-full h-[48px] rounded-[24px] flex items-center justify-center cursor-pointer bg-[#068089] hover:opacity-80 transition-opacity"
            onClick={onClose}
          >
            <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-white whitespace-nowrap">Renew</span>
          </button>
          <button type="button"
            className="group w-full h-[48px] rounded-[24px] flex items-center justify-center cursor-pointer border-2 border-[#d1d1d1] hover:border-[#042a21] transition-colors"
            onClick={onClose}
          >
            <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] group-hover:text-[#042a21] whitespace-nowrap transition-colors duration-150">Add a new story</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function MenuModal({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handleMouseDown)
    return () => document.removeEventListener('mousedown', handleMouseDown)
  }, [onClose])

  return (
    <div ref={ref}
      className="absolute left-0 z-50 bg-white border border-[#d1d1d1] rounded-[8px] p-[16px] flex flex-col"
      style={{ top: 'calc(100% + 8px)', width: '312px', boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }}>
      {MENU_ITEMS.map(({ icon, label }, i) => (
        <div key={label}>
          {i > 0 && <div className="h-px bg-[#d1d1d1]" />}
          <button
            type="button"
            className="flex gap-[10px] items-center px-[6px] py-[16px] w-full cursor-pointer text-left transition-colors hover:bg-[#f5f5f5]"
          >
            <img alt="" className="size-[24px] flex-shrink-0" src={icon} style={{ filter: 'grayscale(1)' }} />
            <span className="font-['GT_America:Medium'] text-[14px] leading-[20px] text-[#61706f] tracking-[1.4px] uppercase whitespace-nowrap">
              {label}
            </span>
          </button>
        </div>
      ))}
    </div>
  )
}

function getQuestionSendDate(questionIndex: number): string {
  const base = new Date(2026, 5, 3) // June 3, 2026 — Q1 send date
  const d = new Date(base)
  d.setDate(base.getDate() + questionIndex * 7)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const day = d.getDate()
  const suffix = day === 1 || day === 21 || day === 31 ? 'st' : day === 2 || day === 22 ? 'nd' : day === 3 || day === 23 ? 'rd' : 'th'
  return `Monday, ${months[d.getMonth()]} ${day}${suffix}`
}

type ReorderItem = { id: number; q: string; status: 'answered' | 'draft' | 'asked' | 'this-week' | 'future'; preview?: string }

function ReorderModal({ onClose, initialItems, initialFilter }: { onClose: () => void; initialItems: ReorderItem[]; initialFilter?: { answered: boolean; unanswered: boolean; upcoming: boolean; drafts: boolean } }) {
  const [items, setItems] = useState(initialItems)
  const [dragIdx, setDragIdx] = useState<number | null>(null)
  const [dropTargetIdx, setDropTargetIdx] = useState<number | null>(null)
  const [pendingItems, setPendingItems] = useState<ReorderItem[] | null>(null)
  const [selectMode, setSelectMode] = useState(false)
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set())
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingValue, setEditingValue] = useState('')
  const [justMovedId, setJustMovedId] = useState<number | null>(null)
  const [pendingMovedId, setPendingMovedId] = useState<number | null>(null)
  const [filterReorder, setFilterReorder] = useState({ answered: initialFilter?.answered ?? false, draft: initialFilter?.drafts ?? false, unanswered: initialFilter?.unanswered ?? false, upcoming: initialFilter?.upcoming ?? false })
  const [showReorderFilterMenu, setShowReorderFilterMenu] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<number, HTMLDivElement | null>>({})
  const scrollRef = useRef<HTMLDivElement>(null)
  const autoScrollRAF = useRef<number | null>(null)
  const scrollSpeed = useRef(0)

  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handleMouseDown)
    return () => document.removeEventListener('mousedown', handleMouseDown)
  }, [onClose])

  function getReordered(from: number, to: number) {
    const next = [...items]
    const [moved] = next.splice(from, 1)
    next.splice(to, 0, moved)
    return next
  }

  function startAutoScroll() {
    function tick() {
      const el = scrollRef.current
      if (el && scrollSpeed.current !== 0) {
        el.scrollTop += scrollSpeed.current
        autoScrollRAF.current = requestAnimationFrame(tick)
      } else {
        autoScrollRAF.current = null
      }
    }
    if (!autoScrollRAF.current) autoScrollRAF.current = requestAnimationFrame(tick)
  }

  function stopAutoScroll() {
    if (autoScrollRAF.current) { cancelAnimationFrame(autoScrollRAF.current); autoScrollRAF.current = null }
    scrollSpeed.current = 0
  }

  function handleListDragOver(e: React.DragEvent<HTMLDivElement>) {
    const el = scrollRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const EDGE = 80
    const MAX_SPEED = 12
    const y = e.clientY - rect.top
    const draggedStatus = dragIdx !== null ? displayItems[dragIdx]?.status : null
    const canScrollDown = draggedStatus !== 'answered' && draggedStatus !== 'asked'
    if (y < EDGE) {
      scrollSpeed.current = -MAX_SPEED * (1 - y / EDGE)
      startAutoScroll()
    } else if (canScrollDown && y > rect.height - EDGE) {
      scrollSpeed.current = MAX_SPEED * (1 - (rect.height - y) / EDGE)
      startAutoScroll()
    } else {
      stopAutoScroll()
    }
  }

  function moveToChapter(itemId: number, targetChapter: number) {
    const answeredInOrder = items.filter(it => it.status === 'answered')
    if (targetChapter < 1 || targetChapter > answeredInOrder.length) return
    const fromIdx = items.findIndex(it => it.id === itemId)
    const targetItem = answeredInOrder[targetChapter - 1]
    if (targetItem.id === itemId) return
    const toIdx = items.findIndex(it => it.id === targetItem.id)
    setItems(getReordered(fromIdx, toIdx))
    setJustMovedId(itemId)
  }

  useEffect(() => {
    if (justMovedId === null) return
    const el = itemRefs.current[justMovedId]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    const t = setTimeout(() => setJustMovedId(null), 1200)
    return () => clearTimeout(t)
  }, [justMovedId])

  useEffect(() => {
    if (pendingMovedId === null) return
    const el = itemRefs.current[pendingMovedId]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [pendingMovedId])

  function handleDrop(e: React.DragEvent, targetIdx: number) {
    e.preventDefault()
    if (dragIdx === null || dragIdx === targetIdx) { setDragIdx(null); setDropTargetIdx(null); return }
    const draggedStatus = displayItems[dragIdx]?.status
    const targetStatus = displayItems[targetIdx]?.status
    if ((draggedStatus === 'answered' || draggedStatus === 'asked') && (targetStatus === 'future' || targetStatus === 'this-week')) {
      setDragIdx(null); setDropTargetIdx(null); return
    }
    const next = getReordered(dragIdx, targetIdx)
    const movedId = items[dragIdx].id
    const newPos = next.findIndex(it => it.id === movedId)
    const newThisWeekPos = next.findIndex(it => it.status === 'this-week')
    if (newThisWeekPos >= 0 && newPos < newThisWeekPos && items[dragIdx].status === 'future') {
      setPendingItems(next)
      setPendingMovedId(movedId)
    } else {
      setItems(next)
      setJustMovedId(movedId)
    }
    setDragIdx(null)
    setDropTargetIdx(null)
  }

  const displayItems = pendingItems ?? items

  const moveItem = (idx: number, dir: -1 | 1) => {
    const newIdx = idx + dir
    if (newIdx < 0 || newIdx >= items.length) return
    const current = items[idx]
    const adjacent = items[newIdx]
    if ((current.status === 'answered' || current.status === 'asked' || current.status === 'draft') &&
        (adjacent.status === 'future' || adjacent.status === 'this-week')) return
    const next = [...items]
    next[idx] = adjacent
    next[newIdx] = current
    setItems(next)
    setJustMovedId(current.id)
  }

const chapterNumbers: Record<number, number> = {}
  let chapterCount = 0
  for (const it of displayItems) {
    if (it.status === 'answered') { chapterCount++; chapterNumbers[it.id] = chapterCount }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div ref={ref} className="bg-white rounded-[16px] shadow-[0px_16px_48px_rgba(0,0,0,0.18)] max-w-[760px] w-full mx-4 flex flex-col" style={{ maxHeight: 'calc(100vh - 80px)' }}>
        {/* Header */}
        <div className="px-[32px] pt-[36px] pb-[20px] flex items-start justify-between flex-shrink-0">
          <div>
            <h2 className="font-['GT_Super_Display:Regular'] text-[28px] leading-[36px] tracking-[-0.28px] text-[#042a21] m-0">Reorder</h2>
            <p className="font-['GT_America:Regular'] text-[16px] leading-[24px] text-[#61706f] m-0 mt-[6px] max-w-[620px]">Drag and drop to reorder questions and stories. Only answered questions will be printed in your book.</p>
          </div>
          <button type="button" onClick={onClose} className="flex-shrink-0 ml-[24px] mt-[4px] size-[32px] flex items-center justify-center rounded-full hover:bg-[#f3f3f3] transition-colors cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2l12 12M14 2L2 14" stroke="#61706f" strokeWidth="1.75" strokeLinecap="round"/></svg>
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex-shrink-0 border-t border-[#ebebeb] h-[68px]">
        {dragIdx !== null ? (
          <div className="flex items-center h-full px-[32px]">
            <span className="font-['GT_America:Regular'] text-[14px] text-[#8a9a97]">Drag and drop the row to reorder</span>
          </div>
        ) : (
        <div className="flex items-center justify-between px-[32px] h-full">
          <div className="flex items-center gap-[12px]">
            {/* Filter button */}
            <div className="relative">
              {showReorderFilterMenu && <div className="fixed inset-0 z-40" onClick={() => setShowReorderFilterMenu(false)} />}
              {(() => {
                const reorderFilterOptions = [
                  { key: 'answered' as const, label: 'Answered' },
                  { key: 'draft' as const, label: 'Drafts' },
                  { key: 'unanswered' as const, label: 'Unanswered' },
                  { key: 'upcoming' as const, label: 'Upcoming' },
                ]
                const filterAvail = {
                  answered:  items.some(it => it.status === 'answered'),
                  draft:     items.some(it => it.status === 'draft'),
                  unanswered: items.some(it => it.status === 'asked'),
                  upcoming:  items.some(it => it.status === 'future' || it.status === 'this-week'),
                }
                const filterCount = reorderFilterOptions.filter(f => filterReorder[f.key]).length
                return (
                  <>
                    <button type="button"
                      className="group bg-white border-2 border-[#61706f] hover:border-[#042a21] flex gap-[10px] h-[40px] items-center justify-center pl-[14px] pr-[12px] rounded-[12px] cursor-pointer hover:bg-[#f5f5f5] transition-colors relative z-50"
                      onClick={() => setShowReorderFilterMenu(v => !v)}
                    >
                      <img alt="" className="size-[24px] flex-shrink-0 group-hover:brightness-0 transition-[filter] duration-150" src={imgFilterHorizontalIcon} />
                      <span className="font-['GT_America:Medium'] leading-[20px] text-[14px] text-[#61706f] group-hover:text-[#042a21] tracking-[1.4px] uppercase whitespace-nowrap transition-colors duration-150">
                        Filter{filterCount > 0 ? ` (${filterCount})` : ''}
                      </span>
                      <img alt="" className="size-[18px] flex-shrink-0 group-hover:brightness-0 transition-[filter] duration-150" src={imgChevronDown} />
                    </button>
                    {showReorderFilterMenu && (
                      <div className="absolute left-0 top-[calc(100%+6px)] z-50 bg-white border border-[#d1d1d1] rounded-[12px] p-[16px] flex flex-col gap-[12px] items-start drop-shadow-[0px_4px_3px_rgba(0,0,0,0.12)]">
                        {reorderFilterOptions.map(({ key, label }) => {
                          const on = filterReorder[key]
                          const avail = filterAvail[key]
                          return (
                            <button key={key} type="button"
                              disabled={!avail}
                              onClick={() => avail && setFilterReorder(f => ({ ...f, [key]: !f[key] }))}
                              className={`flex gap-[10px] items-center px-[16px] py-[8px] h-[36px] rounded-[22px] border-2 transition-colors ${!avail ? 'border-[#c0c0c0] cursor-not-allowed opacity-60' : on ? 'bg-[#f0f4f4] hover:bg-[#e6f0f0] border-[#068089] cursor-pointer' : 'border-[#61706f] hover:bg-[#f7f7f7] cursor-pointer'}`}
                            >
                              <span className={`font-['GT_America:Medium'] text-[14px] leading-[20px] whitespace-nowrap ${!avail ? 'text-[#8a8a8a]' : on ? 'text-[#07777e]' : 'text-[#61706f]'}`}>{label}</span>
                              {on && avail && <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0"><path d="M4 10.5l4 4 8-8" stroke="#07777e" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </>
                )
              })()}
            </div>
            <button type="button"
              onClick={() => { setSelectMode(v => !v); setSelectedIds(new Set()) }}
              className="group cursor-pointer flex h-[40px] items-center px-[12px] rounded-[20px] hover:bg-[#efefef] transition-colors">
              <span className={`font-['GT_America:Medium'] leading-[20px] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap transition-colors duration-150 ${selectMode ? 'text-[#068089]' : 'text-[#6b7268] group-hover:text-[#042a21]'}`}>Select</span>
            </button>
          </div>
          <button type="button" className="group cursor-pointer flex gap-[8px] h-[40px] items-center px-[12px] rounded-[20px] hover:bg-[#efefef] transition-colors">
            <img alt="" className="size-[24px] flex-shrink-0 brightness-0 opacity-40 group-hover:opacity-100 transition-[filter,opacity] duration-150" src={imgPreviewBookIcon} />
            <span className="font-['GT_America:Medium'] leading-[20px] text-[14px] text-[#6b7268] group-hover:text-[#042a21] tracking-[1.4px] uppercase whitespace-nowrap transition-colors duration-150">Preview my book</span>
          </button>
        </div>
        )}
        </div>

        {/* List */}
        <div
          ref={scrollRef}
          className="overflow-y-auto flex-1 border-t border-[#ebebeb]"
          onDragOver={handleListDragOver}
          onDragLeave={e => { if (!scrollRef.current?.contains(e.relatedTarget as Node)) stopAutoScroll() }}
        >
          {(() => {
            const lastNonFutureIdx = displayItems.reduce((last, it, idx) => it.status !== 'future' ? idx : last, -1)
            const dividerIdx = lastNonFutureIdx + 1
            const _hasReorderFilter = filterReorder.answered || filterReorder.draft || filterReorder.unanswered || filterReorder.upcoming
            return displayItems.map((item, i) => {
            if (_hasReorderFilter && item.status === 'answered' && !filterReorder.answered) return null
            if (_hasReorderFilter && item.status === 'draft' && !filterReorder.draft) return null
            if (_hasReorderFilter && item.status === 'asked' && !filterReorder.unanswered) return null
            if (_hasReorderFilter && (item.status === 'future' || item.status === 'this-week') && !filterReorder.upcoming) return null
            const isDragging = dragIdx === i
            const isDropTarget = dropTargetIdx === i && dragIdx !== null && dragIdx !== i
            const isFirstFuture = item.status === 'future' && i === dividerIdx
            const isDisplacedFuture = item.status === 'future' && i < dividerIdx
            const isSelected = selectedIds.has(item.id)
            return (
              <Fragment key={item.id}>
                {isFirstFuture && (
                  <div className="sticky top-0 z-10 bg-[#fafafa] px-[32px] py-[16px] border-b border-[#ebebeb]">
                    <p className="font-['GT_America:Medium'] text-[16px] leading-[20px] text-[#8a9a97] uppercase tracking-[1.6px] m-0 whitespace-nowrap">Upcoming questions</p>
                  </div>
                )}
              <div
                ref={el => { itemRefs.current[item.id] = el }}
                draggable={!pendingItems && !selectMode}
                onDragStart={() => { setDragIdx(i) }}
                onDragOver={e => {
                  e.preventDefault()
                  if (i === dragIdx) return
                  const draggedStatus = dragIdx !== null ? displayItems[dragIdx]?.status : null
                  if ((draggedStatus === 'answered' || draggedStatus === 'asked') && (item.status === 'future' || item.status === 'this-week')) return
                  setDropTargetIdx(i)
                }}
                onDrop={e => handleDrop(e, i)}
                onDragEnd={() => { setDragIdx(null); setDropTargetIdx(null); stopAutoScroll() }}
                className={`group flex items-center px-[32px] py-[26px] border-b border-[#ebebeb] transition-colors duration-700 ${isDragging ? 'opacity-40' : ''} ${isDisplacedFuture ? 'bg-[rgba(250,230,188,0.35)]' : justMovedId === item.id ? 'bg-[rgba(6,128,137,0.08)]' : item.status === 'draft' ? 'bg-[#FFFBEB]' : item.status === 'this-week' ? 'bg-[#f0f9ff]' : (item.status === 'future' || item.status === 'asked') ? 'bg-[#fafafa]' : 'bg-white'}`}
                style={{ borderTopColor: isDropTarget ? '#068089' : undefined, borderTopWidth: isDropTarget ? '2px' : undefined }}
              >
                <div className="flex items-center gap-[16px] flex-1 min-w-0">
                  {/* Select checkbox */}
                  {selectMode && (
                    <button type="button"
                      onClick={() => setSelectedIds(prev => { const n = new Set(prev); n.has(item.id) ? n.delete(item.id) : n.add(item.id); return n })}
                      className={`flex-shrink-0 size-[20px] rounded-full border-2 cursor-pointer flex items-center justify-center transition-colors ${isSelected ? 'bg-[#068089] border-[#068089]' : 'border-[#d4d4d4] bg-white hover:border-[#068089]'}`}>
                      {isSelected && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </button>
                  )}
                  {/* Drag handle */}
                  {!pendingItems && !selectMode && (
                    <div className="flex-shrink-0 flex items-center justify-center w-[24px]" style={{ cursor: isDragging ? 'grabbing' : 'grab' }}>
                      <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                        <circle cx="3" cy="4" r="2" fill="#b0bdb9"/>
                        <circle cx="9" cy="4" r="2" fill="#b0bdb9"/>
                        <circle cx="3" cy="10" r="2" fill="#b0bdb9"/>
                        <circle cx="9" cy="10" r="2" fill="#b0bdb9"/>
                        <circle cx="3" cy="16" r="2" fill="#b0bdb9"/>
                        <circle cx="9" cy="16" r="2" fill="#b0bdb9"/>
                      </svg>
                    </div>
                  )}
                  {/* Content */}
                  <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                    {item.status === 'answered' && (
                      <p className="font-['GT_America:Regular'] text-[14px] leading-[20px] text-[#61706f] m-0">Chapter {chapterNumbers[item.id]}</p>
                    )}
                    {item.status === 'draft' && (
                      <p className="font-['GT_America:Regular'] text-[14px] leading-[20px] text-[#61706f] m-0">Draft</p>
                    )}
                    {item.status === 'asked' && (
                      <p className="font-['GT_America:Regular'] text-[14px] leading-[20px] text-[#61706f] m-0">Unanswered</p>
                    )}
                    {item.status === 'this-week' && (
                      <span className="inline-flex self-start bg-[#BDEBFF] text-[#006699] font-['GT_America:Regular'] text-[14px] leading-[20px] rounded-[6px] px-[8px] py-[2px] whitespace-nowrap">This week</span>
                    )}
                    <p className={`font-['GT_Super_Display:Medium'] text-[18px] leading-[26px] tracking-[-0.18px] text-[#042a21] m-0${item.status === 'asked' ? ' opacity-75' : ''}`}>{item.q}</p>
                    {(item.status === 'answered' || item.status === 'draft') && item.preview && (
                      <p className="font-['GT_Super_Text:Book'] text-[16px] leading-[24px] text-[#445f59] m-0">{item.preview.length > 70 ? item.preview.slice(0, 70) + '…"' : item.preview}</p>
                    )}
                    {isDisplacedFuture && pendingItems && (
                      <div className="mt-[4px] flex flex-col gap-[12px]">
                        <p className="font-['GT_America:Regular'] text-[16px] leading-[24px] text-[#ab8017] m-0">
                          This change will move this question out of the upcoming queue and it won't send via email or text. Are you sure you want to reorder it?
                        </p>
                        <div className="flex gap-[12px]">
                          <button type="button" onClick={() => { setPendingItems(null); setPendingMovedId(null) }} className="bg-white border-2 border-[#61706f] flex h-[40px] items-center justify-center px-[24px] rounded-[24px] cursor-pointer transition-colors">
                            <span className="font-['GT_America:Medium'] text-[14px] text-[#61706f] tracking-[1.4px] uppercase">Cancel</span>
                          </button>
                          <button type="button" onClick={() => {
                            const lastNonFuture = pendingItems.reduce((last, it, idx) => it.status !== 'future' ? idx : last, -1)
                            const dIdx = lastNonFuture + 1
                            const updated = pendingItems.map((it, idx) =>
                              it.status === 'future' && idx < dIdx ? { ...it, status: 'asked' as const } : it
                            )
                            setItems(updated)
                            setPendingItems(null)
                            setPendingMovedId(null)
                          }} className="bg-[#068089] flex h-[40px] items-center justify-center px-[24px] rounded-[24px] cursor-pointer hover:opacity-90 transition-opacity">
                            <span className="font-['GT_America:Medium'] text-[14px] text-white tracking-[1.4px] uppercase">Yes, reorder</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {!selectMode && (
                  <div className="flex-shrink-0 flex items-center gap-[16px] pl-[8px]">
                    {item.status === 'answered' && (
                      <div>
                        {editingId === item.id ? (
                          <input
                            type="number" min={1} max={Object.keys(chapterNumbers).length}
                            value={editingValue}
                            onChange={e => setEditingValue(e.target.value)}
                            onKeyDown={e => {
                              if (e.key === 'Enter') { moveToChapter(item.id, parseInt(editingValue)); setEditingId(null) }
                              if (e.key === 'Escape') setEditingId(null)
                            }}
                            onBlur={() => { moveToChapter(item.id, parseInt(editingValue)); setEditingId(null) }}
                            className="w-[44px] font-['GT_America:Regular'] text-[16px] text-[#1ba07c] border-b-2 border-[#1ba07c] bg-transparent outline-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            autoFocus
                          />
                        ) : (
                          <div
                            onClick={() => { setEditingId(item.id); setEditingValue(String(chapterNumbers[item.id])) }}
                            className="relative group/chapternum w-[44px] h-[32px] flex items-center justify-center rounded-[6px] cursor-text border-2 border-[#d4d4d4] hover:border-[#333] bg-transparent transition-colors"
                          >
                            <span className="font-['GT_America:Regular'] text-[16px] text-[#042a21]">{chapterNumbers[item.id]}</span>
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[6px] z-[50] bg-[#042a21] text-white rounded-[4px] px-[8px] py-[3px] text-[11px] leading-[16px] whitespace-nowrap opacity-0 group-hover/chapternum:opacity-100 transition-opacity pointer-events-none font-['GT_America:Medium']">Enter chapter number</span>
                          </div>
                        )}
                      </div>
                    )}
                    {!pendingItems && (
                      <div className="flex flex-col gap-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                        <button type="button" onClick={() => moveItem(i, -1)} className="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] hover:bg-[#efefef] transition-colors cursor-pointer">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 8l4-4 4 4" stroke="#61706f" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                        <button type="button" onClick={() => moveItem(i, 1)} className="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] hover:bg-[#efefef] transition-colors cursor-pointer">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="#61706f" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              </Fragment>
            )
          })}
          )()}
        </div>

        {/* Footer */}
        {selectMode ? (
          <div className="flex-shrink-0 border-t border-[#ebebeb] px-[32px] py-[20px] flex items-center gap-[12px]">
            <button type="button"
              disabled={selectedIds.size === 0}
              onClick={() => { setItems(items.filter(it => !selectedIds.has(it.id))); setSelectedIds(new Set()) }}
              className={`flex h-[40px] items-center justify-center px-[24px] rounded-[24px] border-2 cursor-pointer transition-colors ${selectedIds.size > 0 ? 'border-[#c4234e] text-[#c4234e] hover:bg-[#fff0f3]' : 'border-[#d4d4d4] text-[#b0bdb9] cursor-not-allowed'}`}>
              <span className="font-['GT_America:Medium'] text-[14px] tracking-[1.4px] uppercase">Delete</span>
            </button>
            <button type="button"
              disabled={selectedIds.size === 0}
              className={`flex h-[40px] items-center justify-center px-[24px] rounded-[24px] border-2 cursor-pointer transition-colors ${selectedIds.size > 0 ? 'border-[#d4d4d4] text-[#61706f] hover:border-[#61706f] hover:bg-[#f3f3f3]' : 'border-[#d4d4d4] text-[#b0bdb9] cursor-not-allowed'}`}>
              <span className="font-['GT_America:Medium'] text-[14px] tracking-[1.4px] uppercase">Move to another volume</span>
            </button>
            <span className="ml-auto font-['GT_America:Regular'] text-[14px] text-[#61706f] whitespace-nowrap">{selectedIds.size} selected</span>
            <button type="button"
              onClick={() => { setSelectMode(false); setSelectedIds(new Set()) }}
              className="flex h-[40px] items-center justify-center px-[24px] rounded-[24px] border-2 border-[#61706f] cursor-pointer hover:bg-[#f3f3f3] transition-colors">
              <span className="font-['GT_America:Medium'] text-[14px] text-[#61706f] tracking-[1.4px] uppercase">Cancel</span>
            </button>
          </div>
        ) : (
          <div className="flex-shrink-0 border-t border-[#ebebeb] px-[40px] py-[24px] flex justify-end">
            <button type="button" onClick={onClose} className="bg-[#068089] flex h-[40px] items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-90 transition-opacity">
              <span className="font-['GT_America:Medium'] text-[16px] text-white tracking-[1.4px] uppercase">Done</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function QuestionButtonBank({ horizontal }: { horizontal?: boolean } = {}) {
  if (horizontal) {
    return (
      <div className="flex gap-[4px] items-center overflow-hidden group-hover:overflow-visible max-w-0 group-hover:max-w-[120px] opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0 mt-[3px]">
        <div className="relative group/edit flex-shrink-0">
          <button type="button" className="size-[32px] flex items-center justify-center rounded-full cursor-pointer hover:ring-2 hover:ring-[#07777e] transition-all flex-shrink-0">
            <img alt="Edit question" className="size-[18px]" src={imgEditPencilIcon} />
          </button>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[6px] z-[50] bg-[#042a21] text-white rounded-[4px] px-[8px] py-[3px] text-[11px] leading-[16px] whitespace-nowrap opacity-0 group-hover/edit:opacity-100 transition-opacity pointer-events-none font-['GT_America:Medium']">Edit question</span>
        </div>
        <div className="relative group/replace flex-shrink-0">
          <button type="button" className="size-[32px] flex items-center justify-center rounded-full cursor-pointer hover:ring-2 hover:ring-[#07777e] transition-all flex-shrink-0">
            <img alt="Replace" className="size-[20px]" src={imgReplaceIcon} />
          </button>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[6px] z-[50] bg-[#042a21] text-white rounded-[4px] px-[8px] py-[3px] text-[11px] leading-[16px] whitespace-nowrap opacity-0 group-hover/replace:opacity-100 transition-opacity pointer-events-none font-['GT_America:Medium']">Replace</span>
        </div>
        <div className="relative group/remove flex-shrink-0">
          <button type="button" className="size-[32px] flex items-center justify-center rounded-full cursor-pointer hover:ring-2 hover:ring-[#07777e] transition-all flex-shrink-0">
            <img alt="Remove" className="size-[18px]" src={imgTrashIcon} />
          </button>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[6px] z-[50] bg-[#042a21] text-white rounded-[4px] px-[8px] py-[3px] text-[11px] leading-[16px] whitespace-nowrap opacity-0 group-hover/remove:opacity-100 transition-opacity pointer-events-none font-['GT_America:Medium']">Remove</span>
        </div>
      </div>
    )
  }
  return (
    <div className="flex gap-[12px] items-center overflow-hidden max-h-0 opacity-0 group-hover:max-h-[60px] group-hover:opacity-100 transition-all duration-200">
      <button type="button" className="bg-[#ededed] border-2 border-transparent flex gap-[10px] h-[40px] items-center justify-center px-[16px] rounded-[24px] cursor-pointer hover:border-[#07777e] transition-colors flex-shrink-0">
        <img alt="" className="size-[22px] flex-shrink-0" src={imgPencilIcon} />
        <span className="font-['GT_America:Medium'] text-[16px] text-[#07777e] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Edit question</span>
      </button>
      <button type="button" className="bg-[#ededed] border-2 border-transparent flex gap-[10px] h-[40px] items-center justify-center px-[16px] rounded-[24px] cursor-pointer hover:border-[#07777e] transition-colors flex-shrink-0">
        <img alt="" className="size-[24px] flex-shrink-0" src={imgReplaceIcon} />
        <span className="font-['GT_America:Medium'] text-[16px] text-[#07777e] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Replace</span>
      </button>
      <button type="button" className="bg-[#ededed] border-2 border-transparent size-[40px] flex items-center justify-center rounded-full cursor-pointer hover:border-[#07777e] transition-colors flex-shrink-0">
        <img alt="" className="size-[22px]" src={imgTrashIcon} />
      </button>
    </div>
  )
}

function MenuButton() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        type="button"
        className="group bg-white border-2 border-[#61706f] hover:border-[#042a21] flex gap-[10px] h-[40px] items-center justify-center pl-[22px] pr-[18px] rounded-[12px] cursor-pointer hover:bg-[#f5f5f5] transition-colors"
        onClick={() => setOpen(v => !v)}
      >
        <span className="font-['GT_America:Medium'] leading-[20px] text-[14px] text-[#61706f] group-hover:text-[#042a21] tracking-[1.4px] uppercase whitespace-nowrap transition-colors duration-150">menu</span>
        <img alt="" className="size-[18px] flex-shrink-0 group-hover:brightness-0 transition-[filter] duration-150" src={imgChevronDown} />
      </button>
      {open && <MenuModal onClose={() => setOpen(false)} />}
    </div>
  )
}

function MilestonesModal({ onClose, earnedCount = 1, storyCount, subscriptionPercent = 1, subscriptionEnded = false, renewCopy }: { onClose: () => void; earnedCount?: number; storyCount?: number; subscriptionPercent?: number; subscriptionEnded?: boolean; renewCopy?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handleMouseDown)
    return () => document.removeEventListener('mousedown', handleMouseDown)
  }, [onClose])

  return (
    <div ref={ref}
      className="absolute right-0 z-50 bg-white rounded-[12px] overflow-hidden"
      style={{ top: 'calc(100% + 8px)', width: '340px', boxShadow: '0 4px 24px rgba(0,0,0,0.14)' }}>
      <div className={`p-[24px] ${subscriptionEnded ? '' : 'pb-[80px]'} flex flex-col overflow-y-auto`} style={{ maxHeight: 'calc(100vh - 100px)' }}>
        <div>
          <p className="font-['GT_America:Medium'] text-[14px] leading-[18px] text-[#042a21] m-0 mb-[12px]">One-year subscription</p>
          <div className="relative h-[8px] w-full rounded-full overflow-hidden bg-[#f7f7f7] border border-[#eaeaea] mb-[8px]">
            <div className="absolute top-0 left-0 h-full rounded-full"
              style={{ width: subscriptionEnded ? '100%' : `${subscriptionPercent}%`, backgroundImage: subscriptionEnded ? 'none' : MILESTONE_GRADIENT, backgroundColor: subscriptionEnded ? '#d9705f' : undefined }} />
          </div>
          <div className="flex items-center justify-between">
            {subscriptionEnded ? (
              <span className="font-['GT_America:Regular'] text-[14px] leading-[20px] text-[#61706f]">Ended May 12, 2026</span>
            ) : (
              <>
                <span className="font-['GT_America:Regular'] text-[14px] leading-[20px] text-[#61706f]">{subscriptionPercent}%</span>
                <span className="font-['GT_America:Regular'] text-[14px] leading-[20px] text-[#61706f]">Ends May 16, 2027</span>
              </>
            )}
          </div>
          {subscriptionEnded && (
            <div className="mt-[16px] flex flex-col gap-[16px]">
              <p className="font-['GT_America:Regular'] text-[16px] leading-[24px] text-[#61706f] m-0">
                {renewCopy ?? 'You have 3 more months to edit your existing stories. If you\'d like to receive weekly questions or add new stories, you can renew.'}
              </p>
              <button type="button" className="w-full flex items-center justify-center h-[40px] px-[24px] rounded-[24px] bg-[#068089] cursor-pointer hover:opacity-80 transition-opacity">
                <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] text-white tracking-[1.6px] uppercase whitespace-nowrap">Renew for $99</span>
              </button>
            </div>
          )}
        </div>
        {!subscriptionEnded && (
          <>
            <div className="h-px bg-[#e8e8e8] my-[12px]" />
            <div className="flex flex-col gap-[6px]">
              {MILESTONE_LIST.map((m, i) => <MilestoneModalRow key={i} {...m} earned={i < earnedCount ? true : m.earned} storyCount={storyCount} />)}
            </div>
          </>
        )}
      </div>
      {!subscriptionEnded && <div className="absolute bottom-0 inset-x-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(to top, white 30%, transparent)' }} />}
    </div>
  )
}

type V2MilestoneItem = { label: string; earned?: boolean; link?: string; earnedLink?: string }

const MILESTONE_LIST_V2: V2MilestoneItem[] = [
  { label: 'Explore questions',       earned: true, link: 'Keep exploring →' },
  { label: 'Add your first story',    earned: true, earnedLink: 'Keep telling stories →' },
  { label: 'Add a reader',            earned: true },
  { label: 'Explore magic questions', earned: true },
  { label: 'Record over the phone',   earned: true },
  { label: 'Add a photo' },
  { label: 'Add 5 stories' },
  { label: 'Add 10 stories' },
  { label: 'Add 20 stories' },
  { label: 'Start your podcast',      earned: true },
  { label: 'Design your cover' },
  { label: 'Preview your book' },
  { label: 'Print your book' },
]

function V2IllustrationCard({ label, earned }: { label: string; earned?: boolean }) {
  // Each SVG is self-contained (background + illustration). Base sizes scaled 20% from originals.
  // Reader (44px) and Podcast (38px) are wider than the standard 36px card.
  // Reader cheats its extra 8px into the left row padding via negative marginLeft.
  // Podcast absorbs its extra 2px via negative marginRight, shrinking the gap to the text.
  if (!earned) return <img alt="" src={imgV2Unearned} width={36} height={48} className="shrink-0 block" />
  const cards: Record<string, { src: string; w: number; style?: React.CSSProperties }> = {
    'Explore questions':       { src: imgV2ExploreQ,    w: 36 },
    'Add your first story':    { src: imgV2AddStory,    w: 36 },
    'Add a reader':            { src: imgV2AddReader,   w: 44, style: { marginLeft: '-8px' } },
    'Explore magic questions': { src: imgV2MagicQ,      w: 36 },
    'Record over the phone':   { src: imgV2RecordPhone, w: 36 },
    'Start your podcast':      { src: imgV2Podcast,     w: 38, style: { marginRight: '-2px' } },
  }
  const card = cards[label]
  if (!card) return <img alt="" src={imgV2Unearned} width={36} height={48} className="shrink-0 block" />
  return <img alt="" src={card.src} width={card.w} height={48} className="shrink-0 block" style={card.style} />
}

function MilestoneModalRowV2({ label, earned, link, earnedLink }: V2MilestoneItem) {
  const [hovered, setHovered] = useState(false)
  const activeLink = earned && earnedLink ? earnedLink : link
  return (
    <div
      className={`flex gap-[12px] items-center p-[8px] rounded-[4px] w-full shrink-0 ${activeLink ? 'cursor-pointer' : 'cursor-default'}`}
      style={{ background: hovered ? '#f5f5f5' : 'transparent' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <V2IllustrationCard label={label} earned={earned} />
      <div className="flex flex-col gap-[4px] justify-center min-w-0 flex-1">
        <p className={`font-['GT_America:${earned ? 'Medium' : 'Regular'}'] text-[14px] leading-[18px] text-[#042a21] whitespace-nowrap`}>
          {label}
        </p>
        {earned && (
          <div className="relative h-[16px]">
            <div className="absolute inset-0 flex items-center transition-opacity duration-[180ms]"
              style={{ opacity: hovered && activeLink ? 0 : 1 }}>
              <div className="bg-[#D6ECF5] inline-flex items-center px-[5px] py-[2px] rounded-[2px]">
                <p className="font-['GT_America:Regular'] text-[12px] leading-none text-[#068089]">Reached</p>
              </div>
            </div>
            {activeLink && (
              <p className="absolute inset-0 flex items-center font-['GT_America:Regular'] text-[14px] leading-[16px] text-[#07777e] underline [text-decoration-skip-ink:none] [text-underline-position:from-font] whitespace-nowrap transition-opacity duration-[180ms]"
                style={{ opacity: hovered ? 1 : 0 }}>
                {activeLink}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function MilestonesModalV2({ onClose, subscriptionPercent = 5 }: { onClose: () => void; subscriptionPercent?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handleMouseDown)
    return () => document.removeEventListener('mousedown', handleMouseDown)
  }, [onClose])
  return (
    <div ref={ref}
      className="absolute right-0 z-50 bg-white rounded-[12px] overflow-hidden"
      style={{ top: 'calc(100% + 8px)', width: '600px', boxShadow: '0 4px 24px rgba(0,0,0,0.14)' }}>
      <div className="p-[24px] flex flex-col overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
        <div>
          <p className="font-['GT_America:Medium'] text-[14px] leading-[18px] text-[#042a21] m-0 mb-[12px]">One-year subscription</p>
          <div className="relative h-[8px] w-full rounded-full overflow-hidden bg-[#f7f7f7] border border-[#eaeaea] mb-[8px]">
            <div className="absolute top-0 left-0 h-full rounded-full"
              style={{ width: `${subscriptionPercent}%`, backgroundImage: MILESTONE_GRADIENT }} />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-['GT_America:Regular'] text-[14px] leading-[20px] text-[#61706f]">11 months to go</span>
            <span className="font-['GT_America:Regular'] text-[14px] leading-[20px] text-[#61706f]">Ends May 16, 2027</span>
          </div>
        </div>
        <div className="w-full border-t border-[#e8e8e8] my-[26px]" />
        <div className="flex gap-[16px]">
          <div className="flex flex-col gap-[6px] flex-1">
            {MILESTONE_LIST_V2.slice(0, 7).map((m, i) => <MilestoneModalRowV2 key={i} {...m} />)}
          </div>
          <div className="flex flex-col gap-[6px] flex-1">
            {MILESTONE_LIST_V2.slice(7).map((m, i) => <MilestoneModalRowV2 key={i} {...m} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

function PurpleBarFill({ gradient = PURPLE_GRADIENT }: { gradient?: string }) {
  const [w, setW] = useState(0)
  useEffect(() => {
    const id = requestAnimationFrame(() => setW(0.263))
    return () => cancelAnimationFrame(id)
  }, [])
  return (
    <div className="absolute top-0 left-0 h-full rounded-full overflow-hidden"
      style={{ width: `${w * 100}%`, transition: 'width 0.5s ease-out' }}>
      <div className="absolute top-0 left-0 h-full w-full" style={{ backgroundImage: gradient }} />
    </div>
  )
}

function MilestoneTimeline({ variant, fillOverride, animate, milestoneText, weekLabel, showTimeline2, milestoneCount, storyCount, nextMilestoneText, nextMilestoneHoverText, showBarFill = true, showBar = true, highlightButton = false, milestoneButtonRef, badgeHopDelay = 0, subscriptionPercent = 1, milestoneModalV2 = false, subscriptionEnded = false, renewCopy }: {
  variant: 'new' | 'mid' | 'end' | 'explore'
  fillOverride?: number[]
  animate?: boolean
  milestoneText?: string
  weekLabel?: string
  showTimeline2?: boolean
  milestoneCount?: number
  storyCount?: number
  showBarFill?: boolean
  showBar?: boolean
  nextMilestoneText?: string
  nextMilestoneHoverText?: string
  highlightButton?: boolean
  milestoneButtonRef?: React.RefObject<HTMLButtonElement | null>
  badgeHopDelay?: number
  subscriptionPercent?: number
  milestoneModalV2?: boolean
  subscriptionEnded?: boolean
  renewCopy?: string
}) {
  const [showMilestonesModal, setShowMilestonesModal] = useState(false)
  if (variant === 'explore') {
    const tealFill = fillOverride?.[0] ?? 0.263
    const barGradient = (milestoneCount ?? 1) >= 2 ? RED_MAGENTA_GRADIENT : PURPLE_GRADIENT
    return (
      <div className="relative z-[10] flex gap-[16px] items-center w-full cursor-pointer min-h-[40px]">
        <style>{`@keyframes milestone-in { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } } @keyframes badge-hop-spin { 0% { transform:translateY(0); } 40% { transform:translateY(-10px); } 70% { transform:translateY(2px); } 100% { transform:translateY(0); } } @keyframes milestone-glow { 0% { box-shadow:0 0 0 0 rgba(6,128,137,0); } 40% { box-shadow:0 0 0 5px rgba(6,128,137,0.55); } 100% { box-shadow:0 0 0 3px rgba(6,128,137,0.25); } }`}</style>
        {showBar && <div className="relative flex-none w-[146px]">
          <div className="relative h-[20px] w-full rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-[#f7f7f7] border border-[#eaeaea] rounded-full" />
            {/* Teal fill — disappears instantly when timeline2 mounts */}
            {!showTimeline2 && tealFill > 0 && (
              <div className="absolute top-0 left-0 h-full rounded-full overflow-hidden"
                style={{ width: `${tealFill * 100}%`, transition: animate ? 'width 0.6s ease-out' : 'none' }}>
                <div className="absolute top-0 left-0 h-full w-full" style={{ backgroundImage: MILESTONE_GRADIENT }} />
              </div>
            )}
            {showTimeline2 && showBarFill && <PurpleBarFill key={barGradient} gradient={barGradient} />}
          </div>
        </div>}
        <div className={`relative flex flex-1 items-center gap-4 ${!showBar && !showTimeline2 ? 'justify-center' : 'justify-between'}`}>
          <p className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#4c4c4c]"
            style={showTimeline2 ? { animation: 'milestone-in 0.4s ease-out both' } : undefined}>
            {subscriptionEnded ? (
              <span className="flex flex-wrap items-baseline gap-x-[6px]">
                <span className="whitespace-nowrap">Need more time?</span>
                <button type="button" className="font-['GT_America:Medium'] cursor-pointer underline text-[#068089] transition-colors">Renew your subscription</button>
              </span>
            ) : showTimeline2 ? (
              <span className="flex flex-wrap items-baseline gap-x-[6px]"><span className="whitespace-nowrap">⛰️ Your next milestone:</span>
                <button type="button" className="font-['GT_America:Medium'] cursor-pointer underline text-[#068089] transition-colors group/next">
                  <span className={nextMilestoneHoverText ? 'group-hover:hidden' : ''}>
                    {nextMilestoneText ?? 'Add your first story'}<span className="opacity-0 group-hover/next:opacity-100 group-hover:opacity-100 transition-opacity"> →</span>
                  </span>
                  {nextMilestoneHoverText && (
                    <span className="hidden group-hover:inline">{nextMilestoneHoverText} →</span>
                  )}
                </button>
              </span>
            ) : (
              <>⛰️ Your first milestone: <span className="font-['GT_America:Medium']">Scroll to explore your memoir questions</span></>
            )}
          </p>
          {(showTimeline2 || subscriptionEnded) && (
            <div className="relative flex-shrink-0" style={{ animation: 'milestone-in 0.4s ease-out both' }}>
              <button type="button" ref={milestoneButtonRef}
                className={`flex gap-[8px] items-center h-[40px] px-[14px] rounded-[20px] border-2 transition-colors cursor-pointer group/milestone ${highlightButton ? 'bg-[#D6ECF5] border-[#068089]' : 'hover:bg-white border-transparent hover:border-[#61706f]'}`}
                onMouseDown={e => e.stopPropagation()}
                onClick={e => { e.stopPropagation(); setShowMilestonesModal(v => !v) }}>
                {subscriptionEnded ? (
                  <>
                    <span className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#4c4c4c] whitespace-nowrap">My subscription (ended)</span>
                    <img alt="" className="size-[18px] block flex-shrink-0" src={imgChevronDown} />
                  </>
                ) : (<>
                <span className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#4c4c4c] whitespace-nowrap">
                  You've reached
                </span>
                {(milestoneCount ?? 1) >= 5 ? (
                  milestoneModalV2 ? (
                    <div className="relative flex-shrink-0 mx-[-4px]" style={{ width: '141px', height: '55px' }}>
                      {[imgMiniGreen, imgMiniBlue, imgMiniTan, imgMiniGreen, imgMiniRed, imgMiniBlue].map((src, i) => (
                        <div key={i} className="absolute top-[2px]" style={{ left: `${i * 18}px`, animation: `badge-hop-spin 0.6s ease-in-out ${0.4 + badgeHopDelay + i * 0.1}s both` }}>
                          <img alt="" src={src} width={51} height={55} className="block" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative flex-shrink-0" style={{ width: '64px', height: '24px' }}>
                      <div className="absolute left-0 top-0 size-[24px]"
                        style={{ animation: `badge-hop-spin 0.6s ease-in-out ${0.4 + badgeHopDelay}s both` }}>
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMilestoneBadge} />
                        <span className="absolute text-[12px] leading-none text-center whitespace-nowrap"
                          style={{ top: '3.91px', left: '50%', transform: 'translateX(-50%)' }}>⛰️</span>
                      </div>
                      <div className="absolute left-[10px] top-0 size-[24px]"
                        style={{ animation: `badge-hop-spin 0.6s ease-in-out ${0.55 + badgeHopDelay}s both` }}>
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMilestoneBadge2} />
                        <span className="absolute text-[12px] leading-none text-center whitespace-nowrap"
                          style={{ top: '3.91px', left: '50%', transform: 'translateX(-50%)' }}>⛰️</span>
                      </div>
                      <div className="absolute left-[20px] top-0 size-[24px]"
                        style={{ animation: `badge-hop-spin 0.6s ease-in-out ${0.7 + badgeHopDelay}s both` }}>
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMilestoneBadge3} />
                        <span className="absolute text-[12px] leading-none text-center whitespace-nowrap"
                          style={{ top: '3.91px', left: '50%', transform: 'translateX(-50%)' }}>⛰️</span>
                      </div>
                      <div className="absolute left-[30px] top-0 size-[24px]"
                        style={{ animation: `badge-hop-spin 0.6s ease-in-out ${0.85 + badgeHopDelay}s both` }}>
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMilestoneBadge5} />
                        <span className="absolute text-[12px] leading-none text-center whitespace-nowrap"
                          style={{ top: '3.91px', left: '50%', transform: 'translateX(-50%)' }}>⛰️</span>
                      </div>
                      <div className="absolute left-[40px] top-0 size-[24px]"
                        style={{ animation: `badge-hop-spin 0.6s ease-in-out ${1.0 + badgeHopDelay}s both` }}>
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMilestoneBadge4} />
                        <span className="absolute text-[12px] leading-none text-center whitespace-nowrap"
                          style={{ top: '3.91px', left: '50%', transform: 'translateX(-50%)' }}>⛰️</span>
                      </div>
                    </div>
                  )
                ) : (milestoneCount ?? 1) >= 3 ? (
                  <div className="relative flex-shrink-0" style={{ width: '44px', height: '24px' }}>
                    <div className="absolute left-0 top-0 size-[24px]"
                      style={{ animation: `badge-hop-spin 0.6s ease-in-out ${0.4 + badgeHopDelay}s both` }}>
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMilestoneBadge} />
                      <span className="absolute text-[12px] leading-none text-center whitespace-nowrap"
                        style={{ top: '3.91px', left: '50%', transform: 'translateX(-50%)' }}>⛰️</span>
                    </div>
                    <div className="absolute left-[10px] top-0 size-[24px]"
                      style={{ animation: `badge-hop-spin 0.6s ease-in-out ${0.55 + badgeHopDelay}s both` }}>
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMilestoneBadge2} />
                      <span className="absolute text-[12px] leading-none text-center whitespace-nowrap"
                        style={{ top: '3.91px', left: '50%', transform: 'translateX(-50%)' }}>⛰️</span>
                    </div>
                    <div className="absolute left-[20px] top-0 size-[24px]"
                      style={{ animation: `badge-hop-spin 0.6s ease-in-out ${0.7 + badgeHopDelay}s both` }}>
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMilestoneBadge3} />
                      <span className="absolute text-[12px] leading-none text-center whitespace-nowrap"
                        style={{ top: '3.91px', left: '50%', transform: 'translateX(-50%)' }}>⛰️</span>
                    </div>
                  </div>
                ) : (milestoneCount ?? 1) >= 2 ? (
                  <div className="relative flex-shrink-0" style={{ width: '34px', height: '24px' }}>
                    <div className="absolute left-0 top-0 size-[24px]"
                      style={{ animation: `badge-hop-spin 0.6s ease-in-out ${0.4 + badgeHopDelay}s both` }}>
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMilestoneBadge} />
                      <span className="absolute text-[12px] leading-none text-center whitespace-nowrap"
                        style={{ top: '3.91px', left: '50%', transform: 'translateX(-50%)' }}>⛰️</span>
                    </div>
                    <div className="absolute left-[10px] top-0 size-[24px]"
                      style={{ animation: `badge-hop-spin 0.6s ease-in-out ${0.65 + badgeHopDelay}s both` }}>
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMilestoneBadge2} />
                      <span className="absolute text-[12px] leading-none text-center whitespace-nowrap"
                        style={{ top: '3.91px', left: '50%', transform: 'translateX(-50%)' }}>⛰️</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative size-[24px] flex-shrink-0"
                    style={{ animation: `badge-hop-spin 0.6s ease-in-out ${0.4 + badgeHopDelay}s both` }}>
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMilestoneBadge} />
                    <span className="absolute text-[12px] leading-none text-center whitespace-nowrap"
                      style={{ top: '3.91px', left: '50%', transform: 'translateX(-50%)' }}>⛰️</span>
                  </div>
                )}
                <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] text-[#4c4c4c] whitespace-nowrap">
                  {milestoneCount ?? 1} {(milestoneCount ?? 1) === 1 ? 'milestone' : 'milestones'}
                </span>
                <img alt="" className="size-[18px] block flex-shrink-0" src={imgChevronDown} />
                </>)}
              </button>
              {showMilestonesModal && (
                milestoneModalV2
                  ? <MilestonesModalV2 onClose={() => setShowMilestonesModal(false)} subscriptionPercent={subscriptionPercent} />
                  : <MilestonesModal onClose={() => setShowMilestonesModal(false)} earnedCount={milestoneCount ?? 1} storyCount={storyCount} subscriptionPercent={subscriptionPercent} subscriptionEnded={subscriptionEnded} renewCopy={renewCopy} />
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
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
              <div className="absolute top-0 left-0 h-full rounded-full overflow-hidden"
                style={{ width: `${fill * 100}%`, transition: 'none' }}>
                <div className="absolute top-0 left-0 h-full"
                  style={{
                    width: `${100 / fill}%`,
                    backgroundImage: MILESTONE_GRADIENT,
                    backgroundSize: '500% 100%',
                    backgroundPosition: `${i * 25}%`
                  }} />
              </div>
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
            <span className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#4c4c4c]">⛰️ Upcoming milestone: <span className="font-['GT_America:Medium']">{milestoneText ?? '20 stories written.'}</span></span>
            <span className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#777] whitespace-nowrap">{weekLabel ?? 'Week 13'}</span>
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
  const [tabBarStuck, setTabBarStuck] = useState(false)
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

  useEffect(() => {
    const sentinel = tabBarSentinelRef.current
    if (!sentinel) return
    const obs = new IntersectionObserver(([e]) => setTabBarStuck(!e.isIntersecting), { threshold: 0 })
    obs.observe(sentinel)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="flex bg-[#f8f4f1] min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-105px)]">

      {/* ── Left sticky panel ── */}
      <div
        className="sticky top-0 self-start flex-none w-[382px] pl-[60px] pr-[22px] pt-[32px] flex flex-col gap-[16px] overflow-hidden"
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
                <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.06)] px-[16px] py-[8px] rounded-[22px] cursor-pointer">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#12473a] whitespace-nowrap">week by week</span>
                </div>
                <button type="button" className="px-[16px] py-[8px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap hover:underline">stories</span>
                </button>
                <button type="button" className="px-[16px] py-[8px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap hover:underline">drafts</span>
                </button>
              </div>
            </div>
            <div className="flex gap-[12px] items-center">
              <button type="button" className="bg-white flex gap-[10px] h-[40px] items-center justify-center px-[24px] rounded-[24px] cursor-pointer hover:opacity-70 transition-opacity">
                <img alt="" className="size-[24px] flex-shrink-0" src={imgReorderIcon} />
                <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#068089] whitespace-nowrap">reorder</span>
              </button>
              <button type="button" aria-label="Search" className="border-2 border-[#068089] size-[40px] flex items-center justify-center rounded-full cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <circle cx="10.5" cy="10.5" r="6.5" stroke="#068089" strokeWidth="1.5"/>
                  <path d="M15.5 15.5L20.5 20.5" stroke="#068089" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <button type="button" className="border-2 border-transparent flex gap-[10px] h-[40px] items-center justify-center px-[24px] rounded-[24px] cursor-pointer hover:border-[#068089] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="flex-shrink-0">
                  <circle cx="12" cy="12" r="9" stroke="#068089" strokeWidth="1.5"/>
                  <path d="M12 8v8M8 12h8" stroke="#068089" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="font-['GT_America:Medium'] text-[14px] leading-[20px] tracking-[1.4px] uppercase text-[#068089] whitespace-nowrap">new story</span>
              </button>
            </div>
          </div>
        </div>

        <div style={{ height: tabBarStuck ? 50 : 0, transition: 'height 0.25s ease-out' }} aria-hidden />
        {/* Week rows */}
        {pageWeeks.flatMap((week, i) => {
          const row = (
            <div
              key={week.weekNum}
              ref={el => { weekRowRefs.current[i] = el }}
              className={`${week.weekNum === 3 ? '' : 'border-b border-[#ebebeb] '}py-[36px] px-[24px] flex items-center justify-between gap-[16px] group transition-all cursor-pointer hover:bg-[#fafafa]`}
            >
              <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                <p className="font-['GT_America:Regular'] text-[14px] lg:text-[16px] leading-[28px] text-[#61706f] m-0">
                  {week.weekNum === 1
                    ? `Week 1 · Asked by Raymond (Sends Monday, June 3rd)`
                    : week.weekNum === 2 || week.weekNum === 3
                      ? `Week ${week.weekNum} · Asked by Raymond`
                      : `Week ${week.weekNum} · Asked by ${week.asker}`}
                </p>
                <div className="flex items-start gap-[8px]">
                  <p className="font-['GT_Super_Display:Medium'] text-[18px] lg:text-[20px] leading-[34px] tracking-[-0.2px] text-[#042a21] m-0 min-w-0">
                    {week.question}
                  </p>
                  <QuestionButtonBank horizontal />
                </div>
              </div>
              <button type="button" className="invisible group-hover:visible flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity">
                <span className="font-['GT_America:Medium'] text-[16px] text-[#07777e] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">answer</span>
              </button>
            </div>
          )
          if (week.weekNum === 3) {
            return [row, (
              <div key="phone-banner" className="px-[24px] py-[36px]">
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
        <div className="flex gap-[16px] items-center justify-center py-[36px]">
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
  const [tabBarStuck, setTabBarStuck] = useState(false)
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

  useEffect(() => {
    const sentinel = tabBarSentinelRef.current
    if (!sentinel) return
    const obs = new IntersectionObserver(([e]) => setTabBarStuck(!e.isIntersecting), { threshold: 0 })
    obs.observe(sentinel)
    return () => obs.disconnect()
  }, [])

  return (
    // Outer: tan bg fills full left side via background bleed
    <div className="flex bg-[#f8f4f1] min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-105px)]">

      {/* ── Left sticky panel ── */}
      <div
        className="sticky top-0 self-start flex-none w-[382px]
                   pl-[60px] pr-[22px] pt-[32px] flex flex-col gap-[16px] overflow-hidden"
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
                  className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.06)] px-[16px] py-[8px] rounded-[22px] cursor-pointer"
                >
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#12473a] whitespace-nowrap">
                    week by week
                  </span>
                </button>
                <button type="button" className="px-[16px] py-[8px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap hover:underline">
                    stories (4)
                  </span>
                </button>
                <button type="button" className="px-[16px] py-[8px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap hover:underline">
                    drafts (2)
                  </span>
                </button>
              </div>
            </div>
            <div className="flex gap-[12px] items-center">
              <button type="button" className="bg-white flex gap-[10px] h-[40px] items-center justify-center px-[24px] rounded-[24px] cursor-pointer hover:opacity-70 transition-opacity">
                <img alt="" className="size-[24px] flex-shrink-0" src={imgReorderIcon} />
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
              <button type="button" className="border-2 border-transparent flex gap-[10px] h-[40px] items-center justify-center px-[24px] rounded-[24px] cursor-pointer hover:border-[#068089] transition-colors">
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


        </div>

        <div style={{ height: tabBarStuck ? 50 : 0, transition: 'height 0.25s ease-out' }} aria-hidden />
        {pageWeeks.map((week, i) => {
          if (week.isThisWeek) {
            return (
              <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }} className="py-[72px] px-[24px] flex flex-col gap-[16px] items-center">
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
                </p>
              </div>
            )
          }

          if (week.isUpcoming) {
            return (
              <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }} className={`border-b border-[#ebebeb] py-[36px] px-[24px] flex items-center justify-between gap-[16px] group transition-all cursor-pointer bg-[#ebebeb] ${focusThisWeek ? 'opacity-50' : 'hover:bg-[#e5e5e5]'}`}>
                <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                  <p className="font-['GT_America:Regular'] text-[14px] lg:text-[16px] leading-[28px] text-[color:var(--green\/700,#61706f)] m-0">
                    Week {week.weekNum} · Asked by {week.asker}
                  </p>
                  <div className="flex items-start gap-[8px]">
                    <p className="font-['GT_Super_Display:Medium'] text-[18px] lg:text-[20px] leading-[34px] tracking-[-0.2px] text-[color:var(--green\/1000,#042a21)] m-0 min-w-0">
                      {week.question}
                    </p>
                    <QuestionButtonBank horizontal />
                  </div>
                </div>
                <button type="button" className="invisible group-hover:visible flex flex-none h-[40px] items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] text-[#07777e] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">answer</span>
                </button>
              </div>
            )
          }

          const story = week.story!
          const isLastBeforeThisWeek = pageWeeks[i + 1]?.isThisWeek
          return (
            <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }} className={`${isLastBeforeThisWeek ? '' : 'border-b border-[#ebebeb] '}py-[36px] px-[24px] flex items-start justify-between gap-[16px] cursor-pointer transition-all ${focusThisWeek ? 'opacity-50' : 'hover:bg-[#f7f7f7]'}`}>
              <div className="flex flex-col gap-[12px] flex-1 min-w-0 max-w-[600px]">
                <p className="font-['GT_America:Regular'] text-[14px] lg:text-[16px] leading-[28px] text-[color:var(--green\/700,#61706f)] m-0">
                  Week {week.weekNum}
                </p>
                <p className="font-['GT_Super_Display:Medium'] text-[18px] lg:text-[20px] leading-[34px] tracking-[-0.2px] text-[color:var(--green\/1000,#042a21)] m-0">
                  {story.question}
                </p>
                <div className="flex gap-[16px] items-start">
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
        <div className="flex gap-[16px] items-center justify-center py-[36px]">
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
  const [tabBarStuck, setTabBarStuck] = useState(false)
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

  useEffect(() => {
    const sentinel = tabBarSentinelRef.current
    if (!sentinel) return
    const obs = new IntersectionObserver(([e]) => setTabBarStuck(!e.isIntersecting), { threshold: 0 })
    obs.observe(sentinel)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="flex bg-[#f8f4f1] min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-105px)]">

      {/* ── Left sticky panel ── */}
      <div className="sticky top-0 self-start flex-none w-[382px] pl-[60px] pr-[22px] pt-[32px] flex flex-col gap-[16px] overflow-hidden" style={{ height: '100vh' }}>
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
                <button type="button" onClick={() => { setCurrentPage(1); tabBarSentinelRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) }} className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.06)] px-[16px] py-[8px] rounded-[22px] cursor-pointer">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#12473a] whitespace-nowrap">week by week</span>
                </button>
                <button type="button" className="px-[16px] py-[8px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap hover:underline">stories (44)</span>
                </button>
                <button type="button" className="px-[16px] py-[8px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap hover:underline">drafts (2)</span>
                </button>
              </div>
            </div>
            <div className="flex gap-[12px] items-center">
              <button type="button" className="bg-white flex gap-[10px] h-[40px] items-center justify-center px-[24px] rounded-[24px] cursor-pointer hover:opacity-70 transition-opacity">
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
              <button type="button" className="border-2 border-transparent flex gap-[10px] h-[40px] items-center justify-center px-[24px] rounded-[24px] cursor-pointer hover:border-[#068089] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="flex-shrink-0">
                  <circle cx="12" cy="12" r="9" stroke="#068089" strokeWidth="1.5"/><path d="M12 8v8M8 12h8" stroke="#068089" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="font-['GT_America:Medium'] text-[14px] leading-[20px] tracking-[1.4px] uppercase text-[#068089] whitespace-nowrap">new story</span>
              </button>
            </div>
          </div>

        </div>

        <div style={{ height: tabBarStuck ? 50 : 0, transition: 'height 0.25s ease-out' }} aria-hidden />
        {/* Week rows */}
        {pageWeeks.map((week, i) => {
          if (week.isUpcoming) {
            return (
              <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }} className="border-b border-[#ebebeb] py-[36px] px-[24px] flex items-center justify-between gap-[16px] group transition-all cursor-pointer bg-[#ebebeb] hover:bg-[#e5e5e5]">
                <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                  <p className="font-['GT_America:Regular'] text-[14px] lg:text-[16px] leading-[28px] text-[color:var(--green\/700,#61706f)] m-0">Week {week.weekNum} · Asked by {week.asker}</p>
                  <div className="flex items-start gap-[8px]">
                    <p className="font-['GT_Super_Display:Medium'] text-[18px] lg:text-[20px] leading-[34px] tracking-[-0.2px] text-[color:var(--green\/1000,#042a21)] m-0 min-w-0">{week.question}</p>
                    <QuestionButtonBank horizontal />
                  </div>
                </div>
                <button type="button" className="invisible group-hover:visible flex flex-none h-[40px] items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] text-[#07777e] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">answer</span>
                </button>
              </div>
            )
          }
          const story = week.story!
          return (
            <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }} className="border-b border-[#ebebeb] py-[36px] px-[24px] flex items-start justify-between gap-[16px] cursor-pointer transition-all hover:bg-[#f7f7f7]">
              <div className="flex flex-col gap-[12px] flex-1 min-w-0 max-w-[600px]">
                <p className="font-['GT_America:Regular'] text-[14px] lg:text-[16px] leading-[28px] text-[color:var(--green\/700,#61706f)] m-0">Week {week.weekNum}</p>
                <p className="font-['GT_Super_Display:Medium'] text-[18px] lg:text-[20px] leading-[34px] tracking-[-0.2px] text-[color:var(--green\/1000,#042a21)] m-0">{week.question}</p>
                <div className="flex gap-[16px] items-start">
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
        <div className="flex gap-[16px] items-center justify-center py-[36px]">
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
  const [tabBarStuck, setTabBarStuck] = useState(false)
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

  useEffect(() => {
    const sentinel = tabBarSentinelRef.current
    if (!sentinel) return
    const obs = new IntersectionObserver(([e]) => setTabBarStuck(!e.isIntersecting), { threshold: 0 })
    obs.observe(sentinel)
    return () => obs.disconnect()
  }, [])

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
                <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.06)] px-[16px] py-[8px] rounded-[22px] cursor-pointer">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#12473a] whitespace-nowrap">week by week</span>
                </div>
                <button type="button" className="px-[16px] py-[8px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap hover:underline">stories (44)</span>
                </button>
                <button type="button" className="px-[16px] py-[8px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="font-['GT_America:Medium'] text-[16px] leading-[20px] tracking-[1.6px] uppercase text-[#61706f] whitespace-nowrap hover:underline">drafts (2)</span>
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
              <button type="button" className="border-2 border-transparent flex gap-[10px] h-[40px] items-center justify-center px-[24px] rounded-[24px] cursor-pointer hover:border-[#068089] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="flex-shrink-0">
                  <circle cx="12" cy="12" r="9" stroke="#068089" strokeWidth="1.5"/>
                  <path d="M12 8v8M8 12h8" stroke="#068089" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="font-['GT_America:Medium'] leading-[20px] text-[16px] text-[#068089] tracking-[1.6px] uppercase whitespace-nowrap">new story</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      <div style={{ height: tabBarStuck ? 50 : 0, transition: 'height 0.25s ease-out' }} aria-hidden />
      {/* ── Story list ── */}
      <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-[80px] min-h-[calc(100vh+1px)]">
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
        <div className="flex gap-[16px] items-center justify-center py-[36px]">
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
    <div className="min-h-[calc(100vh+1px)]">
      <div ref={panelTopRef} className="h-0" aria-hidden />

      {/* Week rows */}
      <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10">
        {pageWeeks.flatMap((week, i) => {
          const row = (() => {
          // This-week card (mid-sub only)
          if (week.isThisWeek && !isNewUser) {
            return (
              <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }} className="py-[72px] flex flex-col gap-[16px] items-center">
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
                </p>
              </div>
            )
          }

          // Upcoming rows (and all rows for new user)
          if (week.isUpcoming || isNewUser || (week.isThisWeek && isNewUser)) {
            return (
              <div key={week.weekNum} ref={el => { weekRowRefs.current[i] = el }}
                className={`${isNewUser && week.weekNum === 3 ? '' : 'border-b border-[#ebebeb] '}py-[24px] flex items-center justify-between gap-[16px] group transition-all cursor-pointer bg-[#ebebeb] hover:bg-[#e5e5e5]`}>
                <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                  <p className="font-['GT_America:Regular'] text-[14px] lg:text-[16px] leading-[28px] text-[#61706f] m-0">
                    Week {week.weekNum} · Asked by {week.asker ?? 'Storyworth'}
                  </p>
                  <div className="flex items-start gap-[8px]">
                    <p className="font-['GT_Super_Display:Medium'] text-[18px] lg:text-[20px] leading-[34px] tracking-[-0.2px] text-[#042a21] m-0 min-w-0">{week.question}</p>
                    <QuestionButtonBank horizontal />
                  </div>
                </div>
                <button type="button" className="invisible group-hover:visible flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity">
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
              className={`${isLastBeforeThisWeek ? '' : 'border-b border-[#ebebeb] '}py-[24px] flex items-start justify-between gap-[16px] cursor-pointer hover:bg-[#f7f7f7] transition-all`}>
              <div className="flex flex-col gap-[12px] flex-1 min-w-0 max-w-[600px]">
                <p className="font-['GT_America:Regular'] text-[14px] lg:text-[16px] leading-[28px] text-[#61706f] m-0">Week {week.weekNum}</p>
                <p className="font-['GT_Super_Display:Medium'] text-[18px] lg:text-[20px] leading-[34px] tracking-[-0.2px] text-[#042a21] m-0">{story.question}</p>
                <div className="flex gap-[16px] items-start">
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
              <div key="phone-banner" className="py-[36px]">
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
        <div className="flex gap-[16px] items-center justify-center py-[36px]">
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
  const [scenario, setScenario] = useState('a1-new')
  const [activeTab, setActiveTab] = useState<Tab>('week-by-week')
  const [showReorderModal, setShowReorderModal] = useState(false)
  const [showSubEndedNewStoryModal, setShowSubEndedNewStoryModal] = useState(false)
  const [showSubEndedLowPrintModal, setShowSubEndedLowPrintModal] = useState(false)
  const [subEndedLowShuffleIdx, setSubEndedLowShuffleIdx] = useState(0)
  const [showFilterMenu, setShowFilterMenu] = useState(false)
  const [rowFilter, setRowFilter] = useState({ answered: false, unanswered: false, upcoming: false, drafts: false })
  const [currentPage, setCurrentPage] = useState(1)
  const [heroScrolled, setHeroScrolled] = useState(false)
  const [pendingScrollWeek, setPendingScrollWeek] = useState<number | null>(null)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const questionCardRef = useRef<HTMLDivElement>(null)
  const question1Ref = useRef<HTMLDivElement>(null)
  const question5Ref = useRef<HTMLDivElement>(null)
  const question8Ref = useRef<HTMLDivElement>(null)
  const nearEndErrorRowRef = useRef<HTMLDivElement>(null)
  const nearEndError2RowRef = useRef<HTMLDivElement>(null)
  const [issueNavStep, setIssueNavStep] = useState<null | 1 | 2>(null)
  useEffect(() => {
    if (issueNavStep === null) return
    const el = (issueNavStep === 1 ? nearEndErrorRowRef : nearEndError2RowRef).current
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 170
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
  }, [issueNavStep])
  const [tabBarStuck, setTabBarStuck] = useState(false)
  const [revealState, setRevealState] = useState<'hidden' | 'revealing' | 'revealed'>('hidden')
  const [timelineAnimating, setTimelineAnimating] = useState(false)
  const [showTimeline2, setShowTimeline2] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [milestoneGlow, setMilestoneGlow] = useState(false)
  const [milestoneBarHighlight, setMilestoneBarHighlight] = useState(false)
  const [milestoneCongratsVisible, setMilestoneCongratsVisible] = useState(false)
  const milestoneButtonRef = useRef<HTMLButtonElement>(null)

  function handleReveal() {
    setRevealState('revealing')
    // questions move up: card collapses over ~550ms, questions fade in over ~950ms
    setTimeout(() => setTimelineAnimating(true), 900)
    // bar fills in 600ms → timeline2 bounces in
    setTimeout(() => setShowTimeline2(true), 900 + 600)
    setTimeout(() => setRevealState('revealed'), 900 + 800)
  }

  useEffect(() => {
    setCurrentPage(1)
    setPendingScrollWeek(null)
    setActiveTab('week-by-week')
    setRowFilter({ answered: false, unanswered: false, upcoming: false, drafts: false })
    setRevealState('hidden')
    setTimelineAnimating(false)
    setShowTimeline2(false)
    setMilestoneGlow(false)
    setMilestoneBarHighlight(false)
    setMilestoneCongratsVisible(false)
    setIssueNavStep(null)
    if (scenario === 'a1-new' || scenario === 'a1-first-question' || scenario === 'a1-first-question-answered' || scenario === 'a1-unengaged' || scenario === 'a1-near-end') {
      history.scrollRestoration = 'manual'
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }))
    } else {
      history.scrollRestoration = 'auto'
    }
    if (scenario === 'a1-first-question' || scenario === 'a1-first-question-answered') {
      setRevealState('revealed')
      setShowTimeline2(true)
    }
  }, [scenario])

  // a1-new / a1-unengaged: trigger milestone animation when target question enters the viewport
  // obs.observe is deferred in a rAF so the scroll-to-top (also rAF) always completes first,
  // preventing the IO from seeing Q5 in the old viewport position from a previous scenario.
  useEffect(() => {
    if ((scenario !== 'a1-new' && scenario !== 'a1-unengaged' && scenario !== 'a1-near-end') || revealState !== 'hidden') return
    const el = (scenario === 'a1-unengaged' || scenario === 'a1-near-end') ? question5Ref.current : question8Ref.current
    if (!el) return
    let obs: IntersectionObserver | null = null
    const rafId = requestAnimationFrame(() => {
      obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setRevealState('revealing')
          setTimeout(() => setTimelineAnimating(true), 0)
          setTimeout(() => setShowTimeline2(true), 600)
          setTimeout(() => setRevealState('revealed'), 800)
          obs?.disconnect()
        }
      }, { threshold: 0 })
      obs.observe(el)
    })
    return () => { cancelAnimationFrame(rafId); obs?.disconnect() }
  }, [scenario, revealState])

  // a1-new: fire full-width confetti, highlight the bar for 1s, then highlight the milestone button
  // Guard on timelineAnimating prevents spurious fire when switching scenarios while showTimeline2 is stale-true
  useEffect(() => {
    if ((scenario !== 'a1-new' && scenario !== 'a1-unengaged') || !showTimeline2 || !timelineAnimating) return
    const el = milestoneButtonRef.current
    const rect = el?.getBoundingClientRect()
    const oy = rect ? rect.top / window.innerHeight : 0.06
    const base = { angle: 90, spread: 45, scalar: 1, startVelocity: 40, ticks: 200, gravity: 1, decay: 0.9, shapes: ['square' as const, 'circle' as const], colors: ['#068089', '#7dd4d8', '#2E7C69', '#50A890', '#F5DA96', '#7B4ED6', '#c4234e'], disableForReducedMotion: true, zIndex: 9999 }
    const origins = [0.05, 0.2, 0.35, 0.5, 0.65, 0.8, 0.95]
    origins.forEach(x => confetti({ ...base, particleCount: 8, origin: { x, y: oy } }))
    setMilestoneBarHighlight(true)
    setMilestoneCongratsVisible(true)
    const t0 = setTimeout(() => setMilestoneBarHighlight(false), 1000)
    const t3 = setTimeout(() => setMilestoneCongratsVisible(false), 4500)
    const t1 = setTimeout(() => setMilestoneGlow(true), 2600)
    const t2 = setTimeout(() => setMilestoneGlow(false), 6600)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [scenario, showTimeline2, timelineAnimating])

  // a1-new / a1-unengaged: track scroll progress from page top to target question for milestone progress bar
  useEffect(() => {
    if ((scenario !== 'a1-new' && scenario !== 'a1-unengaged') || showTimeline2) return
    const MILESTONE_BAR_H = 88
    function handleScroll() {
      const qTarget = scenario === 'a1-unengaged' ? question5Ref.current : question8Ref.current
      if (!qTarget) return
      const q8Doc = qTarget.getBoundingClientRect().top + window.scrollY
      const total = q8Doc - MILESTONE_BAR_H
      if (total <= 0) { setScrollProgress(1); return }
      setScrollProgress(Math.max(0, Math.min(1, window.scrollY / total)))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scenario, showTimeline2])

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return
    const obs = new IntersectionObserver(([e]) => setTabBarStuck(!e.isIntersecting), { threshold: 0 })
    obs.observe(sentinel)
    return () => obs.disconnect()
  }, [scenario])



  const isOptionB = scenario.startsWith('b-')
  const isOptionC = scenario.startsWith('c-')
  const isAEnd = scenario === 'a-end'
  const isA1New = scenario === 'a1-new'
  const isA1FirstQuestion = scenario === 'a1-first-question'
  const isA1FirstQuestionAnswered = scenario === 'a1-first-question-answered'
  const isA1FiveAnswered = scenario === 'a1-five-answered'
  const isA1FiveAnsweredV2 = scenario === 'a1-five-answered-v2'
  const isA1Unengaged = scenario === 'a1-unengaged'
  const isA1NearEnd = scenario === 'a1-near-end'
  const isA1SubEnded = scenario === 'a1-sub-ended'
  const isA1SubEndedLow = scenario === 'a1-sub-ended-low'
  const isAnySubEnded = isA1SubEnded || isA1SubEndedLow
  const isA1FirstQ = isA1FirstQuestion || isA1FirstQuestionAnswered || isA1FiveAnswered || isA1FiveAnsweredV2 || isA1NearEnd || isA1SubEnded || isA1SubEndedLow
  const isA1Month4 = scenario === 'a1-month4'
  const isNewUser = scenario === 'a-new' || scenario === 'b-new'
  const isANewReveal = scenario === 'a-new' || scenario === 'a1-new'

  // Reset hero-scroll state when scenario changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setHeroScrolled(false) }, [scenario])

  useEffect(() => {
    if (!isNewUser || heroScrolled) return
    const handler = () => { if (window.scrollY > 10) setHeroScrolled(true) }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [isNewUser, heroScrolled])

type MemoirRowVariant = 'plain' | 'engagement' | 'photos' | 'recording' | 'all'
  type MemoirRow = { q: string; status: 'answered' | 'asked' | 'future' | 'this-week' | 'draft'; preview?: string; variant?: MemoirRowVariant; error?: string }

  const fiveAnsweredRows: MemoirRow[] = [
    { q: weekQuestions[0],                                            status: 'answered', variant: 'engagement', preview: '"I remember the summer days spent at my grandmother\'s house, where we would bake cookies and play in the garden..."' },
    { q: 'What legacy do you want to leave behind?',                  status: 'answered', variant: 'photos',     preview: '"The legacy I want to leave is one of kindness and honesty — being someone people could always count on..."' },
    { q: 'Who has been your biggest fan?',                            status: 'asked' },
    { q: 'Did you have any jobs growing up?',                         status: 'answered', variant: 'recording',  preview: '"Growing up I took on every job I could find — newspapers at dawn, stacking shelves, mowing lawns on weekends..."' },
    { q: 'What was your favorite childhood vacation?',                status: 'draft',  preview: '"We used to drive up to the lake every August — I can still smell the pine trees and hear the sound of the boat motor early in the morning..."' },
    { q: 'How did you decide on your career path?',                   status: 'answered', variant: 'all',        preview: '"Choosing engineering wasn\'t planned. A summer internship changed everything and set me on a path I\'ve loved..."' },
    { q: 'What world event had the biggest impact on your life?',     status: 'asked' },
    { q: 'How did you meet your closest friends?',                    status: 'answered', variant: 'plain',      preview: '"Some of my closest friends I met in my first week of college. We\'ve been through everything together..."' },
    { q: 'What are your proudest achievements?',                      status: 'this-week' },
    { q: 'What do you hope your family remembers about you?',         status: 'future' },
    { q: 'Where did you grow up, and what was it like?',              status: 'future' },
    { q: "What's the best advice you ever received?",                 status: 'future' },
    { q: 'How did you meet your spouse or partner?',                  status: 'future' },
    { q: 'What was your first job like?',                             status: 'future' },
    { q: 'Describe a perfect day from your childhood.',               status: 'future' },
    { q: "What's a tradition your family had growing up?",            status: 'future' },
    { q: 'Who was your childhood hero?',                              status: 'future' },
    { q: "What's the hardest decision you've ever made?",             status: 'future' },
    { q: "What's your favorite family recipe?",                       status: 'future' },
    { q: 'Where did you go on your first trip abroad?',               status: 'future' },
  ]

  const nearEndRows: MemoirRow[] = [
    { q: weekQuestions[0],                                                          status: 'asked'    },
    { q: 'What legacy do you want to leave behind?',                               status: 'answered', variant: 'plain',      preview: '"The legacy I want to leave is one of kindness and honesty — being someone people could always count on..."' },
    { q: 'Who has been your biggest fan?',                                         status: 'draft',                           preview: '"Without a doubt, my mother was my biggest fan. She never missed a recital, game, or graduation..."' },
    { q: 'Did you have any jobs growing up?',                                      status: 'asked'    },
    { q: 'What was your favorite childhood vacation?',                             status: 'answered', variant: 'photos',     preview: '"Every summer we drove down to the Jersey Shore. I can still smell the salt air and feel the warm sand..."' },
    { q: 'How did you decide on your career path?',                                status: 'asked'    },
    { q: 'What world event had the biggest impact on your life?',                  status: 'asked'    },
    { q: 'How did you meet your closest friends?',                                 status: 'asked'    },
    { q: 'What are your proudest achievements?',                                   status: 'asked'    },
    { q: 'What do you hope your family remembers about you?',                      status: 'answered', variant: 'recording', preview: '"I hope they remember that I always had time for them, no matter how busy work got..."' },
    { q: 'Where did you grow up, and what was it like?',                          status: 'answered', variant: 'all',        preview: '"I grew up in a small town in Ohio, where everybody knew your name and your business..."' },
    { q: 'What\'s the best advice you ever received?',                             status: 'answered', variant: 'photos',     preview: '"My father told me: \'Do one thing every day that scares you.\' It took me years to understand..."', error: 'Heads up: this image may not print clearly.' },
    { q: 'How did you meet your spouse or partner?',                               status: 'asked'    },
    { q: 'What was your first job like?',                                          status: 'asked'    },
    { q: 'Describe a perfect day from your childhood.',                            status: 'asked'    },
    { q: 'What\'s a tradition your family had growing up?',                        status: 'asked'    },
    { q: 'Who was your childhood hero?',                                           status: 'asked'    },
    { q: 'What\'s the hardest decision you\'ve ever made?',                        status: 'asked'    },
    { q: 'What\'s your favorite family recipe?',                                   status: 'asked'    },
    { q: 'Where did you go on your first trip abroad?',                            status: 'asked'    },
    { q: 'What did your parents teach you about money?',                           status: 'asked'    },
    { q: 'Tell me about your first car.',                                          status: 'answered', variant: 'engagement', preview: '"A 1978 Ford Pinto — not exactly glamorous, but it was mine. I saved up for two years at the grocery store..."', error: 'Heads up: Looks like there\'s an unsaved edit on this story.' },
    { q: 'What school subject did you love most?',                                 status: 'asked'    },
    { q: 'What sports or activities did you play as a kid?',                       status: 'asked'    },
    { q: 'What was your biggest professional accomplishment?',                     status: 'draft',                          preview: '"When I finally made partner after eight years, I called my dad from the parking garage and cried..."' },
    { q: 'What\'s something you learned from a failure?',                          status: 'asked'    },
    { q: 'Tell me about a mentor who shaped your life.',                           status: 'asked'    },
    { q: 'What\'s something you miss from your childhood?',                        status: 'asked'    },
    { q: 'What was your favorite movie or book growing up?',                       status: 'asked'    },
    { q: 'Describe your first home as an adult.',                                  status: 'answered', variant: 'photos',     preview: '"A tiny studio apartment in Chicago with a leaky faucet and the best view of the El train..."' },
    { q: 'What do you wish you had known at age 20?',                             status: 'answered', variant: 'all',        preview: '"That it\'s okay not to have all the answers. Everybody else is figuring it out too..."' },
    { q: 'How has your relationship with your siblings changed over time?',        status: 'asked'    },
    { q: 'What\'s the bravest thing you\'ve ever done?',                           status: 'asked'    },
    { q: 'What\'s a place that holds special meaning for you?',                    status: 'asked'    },
    { q: 'What did your grandparents mean to you?',                                status: 'asked'    },
    { q: 'Tell me about raising your children.',                                   status: 'asked'    },
    { q: 'What are the most important life lessons you\'ve learned?',              status: 'asked'    },
    { q: 'How did you handle a major setback in life?',                            status: 'asked'    },
    { q: 'What\'s something you\'re still proud of today?',                        status: 'asked'    },
    { q: 'Tell me about the neighborhood you grew up in.',                         status: 'answered', variant: 'plain',      preview: '"Our street was the kind where kids played outside until the streetlights came on. Everyone\'s door was always open..."' },
    { q: 'What was your biggest adventure?',                                       status: 'answered', variant: 'photos',     preview: '"Three weeks in Southeast Asia with nothing but a backpack and a Lonely Planet guide. Terrified and exhilarated..."' },
    { q: 'How did your faith or values shape your life?',                          status: 'answered', variant: 'engagement', preview: '"Faith was the backbone of our household. Sunday dinners, church on Christmas Eve, the rosary in every car..."' },
    { q: 'What\'s the kindest thing anyone has ever done for you?',                status: 'answered', variant: 'recording', preview: '"When I lost my job in 2002, my neighbor Rosa showed up every Tuesday with a pot of soup. Never said a word..."' },
    { q: 'Tell me about a time you made a difference in someone\'s life.',         status: 'answered', variant: 'all',        preview: '"I tutored a kid named Marcus for three years. He became an engineer. I still have the card he sent me..."' },
    { q: 'What were your dreams when you were young?',                             status: 'asked'    },
    { q: 'How do you define success?',                                             status: 'asked'    },
    { q: 'What\'s the most important thing you want your grandchildren to know?',  status: 'asked'    },
    { q: 'What were the biggest changes you witnessed in your lifetime?',          status: 'asked'    },
    { q: 'What has brought you the most joy in life?',                             status: 'asked'    },
    { q: 'What do you want people to remember about you?',                         status: 'this-week' },
    { q: 'What\'s your advice for living a good life?',                            status: 'future'   },
    { q: 'If you could go back, what would you do differently?',                   status: 'future'   },
  ]

  const reorderInitialItems = useMemo((): ReorderItem[] => {
    if (isA1NearEnd || isAnySubEnded) return [
      { id:  0, q: weekQuestions[0],                                                         status: 'asked'     },
      { id:  1, q: 'What legacy do you want to leave behind?',                               status: 'answered',  preview: '"The legacy I want to leave is one of kindness and honesty — being someone people could always count on..."' },
      { id:  2, q: 'Who has been your biggest fan?',                                         status: 'draft',     preview: '"Without a doubt, my mother was my biggest fan. She never missed a recital, game, or graduation..."' },
      { id:  3, q: 'Did you have any jobs growing up?',                                      status: 'asked'     },
      { id:  4, q: 'What was your favorite childhood vacation?',                             status: 'answered',  preview: '"Every summer we drove down to the Jersey Shore. I can still smell the salt air and feel the warm sand..."' },
      { id:  5, q: 'How did you decide on your career path?',                                status: 'asked'     },
      { id:  6, q: 'What world event had the biggest impact on your life?',                  status: 'asked'     },
      { id:  7, q: 'How did you meet your closest friends?',                                 status: 'asked'     },
      { id:  8, q: 'What are your proudest achievements?',                                   status: 'asked'     },
      { id:  9, q: 'What do you hope your family remembers about you?',                      status: 'answered',  preview: '"I hope they remember that I always had time for them, no matter how busy work got..."' },
      { id: 10, q: 'Where did you grow up, and what was it like?',                          status: 'answered',  preview: '"I grew up in a small town in Ohio, where everybody knew your name and your business..."' },
      { id: 11, q: "What's the best advice you ever received?",                             status: 'answered',  preview: '"My father told me: \'Do one thing every day that scares you.\' It took me years to understand..."' },
      { id: 12, q: 'How did you meet your spouse or partner?',                               status: 'asked'     },
      { id: 13, q: 'What was your first job like?',                                          status: 'asked'     },
      { id: 14, q: 'Describe a perfect day from your childhood.',                            status: 'asked'     },
      { id: 15, q: "What's a tradition your family had growing up?",                        status: 'asked'     },
      { id: 16, q: 'Who was your childhood hero?',                                           status: 'asked'     },
      { id: 17, q: "What's the hardest decision you've ever made?",                         status: 'asked'     },
      { id: 18, q: "What's your favorite family recipe?",                                   status: 'asked'     },
      { id: 19, q: 'Where did you go on your first trip abroad?',                            status: 'asked'     },
      { id: 20, q: 'What did your parents teach you about money?',                           status: 'asked'     },
      { id: 21, q: 'Tell me about your first car.',                                          status: 'answered',  preview: '"A 1978 Ford Pinto — not exactly glamorous, but it was mine. I saved up for two years at the grocery store..."' },
      { id: 22, q: 'What school subject did you love most?',                                 status: 'asked'     },
      { id: 23, q: 'What sports or activities did you play as a kid?',                       status: 'asked'     },
      { id: 24, q: 'What was your biggest professional accomplishment?',                     status: 'draft',     preview: '"When I finally made partner after eight years, I called my dad from the parking garage and cried..."' },
      { id: 25, q: "What's something you learned from a failure?",                          status: 'asked'     },
      { id: 26, q: 'Tell me about a mentor who shaped your life.',                           status: 'asked'     },
      { id: 27, q: "What's something you miss from your childhood?",                        status: 'asked'     },
      { id: 28, q: 'What was your favorite movie or book growing up?',                       status: 'asked'     },
      { id: 29, q: 'Describe your first home as an adult.',                                  status: 'answered',  preview: '"A tiny studio apartment in Chicago with a leaky faucet and the best view of the El train..."' },
      { id: 30, q: 'What do you wish you had known at age 20?',                             status: 'answered',  preview: '"That it\'s okay not to have all the answers. Everybody else is figuring it out too..."' },
      { id: 31, q: 'How has your relationship with your siblings changed over time?',        status: 'asked'     },
      { id: 32, q: "What's the bravest thing you've ever done?",                            status: 'asked'     },
      { id: 33, q: "What's a place that holds special meaning for you?",                    status: 'asked'     },
      { id: 34, q: 'What did your grandparents mean to you?',                                status: 'asked'     },
      { id: 35, q: 'Tell me about raising your children.',                                   status: 'asked'     },
      { id: 36, q: "What are the most important life lessons you've learned?",              status: 'asked'     },
      { id: 37, q: 'How did you handle a major setback in life?',                            status: 'asked'     },
      { id: 38, q: "What's something you're still proud of today?",                         status: 'asked'     },
      { id: 39, q: 'Tell me about the neighborhood you grew up in.',                         status: 'answered',  preview: '"Our street was the kind where kids played outside until the streetlights came on. Everyone\'s door was always open..."' },
      { id: 40, q: 'What was your biggest adventure?',                                       status: 'answered',  preview: '"Three weeks in Southeast Asia with nothing but a backpack and a Lonely Planet guide. Terrified and exhilarated..."' },
      { id: 41, q: 'How did your faith or values shape your life?',                         status: 'answered',  preview: '"Faith was the backbone of our household. Sunday dinners, church on Christmas Eve, the rosary in every car..."' },
      { id: 42, q: "What's the kindest thing anyone has ever done for you?",                status: 'answered',  preview: '"When I lost my job in 2002, my neighbor Rosa showed up every Tuesday with a pot of soup. Never said a word..."' },
      { id: 43, q: "Tell me about a time you made a difference in someone's life.",         status: 'answered',  preview: '"I tutored a kid named Marcus for three years. He became an engineer. I still have the card he sent me..."' },
      { id: 44, q: 'What were your dreams when you were young?',                             status: 'asked'     },
      { id: 45, q: 'How do you define success?',                                             status: 'asked'     },
      { id: 46, q: "What's the most important thing you want your grandchildren to know?",  status: 'asked'     },
      { id: 47, q: 'What were the biggest changes you witnessed in your lifetime?',          status: 'asked'     },
      { id: 48, q: 'What has brought you the most joy in life?',                             status: 'asked'     },
      { id: 49, q: 'What do you want people to remember about you?',                         status: 'this-week' },
      { id: 50, q: "What's your advice for living a good life?",                            status: 'future'    },
      { id: 51, q: 'If you could go back, what would you do differently?',                   status: 'future'    },
    ]
    if (isA1FiveAnswered || isA1FiveAnsweredV2) return [
      { id: 0, q: weekQuestions[0],                                          status: 'answered',  preview: '"I remember the summer days spent at my grandmother\'s house, where we would bake cookies and play in the garden..."' },
      { id: 1, q: 'What legacy do you want to leave behind?',               status: 'answered',  preview: '"The legacy I want to leave is one of kindness and honesty — being someone people could always count on..."' },
      { id: 2, q: 'Who has been your biggest fan?',                         status: 'asked'     },
      { id: 3, q: 'Did you have any jobs growing up?',                      status: 'answered',  preview: '"Growing up I took on every job I could find — newspapers at dawn, stacking shelves, mowing lawns on weekends..."' },
      { id: 4, q: 'What was your favorite childhood vacation?',             status: 'draft',     preview: '"We used to drive up to the lake every August — I can still smell the pine trees and hear the sound of the boat motor early in the morning..."' },
      { id: 5, q: 'How did you decide on your career path?',                status: 'answered',  preview: '"Choosing engineering wasn\'t planned. A summer internship changed everything and set me on a path I\'ve loved..."' },
      { id: 6, q: 'What world event had the biggest impact on your life?',  status: 'asked'     },
      { id: 7, q: 'How did you meet your closest friends?',                 status: 'answered',  preview: '"Some of my closest friends I met in my first week of college. We\'ve been through everything together..."' },
      { id: 8,  q: 'What are your proudest achievements?',                   status: 'this-week' },
      { id: 9,  q: 'What do you hope your family remembers about you?',      status: 'future'    },
      { id: 10, q: 'Where did you grow up, and what was it like?',           status: 'future'    },
      { id: 11, q: "What's the best advice you ever received?",              status: 'future'    },
      { id: 12, q: 'How did you meet your spouse or partner?',               status: 'future'    },
      { id: 13, q: 'What was your first job like?',                          status: 'future'    },
      { id: 14, q: 'Describe a perfect day from your childhood.',            status: 'future'    },
      { id: 15, q: "What's a tradition your family had growing up?",         status: 'future'    },
      { id: 16, q: 'Who was your childhood hero?',                           status: 'future'    },
      { id: 17, q: "What's the hardest decision you've ever made?",          status: 'future'    },
      { id: 18, q: "What's your favorite family recipe?",                    status: 'future'    },
      { id: 19, q: 'Where did you go on your first trip abroad?',            status: 'future'    },
    ]
    if (isA1Unengaged) return [
      { id: 0, q: weekQuestions[0],                                         status: 'asked'     },
      { id: 1, q: 'What legacy do you want to leave behind?',               status: 'asked'     },
      { id: 2, q: 'Who has been your biggest fan?',                         status: 'asked'     },
      { id: 3, q: 'Did you have any jobs growing up?',                      status: 'asked'     },
      { id: 4, q: 'What was your favorite childhood vacation?',             status: 'asked'     },
      { id: 5, q: 'How did you decide on your career path?',                status: 'asked'     },
      { id: 6, q: 'What world event had the biggest impact on your life?',  status: 'asked'     },
      { id: 7, q: 'How did you meet your closest friends?',                 status: 'this-week' },
      { id: 8, q: 'What are your proudest achievements?',                   status: 'future'    },
      { id: 9, q: 'What do you hope your family remembers about you?',      status: 'future'    },
    ]
    if (isA1FirstQuestionAnswered) return [
      { id: 0, q: weekQuestions[0],                                          status: 'answered', preview: '"I remember the summer days spent at my grandmother\'s house, where we would bake cookies and play in the garden..."' },
      { id: 1, q: 'What legacy do you want to leave behind?',               status: 'asked'    },
      { id: 2, q: 'Who has been your biggest fan?',                         status: 'future'   },
      { id: 3, q: 'Did you have any jobs growing up?',                      status: 'future'   },
      { id: 4, q: 'What was your favorite childhood vacation?',             status: 'future'   },
      { id: 5, q: 'How did you decide on your career path?',                status: 'future'   },
      { id: 6, q: 'What world event had the biggest impact on your life?',  status: 'future'   },
      { id: 7, q: 'How did you meet your closest friends?',                 status: 'future'   },
      { id: 8, q: 'What are your proudest achievements?',                   status: 'future'   },
      { id: 9, q: 'What do you hope your family remembers about you?',      status: 'future'   },
    ]
    if (isA1FirstQuestion) return [
      { id: 0, q: weekQuestions[0],                                          status: 'this-week' },
      { id: 1, q: 'What legacy do you want to leave behind?',               status: 'future'    },
      { id: 2, q: 'Who has been your biggest fan?',                         status: 'future'    },
      { id: 3, q: 'Did you have any jobs growing up?',                      status: 'future'    },
      { id: 4, q: 'What was your favorite childhood vacation?',             status: 'future'    },
      { id: 5, q: 'How did you decide on your career path?',                status: 'future'    },
      { id: 6, q: 'What world event had the biggest impact on your life?',  status: 'future'    },
      { id: 7, q: 'How did you meet your closest friends?',                 status: 'future'    },
      { id: 8, q: 'What are your proudest achievements?',                   status: 'future'    },
      { id: 9, q: 'What do you hope your family remembers about you?',      status: 'future'    },
    ]
    // isA1New
    return optionCWeeks.slice(0, 10).map((w, i) => ({ id: i, q: w.question, status: 'future' as const }))
  }, [scenario]) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className="bg-white min-h-screen">
      <Navbar scenario={scenario} onScenarioChange={(id) => { if (id === scenario) setIssueNavStep(null); setScenario(id) }} />

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
          <div style={{ opacity: isNewUser && !heroScrolled ? 0 : 1, pointerEvents: isNewUser && !heroScrolled ? 'none' : 'auto', transition: 'opacity 0.7s ease-out' }}>
          <section>
            <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-[50px] pb-8 sm:pb-[50px]">
              <HeroContent variant="b" scenarioId={scenario} />
            </div>
            <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 pt-[4px]">
              <div className="h-px bg-[#d1d1d1]" />
            </div>
          </section>
          </div>
        </>
      ) : (
        <section className="bg-[#f8f4f1]">
          <div className="max-w-[1189px] mx-auto px-[24px] py-[32px] flex gap-[40px] items-center">
            <div className="flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px">
              <div className="flex flex-col gap-[24px]">
                <p className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#042a21] m-0">
                  {isA1SubEndedLow ? (
                    <><span className="bg-[#FDE68A]">Your subscription has ended.</span> That's okay! You have 3 more months to answer questions and order your book.</>
                  ) : isA1SubEnded ? (
                    <><span className="bg-[#FDE68A]">Your subscription has ended.</span> You can still edit your stories and <button type="button" className="underline cursor-pointer hover:opacity-70 transition-opacity">print your book</button>.</>

                  ) : isA1New ? (
                    <>Hi Brian! Raymond gifted you Storyworth to capture your life story in a hardcover book.</>
                  ) : isA1FirstQuestion ? (
                    <span className="bg-[#D6ECF5] p-[1px]">Hey Brian! Your first question has arrived.{' '}
                    <button type="button" className="underline cursor-pointer hover:opacity-70 transition-opacity" onClick={() => questionCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>Take a look.</button></span>
                  ) : isA1FirstQuestionAnswered ? (
                    <>Nice work, Brian! You added a story this week. You can always{' '}
                    <button type="button" className="underline cursor-pointer hover:opacity-70 transition-opacity">edit</button>
                    {' '}or{' '}
                    <button type="button" className="underline cursor-pointer hover:opacity-70 transition-opacity">add photos</button>.</>
                  ) : (
                    <span className="bg-[#D6ECF5] p-[1px]">Hey Brian! Raymond asked a question this week.{' '}
                    <button type="button" className="underline cursor-pointer hover:opacity-70 transition-opacity" onClick={() => questionCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>Take a look.</button></span>
                  )}
                </p>
                <div className="relative group/title cursor-pointer w-fit">
                  <p className="font-['GT_Super_Display:Medium'] text-[48px] tracking-[-0.48px] m-0 leading-[1] text-[#042a21] group-hover/title:underline decoration-[#042a21]">My Life Stories</p>
                  <span className="absolute top-1/2 -translate-y-1/2 left-full ml-[16px] z-[50] bg-[#042a21] text-white rounded-[4px] px-[8px] py-[3px] text-[11px] leading-[16px] whitespace-nowrap opacity-0 group-hover/title:opacity-100 transition-opacity pointer-events-none font-['GT_America:Medium']">Edit book title</span>
                </div>
                <p className="font-['GT_Super_Display:Regular'] text-[22px] tracking-[-0.22px] text-[#042a21] m-0 leading-[normal] mt-[-4px]">by{' '}
                  <span className="relative group/author cursor-pointer">
                    <span className="group-hover/author:underline decoration-[#042a21]">Brian Little</span>
                    <span className="absolute top-1/2 -translate-y-1/2 left-full ml-[16px] z-[50] bg-[#042a21] text-white rounded-[4px] px-[8px] py-[3px] text-[11px] leading-[16px] whitespace-nowrap opacity-0 group-hover/author:opacity-100 transition-opacity pointer-events-none font-['GT_America:Medium']">Change author name</span>
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-[16px]">
                <MenuButton />
                {isA1New && (
                  <button type="button" className="cursor-pointer flex gap-[8px] h-[40px] items-center px-[12px] rounded-[20px] border-2 border-transparent hover:bg-[#efefef] hover:border-[#042a21] hover:text-[#042a21] transition-colors text-[#6b7268]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-[24px] flex-shrink-0" aria-hidden>
                      <path d="M7.5 3.5C5.9442 3.54667 5.01661 3.71984 4.37477 4.36227C3.49609 5.24177 3.49609 6.6573 3.49609 9.48836L3.49609 15.9944C3.49609 18.8255 3.49609 20.241 4.37477 21.1205C5.25345 22 6.66767 22 9.49609 22L14.4961 22C17.3245 22 18.7387 22 19.6174 21.1205C20.4961 20.241 20.4961 18.8255 20.4961 15.9944V9.48836C20.4961 6.6573 20.4961 5.24177 19.6174 4.36228C18.9756 3.71984 18.048 3.54667 16.4922 3.5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M7.49609 3.75C7.49609 2.7835 8.2796 2 9.24609 2H14.7461C15.7126 2 16.4961 2.7835 16.4961 3.75C16.4961 4.7165 15.7126 5.5 14.7461 5.5H9.24609C8.2796 5.5 7.49609 4.7165 7.49609 3.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M6.5 10L10.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M13.5 11C13.5 11 14 11 14.5 12C14.5 12 16.0882 9.5 17.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.5 16L10.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M13.5 17C13.5 17 14 17 14.5 18C14.5 18 16.0882 15.5 17.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-['GT_America:Medium'] leading-[20px] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">Finish setup</span>
                  </button>
                )}
              </div>
            </div>
            <div className="hidden sm:flex flex-col items-center flex-shrink-0">
              <HoverBook />
            </div>
          </div>
        </section>
      ))}

      {!isOptionC && !isAEnd && <div style={isNewUser ? { opacity: heroScrolled ? 1 : 0, pointerEvents: heroScrolled ? 'auto' : 'none', transition: 'opacity 0.7s ease-out' } : undefined}>{/* Progress message */}
      {(isA1New || isA1FirstQ || isA1Month4 || isA1Unengaged) && (
        isA1New ? (
          <div className={`w-full ${milestoneBarHighlight ? 'bg-[#D6ECF5]' : 'bg-white'} hover:bg-[#D6ECF5] sticky top-0 z-30 group transition-colors`}
            onClick={() => question1Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <div className="max-w-[1189px] mx-auto px-[24px] py-[24px]">
              <MilestoneTimeline
                variant="explore"
                animate={timelineAnimating}
                showTimeline2={showTimeline2}
                showBar={false}
                showBarFill={false}
                highlightButton={milestoneGlow}
                milestoneButtonRef={milestoneButtonRef}
                badgeHopDelay={1}
                subscriptionPercent={1}
              />
            </div>
            {/* Scroll progress bar — bottom edge, full width, 0→100% as user scrolls q1→q8 */}
            <div className={`absolute bottom-0 left-0 w-full h-[3px] transition-opacity duration-500 ${showTimeline2 ? 'opacity-0' : 'opacity-100'}`}>
              <div className="absolute left-0 top-0 h-full bg-[#068089]"
                style={{ width: `${revealState !== 'hidden' ? 100 : scrollProgress * 100}%`, transition: 'width 80ms linear', backgroundColor: '#7dd4d8' }} />
            </div>
            {/* Congratulations overlay — fades in with confetti, clears after 2.5s */}
            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 z-10 ${milestoneCongratsVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundColor: '#E9FAFC' }}>
              <p className="font-['GT_America:Medium'] text-[16px] leading-[24px] text-[#068089] text-center px-[48px] m-0">
                Congratulations! You've reached your first milestone by exploring your memoir questions!
              </p>
            </div>
          </div>
        ) : isAnySubEnded ? (
          <div className="w-full bg-[#FEF3C7] hover:bg-[#FDE68A] sticky top-0 z-30 group transition-colors">
            <div className="max-w-[1189px] mx-auto px-[24px] py-[16px]">
              <MilestoneTimeline
                variant="explore"
                showTimeline2={true}
                animate={false}
                showBar={false}
                subscriptionEnded={true}
                milestoneCount={8}
                storyCount={15}
                subscriptionPercent={100}
                renewCopy={isA1SubEndedLow ? 'You have 3 more months to edit stories and answer questions. If you\'d like to receive weekly questions, you can renew your subscription.' : undefined}
              />
            </div>
          </div>
        ) : isA1FirstQ ? (
          <div className="w-full bg-white hover:bg-[#D6ECF5] sticky top-0 z-30 group transition-colors">
            <div className="max-w-[1189px] mx-auto px-[24px] py-[16px]">
              <MilestoneTimeline
                variant="explore"
                showTimeline2={true}
                animate={false}
                showBar={false}
                showBarFill={false}
                milestoneCount={isA1FiveAnsweredV2 ? 6 : isA1FiveAnswered ? 7 : isA1NearEnd ? 8 : isA1FirstQuestionAnswered ? 2 : 1}
                storyCount={(isA1FiveAnswered || isA1FiveAnsweredV2) ? 5 : isA1NearEnd ? 15 : undefined}
                nextMilestoneText={isA1NearEnd ? 'Add 20 stories' : isA1FiveAnsweredV2 ? 'Add a photo' : isA1FiveAnswered ? 'Add 10 stories' : isA1FirstQuestionAnswered ? 'Record a story over the phone, we\'ll write it' : undefined}
                nextMilestoneHoverText={isA1NearEnd ? "Add 20 stories: you've written 15/20" : isA1FiveAnswered ? "Add 10 stories: you've written 5/10" : undefined}
                subscriptionPercent={isA1NearEnd ? 90 : isA1FiveAnswered ? 19 : isA1FirstQuestionAnswered ? 10 : 5}
                milestoneModalV2={isA1FiveAnsweredV2}
              />
            </div>
          </div>
        ) : isA1Unengaged ? (
          <div className={`w-full ${milestoneBarHighlight ? 'bg-[#D6ECF5]' : 'bg-white'} hover:bg-[#D6ECF5] sticky top-0 z-30 group transition-colors`}
            onClick={() => question1Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <div className="max-w-[1189px] mx-auto px-[24px] py-[24px]">
              <MilestoneTimeline variant="explore" animate={timelineAnimating} showTimeline2={showTimeline2} showBar={false} showBarFill={false}
                highlightButton={milestoneGlow}
                milestoneButtonRef={milestoneButtonRef}
                badgeHopDelay={1}
                subscriptionPercent={17}
              />
            </div>
            <div className={`absolute bottom-0 left-0 w-full h-[3px] transition-opacity duration-500 ${showTimeline2 ? 'opacity-0' : 'opacity-100'}`}>
              <div className="absolute left-0 top-0 h-full"
                style={{ width: `${revealState !== 'hidden' ? 100 : scrollProgress * 100}%`, transition: 'width 80ms linear', backgroundColor: '#7dd4d8' }} />
            </div>
            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 z-10 ${milestoneCongratsVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundColor: '#E9FAFC' }}>
              <p className="font-['GT_America:Medium'] text-[16px] leading-[24px] text-[#068089] text-center px-[48px] m-0">
                Congratulations! You've reached your first milestone by exploring your memoir questions!
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 py-[24px]">
            <MilestoneTimeline variant="mid" milestoneText="10/20 stories written" weekLabel="It's week 13" />
          </div>
        )
      )}
      {isA1SubEnded && (
        <div className="max-w-[1189px] mx-auto px-[24px] pt-[44px] pb-[60px]">
          <style>{`.question-card:hover { border: 2px solid transparent; background: linear-gradient(white, white) padding-box, linear-gradient(80.71deg, rgb(85, 160, 140) 13.53%, rgb(50, 145, 172) 105.76%) border-box; }`}</style>
          <div className="question-card bg-white border-2 border-[#d8e0e3] rounded-[12px] flex flex-col items-center gap-[24px] p-[32px] cursor-pointer transition-all duration-200" style={{ boxShadow: '0px 4px 7px rgba(55,132,164,0.12)' }}>
            {/* Title */}
            <p className="font-['GT_Super_Display:Regular'] text-[28px] leading-[36px] tracking-[-0.28px] text-[#042a21] text-center m-0 whitespace-nowrap">Put your 14 stories on your shelf, Brain.</p>
            {/* Images + features */}
            <div className="flex items-center gap-[24px]">
              <div className="relative rounded-[8px] overflow-hidden flex-shrink-0 border-[3px] border-white" style={{ width: '160px', height: '137px', boxShadow: '0px 4px 23px 0px rgba(0,0,0,0.09)' }}>
                <img alt="" className="absolute top-0 max-w-none h-full" style={{ left: '-11.35%', width: '111.35%' }} src={imgPrintBookCover} />
              </div>
              <div className="relative rounded-[8px] overflow-hidden flex-shrink-0 border-[3px] border-white" style={{ width: '188px', height: '137px', boxShadow: '0px 4px 23px 0px rgba(0,0,0,0.09)' }}>
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full rounded-[8px]" src={imgPrintBookOpen} />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-['GT_America:Regular'] text-[16px] leading-[normal] text-[#61706f] m-0 whitespace-nowrap">Premium color printing</p>
                <p className="font-['GT_America:Regular'] text-[16px] leading-[normal] text-[#61706f] m-0 whitespace-nowrap">Free shipping in the U.S.</p>
                <p className="font-['GT_America:Regular'] text-[16px] leading-[normal] text-[#61706f] m-0 whitespace-nowrap">Scan to listen to your recordings</p>
                <p className="font-['GT_America:Regular'] text-[16px] leading-[normal] text-[#61706f] m-0 whitespace-nowrap">Order today and get it by [Date].</p>
              </div>
            </div>
            {/* CTA + subtext */}
            <div className="flex flex-col gap-[8px] items-center">
              <button type="button"
                className="h-[40px] rounded-[24px] px-[32px] flex items-center justify-center hover:opacity-90 transition-opacity"
                style={{ backgroundImage: 'linear-gradient(80.13deg, rgb(85, 160, 140) 13.53%, rgb(50, 145, 172) 105.76%)' }}
              >
                <span className="font-['GT_America:Medium'] text-[16px] tracking-[1.6px] uppercase text-white leading-[20px]">order my book</span>
              </button>
              <p className="font-['GT_America:Regular'] text-[14px] leading-[28px] text-[#61706f] m-0 whitespace-nowrap">You have a book credit to use, redeemable for 1 color hardcover book.</p>
            </div>
          </div>
        </div>
      )}
      {(isA1FirstQuestion || isA1Unengaged || isA1FiveAnswered || isA1FiveAnsweredV2 || isA1NearEnd || isA1Month4 || isA1SubEndedLow) && (
        <div className="max-w-[1189px] mx-auto px-[24px] pt-[44px] pb-[60px]">
          <style>{`.question-card:hover { border: 2px solid transparent; background: linear-gradient(white, white) padding-box, linear-gradient(80.71deg, rgb(85, 160, 140) 13.53%, rgb(50, 145, 172) 105.76%) border-box; }`}</style>
          <div ref={questionCardRef} className="question-card bg-white border-2 border-[#d8e0e3] rounded-[12px] cursor-pointer transition-all duration-200" style={{ boxShadow: '0px 8px 24px rgba(55, 132, 164, 0.09)' }}>
            <div className="flex flex-col items-center gap-[24px] px-[24px] py-[32px]">
              <div className="flex flex-col gap-[14px] items-center">
                <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] m-0">
                  {isA1Month4 ? 'Asked by Alex today' : isA1SubEndedLow ? 'Asked by Raymond' : 'Asked by Raymond today'}
                </p>
                <p className="font-['GT_Super_Display:Regular'] text-[28px] leading-[36px] tracking-[-0.28px] text-[#042a21] text-center m-0">
                  {isA1Unengaged ? 'How did you meet your closest friends?' :
                   (isA1FiveAnswered || isA1FiveAnsweredV2) ? 'What are your proudest achievements?' :
                   isA1NearEnd ? 'What do you want people to remember about you?' :
                   isA1SubEndedLow ? weekQuestions[subEndedLowShuffleIdx] :
                   weekQuestions[0]}
                </p>
              </div>
              <div className="flex flex-col items-center gap-[12px]">
                <button
                  type="button"
                  className="h-[40px] rounded-[24px] px-[32px] flex items-center justify-center hover:opacity-90 transition-opacity"
                  style={{ backgroundImage: 'linear-gradient(80.71deg, rgb(85, 160, 140) 13.53%, rgb(50, 145, 172) 105.76%)' }}
                >
                  <span className="font-['GT_America:Medium'] text-[16px] tracking-[1.6px] uppercase text-white leading-[20px]">tell my story</span>
                </button>
                {isA1SubEndedLow && (
                  <button type="button"
                    className="font-['GT_America:Regular'] text-[16px] leading-[24px] text-[#068089] underline cursor-pointer hover:opacity-70 transition-opacity"
                    onClick={() => setSubEndedLowShuffleIdx(i => (i + 1) % weekQuestions.length)}
                  >
                    Shuffle to a new question
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {(isA1New || isA1Unengaged) && (
        <div
          className="overflow-hidden pointer-events-none"
          style={{
            maxHeight: revealState === 'hidden' ? '116px' : '0px',
            opacity: revealState === 'hidden' ? 1 : 0,
            transition: 'max-height 0.4s ease-out, opacity 0.3s ease-out',
          }}
        >
          <div className="flex justify-center pt-[16px]">
            <img
              alt=""
              src={imgScrollArrow}
              style={{ width: '34px', height: '84px', animation: 'gentle-bounce 2.4s ease-in-out infinite' }}
            />
          </div>
        </div>
      )}
      {!(isA1FirstQ || isA1New || isA1Unengaged) && <div className={`max-w-[1189px] mx-auto ${isNewUser ? 'px-[24px]' : 'px-4 sm:px-6 lg:px-10'} ${isA1Month4 ? 'pt-[24px]' : isNewUser ? 'pt-[66px]' : 'pt-[68px]'} ${isNewUser ? 'pb-[14px]' : 'pb-[2px]'} flex flex-col gap-[16px]`}>
        {isNewUser ? (
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center gap-[16px]">
              <h2 className="font-['GT_Super_Display:Regular'] leading-[36px] text-[32px] text-[color:var(--green\/1000,#042a21)] tracking-[-0.32px] m-0">
                My Life Stories
              </h2>
              <MenuButton />
            </div>
          </div>
        ) : isA1Month4 ? (
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-[12px]">
              <h2 className="font-['GT_Super_Display:Regular'] leading-[36px] text-[32px] text-[color:var(--green\/1000,#042a21)] tracking-[-0.32px] m-0">
                My Life Stories
              </h2>
              <p className="font-['GT_America:Regular'] text-[16px] leading-[20px] text-[#12473a] m-0">
                Your stories are waiting to be written ·{' '}
                <button type="button" className="underline [text-decoration-skip-ink:none] cursor-pointer hover:opacity-70 transition-opacity">
                  read by Raymond
                </button>
              </p>
            </div>
            <div className="hidden sm:flex gap-[16px] items-center flex-shrink-0 pt-[4px]">
              <button type="button" className="bg-[#D6ECF5] border-2 border-transparent flex gap-[10px] h-[40px] items-center justify-center px-[24px] rounded-[24px] cursor-pointer hover:border-[#0E719A] transition-colors">
                <div className="relative size-[24px] flex-shrink-0">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNewStoryIcon} />
                </div>
                <span className="font-['GT_America:Medium'] leading-[20px] text-[14px] text-[#0E719A] tracking-[1.4px] uppercase whitespace-nowrap">new story</span>
              </button>
              <button type="button" className="border-2 border-[#068089] flex gap-[10px] h-[40px] items-center justify-center pl-[14px] pr-[18px] rounded-[24px] cursor-pointer hover:opacity-70 transition-opacity">
                <div className="relative size-[24px] flex-shrink-0">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMenuIcon} />
                </div>
                <span className="font-['GT_America:Medium'] leading-[20px] text-[16px] text-[#068089] tracking-[1.6px] uppercase whitespace-nowrap">my memoir</span>
                <div className="flex-none flex-shrink-0">
                  <div className="h-[9px] w-[14px] relative">
                    <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                      <img alt="" className="block max-w-none size-full" src={imgPolygon1} />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-['GT_Super_Display:Regular'] leading-[36px] text-[32px] text-[color:var(--green\/1000,#042a21)] tracking-[-0.32px] m-0">
              My memoir
            </h2>
            {isNewUser && (
              <p className="font-['GT_Super_Text:Book'] leading-[28px] text-[18px] text-[#445f59] max-w-[748px]">
                You can write, record and reply by email—your stories will appear here as you go.
              </p>
            )}
          </>
        )}
      </div>}

      {(isA1New || isA1FirstQuestionAnswered) && <div className="h-[40px]" aria-hidden />}
      <><div ref={sentinelRef} className="h-0" aria-hidden />
      {/* Sticky stories bar — full-width so bg covers edge-to-edge */}
      {(() => {
        const filterOptions = [
          { key: 'answered' as const, label: 'Answered' },
          { key: 'unanswered' as const, label: 'Unanswered' },
          { key: 'drafts' as const, label: 'Drafts' },
          { key: 'upcoming' as const, label: 'Upcoming questions' },
        ]
        const filterAvailable: Record<'answered' | 'unanswered' | 'drafts' | 'upcoming', boolean> = {
          answered:   isA1FirstQuestionAnswered || isA1FiveAnswered || isA1FiveAnsweredV2 || isA1NearEnd || isAnySubEnded || isA1Month4,
          unanswered: isA1Unengaged || isA1FiveAnswered || isA1FiveAnsweredV2 || isA1NearEnd || isAnySubEnded,
          drafts:     isA1FiveAnswered || isA1FiveAnsweredV2 || isA1NearEnd || isAnySubEnded,
          upcoming:   true,
        }
        const filterCount = filterOptions.filter(f => rowFilter[f.key]).length
        const _hasFilter = rowFilter.answered || rowFilter.unanswered || rowFilter.upcoming || rowFilter.drafts
        const firstRowHasFill = activeTab === 'week-by-week' && (() => {
          if (isA1Unengaged) return true // first row is always 'asked' or 'this-week', both have fill
          if (isA1FirstQuestion) return true // first row is always blue 'this-week'
          if (isA1New) return false // all future rows, no fill
          if (isA1FiveAnswered || isA1FiveAnsweredV2) {
            if (!_hasFilter) return false // first row is 'answered', no fill
            if (rowFilter.upcoming || rowFilter.unanswered) return true // 'this-week' or 'asked' rows have fill
            return false
          }
          if (isA1NearEnd || isAnySubEnded) {
            if (rowFilter.answered && !rowFilter.unanswered) return false // only answered rows shown
            return true // first row is 'asked' (gray fill)
          }
          return false
        })()
        return (
          <div className={`sticky ${isA1FirstQ ? 'top-[72px]' : (isA1New || isA1Unengaged) ? 'top-[88px]' : 'top-0'} z-20 bg-white transition-shadow duration-200`}
            style={{ boxShadow: tabBarStuck ? '0 4px 24px rgba(0,0,0,0.10)' : 'none' }}>
            <div className={`max-w-[1189px] mx-auto px-[24px] ${tabBarStuck ? 'pt-[24px] pb-[24px]' : `pt-[32px] ${firstRowHasFill ? 'pb-[26px]' : 'pb-[10px]'}`} transition-all duration-200`}>
              <div className="flex flex-col gap-[16px]">

                {/* Main row */}
                <div className="flex items-center justify-between">
                  {/* Left: title + filter + reorder + nearEnd badge */}
                  <div className="flex gap-[24px] items-center">
                    <p className="font-['GT_Super_Display:Regular'] text-[22px] leading-[36px] tracking-[-0.22px] text-[#042a21] m-0 whitespace-nowrap">Your stories</p>
                    <div className="hidden sm:flex gap-[16px] items-center">
                      {/* Filter button */}
                      <div className="relative">
                        {showFilterMenu && <div className="fixed inset-0 z-40" onClick={() => setShowFilterMenu(false)} />}
                        <button
                          type="button"
                          className="group bg-white border-2 border-[#61706f] hover:border-[#042a21] flex gap-[10px] h-[40px] items-center justify-center pl-[14px] pr-[12px] rounded-[12px] cursor-pointer hover:bg-[#f5f5f5] transition-colors relative z-50"
                          onClick={() => setShowFilterMenu(v => !v)}
                        >
                          <img alt="" className="size-[24px] flex-shrink-0 group-hover:brightness-0 transition-[filter] duration-150" src={imgFilterHorizontalIcon} />
                          <span className="font-['GT_America:Medium'] leading-[20px] text-[14px] text-[#61706f] group-hover:text-[#042a21] tracking-[1.4px] uppercase whitespace-nowrap transition-colors duration-150">
                            Filter{filterCount > 0 ? ` (${filterCount})` : ''}
                          </span>
                          <img alt="" className="size-[18px] flex-shrink-0 group-hover:brightness-0 transition-[filter] duration-150" src={imgChevronDown} />
                        </button>
                        {showFilterMenu && (
                          <div className="absolute left-0 top-[calc(100%+6px)] z-50 bg-white border border-[#d1d1d1] rounded-[12px] p-[16px] flex flex-col gap-[12px] items-start drop-shadow-[0px_4px_3px_rgba(0,0,0,0.12)]">
                            {filterOptions.map(({ key, label }) => {
                              const on = rowFilter[key]
                              const avail = filterAvailable[key]
                              return (
                                <button key={key} type="button"
                                  disabled={!avail}
                                  onClick={() => avail && setRowFilter(f => ({ ...f, [key]: !f[key] }))}
                                  className={`flex gap-[10px] items-center px-[16px] py-[8px] h-[36px] rounded-[22px] border-2 transition-colors ${!avail ? 'border-[#c0c0c0] cursor-not-allowed opacity-60' : on ? `${key !== 'upcoming' ? 'bg-[#f0f4f4] hover:bg-[#e6f0f0]' : 'hover:bg-[#f7f7f7]'} border-[#068089] cursor-pointer` : 'border-[#61706f] hover:bg-[#f7f7f7] cursor-pointer'}`}
                                >
                                  <span className={`font-['GT_America:Medium'] text-[14px] leading-[20px] whitespace-nowrap ${!avail ? 'text-[#8a8a8a]' : on ? 'text-[#07777e]' : 'text-[#61706f]'}`}>{label}</span>
                                  {on && avail && <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0"><path d="M4 10.5l4 4 8-8" stroke="#07777e" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                                </button>
                              )
                            })}
                          </div>
                        )}
                      </div>
                      {/* Reorder button */}
                      <button
                        type="button"
                        className="group cursor-pointer flex gap-[8px] h-[40px] items-center px-[12px] rounded-[20px] hover:bg-[#efefef] transition-colors"
                        onClick={() => setShowReorderModal(true)}
                      >
                        <img alt="" className="size-[24px] flex-shrink-0 group-hover:brightness-0 transition-[filter] duration-150" src={imgReorderIcon} />
                        <span className="font-['GT_America:Medium'] leading-[20px] text-[14px] text-[#6b7268] group-hover:text-[#042a21] tracking-[1.4px] uppercase whitespace-nowrap transition-colors duration-150">reorder</span>
                      </button>
                      {/* Near-end issue badge + navigation — inline at lg+, hidden here (shown in row below) */}
                      {isA1NearEnd && (
                        <div className="hidden lg:flex items-center gap-[12px] flex-shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              setIssueNavStep(1)
                              const el = nearEndErrorRowRef.current
                              if (!el) return
                              const y = el.getBoundingClientRect().top + window.scrollY - 170
                              window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
                            }}
                            className="flex gap-[8px] items-center pl-[10px] pr-[8px] h-[28px] rounded-[5px] bg-[#ffefeb] cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
                          >
                            <div className="size-[10px] rounded-full flex-shrink-0" style={{ backgroundColor: '#ED5D34', boxShadow: '0 0 0 3px #F4A68F' }} />
                            <span className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#e6562d] whitespace-nowrap">2 issues to resolve</span>
                          </button>
                          {issueNavStep !== null && (
                            <>
                              <span className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#6b7268] whitespace-nowrap">{issueNavStep} of 2</span>
                              <div className="flex flex-col gap-[2px]">
                                <button type="button"
                                  disabled={issueNavStep === 1}
                                  onClick={() => setIssueNavStep(1)}
                                  className="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] hover:bg-[#efefef] transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-default disabled:hover:bg-transparent"
                                >
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 8l4-4 4 4" stroke="#61706f" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </button>
                                <button type="button"
                                  disabled={issueNavStep === 2}
                                  onClick={() => setIssueNavStep(2)}
                                  className="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] hover:bg-[#efefef] transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-default disabled:hover:bg-transparent"
                                >
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="#61706f" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Right: New Story [+ Print my book for sub-ended] */}
                  <div className="flex items-center gap-[12px] flex-shrink-0">
                    <button type="button"
                      onClick={() => isA1SubEnded && setShowSubEndedNewStoryModal(true)}
                      className="bg-[#D6ECF5] flex gap-[10px] h-[40px] items-center justify-center px-[16px] rounded-[24px] cursor-pointer border-2 border-transparent hover:border-[#0E719A] transition-colors flex-shrink-0">
                      <div className="relative size-[24px] flex-shrink-0">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNewStoryIcon} />
                      </div>
                      <span className="font-['GT_America:Medium'] leading-[20px] text-[14px] text-[#0E719A] tracking-[1.4px] uppercase whitespace-nowrap">new story</span>
                    </button>
                    {isAnySubEnded && (
                      <button type="button"
                        onClick={() => isA1SubEndedLow && setShowSubEndedLowPrintModal(true)}
                        className="flex h-[40px] items-center justify-center px-[20px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 bg-[#068089]">
                        <span className="font-['GT_America:Medium'] leading-[20px] text-[16px] text-white tracking-[1.6px] uppercase whitespace-nowrap">Print my book</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Near-end issue badge + navigation — second row at tablet width, hidden at lg+ */}
                {isA1NearEnd && (
                  <div className="flex lg:hidden items-center gap-[12px]">
                    <button
                      type="button"
                      onClick={() => {
                        setIssueNavStep(1)
                        const el = nearEndErrorRowRef.current
                        if (!el) return
                        const y = el.getBoundingClientRect().top + window.scrollY - 170
                        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
                      }}
                      className="flex gap-[8px] items-center pl-[10px] pr-[8px] h-[28px] rounded-[5px] bg-[#ffefeb] cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
                    >
                      <div className="size-[10px] rounded-full flex-shrink-0" style={{ backgroundColor: '#ED5D34', boxShadow: '0 0 0 3px #F4A68F' }} />
                      <span className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#e6562d] whitespace-nowrap">2 issues to resolve</span>
                    </button>
                    {issueNavStep !== null && (
                      <>
                        <span className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#6b7268] whitespace-nowrap">{issueNavStep} of 2</span>
                        <div className="flex flex-col gap-[2px]">
                          <button type="button"
                            disabled={issueNavStep === 1}
                            onClick={() => setIssueNavStep(1)}
                            className="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] hover:bg-[#efefef] transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-default disabled:hover:bg-transparent"
                          >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 8l4-4 4 4" stroke="#61706f" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </button>
                          <button type="button"
                            disabled={issueNavStep === 2}
                            onClick={() => setIssueNavStep(2)}
                            className="w-[28px] h-[28px] flex items-center justify-center rounded-[6px] hover:bg-[#efefef] transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-default disabled:hover:bg-transparent"
                          >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="#61706f" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Active filter pills */}
                {filterCount > 0 && (
                  <div className="flex gap-[8px] items-center flex-wrap">
                    {filterOptions.filter(f => rowFilter[f.key]).map(({ key, label }) => (
                      <button key={key} type="button"
                        onClick={() => setRowFilter(f => ({ ...f, [key]: false }))}
                        className="bg-[#ebebeb] flex gap-[10px] h-[36px] items-center pb-[5px] pl-[16px] pr-[12px] pt-[4px] rounded-[22px] cursor-pointer hover:bg-[#e0e0e0] transition-colors"
                      >
                        <span className="font-['GT_America:Medium'] text-[14px] leading-[20px] text-[#12473a] whitespace-nowrap">{label}</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0"><path d="M6 6l8 8M14 6l-8 8" stroke="#12473a" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      </button>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        )
      })()}

      <div style={{ height: tabBarStuck ? 50 : 0, transition: 'height 0.25s ease-out' }} aria-hidden /></>
      {/* Tab content */}
      {activeTab === 'week-by-week' ? (
        <>
        {isA1Unengaged ? (
          <div className="relative max-w-[1189px] mx-auto" style={{ minHeight: 'calc(100vh + 1px)', paddingBottom: '80px', marginTop: '-4px' }}>
            {([
              { q: weekQuestions[0],                                         asker: 'Raymond',    status: 'asked'     },
              { q: 'What legacy do you want to leave behind?',               asker: 'Raymond',    status: 'asked'     },
              { q: 'Who has been your biggest fan?',                         asker: 'Raymond',    status: 'asked'     },
              { q: 'Did you have any jobs growing up?',                      asker: 'Storyworth', status: 'asked'     },
              { q: 'What was your favorite childhood vacation?',             asker: 'Raymond',    status: 'asked'     },
              { q: 'How did you decide on your career path?',                asker: 'Storyworth', status: 'asked'     },
              { q: 'What world event had the biggest impact on your life?',  asker: 'Raymond',    status: 'asked'     },
              { q: 'How did you meet your closest friends?',                 asker: 'Raymond',    status: 'this-week' },
              { q: 'What are your proudest achievements?',                   asker: 'Raymond',    status: 'future'    },
              { q: 'What do you hope your family remembers about you?',      asker: 'Storyworth', status: 'future'    },
            ] as { q: string; asker: string; status: 'asked' | 'this-week' | 'future' }[]).map(({ q, asker, status }, i) => {
              const _hasFilter = rowFilter.answered || rowFilter.unanswered || rowFilter.upcoming || rowFilter.drafts
              if (_hasFilter && status === 'asked' && !rowFilter.unanswered) return null
              if (_hasFilter && (status === 'future' || status === 'this-week') && !rowFilter.upcoming) return null
              if (status === 'this-week') return (
                <div key={i} className={`border-b border-[#ebebeb] border-l-[3px] border-l-[#5BB8DF] bg-[#f0f9ff] hover:bg-[#e0f4ff] py-[36px] px-[24px] flex items-center justify-between gap-[16px] group cursor-pointer`}>
                  <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                    <div className="flex gap-[8px] items-center flex-wrap">
                      <span className="bg-[#BDEBFF] text-[#006699] font-['GT_America:Regular'] text-[16px] leading-[18px] rounded-[6px] whitespace-nowrap" style={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '5px' }}>
                        This week
                      </span>
                      <span className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] whitespace-nowrap">Asked by {asker === 'Raymond' ? 'Raymond' : 'Storyworth for Raymond'}</span>
                    </div>
                    <div className="flex items-start gap-[8px]">
                      <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0 min-w-0">{q}</p>
                      <QuestionButtonBank horizontal />
                    </div>
                  </div>
                  <button type="button" className="bg-[#068089] flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible">
                    <span className="font-['GT_America:Medium'] text-[16px] text-white leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Answer →</span>
                  </button>
                </div>
              )
              return (
                <Fragment key={i}>
                <div ref={i === 0 ? question1Ref : i === 4 ? question5Ref : undefined} className={`border-b border-[#ebebeb] ${status === 'asked' ? 'border-l-[3px] border-l-[#d4d4d4] bg-[#fafafa] hover:bg-[#f3f3f3]' : 'hover:bg-[#fafafa]'} py-[36px] px-[24px] flex items-center justify-between gap-[16px] group cursor-pointer`}>
                  <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                    <div className="flex gap-[8px] items-center flex-wrap">
                      {status === 'future' && <span className="bg-[#ebebeb] text-[#6b7268] font-['GT_America:Regular'] text-[16px] leading-[18px] rounded-[6px] whitespace-nowrap" style={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '5px' }}>Upcoming</span>}
                      <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] m-0 whitespace-nowrap">
                        {status === 'asked' ? `Asked on ${getQuestionSendDate(i).replace('Monday, ', '')}` : `Sends on ${getQuestionSendDate(i)}`}
                      </p>
                    </div>
                    {(status === 'asked' || status === 'future') ? (
                      <div className="flex items-start gap-[8px]">
                        <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0 min-w-0">{q}</p>
                        <QuestionButtonBank horizontal />
                      </div>
                    ) : (
                      <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0">{q}</p>
                    )}
                  </div>
                  {(status === 'asked' || status === 'future') && (
                    <button type="button" className="bg-[#068089] flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible">
                      <span className="font-['GT_America:Medium'] text-[16px] text-white leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Answer →</span>
                    </button>
                  )}
                </div>
                </Fragment>
              )
            })}
          </div>
        ) : (isA1FiveAnswered || isA1FiveAnsweredV2) ? (() => {
          const rows = fiveAnsweredRows
          const AudioBadge = () => (
            <span className="group/audio relative inline-flex flex-shrink-0 mt-[2px]">
              <img alt="" className="size-[24px] flex-shrink-0" src={imgVoice} style={{ filter: 'invert(28%) sepia(8%) saturate(220%) hue-rotate(148deg) brightness(82%) contrast(90%)' }} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[6px] z-[50] bg-[#042a21] text-white rounded-[4px] px-[8px] py-[3px] text-[11px] leading-[16px] whitespace-nowrap opacity-0 group-hover/audio:opacity-100 transition-opacity pointer-events-none font-['GT_America:Medium']">Voice recording</span>
            </span>
          )
          const EngagementRow = () => (
            <div className="flex gap-[16px] items-center flex-wrap">
              <div className="relative group/heart flex gap-[8px] items-center">
                <img alt="" className="size-[24px] flex-shrink-0" src={imgHeart} style={{ filter: 'invert(44%) sepia(5%) saturate(150%) hue-rotate(55deg) brightness(97%) contrast(87%)' }} />
                <p className="font-['GT_America:Regular'] leading-[28px] text-[16px] text-[#6B7268] m-0 whitespace-nowrap">1</p>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[6px] z-[50] bg-[#042a21] text-white rounded-[4px] px-[8px] py-[3px] text-[11px] leading-[16px] whitespace-nowrap opacity-0 group-hover/heart:opacity-100 transition-opacity pointer-events-none font-['GT_America:Medium']">Raymond thanked you</span>
              </div>
              <div className="relative group/comment flex gap-[8px] items-center">
                <img alt="" className="size-[24px] flex-shrink-0" src={imgChat} style={{ filter: 'invert(44%) sepia(5%) saturate(150%) hue-rotate(55deg) brightness(97%) contrast(87%)' }} />
                <p className="font-['GT_America:Regular'] leading-[28px] text-[16px] text-[#6B7268] m-0 whitespace-nowrap">1</p>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[6px] z-[50] bg-[#042a21] text-white rounded-[4px] px-[8px] py-[3px] text-[11px] leading-[16px] whitespace-nowrap opacity-0 group-hover/comment:opacity-100 transition-opacity pointer-events-none font-['GT_America:Medium']">Raymond commented</span>
              </div>
              <div className="flex gap-[6px] items-center">
                <div className="size-[18px] rounded-full bg-[#D8A577] flex items-center justify-center flex-shrink-0">
                  <span className="font-['GT_America:Medium'] text-[10px] text-white tracking-[0.5px]" style={{ marginLeft: '1px' }}>R</span>
                </div>
                <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] m-0 whitespace-nowrap">Shared with Raymond</p>
              </div>
            </div>
          )
          const SharedRow = () => (
            <div className="flex gap-[6px] items-center">
              <div className="size-[18px] rounded-full bg-[#D8A577] flex items-center justify-center flex-shrink-0">
                <span className="font-['GT_America:Medium'] text-[10px] text-white tracking-[0.5px]" style={{ marginLeft: '1px' }}>R</span>
              </div>
              <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] m-0 whitespace-nowrap">Shared with Raymond</p>
            </div>
          )
          return (
            <div className="relative max-w-[1189px] mx-auto" style={{ minHeight: 'calc(100vh + 1px)', paddingBottom: '80px', marginTop: '-4px' }}>
              {rows.map(({ q, status, preview, variant }, i) => {
                const _hasFilter = rowFilter.answered || rowFilter.unanswered || rowFilter.upcoming || rowFilter.drafts
                if (_hasFilter && status === 'answered' && !rowFilter.answered) return null
                if (_hasFilter && status === 'asked' && !rowFilter.unanswered) return null
                if (_hasFilter && (status === 'future' || status === 'this-week') && !rowFilter.upcoming) return null
                if (status === 'this-week') return (
                  <div key={i} className={`border-b border-[#ebebeb] border-l-[3px] border-l-[#5BB8DF] bg-[#f0f9ff] hover:bg-[#e0f4ff] py-[36px] px-[24px] flex items-center justify-between gap-[16px] group cursor-pointer`}>
                    <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                      <div className="flex gap-[8px] items-center flex-wrap">
                        <span className="bg-[#BDEBFF] text-[#006699] font-['GT_America:Regular'] text-[16px] leading-[18px] rounded-[6px] whitespace-nowrap" style={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '5px' }}>
                          This week
                        </span>
                        <span className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] whitespace-nowrap">Asked by Raymond</span>
                      </div>
                      <div className="flex items-start gap-[8px]">
                        <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0 min-w-0">{q}</p>
                        <QuestionButtonBank horizontal />
                      </div>
                    </div>
                    <button type="button" className="bg-[#068089] flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible">
                      <span className="font-['GT_America:Medium'] text-[16px] text-white leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Answer →</span>
                    </button>
                  </div>
                )
                return (
                <Fragment key={i}>
                <div className={`border-b border-[#ebebeb] ${status === 'asked' ? 'border-l-[3px] border-l-[#d4d4d4] bg-[#fafafa] hover:bg-[#f3f3f3]' : status === 'draft' ? 'border-l-[3px] border-l-[#FCD34D] bg-[#FFFBEB] hover:bg-[#fef3c7]' : status === 'future' ? 'hover:bg-[#fafafa]' : 'hover:bg-[#fafafa]'} py-[36px] px-[24px] flex items-center justify-between gap-[16px] group cursor-pointer`}>
                  <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                    {/* Label row */}
                    <div className="flex gap-[8px] items-center flex-wrap">
                      {status === 'future' && <span className="bg-[#ebebeb] text-[#6b7268] font-['GT_America:Regular'] text-[16px] leading-[18px] rounded-[6px] whitespace-nowrap" style={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '5px' }}>Upcoming</span>}
                      <p className={`font-['GT_America:Regular'] text-[16px] leading-[28px] m-0 whitespace-nowrap text-[#61706f]`}>
                        {status === 'answered' ? `Chapter ${rows.slice(0, i + 1).filter(r => r.status === 'answered').length}` : status === 'draft' ? 'Draft' : status === 'asked' ? `Asked on ${getQuestionSendDate(i).replace('Monday, ', '')}` : `Sends on ${getQuestionSendDate(i)}`}
                      </p>
                    </div>
                    {/* Question text */}
                    {(status === 'asked' || status === 'future') ? (
                      <div className="flex items-start gap-[8px]">
                        <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0 min-w-0">{q}</p>
                        <QuestionButtonBank horizontal />
                      </div>
                    ) : (
                      <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0">{q}</p>
                    )}
                    {/* Preview */}
                    {(status === 'answered' || status === 'draft') && preview && (
                      <div className="flex items-start gap-[8px]">
                        {status === 'answered' && (variant === 'recording' || variant === 'all') && <AudioBadge />}
                        <p className="font-['GT_Super_Text:Book'] text-[16px] leading-[28px] text-[#445f59] m-0">{preview}</p>
                      </div>
                    )}
                    {/* Photos */}
                    {status === 'answered' && variant === 'photos' && (
                      <div className="flex items-start">
                        {[imgStoryPhoto1, imgStoryPhoto2, imgStoryPhoto3].map((src, pi) => (
                          <div key={pi} className={`border-2 border-white h-[77px] w-[60px] relative shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] flex-shrink-0 overflow-hidden${pi < 2 ? ' mr-[-8px]' : ''}`}>
                            <img alt="" className="absolute max-w-none object-cover size-full" src={src} />
                          </div>
                        ))}
                      </div>
                    )}
                    {status === 'answered' && variant === 'all' && (
                      <div className="border-2 border-white h-[77px] w-[60px] relative shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] flex-shrink-0 overflow-hidden">
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgStoryPhoto4} />
                      </div>
                    )}
                    {/* Footer */}
                    {status === 'answered' && (variant === 'engagement' || variant === 'all') && <EngagementRow />}
                    {status === 'answered' && (variant === 'plain' || variant === 'photos' || variant === 'recording') && <SharedRow />}
                  </div>
                  {status === 'answered' ? (
                    <button type="button" className="flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible">
                      <span className="font-['GT_America:Medium'] text-[16px] text-[#068089] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Open story →</span>
                    </button>
                  ) : status === 'draft' ? (
                    <button type="button" className="flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible">
                      <span className="font-['GT_America:Medium'] text-[16px] text-[#068089] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Open draft →</span>
                    </button>
                  ) : (status === 'asked' || status === 'future') ? (
                    <button type="button" className="bg-[#068089] flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible">
                      <span className="font-['GT_America:Medium'] text-[16px] text-white leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Answer →</span>
                    </button>
                  ) : null}
                </div>
                </Fragment>
              )})}
            </div>
          )
        })()
        : (isA1NearEnd || isAnySubEnded) ? (() => {
          const rows = nearEndRows
          const firstErrorIdx = rows.findIndex(r => r.error)
          const secondErrorIdx = rows.findIndex((r, i) => r.error && i > firstErrorIdx)

          const AudioBadge = () => (
            <span className="group/audio relative inline-flex flex-shrink-0 mt-[2px]">
              <img alt="" className="size-[24px] flex-shrink-0" src={imgVoice} style={{ filter: 'invert(28%) sepia(8%) saturate(220%) hue-rotate(148deg) brightness(82%) contrast(90%)' }} />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[6px] z-[50] bg-[#042a21] text-white rounded-[4px] px-[8px] py-[3px] text-[11px] leading-[16px] whitespace-nowrap opacity-0 group-hover/audio:opacity-100 transition-opacity pointer-events-none font-['GT_America:Medium']">Voice recording</span>
            </span>
          )
          const SharedRow = () => (
            <div className="flex gap-[6px] items-center">
              <div className="size-[18px] rounded-full bg-[#D8A577] flex items-center justify-center flex-shrink-0">
                <span className="font-['GT_America:Medium'] text-[10px] text-white tracking-[0.5px]" style={{ marginLeft: '1px' }}>R</span>
              </div>
              <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] m-0 whitespace-nowrap">Shared with Raymond</p>
            </div>
          )
          const EngagementRow = () => (
            <div className="flex gap-[16px] items-center">
              <div className="relative group/heart flex gap-[8px] items-center">
                <img alt="" className="size-[24px] flex-shrink-0" src={imgHeart} style={{ filter: 'invert(44%) sepia(5%) saturate(150%) hue-rotate(55deg) brightness(97%) contrast(87%)' }} />
                <p className="font-['GT_America:Regular'] leading-[28px] text-[16px] text-[#6B7268] m-0 whitespace-nowrap">3</p>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[6px] z-[50] bg-[#042a21] text-white rounded-[4px] px-[8px] py-[3px] text-[11px] leading-[16px] whitespace-nowrap opacity-0 group-hover/heart:opacity-100 transition-opacity pointer-events-none font-['GT_America:Medium']">Raymond thanked you</span>
              </div>
              <div className="relative group/comment flex gap-[8px] items-center">
                <img alt="" className="size-[24px] flex-shrink-0" src={imgChat} style={{ filter: 'invert(44%) sepia(5%) saturate(150%) hue-rotate(55deg) brightness(97%) contrast(87%)' }} />
                <p className="font-['GT_America:Regular'] leading-[28px] text-[16px] text-[#6B7268] m-0 whitespace-nowrap">1</p>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[6px] z-[50] bg-[#042a21] text-white rounded-[4px] px-[8px] py-[3px] text-[11px] leading-[16px] whitespace-nowrap opacity-0 group-hover/comment:opacity-100 transition-opacity pointer-events-none font-['GT_America:Medium']">Raymond commented</span>
              </div>
              <div className="flex gap-[6px] items-center">
                <div className="size-[18px] rounded-full bg-[#D8A577] flex items-center justify-center flex-shrink-0">
                  <span className="font-['GT_America:Medium'] text-[10px] text-white tracking-[0.5px]" style={{ marginLeft: '1px' }}>R</span>
                </div>
                <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] m-0 whitespace-nowrap">Shared with Raymond</p>
              </div>
            </div>
          )

          return (
            <div className="relative max-w-[1189px] mx-auto" style={{ minHeight: 'calc(100vh + 1px)', paddingBottom: '80px', marginTop: '-4px' }}>
              {rows.map(({ q, status, preview, variant, error }, i) => {
                const _hasFilter = rowFilter.answered || rowFilter.unanswered || rowFilter.upcoming || rowFilter.drafts
                if (_hasFilter && status === 'answered' && !rowFilter.answered) return null
                if (_hasFilter && status === 'asked' && !rowFilter.unanswered) return null
                if (_hasFilter && (status === 'future' || status === 'this-week') && !rowFilter.upcoming) return null
                if (_hasFilter && status === 'draft' && !rowFilter.drafts) return null
                if (status === 'this-week') return (
                  <div key={i} className={`border-b border-[#ebebeb] border-l-[3px] border-l-[#5BB8DF] bg-[#f0f9ff] hover:bg-[#e0f4ff] py-[36px] px-[24px] flex items-center justify-between gap-[16px] group cursor-pointer`}>
                    <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                      <div className="flex gap-[8px] items-center flex-wrap">
                        <span className="bg-[#BDEBFF] text-[#006699] font-['GT_America:Regular'] text-[16px] leading-[18px] rounded-[6px] whitespace-nowrap" style={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '5px' }}>
                          This week
                        </span>
                        <span className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] whitespace-nowrap">Asked by Raymond</span>
                      </div>
                      <div className="flex items-start gap-[8px]">
                        <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0 min-w-0">{q}</p>
                        <QuestionButtonBank horizontal />
                      </div>
                    </div>
                    <button type="button" className="bg-[#068089] flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible">
                      <span className="font-['GT_America:Medium'] text-[16px] text-white leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Answer →</span>
                    </button>
                  </div>
                )
                return (
                  <Fragment key={i}>
                  <div ref={i === firstErrorIdx ? nearEndErrorRowRef : i === secondErrorIdx ? nearEndError2RowRef : undefined} className={`border-b border-[#ebebeb] ${status === 'asked' ? 'border-l-[3px] border-l-[#d4d4d4] bg-[#fafafa] hover:bg-[#f3f3f3]' : status === 'draft' ? 'border-l-[3px] border-l-[#FCD34D] bg-[#FFFBEB] hover:bg-[#fef3c7]' : status === 'future' ? 'hover:bg-[#fafafa]' : error ? 'border-l-[3px] border-l-[#ED5D34] hover:bg-[#fafafa]' : 'hover:bg-[#fafafa]'} py-[36px] px-[24px] flex items-center justify-between gap-[16px] group cursor-pointer`}>
                    <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                      <div className="flex gap-[8px] items-center flex-wrap">
                        {status === 'future' && <span className="bg-[#ebebeb] text-[#6b7268] font-['GT_America:Regular'] text-[16px] leading-[18px] rounded-[6px] whitespace-nowrap" style={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '5px' }}>Upcoming</span>}
                        <p className={`font-['GT_America:Regular'] text-[16px] leading-[28px] m-0 whitespace-nowrap text-[#61706f]`}>
                          {status === 'answered' ? `Chapter ${rows.slice(0, i + 1).filter(r => r.status === 'answered').length}` : status === 'draft' ? 'Draft' : status === 'asked' ? `Asked on ${getQuestionSendDate(i).replace('Monday, ', '')}` : `Sends on ${getQuestionSendDate(i)}`}
                        </p>
                        {error && (
                          <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] m-0 text-[#ED5D34] whitespace-nowrap">
                            {error}{' '}
                            <span className="underline cursor-pointer">Resolve →</span>
                          </p>
                        )}
                      </div>
                      {(status === 'asked' || status === 'future') ? (
                        <div className="flex items-start gap-[8px]">
                          <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0 min-w-0">{q}</p>
                          <QuestionButtonBank horizontal />
                        </div>
                      ) : (
                        <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0">{q}</p>
                      )}
                      {(status === 'answered' || status === 'draft') && preview && (
                        <div className="flex items-start gap-[8px]">
                          {status === 'answered' && (variant === 'recording' || variant === 'all') && <AudioBadge />}
                          <p className="font-['GT_Super_Text:Book'] text-[16px] leading-[28px] text-[#445f59] m-0">{preview}</p>
                        </div>
                      )}
                      {status === 'answered' && variant === 'photos' && (
                        <div className="flex items-start">
                          {[imgStoryPhoto1, imgStoryPhoto2, imgStoryPhoto3].map((src, pi) => (
                            <div key={pi} className={`border-2 border-white h-[77px] w-[60px] relative shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] flex-shrink-0 overflow-hidden${pi < 2 ? ' mr-[-8px]' : ''}`}>
                              <img alt="" className="absolute max-w-none object-cover size-full" src={src} />
                            </div>
                          ))}
                        </div>
                      )}
                      {status === 'answered' && variant === 'engagement' && <EngagementRow />}
                      {status === 'answered' && (variant === 'plain' || variant === 'photos' || variant === 'recording') && <SharedRow />}
                    </div>
                    {status === 'answered' ? (
                      <button type="button" className="flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible">
                        <span className="font-['GT_America:Medium'] text-[16px] text-[#068089] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Open story →</span>
                      </button>
                    ) : status === 'draft' ? (
                      <button type="button" className="flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible">
                        <span className="font-['GT_America:Medium'] text-[16px] text-[#068089] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Open draft →</span>
                      </button>
                    ) : (status === 'asked' || status === 'future') ? (
                      <button type="button" className="bg-[#068089] flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible">
                        <span className="font-['GT_America:Medium'] text-[16px] text-white leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Answer →</span>
                      </button>
                    ) : null}
                  </div>
                  </Fragment>
                )
              })}
            </div>
          )
        })()
        : isA1FirstQuestionAnswered ? (
          <div
            className="relative max-w-[1189px] mx-auto"
            style={{ minHeight: 'calc(100vh + 1px)', paddingBottom: '80px', marginTop: '-4px' }}
          >
            {[
              { q: weekQuestions[0], asker: 'Raymond' },
              { q: 'What legacy do you want to leave behind?', asker: 'Raymond' },
              { q: 'Who has been your biggest fan?', asker: 'Raymond' },
              { q: 'Did you have any jobs growing up?', asker: 'Storyworth' },
              { q: 'What was your favorite childhood vacation?', asker: 'Raymond' },
              { q: 'How did you decide on your career path?', asker: 'Storyworth' },
              { q: 'What world event had the biggest impact on your life?', asker: 'Raymond' },
              { q: 'How did you meet your closest friends?', asker: 'Storyworth' },
              { q: 'What are your proudest achievements?', asker: 'Raymond' },
              { q: 'What do you hope your family remembers about you?', asker: 'Storyworth' },
            ].map(({ q, asker }, i) => {
              const _hasFilter = rowFilter.answered || rowFilter.unanswered || rowFilter.upcoming || rowFilter.drafts
              if (_hasFilter && i === 0 && !rowFilter.answered) return null
              if (_hasFilter && i > 0 && !rowFilter.upcoming) return null
              return (<Fragment key={i}>
                <div
                className={`border-b border-[#ebebeb] hover:bg-[#fafafa] py-[36px] px-[24px] flex items-center justify-between gap-[16px] group cursor-pointer`}
              >
                <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                  <div className="flex gap-[8px] items-center flex-wrap">
                    {i > 0 && <span className="bg-[#ebebeb] text-[#6b7268] font-['GT_America:Regular'] text-[16px] leading-[18px] rounded-[6px] whitespace-nowrap" style={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '5px' }}>Upcoming</span>}
                    <p className={`font-['GT_America:Regular'] text-[16px] leading-[28px] m-0 whitespace-nowrap text-[#61706f]`}>
                      {i === 0 ? 'Chapter 1' : `Sends on ${getQuestionSendDate(i)}`}
                    </p>
                    {i === 1 && (
                      <div className="flex gap-[6px] items-center flex-shrink-0">
                        <span className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f]">·</span>
                        <span className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] flex items-center gap-[4px] whitespace-nowrap">
                          Asked by {asker === 'Raymond' ? 'Raymond' : 'Storyworth for Raymond'}
                        </span>
                      </div>
                    )}
                  </div>
                  {i === 0 ? (
                    <>
                      <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0">
                        {q}
                      </p>
                      <p className="font-['GT_Super_Text:Book'] text-[16px] leading-[28px] text-[#445f59] m-0">
                        "I remember the summer days spent at my grandmother's house, where we would bake cookies and play in the garden, surrounded by laughter..."
                      </p>
                      <div className="flex gap-[6px] items-center">
                        <div className="size-[18px] rounded-full bg-[#D8A577] flex items-center justify-center flex-shrink-0">
                          <span className="font-['GT_America:Medium'] text-[10px] text-white tracking-[0.5px]" style={{ marginLeft: '1px' }}>R</span>
                        </div>
                        <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] m-0 whitespace-nowrap">
                          Shared with Raymond
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-start gap-[8px]">
                      <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0 min-w-0">
                        {q}
                      </p>
                      <QuestionButtonBank horizontal />
                    </div>
                  )}
                </div>
                {i === 0 ? (
                  <button
                    type="button"
                    className="flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible"
                  >
                    <span className="font-['GT_America:Medium'] text-[16px] text-[#068089] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Open story →</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="bg-[#068089] flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible"
                  >
                    <span className="font-['GT_America:Medium'] text-[16px] text-white leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Answer →</span>
                  </button>
                )}
              </div>
              </Fragment>)
            })}
          </div>
        ) : isA1FirstQuestion ? (
          <div
            className="relative max-w-[1189px] mx-auto"
            style={{ minHeight: 'calc(100vh + 1px)', paddingBottom: '80px', marginTop: '-4px' }}
          >
            {[
              { q: weekQuestions[0], asker: 'Raymond' },
              { q: 'What legacy do you want to leave behind?', asker: 'Raymond' },
              { q: 'Who has been your biggest fan?', asker: 'Raymond' },
              { q: 'Did you have any jobs growing up?', asker: 'Storyworth' },
              { q: 'What was your favorite childhood vacation?', asker: 'Raymond' },
              { q: 'How did you decide on your career path?', asker: 'Storyworth' },
              { q: 'What world event had the biggest impact on your life?', asker: 'Raymond' },
              { q: 'How did you meet your closest friends?', asker: 'Storyworth' },
              { q: 'What are your proudest achievements?', asker: 'Raymond' },
              { q: 'What do you hope your family remembers about you?', asker: 'Storyworth' },
            ].map(({ q, asker }, i) => {
              const _hasFilter = rowFilter.answered || rowFilter.unanswered || rowFilter.upcoming || rowFilter.drafts
              if (_hasFilter && !rowFilter.upcoming) return null
              return (<Fragment key={i}>
                <div
                className={`border-b border-[#ebebeb] ${i === 0 ? 'border-l-[3px] border-l-[#5BB8DF] bg-[#f0f9ff] hover:bg-[#e0f4ff]' : 'hover:bg-[#fafafa]'} py-[36px] px-[24px] flex items-center justify-between gap-[16px] group cursor-pointer`}
              >
                <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                  <div className="flex gap-[8px] items-center flex-wrap">
                    {i === 0 && (
                      <span className="bg-[#BDEBFF] text-[#006699] font-['GT_America:Regular'] text-[16px] leading-[18px] rounded-[6px] whitespace-nowrap" style={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '5px' }}>
                        This week
                      </span>
                    )}
                    {i > 0 && <span className="bg-[#ebebeb] text-[#6b7268] font-['GT_America:Regular'] text-[16px] leading-[18px] rounded-[6px] whitespace-nowrap" style={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '5px' }}>Upcoming</span>}
                    {i === 0 ? (
                      <span className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] whitespace-nowrap">Asked by {asker === 'Raymond' ? 'Raymond' : 'Storyworth for Raymond'}</span>
                    ) : (
                      <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] m-0 whitespace-nowrap">{`Sends on ${getQuestionSendDate(i)}`}</p>
                    )}
                  </div>
                  <div className="flex items-start gap-[8px]">
                    <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0 min-w-0">
                      {q}
                    </p>
                    <QuestionButtonBank horizontal />
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-[#068089] flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible"
                >
                  <span className="font-['GT_America:Medium'] text-[16px] text-white leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Answer →</span>
                </button>
              </div>
              </Fragment>)
            })}
          </div>
        ) : isA1New ? (
          <div>
            {/* Questions 1–10 */}
            <div
              className="relative max-w-[1189px] mx-auto"
              style={{ minHeight: 'calc(100vh + 1px)', paddingBottom: '80px', marginTop: '-4px' }}
            >
              <div>
                {(() => {
                  const _hasFilter = rowFilter.answered || rowFilter.unanswered || rowFilter.upcoming || rowFilter.drafts
                  return <>
                    {optionCWeeks.slice(0, 10).map((week, i) => {
                      if (_hasFilter && !rowFilter.upcoming) return null
                      return (<div
                    key={week.weekNum}
                    ref={i === 0 ? question1Ref : i === 7 ? question8Ref : undefined}
                    className={`border-b border-[#ebebeb] py-[36px] px-[24px] flex items-center justify-between gap-[16px] group cursor-pointer hover:bg-[#fafafa]`}
                  >
                    <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                      <div className="flex gap-[8px] items-center flex-wrap">
                        <span className="bg-[#ebebeb] text-[#6b7268] font-['GT_America:Regular'] text-[16px] leading-[18px] rounded-[6px] whitespace-nowrap" style={{ paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '5px' }}>Upcoming</span>
                        <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] m-0 whitespace-nowrap">
                          {i === 0 ? `Your first question will send on ${getQuestionSendDate(0)}` : `Sends on ${getQuestionSendDate(i)}`}
                        </p>
                      </div>
                      <div className="flex items-start gap-[8px]">
                        <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0 min-w-0">
                          {week.question}
                        </p>
                        <QuestionButtonBank horizontal />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="bg-[#068089] flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible"
                    >
                      <span className="font-['GT_America:Medium'] text-[16px] text-white leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Answer →</span>
                    </button>
                  </div>
                  )
                })}
                  </>
                })()}
              </div>
            </div>
          </div>
        ) : isANewReveal && revealState !== 'revealed' ? (
          <div className="min-h-[calc(100vh+1px)] flex flex-col items-center gap-[16px] pb-[46px] px-[24px]">
            <img alt="" className="flex-none w-[89px]" src={imgClouds} />
            <div className="flex flex-col gap-[6px] items-center text-center max-w-[520px]">
              <p className="font-['GT_Super_Display:Medium'] leading-[34px] text-[20px] text-[#042a21] tracking-[-0.2px]">
                Raymond has asked 10 questions. See what they are!
              </p>
              <p className="font-['GT_Super_Text:Book'] leading-[28px] text-[16px] text-[#61706f]">
                We'll send one each week starting on Monday, June 24th.
              </p>
            </div>
            <button
              type="button"
              onClick={handleReveal}
              className="bg-[#068089] h-[40px] rounded-[24px] px-[32px] cursor-pointer hover:opacity-80 transition-opacity flex items-center"
            >
              <span className="font-['GT_America:Medium'] leading-[20px] text-[16px] text-white tracking-[1.6px] uppercase whitespace-nowrap">
                Reveal my questions
              </span>
            </button>
          </div>
        ) : (
          <WeekByWeekPanel
            isNewUser={isNewUser}
            currentPage={currentPage} setCurrentPage={setCurrentPage}
            pendingScrollWeek={pendingScrollWeek} setPendingScrollWeek={setPendingScrollWeek}
          />
        )}
        {(isA1New || isA1FirstQ || isA1Unengaged) && (
          <div className="flex flex-col items-center text-center pt-[20px] pb-[64px] px-[24px]">
            <p className="font-['GT_Super_Display:Regular'] text-[22px] leading-[30px] tracking-[-0.22px] text-[#042a21] m-0 mb-[12px]">
              {isAnySubEnded ? 'Ready to print your book?' : 'Ready to add more questions?'}
            </p>
            <p className="font-['GT_America:Regular'] text-[16px] leading-[24px] text-[#61706f] m-0 mb-[24px]">
              {isAnySubEnded ? 'Preview your book and order a premium, hardcover book to put on your shelf.' : 'Write your own, browse our library, or try Magic Questions.'}
            </p>
            <button type="button" className="bg-[#068089] flex h-[40px] items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-90 transition-opacity">
              <span className="font-['GT_America:Medium'] text-[14px] text-white leading-[20px] tracking-[1.4px] uppercase whitespace-nowrap">{isAnySubEnded ? 'Print my book' : 'Add more questions'}</span>
            </button>
          </div>
        )}
        </>
      ) : activeTab === 'stories' ? (
        <div className={(isA1FirstQuestionAnswered || isA1FiveAnswered || isA1FiveAnsweredV2 || isA1NearEnd || isAnySubEnded) ? '' : 'max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-[80px] mt-4 sm:mt-0'}>
          {(isA1NearEnd || isAnySubEnded || isA1FiveAnswered || isA1FiveAnsweredV2) ? (() => {
            const answeredRows = (isA1NearEnd || isAnySubEnded ? nearEndRows : fiveAnsweredRows).filter(r => r.status === 'answered')
            const heartCount = (isA1NearEnd || isAnySubEnded) ? 3 : 1
            const AudioBadge = () => (
              <span className="group/audio relative inline-flex flex-shrink-0 mt-[2px]">
                <img alt="" className="size-[24px] flex-shrink-0" src={imgVoice} style={{ filter: 'invert(28%) sepia(8%) saturate(220%) hue-rotate(148deg) brightness(82%) contrast(90%)' }} />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[6px] z-[50] bg-[#042a21] text-white rounded-[4px] px-[8px] py-[3px] text-[11px] leading-[16px] whitespace-nowrap opacity-0 group-hover/audio:opacity-100 transition-opacity pointer-events-none font-['GT_America:Medium']">Voice recording</span>
              </span>
            )
            const EngagementRow = () => (
              <div className="flex gap-[16px] items-center flex-wrap">
                <div className="relative group/heart flex gap-[8px] items-center">
                  <img alt="" className="size-[24px] flex-shrink-0" src={imgHeart} style={{ filter: 'invert(44%) sepia(5%) saturate(150%) hue-rotate(55deg) brightness(97%) contrast(87%)' }} />
                  <p className="font-['GT_America:Regular'] leading-[28px] text-[16px] text-[#6B7268] m-0 whitespace-nowrap">{heartCount}</p>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[6px] z-[50] bg-[#042a21] text-white rounded-[4px] px-[8px] py-[3px] text-[11px] leading-[16px] whitespace-nowrap opacity-0 group-hover/heart:opacity-100 transition-opacity pointer-events-none font-['GT_America:Medium']">Raymond thanked you</span>
                </div>
                <div className="relative group/comment flex gap-[8px] items-center">
                  <img alt="" className="size-[24px] flex-shrink-0" src={imgChat} style={{ filter: 'invert(44%) sepia(5%) saturate(150%) hue-rotate(55deg) brightness(97%) contrast(87%)' }} />
                  <p className="font-['GT_America:Regular'] leading-[28px] text-[16px] text-[#6B7268] m-0 whitespace-nowrap">1</p>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[6px] z-[50] bg-[#042a21] text-white rounded-[4px] px-[8px] py-[3px] text-[11px] leading-[16px] whitespace-nowrap opacity-0 group-hover/comment:opacity-100 transition-opacity pointer-events-none font-['GT_America:Medium']">Raymond commented</span>
                </div>
                <div className="flex gap-[6px] items-center">
                  <div className="size-[18px] rounded-full bg-[#D8A577] flex items-center justify-center flex-shrink-0">
                    <span className="font-['GT_America:Medium'] text-[10px] text-white tracking-[0.5px]" style={{ marginLeft: '1px' }}>R</span>
                  </div>
                  <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] m-0 whitespace-nowrap">Shared with Raymond</p>
                </div>
              </div>
            )
            const SharedRow = () => (
              <div className="flex gap-[6px] items-center">
                <div className="size-[18px] rounded-full bg-[#D8A577] flex items-center justify-center flex-shrink-0">
                  <span className="font-['GT_America:Medium'] text-[10px] text-white tracking-[0.5px]" style={{ marginLeft: '1px' }}>R</span>
                </div>
                <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] m-0 whitespace-nowrap">Shared with Raymond</p>
              </div>
            )
            return (
              <div className="relative max-w-[1189px] mx-auto" style={{ minHeight: 'calc(100vh + 1px)', paddingBottom: '80px', marginTop: '-4px' }}>
                {answeredRows.map(({ q, preview, variant }, i) => (
                  <div key={i} className={`${i < answeredRows.length - 1 ? 'border-b border-[#ebebeb] ' : ''}py-[36px] px-[24px] flex items-center justify-between gap-[16px] group cursor-pointer hover:bg-[#fafafa]`}>
                    <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                      <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] m-0 whitespace-nowrap">Chapter {i + 1}</p>
                      <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0">{q}</p>
                      {preview && (
                        <div className="flex items-start gap-[8px]">
                          {(variant === 'recording' || variant === 'all') && <AudioBadge />}
                          <p className="font-['GT_Super_Text:Book'] text-[16px] leading-[28px] text-[#445f59] m-0">{preview}</p>
                        </div>
                      )}
                      {variant === 'photos' && (
                        <div className="flex items-start">
                          {[imgStoryPhoto1, imgStoryPhoto2, imgStoryPhoto3].map((src, pi) => (
                            <div key={pi} className={`border-2 border-white h-[77px] w-[60px] relative shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] flex-shrink-0 overflow-hidden${pi < 2 ? ' mr-[-8px]' : ''}`}>
                              <img alt="" className="absolute max-w-none object-cover size-full" src={src} />
                            </div>
                          ))}
                        </div>
                      )}
                      {variant === 'all' && (
                        <div className="border-2 border-white h-[77px] w-[60px] relative shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] flex-shrink-0 overflow-hidden">
                          <img alt="" className="absolute max-w-none object-cover size-full" src={imgStoryPhoto4} />
                        </div>
                      )}
                      {(variant === 'engagement' || variant === 'all') && <EngagementRow />}
                      {(variant === 'plain' || variant === 'photos' || variant === 'recording') && <SharedRow />}
                    </div>
                    <button type="button" className="flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible">
                      <span className="font-['GT_America:Medium'] text-[16px] text-[#068089] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Open story →</span>
                    </button>
                  </div>
                ))}
              </div>
            )
          })() : isA1FirstQuestionAnswered ? (
            <div
              className="relative max-w-[1189px] mx-auto"
              style={{ minHeight: 'calc(100vh + 1px)', paddingBottom: '80px', marginTop: '-4px' }}
            >
              <div className="py-[36px] px-[24px] flex items-center justify-between gap-[16px] group cursor-pointer hover:bg-[#fafafa]">
                <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                  <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] m-0 whitespace-nowrap">
                    Chapter 1
                  </p>
                  <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0">
                    {weekQuestions[0]}
                  </p>
                  <p className="font-['GT_Super_Text:Book'] text-[16px] leading-[28px] text-[#445f59] m-0">
                    "I remember the summer days spent at my grandmother's house, where we would bake cookies and play in the garden, surrounded by laughter..."
                  </p>
                  <div className="flex gap-[6px] items-center">
                    <div className="size-[18px] rounded-full bg-[#D8A577] flex items-center justify-center flex-shrink-0">
                      <span className="font-['GT_America:Medium'] text-[10px] text-white tracking-[0.5px]" style={{ marginLeft: '1px' }}>R</span>
                    </div>
                    <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] text-[#61706f] m-0 whitespace-nowrap">
                      Shared with Raymond
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible"
                >
                  <span className="font-['GT_America:Medium'] text-[16px] text-[#068089] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Open story →</span>
                </button>
              </div>
            </div>
          ) : (isA1FirstQuestion || isA1New || isA1Unengaged) ? (
            <div className="flex flex-col items-center justify-center text-center py-[64px] px-[24px]">
              <p className="font-['GT_Super_Display:Regular'] text-[22px] leading-[30px] tracking-[-0.22px] text-[#042a21] m-0 mb-[12px]">
                Your stories are waiting to be written.
              </p>
              <p className="font-['GT_America:Regular'] text-[16px] leading-[24px] text-[#61706f] m-0 mb-[24px]">
                Your stories will collect here.
              </p>
              <button type="button" className="bg-[#ededed] border-2 border-transparent flex h-[40px] items-center justify-center px-[24px] rounded-[24px] cursor-pointer hover:border-[#61706f] transition-colors">
                <span className="font-['GT_America:Medium'] text-[14px] leading-[20px] text-[#61706f] tracking-[1.4px] uppercase whitespace-nowrap">Start a new story</span>
              </button>
            </div>
          ) : isNewUser ? (
            <div className="flex flex-col items-center justify-center py-[24px] px-[16px]">
              <div className="flex flex-col gap-[16px] items-center text-center max-w-[600px] py-[40px]">
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
      ) : activeTab === 'drafts' && (isA1FiveAnswered || isA1FiveAnsweredV2) ? (
        <div className="relative max-w-[1189px] mx-auto" style={{ minHeight: 'calc(100vh + 1px)', paddingBottom: '80px', marginTop: '-4px' }}>
          {(() => {
            const draftRow = fiveAnsweredRows.find(r => r.status === 'draft')!
            return (
              <div className="border-b border-[#ebebeb] border-l-[3px] border-l-[#FCD34D] bg-white hover:bg-[#fafafa] py-[36px] px-[24px] flex items-center justify-between gap-[16px] group cursor-pointer">
                <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                  <p className="font-['GT_America:Regular'] text-[16px] leading-[28px] m-0 whitespace-nowrap text-[#61706f]">Draft</p>
                  <p className="font-['GT_Super_Display:Medium'] text-[22px] leading-[34px] tracking-[-0.22px] text-[#042a21] m-0">{draftRow.q}</p>
                  {draftRow.preview && (
                    <p className="font-['GT_Super_Text:Book'] text-[16px] leading-[28px] text-[#445f59] m-0">{draftRow.preview}</p>
                  )}
                </div>
                <button type="button" className="flex-none h-[40px] flex items-center justify-center px-[32px] rounded-[24px] cursor-pointer hover:opacity-80 transition-opacity invisible group-hover:visible">
                  <span className="font-['GT_America:Medium'] text-[16px] text-[#068089] leading-[20px] tracking-[1.6px] uppercase whitespace-nowrap">Open draft →</span>
                </button>
              </div>
            )
          })()}
        </div>
      ) : activeTab === 'drafts' && (isA1FirstQuestion || isA1New || isA1FirstQuestionAnswered || isA1NearEnd || isAnySubEnded) ? (
        <div className="flex flex-col items-center justify-center text-center py-[64px] px-[24px]">
          <p className="font-['GT_Super_Display:Regular'] text-[22px] leading-[30px] tracking-[-0.22px] text-[#042a21] m-0 mb-[12px]">
            Your stories are waiting to be written.
          </p>
          <p className="font-['GT_America:Regular'] text-[16px] leading-[24px] text-[#61706f] m-0 mb-[24px]">
            Your drafts will collect here.
          </p>
          <button type="button" className="bg-[#ededed] border-2 border-transparent flex h-[40px] items-center justify-center px-[24px] rounded-[24px] cursor-pointer hover:border-[#61706f] transition-colors">
            <span className="font-['GT_America:Medium'] text-[14px] leading-[20px] text-[#61706f] tracking-[1.4px] uppercase whitespace-nowrap">Start a new story</span>
          </button>
        </div>
      ) : activeTab === 'upcoming' ? (
        <div className="flex flex-col items-center justify-center text-center py-[64px] px-[24px]">
          <p className="font-['GT_America:Regular'] text-[16px] leading-[24px] text-[#61706f] m-0">Upcoming questions will appear here.</p>
        </div>
      ) : activeTab === 'unanswered' ? (
        <div className="flex flex-col items-center justify-center text-center py-[64px] px-[24px]">
          <p className="font-['GT_America:Regular'] text-[16px] leading-[24px] text-[#61706f] m-0">Unanswered questions will appear here.</p>
        </div>
      ) : null}
      </div>}

      {showReorderModal && (
        <ReorderModal onClose={() => setShowReorderModal(false)} initialItems={reorderInitialItems} initialFilter={rowFilter} />
      )}
      {showSubEndedNewStoryModal && (
        <SubEndedNewStoryModal onClose={() => setShowSubEndedNewStoryModal(false)} />
      )}
      {showSubEndedLowPrintModal && (
        <SubEndedLowPrintModal onClose={() => setShowSubEndedLowPrintModal(false)} />
      )}
    </div>
  )
}
