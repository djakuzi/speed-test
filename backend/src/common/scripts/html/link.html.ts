
export interface HtmlLinkOptions {
	title: string;
	links: Array<{
		href: string;
		text: string
	}>;
}

export function createHtmlLink(options: HtmlLinkOptions): string {
	const htmlLinks = options.links.map(
		(link) => `<a href="${link.href}">${link.text}</a>`
	).join('');

	const html = `
      <html>
        <head>
          <title>API Documentation</title>
          <style>
            body { font-family: sans-serif; padding: 30px; }

            h1 { margin-bottom: 20px; }

            a {
				display: block;
				margin: 10px 0;
				font-size: 24px;
				text-decoration: none;
				color: #3498db;
				transition: opacity 0.2s ease, transform 0.2s ease;
            }

			a:active {
			   transform: scale(0.9);
			}

			@media (hover: hover) {
			    a:hover {
					opacity: 0.5;
				}
			}

          </style>
        </head>
        <body>
          <h1>${options.title}</h1>
          ${htmlLinks}
        </body>
      </html>`;

	return html;
}