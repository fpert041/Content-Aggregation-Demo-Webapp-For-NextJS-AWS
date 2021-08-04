// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// A request to /api/post/abc will respond with the text: Post: abc
export default function handler(req, res) {
  const { pid } = req.query
  res.end('Post:' ${pid})
}
