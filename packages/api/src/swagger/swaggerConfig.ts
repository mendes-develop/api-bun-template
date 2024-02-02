import { swagger } from "@elysiajs/swagger";

export const tags = {
  Test: "Test",
  Auth: "Auth",
  Notification: "Notification",
}

export const swaggerMiddleware = swagger({
  documentation: {
    tags: [
      { name: tags.Test, description: "Test endpoints" },
      { name: tags.Auth, description: "Authentication endpoints" },
      { name: tags.Notification, description: "Authentication endpoints" },
    ],
  },
})