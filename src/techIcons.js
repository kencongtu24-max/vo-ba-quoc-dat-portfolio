import {
  siBootstrap,
  siCaddy,
  siClaude,
  siCloudflare,
  siCss,
  siDjango,
  siDocker,
  siExpress,
  siFfmpeg,
  siGit,
  siGithub,
  siGithubactions,
  siGooglemaps,
  siHtml5,
  siJavascript,
  siJson,
  siJsonwebtokens,
  siNestjs,
  siNginx,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPrisma,
  siPython,
  siQdrant,
  siReact,
  siReactrouter,
  siRender,
  siSpringboot,
  siTailwindcss,
  siTypeorm,
  siTypescript,
  siVercel,
  siVite,
} from "simple-icons";

// First matching rule wins, so more specific names ("React Router") come before broader ones ("React").
const RULES = [
  [/^html/i, siHtml5],
  [/^css\b/i, siCss],
  [/^javascript/i, siJavascript],
  [/^java$/i, siOpenjdk],
  [/^spring boot/i, siSpringboot],
  [/^git$/i, siGit],
  [/^github$/i, siGithub],
  [/^react router/i, siReactrouter],
  [/^react\b/i, siReact],
  [/^typescript/i, siTypescript],
  [/^tailwind/i, siTailwindcss],
  [/^vite\b/i, siVite],
  [/^nestjs/i, siNestjs],
  [/^typeorm/i, siTypeorm],
  [/^postgresql/i, siPostgresql],
  [/^qdrant/i, siQdrant],
  [/^claude/i, siClaude],
  [/^docker/i, siDocker],
  [/^nginx/i, siNginx],
  [/^caddy/i, siCaddy],
  [/^cloudflare/i, siCloudflare],
  [/^github actions/i, siGithubactions],
  [/^python/i, siPython],
  [/^django/i, siDjango],
  [/^bootstrap/i, siBootstrap],
  [/^node/i, siNodedotjs],
  [/^express/i, siExpress],
  [/^prisma/i, siPrisma],
  [/^jwt\b/i, siJsonwebtokens],
  [/^json\b/i, siJson],
  [/^vercel/i, siVercel],
  [/^render\b/i, siRender],
  [/^google maps/i, siGooglemaps],
  [/^ffmpeg/i, siFfmpeg],
];

// Brand colors this dark (Express, Vercel, Django…) vanish on the dark theme; draw those in the text color.
function isTooDark(hex) {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  // WCAG relative luminance; Prisma (#2D3748) sits around 0.035, TypeORM red around 0.21.
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.06;
}

export function getTechIcon(name) {
  const match = RULES.find(([re]) => re.test(name));
  if (!match) return null;
  const icon = match[1];
  return { path: icon.path, color: isTooDark(icon.hex) ? "currentColor" : `#${icon.hex}` };
}
