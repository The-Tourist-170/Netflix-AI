import { gemini_api_key } from './constants';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: gemini_api_key });

export default ai;