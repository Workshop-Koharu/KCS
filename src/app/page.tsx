import Link from "next/link";
import { Terminal, Shield, MapPin, Gamepad2, Puzzle, Bot, Sparkles, ExternalLink, ArrowRight, Github, MessageSquare, Layers, Code2 } from "lucide-react";

export default function KcsPortal() {
  const projects = [
    {
      id: "sora",
      title: "Sora (소라)",
      category: "Discord Bot & Server Security",
      tagline: "Discord Components V2 기반 차세대 올인원 매니지먼트 & 4단계 인증 봇",
      description: "Sendwich SMS 점유 확인, Resend 이메일 인증, 고도화된 위키 지식 엔진, 티켓 시스템 및 포인트 경제를 갖춘 KCS의 플래그십 디스코드 봇입니다.",
      icon: Bot,
      color: "from-indigo-500 to-purple-500",
      link: "https://sora.koharu.live",
      github: "https://github.com/Workshop-Koharu/sora-bot",
      featured: true,
      badge: "KCS Official Bot",
    },
    {
      id: "nextups",
      title: "NextUps",
      category: "Multiplatform Gaming Platform",
      tagline: "Windows, PS, Switch, iOS, Android 게임 패치노트 & 버전 통합 허브",
      description: "전 세계 모든 게이머를 위한 실시간 패치 데이터베이스. 플랫폼별 버전 릴리즈와 공식 업데이트 노트를 직관적으로 비교하고 검색합니다.",
      icon: Gamepad2,
      color: "from-blue-500 to-cyan-500",
      link: "https://www.nextups.xyz",
      github: "https://github.com/Workshop-Koharu/NextUps",
      featured: true,
      badge: "Live Service",
    },
    {
      id: "snapbot",
      title: "SnapBot",
      category: "Visual Block Coding Engine",
      tagline: "제로 디펜던시 블록 코딩(Scratch/Entry 스타일) 디스코드 봇 IDE",
      description: "순수 TypeScript 엔진으로 구현된 드래그 앤 드롭 디스코드 봇 제작 도구. 코딩 경험이 없어도 손쉽게 커스텀 봇을 디자인하고 배포할 수 있습니다.",
      icon: Puzzle,
      color: "from-amber-500 to-orange-500",
      link: "https://snapbot.koharu.live",
      github: "https://github.com/Workshop-Koharu/SnapBot",
      featured: true,
      badge: "Creative Engine",
    },
    {
      id: "aura-ai",
      title: "Aura AI",
      category: "Machine Learning & Vision",
      tagline: "고성능 OCR 복원 및 멀티모달 데이터셋 추론 파이프라인",
      description: "문서와 이미지에서 정밀한 텍스트 및 구조를 복원하는 지능형 AI 모델 및 클라우드플레어/Kaggle 분산 복구 파이프라인 엔진입니다.",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      link: "#aura",
      github: "https://github.com/Workshop-Koharu",
      featured: false,
      badge: "AI Research",
    },
    {
      id: "koharu-maps",
      title: "Koharu Maps",
      category: "Geospatial & Navigation",
      tagline: "대화형 공간 데이터 시각화 및 고정밀 맵 엔진",
      description: "경량 벡터 렌더링과 지리 정보 시각화를 위한 커스텀 지도 인터페이스 플랫폼으로, 직관적인 공간 내비게이션을 제공합니다.",
      icon: MapPin,
      color: "from-emerald-500 to-teal-500",
      link: "#maps",
      github: "https://github.com/Workshop-Koharu",
      featured: false,
      badge: "Geo Engine",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#08090d] text-[#dbdee1] selection:bg-indigo-600 selection:text-white relative overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent blur-[160px] rounded-full"></div>
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-sky-500/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-purple-500/10 blur-[180px] rounded-full"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0b0d13]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px] shadow-lg shadow-indigo-500/20">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#0d0e14] font-black text-white text-base">
                KCS
              </div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white">Koharu Coding Server</span>
              <div className="text-[11px] text-neutral-400">kcs.koharu.live</div>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <Link href="#projects" className="text-sm font-medium text-neutral-400 hover:text-white transition">
              프로젝트
            </Link>
            <Link href="#community" className="text-sm font-medium text-neutral-400 hover:text-white transition">
              커뮤니티
            </Link>
            <a
              href="https://github.com/Workshop-Koharu"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#13151f]/80 px-4 py-2 text-sm font-semibold text-white hover:bg-white/[0.08] transition"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://sora.koharu.live"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:opacity-95 transition"
            >
              <Bot className="h-4 w-4" />
              Sora Bot 바로가기
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-400 mb-8 backdrop-blur-xl">
            <Code2 className="h-3.5 w-3.5" />
            KCS — Koharu Coding Server Studio Ecosystem
          </div>
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl leading-tight">
            아이디어를 현실로 코딩하는 곳,<br />
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Koharu Coding Server
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-400">
            KCS는 혁신적인 소프트웨어, 디스코드 봇, 게임 패치 허브, AI 및 인터랙티브 웹 플랫폼을 자체 제작하는
            독창적인 엔지니어링 스튜디오이자 활발한 테크 커뮤니티입니다.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#projects"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition"
            >
              프로젝트 전체 둘러보기
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://discord.gg/kcs"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-[#13151f]/80 backdrop-blur-xl px-7 py-3.5 text-base font-bold text-white hover:bg-white/[0.08] transition"
            >
              <MessageSquare className="h-4 w-4 text-indigo-400" />
              KCS 디스코드 참여
            </a>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="border-t border-white/[0.06] bg-[#0b0d13]/60 py-24 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Our Creations</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              KCS에서 직접 연구하고 개발한 핵심 프로젝트
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => {
              const Icon = proj.icon;
              return (
                <div
                  key={proj.id}
                  className="rounded-3xl border border-white/[0.07] bg-[#11131a]/80 backdrop-blur-xl p-8 hover:border-indigo-500/40 hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${proj.color} text-white shadow-lg`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-semibold text-neutral-400">
                        {proj.badge}
                      </span>
                    </div>

                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
                      {proj.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
                    <div className="text-xs font-semibold text-indigo-400 mb-3">{proj.tagline}</div>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-indigo-400 transition"
                    >
                      서비스 방문 <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-500 hover:text-white transition"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community & Stats */}
      <section id="community" className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">함께 코딩하고 성장하는 커뮤니티</h2>
          <p className="mt-4 text-sm text-neutral-400 max-w-xl mx-auto">
            KCS는 개발자, 기획자, 크리에이터들이 모여 차세대 기술을 실험하고 실제 프로덕트로 완성해 나가는 곳입니다.
          </p>
          <div className="mt-12 flex justify-center">
            <div className="rounded-3xl border border-white/[0.08] bg-[#11131a]/80 p-8 max-w-2xl w-full flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
              <div className="text-left">
                <div className="text-xl font-bold text-white">KCS 디스코드 커뮤니티</div>
                <div className="text-xs text-neutral-400 mt-1">Sora 봇 및 모든 KCS 소프트웨어 릴리즈 소식을 가장 빠르게 접하세요.</div>
              </div>
              <a
                href="https://discord.gg/kcs"
                className="rounded-2xl bg-[#5865F2] hover:bg-[#4752c4] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#5865F2]/25 transition shrink-0"
              >
                디스코드 서버 입장
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/[0.06] bg-[#08090d] py-12 text-center text-xs text-neutral-500 space-y-3">
        <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-400 font-medium">
          <a href="https://sora.koharu.live" target="_blank" rel="noreferrer" className="hover:text-white transition">
            Sora Bot (sora.koharu.live)
          </a>
          <span>•</span>
          <a href="https://www.nextups.xyz" target="_blank" rel="noreferrer" className="hover:text-white transition">
            NextUps (nextups.xyz)
          </a>
          <span>•</span>
          <a href="https://snapbot.koharu.live" target="_blank" rel="noreferrer" className="hover:text-white transition">
            SnapBot (snapbot.koharu.live)
          </a>
          <span>•</span>
          <a href="https://sora.koharu.live/policy" target="_blank" rel="noreferrer" className="hover:text-white transition">
            개인정보처리방침
          </a>
          <span>•</span>
          <a href="https://sora.koharu.live/terms" target="_blank" rel="noreferrer" className="hover:text-white transition">
            이용약관
          </a>
        </div>
        <p>© 2026 Koharu Coding Server (KCS). All projects engineered with passion.</p>
      </footer>
    </div>
  );
}
