
export default function Home() {


  return (
    <div className="grid grid-rows-[20px_1fr_20px] dark:text-white items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl dark:text-white font-bold">Welcome to {process.env.NEXT_PUBLIC_COMPANY_NAME}</h1>
      </main>
    </div>
  );
}
