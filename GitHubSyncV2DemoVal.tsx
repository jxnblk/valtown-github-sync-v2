/** Demo val for GitHub sync */
const html = `
<html>
<head>
  <title>GitHubSync test</title>
  <style>
  body {
    margin: 0;
    padding: 32px;
    font-family: system-ui, sans-serif;
    color: black;
    background-color: tomato;
  }
  </style>
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
  console.log("GitHubSyncV2DemoVal", import.meta.url);
  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
