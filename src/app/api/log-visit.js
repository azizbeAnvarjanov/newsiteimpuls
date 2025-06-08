// pages/api/log-visit.js
export default async function handler(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];
    const now = new Date().toISOString();
  
    // Firebase, Supabase yoki boshqa bazaga yozish:
    // Masalan: "visits" kolleksiyasiga yozamiz (Firebase misol uchun)
  
    // Faqat misol ko‘rinishida:
    const visitData = {
      ip,
      userAgent,
      timestamp: now,
      page: 'add-news',
    };
  
    // Bu yerda Firebase yoki Supabase ga yozish kodini yozasiz
    console.log(visitData); // Bu vaqtincha log
  
    res.status(200).json({ success: true });
  }
  