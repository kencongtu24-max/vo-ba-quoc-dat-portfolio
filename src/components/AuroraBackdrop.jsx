import Aurora from "../content/Aurora/Aurora.jsx";

// Color stops per view — reuses the same accent palette as the rest of the
// site (IT = blue/purple, Robotics = orange/teal, home = a blend of both).
// Kept in sync with --accent-it-*/--accent-robo-* in index.css for each
// theme, and fed through Aurora's own lightMode uniform so light theme gets
// its dedicated pastel-wash render path instead of a dimmed dark render.
const PALETTES = {
  light: {
    home: ["#3d5cf5", "#8b3ef0", "#0c9c8e"],
    it: ["#3d5cf5", "#8b3ef0", "#3d5cf5"],
    robotics: ["#e07610", "#0c9c8e", "#e07610"],
  },
  dark: {
    home: ["#7c8cff", "#c084fc", "#2dd4c7"],
    it: ["#7c8cff", "#c084fc", "#7c8cff"],
    robotics: ["#ff9d52", "#2dd4c7", "#ff9d52"],
  },
};

export default function AuroraBackdrop({ view, theme }) {
  const palette = PALETTES[theme] ?? PALETTES.dark;
  return (
    <div className="aurora-backdrop" aria-hidden="true">
      <Aurora
        colorStops={palette[view] ?? palette.home}
        amplitude={1.0}
        blend={0.55}
        lightMode={theme === "light"}
      />
    </div>
  );
}
