require("dotenv").config();

const { analyzeResumeAI } = require("./services/aiService");

(async () => {
    try {
        const result = await analyzeResumeAI(
            "I know C++, JavaScript, React, Node.js and built 3 projects."
        );

        console.log(result);
    }
    catch(error){
        console.log(error);
    }
})();