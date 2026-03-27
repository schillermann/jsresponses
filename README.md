# JSResponses

A simple, composable JavaScript web framework built on [http module](https://nodejs.org/api/http.html).

Inspired by pure OOP, Alan Kay with [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk), and Yegor Bugayenko's [Cactoos](https://github.com/yegor256/takes), [Takes](https://github.com/yegor256/takes), and [JPages](https://github.com/yegor256/jpages).

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

WireFront(
  (req, res) => {
    ResponseStatusLineOk(
      ResponseHtmlHeader(
        ResponseBody('<h1>Hello from JSResponses!</h1>')
      )
    ).media(WireMedia(res));
  }
).value();
```
