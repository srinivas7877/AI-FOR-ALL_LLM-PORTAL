import { initializeApp } from "../server/index";

let handlerInitialized = false;
let handlerApp: any = null;

export default async function handler(req: any, res: any) {
  // Initialize the app once (this will be cached across invocations)
  if (!handlerInitialized) {
    const { app } = await initializeApp();
    handlerApp = app;
    handlerInitialized = true;
  }

  // Forward the request to Express app
  // Vercel's request/response are compatible with Express
  handlerApp(req, res);
}

