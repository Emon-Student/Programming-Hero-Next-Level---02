export type Roles = "admin" | "agent" | "user";

export const USER_ROLE = {
  admin: "admin",
  agent: "agent",
  user: "user",
} as const;
