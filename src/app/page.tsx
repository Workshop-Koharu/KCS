"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  Github,
  MessageSquare,
  Sparkles,
  Layers,
  Code2,
  Users,
  Shield,
  HelpCircle,
  Clock,
  Compass,
} from "lucide-react";

export default function KcsPortal() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const projects = [
    {
      id: "sora",
      title: "Sora (소라)",
      category: "bot",
      categoryName: "디스코드 봇",
      role: "올인원 서버 매니지먼트",
      tagline: "Discord Components V2 기반 차세대 4단계 보안 인증 봇",
      description:
        "Sendwich SMS 휴대폰 본인 확인, Resend 공식 6자리 이메일 인증, SVG 왜곡 캡챠, 위키 지식 엔진과 포인트 경제를 통합 제공하는 플래그십 디스코드 봇입니다.",
      logo: "/assets/logo-sora.png",
      link: "https://sora.koharu.live",
      status: "라이브 운영 중",
      inDevelopment: false,
      tags: ["Discord V2", "SMS 인증", "이메일 인증", "위키", "포인트"],
    },
    {
      id: "nextups",
      title: "NextUps",
      category: "gaming",
      categoryName: "게이밍",
      role: "게임 패치노트 플랫폼",
      tagline: "Windows, PS, Switch, iOS, Android 게임 버전 통합 허브",
      description:
        "전 세계 게이머를 위한 실시간 패치 데이터베이스. 플랫폼별 릴리즈와 공식 업데이트 노트를 직관적으로 비교하고 검색합니다.",
      logo: "/assets/logo-nextups.png",
      link: "https://www.nextups.xyz",
      status: "라이브 운영 중",
      inDevelopment: false,
      tags: ["게임 패치", "멀티플랫폼", "버전 트래커", "실시간"],
    },
    {
      id: "snapbot",
      title: "SnapBot",
      category: "dev",
      categoryName: "개발 도구",
      role: "비주얼 블록 코딩 IDE",
      tagline: "스크래치/엔트리 스타일 드래그 앤 드롭 디스코드 봇 제작 도구",
      description:
        "순수 TypeScript 엔진으로 구현된 노코드/로우코드 디스코드 봇 시각화 엔진. 블록을 조립하여 손쉽게 나만의 디스코드 봇을 빌드합니다.",
      logo: "/assets/logo-snapbot.ico",
      link: "https://snapbot.koharu.live",
      status: "라이브 운영 중",
      inDevelopment: false,
      tags: ["블록 코딩", "노코드", "TypeScript", "디스코드"],
    },
    {
      id: "koharu-maps",
      title: "Koharu Maps",
      category: "geo",
      categoryName: "공간/지도",
      role: "대화형 공간 데이터 맵",
      tagline: "대화형 공간 데이터 시각화 및 고정밀 맵 렌더링 엔진",
      description:
        "경량 벡터 렌더링과 지리 정보 시각화를 위한 고정밀 지도 플랫폼으로, 직관적인 공간 내비게이션을 선사합니다.",
      logo: "/assets/logo-maps.ico",
      link: "https://map.koharu.live",
      status: "라이브 운영 중",
      inDevelopment: false,
      tags: ["GIS", "벡터 맵", "공간 시각화", "지도"],
    },
    {
      id: "aura-ai",
      title: "Aura AI",
      category: "ai",
      categoryName: "AI 연구",
      role: "딥러닝 비전 & OCR",
      tagline: "고성능 OCR 복원 & 멀티모달 데이터셋 추론 파이프라인",
      description:
        "문서와 이미지에서 정밀한 텍스트 및 구조를 복원하는 최신 비전 딥러닝 모델 및 분산 복원 파이프라인 엔진입니다.",
      logo: "/assets/logo-aura.png",
      link: "",
      status: "개발 중",
      inDevelopment: true,
      tags: ["딥러닝", "OCR 복원", "멀티모달", "비전 AI"],
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="flex min-h-screen flex-col bg-[#0b0c10] text-[#dbdee1] selection:bg-indigo-600 selection:text-white">
      {/* 1. Header (Yeonhong Studio style with real logo & Top-only GitHub link) */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0b0c10]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-9 w-9 overflow-hidden rounded-xl bg-[#14161f] border border-white/[0.08] p-1 flex items-center justify-center">
              <img
                src="/assets/logo-kcs.png"
                alt="KCS Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="font-bold text-base text-white tracking-tight flex items-center gap-2">
                Koharu Coding Server
              </div>
              <div className="text-[11px] text-neutral-400 font-mono">kcs.koharu.live</div>
            </div>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
            <Link href="/" className="text-white">
              홈
            </Link>
            <Link href="#projects" className="hover:text-white transition">
              프로젝트
            </Link>
            <a
              href="https://kcs.koharu.live/support-server/kcs"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition flex items-center gap-1.5"
            >
              디스코드
              <ExternalLink className="h-3 w-3 text-neutral-500" />
            </a>
            <Link href="/policy" className="hover:text-white transition">
              정책 & 약관
            </Link>
          </nav>

          {/* Top Right Action: GitHub (Single designated place) & Discord */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/KCS-Koharu-Coding-Server"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#141620] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-white/[0.06] transition"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://kcs.koharu.live/support-server/kcs"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-[#5865F2] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#4752c4] transition shadow-sm"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>공식 디스코드</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section (Yeonhong Studio warm tone, zero neon) */}
      <section className="relative border-b border-white/[0.06] py-20 sm:py-28 bg-[#0e1017]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#151722] px-3.5 py-1 text-xs font-medium text-neutral-300 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
              Koharu Coding Server 공식 스튜디오 & 커뮤니티
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.15]">
              코드로 편리함을,<br />
              아이디어로 새로움을.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-400 leading-relaxed">
              KCS는 오픈소스 유틸리티부터 독립 소프트웨어까지 다양한 디지털 프로젝트를 직접 만들고 운영해요.
              기획부터 개발, 인프라 구축, 커뮤니티 유지보수까지 일관된 완성도를 추구합니다.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-neutral-900 hover:bg-neutral-100 transition shadow-sm"
              >
                프로젝트 둘러보기
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://kcs.koharu.live/support-server/kcs"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/[0.1] bg-[#141622] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1a1d2c] transition"
              >
                <MessageSquare className="h-4 w-4 text-indigo-400" />
                커뮤니티 디스코드
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services / Projects Showcase (Yeonhong layout) */}
      <section id="projects" className="py-20 bg-[#0b0c10]">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Heading */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              KCS가 만든 프로젝트를 둘러보세요
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              디스코드 봇부터 게이밍 플랫폼, 노코드 IDE, 공간 정보 엔진까지 — 직접 만들고 운영하는 프로젝트들을 모았어요.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "전체" },
                { id: "bot", label: "디스코드 봇" },
                { id: "gaming", label: "게이밍" },
                { id: "dev", label: "개발 도구" },
                { id: "geo", label: "공간/지도" },
                { id: "ai", label: "AI 연구" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                    activeCategory === c.id
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "bg-[#141620] text-neutral-400 hover:text-white hover:bg-[#1a1c28] border border-white/[0.04]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl border border-white/[0.06] bg-[#111218] p-6 flex flex-col justify-between hover:border-white/[0.14] transition duration-200"
              >
                <div>
                  {/* Card Header: Real Logo & Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-xl bg-[#171922] border border-white/[0.06] p-2 flex items-center justify-center overflow-hidden">
                      <img
                        src={p.logo}
                        alt={`${p.title} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-[#191b26] border border-white/[0.06] px-2 py-0.5 text-[11px] font-medium text-neutral-300">
                        {p.categoryName}
                      </span>
                      {p.inDevelopment ? (
                        <span className="rounded-md bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          개발 중
                        </span>
                      ) : (
                        <span className="rounded-md bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
                          {p.status}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Role */}
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">{p.title}</h3>
                    <div className="text-xs text-neutral-400 font-medium">{p.role}</div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[#161822] px-2 py-0.5 text-[10px] font-medium text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/[0.04]">
                  {p.inDevelopment ? (
                    <div className="text-xs font-semibold text-neutral-500 flex items-center gap-1.5 py-1">
                      <span>현재 연구 및 개발 진행 중인 프로젝트입니다</span>
                    </div>
                  ) : (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-indigo-400 transition"
                    >
                      서비스 방문하기
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Studio Principles / Philosophy (Yeonhong bottom section) */}
      <section className="py-16 border-t border-white/[0.06] bg-[#0e1017]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-300">
            <div className="p-6 rounded-2xl bg-[#11131a] border border-white/[0.06]">
              <div className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Code2 className="h-4 w-4 text-indigo-400" />
                직접 만들고, 직접 운영해요
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                모든 프로젝트는 KCS 개발진이 코드부터 배포 인프라까지 직접 손으로 관리하며, 24시간 가동 상태를 주시합니다.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#11131a] border border-white/[0.06]">
              <div className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Layers className="h-4 w-4 text-sky-400" />
                코드 밖의 사용성까지
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                단순히 기능을 만드는 데 그치지 않고, 직관적인 UI와 엄격한 법률 준수 정책으로 안심할 수 있는 경험을 설계합니다.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#11131a] border border-white/[0.06]">
              <div className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-400" />
                커뮤니티와 함께 호흡해요
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                디스코드 서버에서 실시간 피드백을 수렴하고, 사용자와 개발자가 동등한 입장에서 아이디어를 발전시켜 나갑니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="border-t border-white/[0.06] bg-[#090a0d] py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/assets/logo-kcs.png" alt="KCS" className="h-6 w-6 object-contain" />
            <span className="text-xs text-neutral-500">
              © 2026 Koharu Coding Server (KCS). All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-400">
            <Link href="/policy" className="hover:text-white transition">
              개인정보처리방침 & 약관
            </Link>
            <a
              href="https://kcs.koharu.live/support-server/kcs"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              공식 디스코드 (rnD8HQDDz3)
            </a>
            <a
              href="https://github.com/KCS-Koharu-Coding-Server"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              GitHub Organization
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
