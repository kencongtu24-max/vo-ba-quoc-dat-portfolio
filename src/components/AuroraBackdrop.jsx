import Aurora from "../content/Aurora/Aurora.jsx";

// Color stops per view — reuses the same accent palette as the rest of the
// site (IT = blue/purple, Robotics = orange/teal, home = a blend of both).
const PALETTES = {
  home: ["#3d5cf5", "#8b3ef0", "#0c9c8e"],
  it: ["#3d5cf5", "#8b3ef0", "#3d5cf5"],
  robotics: ["#e07610", "#0c9c8e", "#e07610"],
};

export default function AuroraBackdrop({ view }) {
  return (
    <div className="aurora-backdrop" aria-hidden="true">
      <Aurora colorStops={PALETTES[view] ?? PALETTES.home} amplitude={1.0} blend={0.55} />
    </div>
  );
}
