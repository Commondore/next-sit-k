"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
