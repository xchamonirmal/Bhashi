const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "BHASHI-MD~PDhgzAQb#as1hW0Vr8pDw6UzohG9c-YMai6hQtIeu3nM7p0nYnyg",
// For extra thing : BHASHI-MD~(megafileid)
  MONGODB: process.env.MONGODB || "",

    
 
};
