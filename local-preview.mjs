import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, join, normalize, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const host = '127.0.0.1'
const port = Number.parseInt(process.env.PREVIEW_PORT ?? '4173', 10)
const root = resolve(fileURLToPath(new URL('./camellia-resume-site/', import.meta.url)))

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.webp': 'image/webp',
}

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url ?? '/', `http://${host}`).pathname)
    const relativePath = normalize(pathname).replace(/^([/\\])+/, '')
    let filePath = resolve(join(root, relativePath || 'index.html'))

    if (!filePath.startsWith(root)) {
      response.writeHead(403).end('Forbidden')
      return
    }

    try {
      if ((await stat(filePath)).isDirectory()) filePath = join(filePath, 'index.html')
    } catch {
      filePath = join(root, 'index.html')
    }

    const body = await readFile(filePath)
    response.writeHead(200, {
      'Content-Type': mimeTypes[extname(filePath).toLowerCase()] ?? 'application/octet-stream',
      'Cache-Control': 'no-cache',
    })
    response.end(body)
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end(`Preview server error: ${error.message}`)
  }
}).listen(port, host, () => {
  console.log(`Local preview: http://${host}:${port}`)
})
