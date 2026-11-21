"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, FileText } from "lucide-react";

export default function KcsPolicyPage() {
  const [tab, setTab] = useState<"privacy" | "terms">("privacy");

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#dbdee1]">
      <header className="border-b border-white/[0.06] bg-[#0e1017] px-6 py-4">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            KCS 홈으로 돌아가기
          </Link>
          <div className="flex items-center gap-2 font-bold text-sm text-white">
            <img src="/assets/logo-kcs.png" alt="KCS" className="h-5 w-5 object-contain" />
            Koharu Coding Server 정책 센터
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex items-center gap-3 mb-8 border-b border-white/[0.06] pb-4">
          <button
            onClick={() => setTab("privacy")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
              tab === "privacy" ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-400 hover:text-white"
            }`}
          >
            <Shield className="h-4 w-4" />
            통합 개인정보처리방침
          </button>
          <button
            onClick={() => setTab("terms")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
              tab === "terms" ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-400 hover:text-white"
            }`}
          >
            <FileText className="h-4 w-4" />
            서비스 이용약관
          </button>
        </div>

        {tab === "privacy" ? (
          <article className="rounded-2xl border border-white/[0.06] bg-[#111218] p-8 text-xs leading-relaxed space-y-6 text-neutral-300">
            <h1 className="text-xl font-black text-white">Koharu Coding Server 통합 개인정보처리방침</h1>
            <p className="text-neutral-400">
              본 방침은 대한민국 개인정보 보호법 및 정보통신망 이용촉진 및 정보보호 등에 관한 법률에 의거하여 작성되었습니다.
            </p>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-white">제1조 (총칙 및 목적)</h2>
              <p>
                Koharu Coding Server (이하 "KCS")는 회원의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 철저히 준수합니다. 본 방침은 KCS가 운영하는 웹 포털(kcs.koharu.live), 연계 서비스 및 소프트웨어 프로젝트 전반에 적용됩니다.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-white">제2조 (수집하는 개인정보 항목 및 수집 방법)</h2>
              <p>1. 포털 및 커뮤니티 이용 시: 디스코드 계정 고유 식별자(ID), 닉네임, 프로필 이미지 URL, 접속 IP, 쿠키 및 접속 브라우저 환경 정보.</p>
              <p>2. 연계 서비스(Sora 등) 본인 인증 시: 각 개별 인증 수단(휴대전화번호, 이메일 주소)은 독립된 별도의 동의 절차를 통해 수집되며, 인증 완료 즉시 일방향 암호화(SHA-256) 처리되거나 원본이 파기됩니다.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-white">제3조 (개인정보의 보유 및 이용 기간)</h2>
              <p>
                KCS는 원칙적으로 개인정보의 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 법정 기간 동안 안전하게 보관합니다.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-white">제4조 (정보주체의 권리 및 행사 방법)</h2>
              <p>
                이용자는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제, 처리정지를 요구할 수 있으며, KCS 공식 지원 서버(rnD8HQDDz3) 또는 고객지원 채널을 통해 즉시 처리됩니다.
              </p>
            </section>
          </article>
        ) : (
          <article className="rounded-2xl border border-white/[0.06] bg-[#111218] p-8 text-xs leading-relaxed space-y-6 text-neutral-300">
            <h1 className="text-xl font-black text-white">Koharu Coding Server 서비스 이용약관</h1>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-white">제1조 (목적)</h2>
              <p>
                본 약관은 Koharu Coding Server(이하 "KCS")가 제공하는 모든 웹사이트, 소프트웨어 및 디스코드 연계 서비스의 이용 조건 및 절차, 권리와 의무를 규정함을 목적으로 합니다.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-white">제2조 (용어의 정의)</h2>
              <p>
                1. "서비스"란 KCS가 개발 및 배포하는 웹 포털, 디스코드 봇, API 및 관련 디지털 콘텐츠 일체를 의미합니다.<br />
                2. "회원"이란 본 약관에 동의하고 서비스를 이용하는 모든 사용자를 의미합니다.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold text-white">제3조 (회원의 의무 및 금지사항)</h2>
              <p>
                회원은 서비스 이용 시 관련 법령 및 커뮤니티 가이드라인을 준수하여야 하며, 다음 행위를 하여서는 안 됩니다:<br />
                1. 타인의 개인정보 또는 계정 도용<br />
                2. 서비스 시스템, 네트워크 및 API에 대한 무단 공격, 리버스 엔지니어링 및 악의적 과부하 유발<br />
                3. 불법 프로그램, 매크로 또는 봇 남용을 통한 부정 이용
              </p>
            </section>
          </article>
        )}
      </main>
    </div>
  );
}
