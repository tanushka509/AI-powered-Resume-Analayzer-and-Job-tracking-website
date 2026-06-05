const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

const analyzeResumeAI = async(resumeText) => {
    const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            {
                role: "system",
                content: 
                `You are an expert resume reviewer.
                Return ONLY raw JSON.
                Do not use markdown.
                Do not wrap the response in \`\`\`json.`
            },
            {
                role: "user",
                content: `
Analyze the following resume.

Return JSON in this format:

{
  "score": number,
  "strengths": ["..."],
  "weaknesses": ["..."],
  "suggestions": ["..."]
}

Resume:
${resumeText}
`
            }
        ],
        temperature: 0.3
    });
    return JSON.parse(
        response.choices[0].message.content
    );
};

module.exports = {
    analyzeResumeAI
};