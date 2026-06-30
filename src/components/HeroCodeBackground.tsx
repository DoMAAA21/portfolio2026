"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const PYTHON_CODE = `# rag_pipeline.py
from dataclasses import dataclass

@dataclass
class Developer:
    role: str = "Software Developer"
    focus: str = "clean, reliable code"

class AIEngineer(Developer):
    skills = ["Python", "RAG", "LLMs"]

    def answer(self, question: str) -> str:
        context = retrieve_passages(question)
        return generate_with_citations(context)

if __name__ == "__main__":
    engineer = AIEngineer()
    print(engineer.answer("What is peace?"))`;

const KEYWORDS = new Set([
  "from",
  "import",
  "class",
  "def",
  "return",
  "if",
  "as",
  "in",
  "True",
  "False",
  "None",
]);

const BUILTINS = new Set(["print", "str"]);

function highlightLine(line: string, lineIndex: number) {
  if (line.trimStart().startsWith("#")) {
    return (
      <span key={lineIndex} className="text-emerald-400/60">
        {line}
        {"\n"}
      </span>
    );
  }

  const tokens = line.split(/(".*?"|'.*?'|\w+|\s+|[^\w\s])/g).filter(Boolean);

  return (
    <span key={lineIndex}>
      {tokens.map((token, tokenIndex) => {
        if (/^".*"$|^'.*'$/.test(token)) {
          return (
            <span key={tokenIndex} className="text-amber-300/55">
              {token}
            </span>
          );
        }
        if (KEYWORDS.has(token)) {
          return (
            <span key={tokenIndex} className="text-sky-400/65">
              {token}
            </span>
          );
        }
        if (BUILTINS.has(token)) {
          return (
            <span key={tokenIndex} className="text-violet-300/60">
              {token}
            </span>
          );
        }
        if (token === "self") {
          return (
            <span key={tokenIndex} className="text-rose-300/55">
              {token}
            </span>
          );
        }
        return (
          <span key={tokenIndex} className="text-slate-300/45">
            {token}
          </span>
        );
      })}
      {"\n"}
    </span>
  );
}

function highlightCompletedLines(code: string) {
  const lines = code.split("\n");
  // Drop trailing empty segment from final newline
  const normalized =
    code.endsWith("\n") && lines[lines.length - 1] === ""
      ? lines.slice(0, -1)
      : lines;

  return normalized.map((line, index) => highlightLine(line, index));
}

function splitTypingProgress(code: string) {
  const lastNewline = code.lastIndexOf("\n");

  if (lastNewline === -1) {
    return { completed: "", currentLine: code };
  }

  return {
    completed: code.slice(0, lastNewline + 1),
    currentLine: code.slice(lastNewline + 1),
  };
}

function useTypewriter(
  text: string,
  {
    charDelay = 32,
    lineDelay = 200,
    loopDelay = 4500,
    loop = true,
  }: {
    charDelay?: number;
    lineDelay?: number;
    loopDelay?: number;
    loop?: boolean;
  } = {},
) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setDisplayed(text);
      setIsTyping(false);
      return;
    }

    let index = 0;
    let timeoutId = 0;
    let cancelled = false;

    const schedule = (delay: number, fn: () => void) => {
      timeoutId = window.setTimeout(fn, delay);
    };

    const reset = () => {
      index = 0;
      setDisplayed("");
      setIsTyping(true);
      typeNextChar();
    };

    const typeNextChar = () => {
      if (cancelled) return;

      if (index >= text.length) {
        setIsTyping(false);
        if (loop) {
          schedule(loopDelay, reset);
        }
        return;
      }

      const char = text[index];
      index += 1;
      setDisplayed(text.slice(0, index));

      const delay = char === "\n" ? lineDelay : charDelay;
      schedule(delay, typeNextChar);
    };

    reset();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [text, charDelay, lineDelay, loopDelay, loop]);

  return { displayed, isTyping };
}

export function HeroCodeBackground() {
  const preRef = useRef<HTMLPreElement>(null);
  const [showCursor, setShowCursor] = useState(true);
  const { displayed, isTyping } = useTypewriter(PYTHON_CODE);

  const { completed, currentLine } = useMemo(
    () => splitTypingProgress(displayed),
    [displayed],
  );

  const completedHighlight = useMemo(
    () => highlightCompletedLines(completed),
    [completed],
  );

  useEffect(() => {
    const blinkInterval = window.setInterval(() => {
      setShowCursor((visible) => !visible);
    }, 530);

    return () => window.clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;
    pre.scrollTop = pre.scrollHeight;
  }, [displayed]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />

      <div className="absolute right-0 top-1/2 hidden w-[min(560px,50vw)] -translate-y-1/2 pr-4 md:block lg:pr-8 xl:pr-12">
        <div className="rounded-xl border border-white/10 bg-black/30 p-5 shadow-2xl backdrop-blur-sm">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/50" />
            <span className="ml-2 font-mono text-[10px] text-slate-500">
              rag_pipeline.py
            </span>
            {isTyping ? (
              <span className="ml-auto font-mono text-[10px] text-sky-400/70">
                typing...
              </span>
            ) : null}
          </div>

          <pre
            ref={preRef}
            className="max-h-[min(420px,55vh)] overflow-y-auto font-mono text-[11px] leading-6 xl:text-xs"
          >
            <code>
              {completedHighlight}
              <span className="text-slate-200/55">{currentLine}</span>
              <span
                className={`ml-px inline-block text-sky-300/80 ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              >
                ▍
              </span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
