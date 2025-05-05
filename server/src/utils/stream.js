import { StreamChat } from "stream-chat";
import "dotenv/config";

const API_KEY = process.env.STREAM_API_KEY;
const API_SECRET = process.env.STREAM_API_SECRET;

if (!API_KEY || !API_SECRET) {
  throw new Error("STREAM_API_KEY and STREAM_API_SECRET is missing");
}

const streamClient = StreamChat.getInstance(API_KEY, API_SECRET);

export const upsertStreamUser = async (userdata) => {
  try {
    await streamClient.upsertUser(userdata);

    return userdata;
  } catch (error) {
    console.error("Error upserting user:", error);
    throw new Error("Error upserting user in Stream Chat");
  }
};

export const generateStreamToken = (userId) => {};
