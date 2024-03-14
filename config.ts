import dotenv from "dotenv";

dotenv.config();

export const REDIS_HOST = process.env.REDIS_HOST || "localhost";
export const REDIS_PORT = process.env.REDIS_PORT || "6379";

export const MUSIXMATCH_API_KEY =
  process.env.MUSIXMATCH_API_KEY || "8e343bd24865f49e56ffb12348bb9ccf";

export const NEXTAUTH_SECRET =
  process.env.NEXTAUTH_SECRET || "86Wm/FbDhw6CxQF874WhMQpTKOz1/SelhcOGyeKYjjI=";
export const NEXTAUTH_URL = process.env.NEXTAUTH_URL || "http://localhost:3000";

export const MONGODB_URI = process.env.JWT_SECRET || "your_default_jwt_secret";
