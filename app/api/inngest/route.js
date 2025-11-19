import { serve } from "inngest/next";
import {
  inngest,
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdation,
} from "@/Config/inngest";
import { server } from "typescript";

// Create an API that serves zero functions
export const { GET, POST, PUT } = server({
  client: inngest,
  functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
});
