import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// Initialize the AI client securely on the server
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: NextRequest) {
  try {
    const { prompt, action } = await req.json();

    if (!prompt || !action) {
      return NextResponse.json(
        { error: "Prompt and action are required" },
        { status: 400 }
      );
    }

    let fullPrompt: string;
    let temperature = 0.5;

    switch (action) {
      case "generateMessage":
        fullPrompt = `Based on the user's brief requirement: "${prompt}", draft a professional, structured, and friendly contact message. Be concise but capture the key details.`;
        temperature = 0.7;
        break;
      case "suggestSubject":
        fullPrompt = `Based on the user's message: "${prompt}", suggest a clear and concise subject line. Provide only the subject line text, without any prefixes like "Subject:".`;
        temperature = 0.3;
        break;
      case "analyzeTone":
        fullPrompt = `Analyze the tone and clarity of this message: "${prompt}". Provide a single sentence of encouraging, positive feedback. For example: "Your message is clear and professional!"`;
        temperature = 0.2;
        break;
      case "detectIntent":
        fullPrompt = `Classify the following user inquiry into one of these categories: Sales, Support, Partnership, General. Inquiry: "${prompt}". Respond with only the category name.`;
        temperature = 0.1;
        break;
      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: { temperature },
    });
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text().replace(/["\n]/g, "");

    return NextResponse.json({ result: text });
  } catch (error) {
    console.error("AI API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate AI response" },
      { status: 500 }
    );
  }
}