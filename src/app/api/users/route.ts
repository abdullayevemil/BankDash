import { users } from "@/data/users";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const email = searchParams.get("email");

  let searchedUsers = users;

  if (email) {
    searchedUsers = searchedUsers.filter(user => user.email === email);
  }

  return Response.json(searchedUsers);
}
