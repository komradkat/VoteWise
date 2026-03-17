// VoteWise Theme Engine - External Configuration
const VoteWiseTheme = {
    light: {
        "primary": "#1e3a8a",          // Deep Enterprise Navy
        "primary-content": "#ffffff",
        "secondary": "#3b82f6",        // Vibrant Navy
        "secondary-content": "#ffffff",
        "accent": "#0ea5e9",
        "neutral": "#1e293b",
        "base-100": "#f8fafc",         // Softest Slate
        "base-200": "#f1f5f9",         // Light Grey-Blue
        "base-300": "#e2e8f0",
        "info": "#3abff8",
        "success": "#22c55e",
        "warning": "#f59e0b",
        "error": "#ef4444",
        "--rounded-box": "1rem",
        "--rounded-btn": "0.5rem",
    },
    dark: {
        "primary": "#3b82f6",          // Clear Sky Navy (vibrant for dark mode)
        "primary-content": "#ffffff",
        "secondary": "#60a5fa",        // Soft Navy
        "secondary-content": "#0f172a",
        "accent": "#38bdf8",
        "neutral": "#0f172a",
        "base-100": "#020617",         // True Midnight Navy
        "base-200": "#0f172a",         // Deep Navy Slate
        "base-300": "#1e293b",         // Accent Navy
        "info": "#3abff8",
        "success": "#22c55e",
        "warning": "#f59e0b",
        "error": "#ef4444",
        "--rounded-box": "1rem",
        "--rounded-btn": "0.5rem",
    }
};

// Apply to Tailwind
window.tailwind.config = {
    daisyui: {
        themes: [
            { light: VoteWiseTheme.light },
            { dark: VoteWiseTheme.dark }
        ],
    },
};
