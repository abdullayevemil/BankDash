import { users } from "@/data/users";
import { User } from "@/types/user";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const email = searchParams.get("email");

  let searchedUsers = users;

  if (email) {
    searchedUsers = searchedUsers.filter((user) => user.email === email);
  }

  return Response.json(searchedUsers);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, password }: User = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists." },
        { status: 400 }
      );
    }

    const newUser: {
      id: number;
      name: string;
      email: string;
      password: string;
    } = {
      id: users.length + 1,
      name,
      email,
      password,
    };

    users.push(newUser);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
