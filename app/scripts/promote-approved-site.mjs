import { copyFile, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const projectRoot = resolve(appRoot, '..', '..', '..');
const approvedSource = resolve(projectRoot, '03_Drafts', '个人网站-黑金交互初稿-v1.html');
const approvedAssets = resolve(projectRoot, '03_Drafts', 'assets');
const productionIndex = resolve(appRoot, 'index.html');
const productionAssets = resolve(appRoot, 'public', 'assets');

const replacements = [
  [
    '<meta name="description" content="向紫彤 Camellia Xiang，CRM 产品经理个人作品集交互初稿。">',
    '<meta name="description" content="向紫彤 Camellia Xiang 的个人网站：CRM、SFA、DMS 与智慧养老产品经历，AI 时代的产品工作方式及个人作品。">',
  ],
  [
    '<title>向紫彤｜CRM 产品经理｜个人网站交互初稿</title>',
    '<title>向紫彤 Camellia｜CRM 产品经理</title>',
  ],
  [
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    `<meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#171512">
  <meta name="color-scheme" content="light dark">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="zh_CN">
  <meta property="og:title" content="向紫彤 Camellia｜CRM 产品经理">
  <meta property="og:description" content="CRM、SFA、DMS 与智慧养老产品经历，AI 时代的产品工作方式及个人作品。">
  <meta property="og:url" content="https://camellia-resume.vercel.app/">
  <link rel="canonical" href="https://camellia-resume.vercel.app/">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">`,
  ],
  ['href="../01_Context/01_简历/简历-CRM版.pdf"', 'href="/resume-crm.pdf"'],
  ['src="../02_WorkSpace/Web_Core/app/public/project-crm.jpg"', 'src="/project-crm.jpg"'],
  ['href="http://127.0.0.1:3000/" data-experience-link', 'href="/product-login.html" data-experience-link'],
  [
    'href="mailto:18292879652@163.com"',
    'href="mailto:18292879652@163.com?subject=%E6%9D%A5%E8%87%AA%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99%E7%9A%84%E8%81%94%E7%B3%BB&body=%E5%90%91%E7%B4%AB%E5%BD%A4%EF%BC%8C%E4%BD%A0%E5%A5%BD%EF%BC%9A%0D%0A%0D%0A"',
  ],
  ['src="assets/', 'src="/assets/'],
];

let html = await readFile(approvedSource, 'utf8');

for (const [from, to] of replacements) {
  if (!html.includes(from)) {
    throw new Error(`Approved source changed: required text was not found: ${from}`);
  }
  html = html.split(from).join(to);
}

const forbiddenProductionReferences = [
  '127.0.0.1:3000',
  '../01_Context/',
  '../02_WorkSpace/',
  '交互初稿',
];

for (const reference of forbiddenProductionReferences) {
  if (html.includes(reference)) {
    throw new Error(`Production HTML still contains a development reference: ${reference}`);
  }
}

await mkdir(productionAssets, { recursive: true });
for (const entry of await readdir(approvedAssets, { withFileTypes: true })) {
  if (!entry.isFile() || !['.jpg', '.jpeg', '.png', '.webp', '.svg'].includes(extname(entry.name).toLowerCase())) continue;
  await copyFile(resolve(approvedAssets, entry.name), resolve(productionAssets, entry.name));
}

await writeFile(productionIndex, html, 'utf8');
console.log(`Promoted approved site to ${productionIndex}`);
