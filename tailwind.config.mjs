/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#f0f9ff",
					400: "#22d3ee", // Cyan-400
					500: "#06b6d4", // Cyan-500
					600: "#0891b2", // Cyan-600
					DEFAULT: "#06b6d4",
				},
				dark: {
					50: "#f8fafc",
					100: "#f1f5f9",
					200: "#e2e8f0",
					300: "#cbd5e1",
					400: "#94a3b8",
					500: "#64748b",
					600: "#475569",
					700: "#334155",
					800: "#1e293b", // Card bg
					900: "#0f172a", // Body bg
					950: "#020617", // Darker bg
				},
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				mono: ["JetBrains Mono", "monospace"],
			},
			boxShadow: {
				glow: "0 0 10px rgba(6, 182, 212, 0.5)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
