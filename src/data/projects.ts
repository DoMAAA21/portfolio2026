export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Bible RAG",
    subtitle: "DailyBreadAI",
    description:
      "A Bible-focused retrieval-augmented generation app. Ask questions about Scripture and get answers grounded in retrieved verses—with real citations, not hallucinated text. Runs fully local with Docker, PostgreSQL + pgvector, and Ollama.",
    highlights: [
      "LLM retrieval planner that turns questions into smart vector searches",
      "pgvector similarity search over ingested Bible text from Bolls.life",
      "RAG pipeline that answers using retrieved context only",
      "Next.js chat UI with verse citation cards",
      "Full Docker stack: FastAPI, Postgres, Ollama—no OpenAI key required",
    ],
    tags: [
      "Python",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "pgvector",
      "Ollama",
      "RAG",
      "Docker",
    ],
    githubUrl: "https://github.com/DoMAAA21/DailyBreadAI",
  },
  
];
