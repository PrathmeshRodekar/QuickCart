import { serve } from "inngest/next";
import { inngest } from "@/Config/inngest";
export const { GET, POST } = serve({
    client: inngest,
    functions: [
        syncUserCreation,
        syncUserUpdation,
        syncUserDeletion
    ]
});