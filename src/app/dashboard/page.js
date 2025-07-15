import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  // Middleware powinno to obsłużyć, ale to jest dodatkowe zabezpieczenie.
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Witaj na chronionej stronie, {session.user.name}!</p>
      <p>Ta treść jest widoczna tylko po zalogowaniu.</p>
    </div>
  );
}
