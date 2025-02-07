/** Demo val for GitHub sync */
const html = `
<html>
  <head>
    <title>GitHubSync test</title>
  </head>
  <body>
    <h1>GitHubSync Test</h1>
    <p>
      I edited this in vim, then pushed it to GitHub
    </p>
  </body>
</html>
`;

export default async function (req: Request): Promise<Response> {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
