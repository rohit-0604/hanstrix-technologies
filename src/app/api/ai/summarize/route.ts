// app/api/summarize/route.ts
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: NextRequest) {
  try {
    const { content, serviceName } = await req.json();

    if (!content || !serviceName) {
      return NextResponse.json({ error: "Missing content or service name" }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(
`You are formatting a page summary for a client-facing website section.
DO NOT invent new facts. Use only what is in "Page Content".

Produce clean, skimmable **Markdown** with these rules:

- Start with: "# Hanstrix Technologies: ${serviceName}"
- Insert a horizontal rule "---" between major sections
- Use short paragraphs (2–3 lines max)
- Use **bold** to highlight key phrases
- Lists MUST be real Markdown lists (bullets or numbers)
- No marketing fluff beyond the given content

Sections & order (use exactly these headings):

## Overview
- 2–3 lines that restate the mission from Page Content (no new claims).

---

## Core Services
- Bullet list. For each service: "**Service Name** — one concise line from content."

---

## Unique Selling Points
- Bullet list (each item a crisp one-liner from content).

---

## Process
1) Strategy & Discovery — one line
2) Build & Train — one line
3) Deploy & Integrate — one line
4) Optimize & Support — one line

---

## Client Benefits
- Bullet list taken from Page Content (e.g., chatbots, forecasting, workflow automation).

---

Page Content:
${content}`
    );

    const text = result.response.text();
    return NextResponse.json({ summary: text });
  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json({ error: "Failed to summarize content" }, { status: 500 });
  }
}
