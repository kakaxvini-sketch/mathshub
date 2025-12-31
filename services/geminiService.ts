
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async explainFormula(formulaTitle: string, expression: string, grade: number) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Explain the math formula "${formulaTitle}" (${expression}) to a class ${grade} student. Use simple language and provide a real-world example if possible. Keep it concise.`,
        config: {
          systemInstruction: "You are a friendly, encouraging math tutor who simplifies complex concepts for school students. Use formatting like bullet points to make it readable."
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm sorry, I couldn't generate an explanation right now. Try again later!";
    }
  }

  async askMathBuddy(query: string, grade: number) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Student Query (Grade ${grade}): ${query}`,
        config: {
          systemInstruction: "You are a helpful math assistant for students. Answer their questions clearly and concisely. If they ask for a formula, provide it clearly. If they ask for help solving a problem, guide them through the steps."
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Oops! My math brain is a bit fuzzy right now. Please try again.";
    }
  }
}
