import { NextResponse } from 'next/server'
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai'

export async function POST(request: Request) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: {
      temperature: 0.1,
      responseMimeType: 'application/json',
      responseSchema: {
        type: SchemaType.OBJECT,
        properties: {
          title: { type: SchemaType.STRING },
          salary: { type: SchemaType.STRING },
          content: { type: SchemaType.STRING },
          skills: {
            type: SchemaType.ARRAY,
            items: {
              type: SchemaType.OBJECT,
              properties: {
                name: { type: SchemaType.STRING },
                yearsOfExperiencie: { type: SchemaType.STRING },
              },
            },
          },
        },
      },
    },
  })

  const prompt = (await request.json()).message
  const result = await model.generateContent(prompt)

  return NextResponse.json({
    result: result.response.text(),
  })
}
