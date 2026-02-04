/**
 * Changes (2026-02-04):
 * - Add ESLint v9 flat config, since Next 16 no longer ships `next lint`.
 * - Use Next 16's *native flat config* from `eslint-config-next` (no FlatCompat),
 *   which avoids circular-config crashes.
 */
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';

const config = [
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
];

export default config;

