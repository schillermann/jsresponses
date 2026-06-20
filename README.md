# JSResponses

A simple, composable JavaScript web framework built on [http module](https://nodejs.org/api/http.html).

Check out similar web frameworks in other languages:
- [PHPResponses](https://github.com/schillermann/phpresponses)
- [JResponses](https://github.com/schillermann/jresponses)

Inspired by pure OOP, Alan Kay with [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk), and Yegor Bugayenko's [Cactoos](https://github.com/yegor256/takes), [Takes](https://github.com/yegor256/cactoos), and [JPages](https://github.com/yegor256/jpages).

- [Principles](#principles)
- [Quick Start](#quick-start)
- [Requests](#requests)
  - [Body Decorators](#body-decorators)
- [Port](#port)
- [Routing](#routing)

## Principles

- **No classes**: Pure factory functions and frozen objects.
- **Immutability**: All objects are frozen upon creation.
- **Composition over Inheritance**: Use decorators to build responses.
- **No Nulls**: Objects are always valid and self-sufficient.
- **Procedural Responses**: `media` is a pure procedure that handles its own completion with a media object.

## Quick Start

Install dependencies (if any) and create a `main.js`:

```javascript
import { WireFront } from './WireFront.js';
import { ResponseStatusLineOk } from './ResponseStatusLineOk.js';
import { ResponseHtmlHeader } from './ResponseHtmlHeader.js';
import { ResponseBody } from './ResponseBody.js';
import { WireMedia } from './WireMedia.js';
import { PortFallback } from './PortFallback.js';

WireFront(
  (req, res) => {
    ResponseStatusLineOk(
      ResponseHtmlHeader(
        ResponseBody('<h1>Hello from JSResponses!</h1>')
      )
    ).media(WireMedia(res));
  },
  PortFallback()
).conclusion();
```

## Requests

You can use `RequestFromStream` to interact with the incoming HTTP request in an object-oriented way:

```javascript
import { WireFront } from './WireFront.js';
import { RequestFromStream } from './RequestFromStream.js';
import { ResponseStatusLineOk } from './ResponseStatusLineOk.js';
import { ResponseHtmlHeader } from './ResponseHtmlHeader.js';
import { ResponseBody } from './ResponseBody.js';
import { WireMedia } from './WireMedia.js';

WireFront(
  async (req, res) => {
    const request = RequestFromStream(req);
    const agent = request.header('User-Agent').value();

    ResponseStatusLineOk(
      ResponseHtmlHeader(
        ResponseBody(
          `<html>
            <body>
              <h1>Your Browser: ${agent}</h1>
            </body>
          </html>`
        )
      )
    ).media(WireMedia(res));
  }
).conclusion();
```

### Body Decorators

If you need to work with the request body, you can use body decorators:

#### Plain Text

Use `RequestBodyText` to get the body as a string:

```javascript
import { RequestBodyText } from './RequestBodyText.js';

// inside WireFront handler
const body = await RequestBodyText(request).value();
```

#### JSON

Use `RequestBodyJson` to get the body as a JSON object:

```javascript
import { RequestBodyJson } from './RequestBodyJson.js';

// inside WireFront handler
const body = await RequestBodyJson(request).value();
```

## Port

If you need to change the default port while still supporting environment variables and CLI arguments, you can pass it to `PortFallback`:

```javascript
import { WireFront } from './WireFront.js';
import { PortFallback } from './PortFallback.js';

WireFront(
  (req, res) => {
    // ...
  },
  PortFallback(9000)
).conclusion();
```

If you need even more control, you can compose port decorators manually.
For example, to only support a default port and environment variables, ignoring command-line arguments:

```javascript
import { WireFront } from './WireFront.js';
import { PortDefault } from './PortDefault.js';
import { PortEnv } from './PortEnv.js';

WireFront(
  (req, res) => {
    // ...
  },
  PortEnv(
    PortDefault(9000)
  )
).conclusion();
```

You can specify the port using the `--port=` command line argument:

```bash
node src/main.js --port=9000
```

Alternatively, you can use the `PORT` environment variable:

```bash
PORT=9000 node src/main.js
```

## Routing

You can use declarative routing with `ResponseForked` and `ForkPath`:

```javascript
import { WireFront } from './WireFront.js';
import { ResponseStatusLineOk } from './ResponseStatusLineOk.js';
import { ResponseStatusLineNotFound } from './ResponseStatusLineNotFound.js';
import { ResponseBody } from './ResponseBody.js';
import { WireMedia } from './WireMedia.js';
import { PortFallback } from './PortFallback.js';
import { RequestFromStream } from './RequestFromStream.js';
import { ResponseForked } from './ResponseForked.js';
import { ForkPath } from './ForkPath.js';

WireFront(
  (req, res) => {
    const request = RequestFromStream(req);
    ResponseForked(
      request,
      ResponseStatusLineNotFound(ResponseBody('Page Not Found!')),
      ForkPath('/', ResponseStatusLineOk(ResponseBody('Hello World!'))),
      ForkPath('/balance', ResponseStatusLineOk(ResponseBody('42'))),
      ForkPath('/id', ResponseStatusLineOk(ResponseBody('mario')))
    ).media(WireMedia(res));
  },
  PortFallback()
).conclusion();
```
