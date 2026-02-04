/**
 * Changes (2026-02-04):
 * - Keep config fully ESM-safe (no `require`) to avoid crashes on reload.
 * - Set `outputFileTracingRoot` explicitly to this app dir to silence
 *   multi-lockfile workspace-root inference warnings.
 */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname
};

export default nextConfig;
