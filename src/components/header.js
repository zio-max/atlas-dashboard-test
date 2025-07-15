import { auth } from "@/auth";
import { SignInButton } from "./signin-button";
import { SignOutButton } from "./signout-button";

export async function Header() {
  const session = await auth(); // Pobieranie sesji na serwerze

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h1>Moja Aplikacja (JS)</h1>
      <nav>
        {session?.user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span>Witaj, {session.user.name ?? session.user.email}</span>
            <SignOutButton />
          </div>
        ) : (
          <SignInButton />
        )}
      </nav>
    </header>
  );
}
