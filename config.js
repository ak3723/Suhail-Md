const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923157555342";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_02_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTczLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgODUsXG4gICAgICAgIDE4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDY3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDExLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MixcbiAgICAgICAgMTk2LFxuICAgICAgICA2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc2LFxuICAgICAgICA2MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU5LFxuICAgICAgICA1MixcbiAgICAgICAgMjA2LFxuICAgICAgICA0LFxuICAgICAgICAzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI3LFxuICAgICAgICA0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRxdHpPMTErdk0wbU9TVjZxZW5SRm5UT01JaTV0UlZITzFyK2lWR2xRbDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTU3NTU1MzQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxOTM0MUU4NTZFQTQyMEEyQjhGRTQ0MTAzMEI0NEE4OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI5MDI1NTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxNTc1NTUzNDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRFQTNBN0I3RDNEMEM5NDZEQTA4QUFENTEyMEU3REZFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjkwMjU1NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHNWxvblBmLVE3S3pQWTEyWkh1OEhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM0NTIxZTc2LTE4YWEtNDFmOC04NWFjLTEwY2U3NTNiYjAwZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDkxLFxuICAgICAgNSxcbiAgICAgIDIyMSxcbiAgICAgIDE3NSxcbiAgICAgIDExMyxcbiAgICAgIDMyLFxuICAgICAgMTI5LFxuICAgICAgMzUsXG4gICAgICAxMyxcbiAgICAgIDEzOSxcbiAgICAgIDIwNyxcbiAgICAgIDExLFxuICAgICAgNzUsXG4gICAgICAxMSxcbiAgICAgIDIzMixcbiAgICAgIDc3LFxuICAgICAgMjQ0LFxuICAgICAgMTczLFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICA1NixcbiAgICAgIDcsXG4gICAgICAxMjQsXG4gICAgICAzOCxcbiAgICAgIDEyNCxcbiAgICAgIDc5LFxuICAgICAgODMsXG4gICAgICAxMjksXG4gICAgICAyLFxuICAgICAgMTgsXG4gICAgICAyNDMsXG4gICAgICAxMjUsXG4gICAgICAxMDYsXG4gICAgICAxNzksXG4gICAgICA5NCxcbiAgICAgIDE3NSxcbiAgICAgIDE4NixcbiAgICAgIDU3LFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQjFOSDVSWllcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE1NzU1NTM0MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MzA0NzcxMTU0MzQyNzoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1BSElcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLR000cDRGRUpUUXhiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRtZCtjTitqcGgxd2xjM0FEaVFIT3lkOFFKS1ZrcHZWRllhSVFObnY4VG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMlpESEdNeDAzcDdjTm5XTkJjMDRUaVZWMmY1NDAwc0JuTCswRXo4U01iK1dsUm9TeUFoOVdtU0drUVRqOFlxcCtGenVmQ0JEb0JBR3JmOWg4V3o2RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibE5ubmJMd1lmb0FYaG82V0NBalZ2THdtcGNiRWZnMFBMaTJzdzJyMm10Yzk5S0xObFhJKytnYVJUS1g3R3RtelNqbU1XS0RNVG5kNzV5akxLVjNpQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTU3NTU1MzQyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTAyNTUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFU5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQVTkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtT1pMWVNXRG1vSW1ERTVGZTRpVnRMUFhOdDdGNXRQTFhNMDBGcGNmb1c4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MDY2OTkwNDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjkwMjU1NDIyMlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "powered by mahi" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "mahi-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Maheen",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "mahi"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
