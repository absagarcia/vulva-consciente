// next.config.mjs
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let basePath = "";

if (isGithubActions) {
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, ""); // Obtener el nombre del repositorio
    basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: isGithubActions ? basePath : "",
    basePath: isGithubActions ? basePath : "",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
