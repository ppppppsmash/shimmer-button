import './App.css';

function App() {

  return (
    <main className="min-h-screen flex justify-center items-center w-full">
      <button
        type="button"
        className="relative px-24 py-8 text-3xl font-bold
          bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.slate.950)_0%,theme(colors.slate.500)_10%,theme(colors.slate.950)_20%)] animate-[shimmer_2.5s_linear_infinite] rounded-[24px]
          after:flex after:absolute after:bg-slate-950 after:inset-[2px] after:rounded-[22px] after:content-[attr(aria-label)]
          after:items-center after:justify-center"
        aria-label="shimmer"
      >
        SHIMMER
      </button>
    </main>
  )
}

export default App;
