import { useState } from "react";

function Valentine() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");

  const handleGenerate = (e) => {
    e.preventDefault();

    if (!from || !to) return;

    const url = `https://valentine-week-inky.vercel.app/?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
    setGeneratedUrl(url);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="text-5xl mb-4">💝</div>
        <h1 className="text-3xl font-bold text-rose-700 mb-2">
          Create Your Valentine Link
        </h1>
        <p className="text-rose-500 mb-6">
          Write your love story in just two names 💌
        </p>

        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label className="block text-rose-600 mb-1">
              Your name (the lover 😘)
            </label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="e.g. Ram"
              className="w-full px-4 py-2 rounded-xl border border-rose-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-rose-600 mb-1">
              Your Valentine’s name 💕
            </label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="e.g. Sita"
              className="w-full px-4 py-2 rounded-xl border border-rose-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 rounded-xl font-semibold hover:scale-105 transition"
          >
            Generate My Love Link 💖
          </button>
        </form>

        {generatedUrl && (
          <div className="mt-6 p-4 bg-pink-50 rounded-xl border border-pink-300">
            <p className="text-rose-600 mb-2">Your special link 💌</p>
            <a
              href={generatedUrl}
              className="text-blue-600 break-all underline"
              target="_blank"
            >
              {generatedUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Valentine;
