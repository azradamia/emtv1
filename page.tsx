
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [role, setRole] = useState("");

  function handleSignIn() {
    if (!name.trim() || !position.trim() || !role) {
      alert("Please complete all fields.");
      return;
    }

    router.push("/dashboard");
  }

  function handleGuest() {
    router.push("/publicdashboard");
  }

  const features = [
    { icon: "👥", label: "People Safety" },
    { icon: "🏢", label: "Asset Protection" },
    { icon: "🌿", label: "Environment Care" },
    { icon: "🛡️", label: "Reputation Management" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">

        {/* LEFT PANEL */}
        <section className="relative flex min-h-[420px] flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-slate-950 p-7 sm:p-10 lg:p-12">

          {/* Animated background glow */}
          <div className="pointer-events-none absolute inset-0 animate-[glow_6s_ease-in-out_infinite] bg-[radial-gradient(ellipse_at_20%_20%,rgba(59,130,246,0.45),transparent_55%)]" />

          <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 animate-[float_8s_ease-in-out_infinite] rounded-full bg-red-600/20 blur-3xl" />

          <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 animate-[float_10s_ease-in-out_infinite] rounded-full bg-blue-400/10 blur-3xl" />

          {/* Logo */}
          <div className="relative z-10 flex animate-[fade-up_700ms_ease-out_both] items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 text-2xl transition-all duration-300 hover:rotate-3 hover:scale-110 hover:bg-white/20">
              🛡️
            </div>

            <div>
              <h1 className="text-xl font-black tracking-wide">
                EMT SYSTEM
              </h1>
              <p className="text-xs text-blue-100">
                Emergency Management Team
              </p>
            </div>
          </div>

          {/* Main introduction */}
          <div className="relative z-10 my-12 max-w-xl animate-[fade-up_900ms_ease-out_both]">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-blue-200">
              SAFE · PREPARE · RESPOND · RECOVER
            </p>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Emergency
              <br />
              Management Team
              <br />
              <span className="bg-gradient-to-r from-blue-200 to-sky-400 bg-clip-text text-transparent">
                (EMT) System
              </span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-blue-100">
              A centralized platform for managing emergency incidents,
              reports and response information.
            </p>

            {/* Animated feature icons */}
            <div className="mt-10 grid grid-cols-4 gap-3 text-center">
              {features.map((item, index) => (
                <div
                  key={item.label}
                  style={{ animationDelay: `${index * 120 + 200}ms` }}
                  className="flex animate-[fade-up_650ms_ease-out_both] flex-col items-center transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xl transition-all duration-300 hover:scale-110 hover:border-blue-200 hover:bg-white/20 hover:shadow-lg hover:shadow-blue-400/20">
                    {item.icon}
                  </div>

                  <p className="mt-2 text-xs leading-4 text-blue-100">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="relative z-10 animate-[fade-up_1100ms_ease-out_both] text-sm italic text-blue-100">
            “Better Prepared, Safer Tomorrow”
          </p>
        </section>

        {/* RIGHT PANEL */}
        <section className="flex items-center justify-center bg-slate-100 p-5 text-slate-900 sm:p-10">
          <div className="w-full max-w-lg animate-[fade-up_800ms_ease-out_both] rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl transition-shadow duration-500 hover:shadow-blue-950/15 sm:p-9">

            <div className="mb-8 text-right text-xs font-medium text-slate-400">
              Version 1.0
            </div>

            {/* Heading */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-blue-950">
                Sign In
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Enter your details to access
                <br />
                the Emergency Management Team (EMT) System
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4 rounded-2xl border border-blue-100 bg-slate-50/70 p-3">

              {/* Name */}
              <label className="grid grid-cols-[28px_70px_minmax(0,1fr)] items-center gap-2">
                <span className="text-center">👤</span>
                <span className="text-xs font-bold">Name</span>

                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your name"
                  autoComplete="name"
                  className="min-w-0 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition-all duration-200 focus:-translate-y-px focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              {/* Position - free text */}
              <label className="grid grid-cols-[28px_70px_minmax(0,1fr)] items-center gap-2">
                <span className="text-center">💼</span>
                <span className="text-xs font-bold">Position</span>

                <input
                  value={position}
                  onChange={(event) => setPosition(event.target.value)}
                  placeholder="Enter your position"
                  autoComplete="organization-title"
                  className="min-w-0 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition-all duration-200 focus:-translate-y-px focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              {/* EMT Role */}
              <label className="grid grid-cols-[28px_70px_minmax(0,1fr)] items-center gap-2">
                <span className="text-center">👥</span>
                <span className="text-xs font-bold">EMT Role</span>

                <select
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  className="min-w-0 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-600 outline-none transition-all duration-200 focus:-translate-y-px focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Select EMT role</option>
                  <option value="Admin">Administrator</option>
                  <option value="Incident Commander">Incident Commander</option>
                  <option value="Operations">Operations</option>
                  <option value="Planning">Planning</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Safety Officer">Safety Officer</option>
                  <option value="Liaison Officer">Liaison Officer</option>
                  <option value="Public Information Officer">
                    Public Information Officer
                  </option>
                </select>
              </label>
            </div>

            {/* Sign In button */}
            <button
              type="button"
              onClick={handleSignIn}
              className="group mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 active:translate-y-0 active:scale-[0.98]"
            >
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                ⇥
              </span>
              Sign In
            </button>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-medium text-slate-400">
                OR
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Guest button */}
            <button
              type="button"
              onClick={handleGuest}
              className="group flex w-full items-center justify-between rounded-xl border border-blue-300 bg-white px-5 py-4 text-sm font-bold text-blue-950 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg active:translate-y-0 active:scale-[0.98]"
            >
              <span className="transition-transform duration-200 group-hover:-rotate-6">
                ♟
              </span>

              <span>Continue as Guest</span>

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                ›
              </span>
            </button>

            {/* Footer */}
            <p className="mt-8 text-center text-xs leading-5 text-slate-400">
              Emergency Management Team
              <br />
              Central Emergency Fire Service Response
            </p>
          </div>
        </section>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-16px) translateX(8px);
          }
        }

        @keyframes glow {
          0%,
          100% {
            opacity: 0.65;
          }
          50% {
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
