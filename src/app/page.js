import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <h2>Strona główna</h2>
      <p>Ta strona jest dostępna dla wszystkich.</p>
      {session?.user ? (
        <div>
          <h3>Dane sesji (Server Component)</h3>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      ) : (
        <p>Zaloguj się, aby zobaczyć dane swojej sesji.</p>
      )}
    </div>
  );
}
