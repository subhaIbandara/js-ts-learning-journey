# Web Browser Fundamentals: HTTP, DOM, DOM Creation, and CSSOM

These beginner-friendly notes explain how a browser communicates with a
server, reads HTML and CSS, builds the DOM and CSSOM, and displays a web
page.

## Contents

1.  [HTTP Request and HTTP Response](#1-http-request-and-http-response)
2.  [What Is the DOM?](#2-what-is-the-dom)
3.  [How the Browser Creates the
    DOM](#3-how-the-browser-creates-the-dom)
4.  [What Is the CSSOM?](#4-what-is-the-cssom)
5.  [How DOM and CSSOM Work
    Together](#5-how-dom-and-cssom-work-together)
6.  [Why This Matters for QA
    Automation](#6-why-this-matters-for-qa-automation)
7.  [Quick Revision](#7-quick-revision)

------------------------------------------------------------------------

## 1. HTTP Request and HTTP Response

### What is an HTTP request?

An **HTTP request** is a message sent by a client, such as a browser or
an application, to a server to request information or perform an action.

For example, when you enter `https://example.com` in your browser, the
browser sends an HTTP request to the server.

### What is an HTTP response?

An **HTTP response** is the message the server sends back after
processing a request. The response may contain a web page, data in JSON
format, or an error message.

### How request and response work

``` mermaid
flowchart TD
    A["Client / Browser"] -->|"HTTP Request"| B["Web Server"]
    B --> C["Process the request"]
    C -->|"HTTP Response"| A
    A --> D["Display the result"]
```


### Main parts of an HTTP request

  ----------------------------------------------------------------------------------
  Part                    Meaning                 Example
  ----------------------- ----------------------- ----------------------------------
  Method                  The action to perform   `GET`, `POST`

  URL                     The resource to access  `/api/users`

  Headers                 Additional request      `Content-Type: application/json`
                          information             

  Body                    Data sent to the        User details in JSON
                          server, when needed     
  ----------------------------------------------------------------------------------

### Common HTTP methods

-   **GET** --- Retrieve data.
-   **POST** --- Submit data or create a resource.
-   **PUT** --- Replace a resource.
-   **PATCH** --- Partially update a resource.
-   **DELETE** --- Delete a resource.

### Main parts of an HTTP response

  ----------------------------------------------------------------------------------
  Part                    Meaning                 Example
  ----------------------- ----------------------- ----------------------------------
  Status code             Indicates the result    `200 OK`

  Headers                 Information about the   `Content-Type: application/json`
                          response                

  Body                    Returned content, if    User details in JSON
                          any                     
  ----------------------------------------------------------------------------------

### Common HTTP status codes

  -----------------------------------------------------------------------
  Status code                         Meaning
  ----------------------------------- -----------------------------------
  `200 OK`                            Request succeeded

  `201 Created`                       Resource was created successfully

  `204 No Content`                    Request succeeded, with no response
                                      body

  `400 Bad Request`                   The request is invalid

  `401 Unauthorized`                  Authentication is missing or
                                      invalid

  `403 Forbidden`                     Access is not allowed

  `404 Not Found`                     The resource was not found

  `500 Internal Server Error`         The server encountered an
                                      unexpected error
  -----------------------------------------------------------------------

### Request and response example

**HTTP request:**

``` http
GET /api/users/10 HTTP/1.1
Host: example.com
Accept: application/json
```

This request asks the server to retrieve the user with ID `10`.

**HTTP response:**

``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 10,
  "name": "John"
}
```

The server successfully returns the user's details as JSON.

------------------------------------------------------------------------

## 2. What Is the DOM?

**DOM stands for Document Object Model.**

The DOM is a programming interface that represents an HTML document as a
tree of objects. JavaScript can use it to access and change the content,
structure, and styles of a web page.

In simple English, **the DOM is how the browser represents a web page so
JavaScript can interact with it.**

### Example HTML

``` html
<html>
  <body>
    <h1>Hello World</h1>
    <p>Welcome to my website.</p>
  </body>
</html>
```

The browser parses the HTML and creates a tree of nodes.

``` mermaid
flowchart TD
    A["Document"] --> B["html"]
    B --> C["body"]
    C --> D["h1"]
    C --> E["p"]
    D --> F["Text: Hello World"]
    E --> G["Text: Welcome to my website."]
```

Each HTML element becomes an element node. Text inside an element is
represented by a text node.

### How JavaScript interacts with the DOM

HTML:

``` html
<h1 id="title">Hello World</h1>
```

JavaScript:

``` javascript
const heading = document.getElementById("title");
heading.textContent = "Welcome to QA!";
```

The browser now displays `Welcome to QA!` as the heading.

-   `document` represents the document.
-   `getElementById()` finds an element with the specified ID.
-   `textContent` reads or changes the text inside an element.

JavaScript can also create elements, remove elements, change attributes,
and modify styles.

### HTML vs. DOM

  -----------------------------------------------------------------------
  HTML                                DOM
  ----------------------------------- -----------------------------------
  Defines the structure of a web      Represents the page structure as
  page.                               objects.

  Usually written in an HTML file.    Created and maintained by the
                                      browser.

  Is the markup source.               Can change while the page is
                                      running.
  -----------------------------------------------------------------------

**Important:** The DOM is not always the same as the original HTML
source. JavaScript can change the DOM after the browser loads the HTML,
so the current DOM may differ from the original source.

------------------------------------------------------------------------

## 3. How the Browser Creates the DOM

When a browser receives an HTML document from a server, it needs to
understand the HTML code and represent the page structure in a format
that JavaScript can access and modify.

A simplified overview is:

``` mermaid
flowchart TD
    A["HTTP Response: HTML bytes"] --> B["Identify content type and decode characters"]
    B --> C["HTML parsing"]
    C --> D["Tokenization"]
    D --> E["Tree construction and DOM node insertion"]
    E --> F["DOM tree"]
    F --> G["JavaScript can access and modify the DOM"]
```

**Note:** Tokenization and tree construction work together as the parser
processes the document. The browser does not necessarily finish
tokenizing the entire document before it starts building the tree.

### Step 1: The browser receives the HTTP response

When you enter a URL, the browser sends an HTTP request. The server
returns an HTTP response that may contain HTML.

Example response header:

``` http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
```

The response body may contain:

``` html
<html>
  <body>
    <h1>Hello World</h1>
    <p>Welcome to my website.</p>
  </body>
</html>
```

### Step 2: Content type and character encoding

The browser needs to identify the content type and decode the received
bytes into text.

Example:

``` http
Content-Type: text/html; charset=UTF-8
```

-   `text/html` tells the browser that the response contains HTML.
-   `charset=UTF-8` specifies the character encoding used for the HTML
    text.

**What is UTF-8?**

UTF-8 is a character encoding that represents text as bytes. It supports
English letters, Sinhala characters, and many other writing systems.

Example HTML:

``` html
<p>Hello</p>
<p>ආයුබෝවන්</p>
```

**Why is this step necessary?**

The browser receives data as bytes, not as ready-to-use text. It needs
to decode those bytes into the correct characters before parsing the
HTML. If the wrong character encoding is used, some characters may
appear incorrectly.

*Note:* The browser determines the encoding according to HTML and
browser rules. The HTTP `Content-Type` header is one important source of
encoding information; the browser may also consider a byte-order mark or
HTML metadata, depending on the situation.

### Step 3: HTML parsing

**HTML parsing** is the process of reading HTML and interpreting it
according to HTML parsing rules.

Example:

``` html
<h1>Hello World</h1>
```

The parser interprets:

-   `<h1>` as the start of a heading element.
-   `Hello World` as the text content.
-   `</h1>` as the end tag.

**Why is HTML parsing necessary?**

HTML is markup text. The browser must interpret the tags and their
relationships to build a structured document that it can use.

HTML parsing includes two closely connected processes: **tokenization**
and **tree construction**.

### Step 4: Tokenization

**Tokenization** is the process of reading HTML characters and
recognizing meaningful pieces called **tokens**.

Example:

``` html
<h1>Hello World</h1>
```

The tokenizer recognizes tokens such as:

1.  A start-tag token for `h1`.
2.  A text token for `Hello World`.
3.  An end-tag token for `h1`.

Another example:

``` html
<a href="/login">Login</a>
```

The tokenizer recognizes a start-tag token for `a` with the `href`
attribute, a text token for `Login`, and an end-tag token for `a`.

**Why is tokenization necessary?**

The browser cannot treat the entire HTML document as one
undifferentiated string. It needs to identify the parts that represent
tags, text, attributes, comments, and other HTML constructs.

Tokenization helps the browser:

-   Recognize start tags and end tags.
-   Separate text from markup.
-   Identify attributes and their values.
-   Pass meaningful tokens to the tree builder.

**Remember:** Tokenization identifies the meaningful parts of HTML. It
does not, by itself, build the DOM tree.

### Step 5: DOM node creation

The tree builder uses the tokens to create and insert DOM nodes.

Common node types include:

-   **Document node** --- represents the document.
-   **Element node** --- represents an HTML element, such as `h1` or
    `p`.
-   **Text node** --- represents text inside an element.
-   **Comment node** --- represents an HTML comment.

For example:

``` html
<h1>Hello World</h1>
```

The browser creates an element node for `h1` and a text node for
`Hello World`.

**Why is node creation necessary?**

JavaScript needs objects to access and manipulate individual parts of a
web page. It can select the heading and change its text without
replacing the entire HTML document.

``` javascript
document.querySelector("h1").textContent = "Welcome to QA";
```

### Step 6: DOM tree construction

**Tree construction** is the process of using tokens to create, insert,
and connect nodes according to HTML parsing rules.

For example:

``` html
<html>
  <body>
    <h1>Hello World</h1>
    <p>Welcome to my website.</p>
  </body>
</html>
```

Conceptually, the DOM tree looks like this:

``` mermaid
flowchart TD
    A["Document"] --> B["html"]
    B --> C["body"]
    C --> D["h1"]
    C --> E["p"]
    D --> F["Text: Hello World"]
    E --> G["Text: Welcome to my website."]
```

**Why is tree construction necessary?**

The browser needs to know how elements relate to one another:

-   `body` is the parent of `h1` and `p`.
-   `h1` and `p` are children of `body`.
-   `Hello World` is the text inside `h1`.

These relationships allow JavaScript and other browser features to work
with the document structure. Tree construction also handles certain
invalid or incomplete HTML according to HTML parsing rules.

### Summary of DOM creation steps

  -----------------------------------------------------------------------
  Step                    What happens?           Why is it needed?
  ----------------------- ----------------------- -----------------------
  Content type and        The browser identifies  To interpret the
  encoding                the content format and  response correctly.
                          decodes bytes.          

  HTML parsing            The browser processes   To understand the
                          HTML according to HTML  document structure.
                          rules.                  

  Tokenization            HTML characters are     To distinguish tags,
                          recognized as tokens.   attributes, and text.

  Node creation           Objects representing    To represent individual
                          document parts are      parts of the document.
                          created.                

  Tree construction       Nodes are inserted and  To establish
                          connected.              parent-child
                                                  relationships.
  -----------------------------------------------------------------------

**Remember this flow:**

**HTTP response → Decode characters → HTML parsing → Tokenization and
tree construction → DOM tree**

------------------------------------------------------------------------

## 4. What Is the CSSOM?

**CSSOM stands for CSS Object Model.**

The CSSOM is a structured representation of CSS stylesheets and their
rules that the browser can work with.

In simple English, **the DOM represents the structure of a web page,
while the CSSOM represents its CSS rules.**

### Example HTML

``` html
<h1>Hello World</h1>
<p>Welcome to my website.</p>
```

### Example CSS

``` css
h1 {
  color: blue;
  font-size: 32px;
}

p {
  color: gray;
  font-size: 16px;
}
```

The browser parses the CSS and represents the rules in the CSSOM.

``` mermaid
flowchart TD
    A["CSS Stylesheet"] --> B["CSS parsing"]
    B --> C["CSSOM"]
    C --> D["Rule: h1"]
    C --> E["Rule: p"]
    D --> F["color: blue; font-size: 32px"]
    E --> G["color: gray; font-size: 16px"]
```

### Steps in CSSOM creation

#### Step 1: The browser receives CSS

CSS can be included directly in an HTML document or loaded from an
external stylesheet.

Example:

``` html
<link rel="stylesheet" href="style.css">
```

The browser requests `style.css` and receives its content.

**Why?** The browser needs the stylesheet content to determine how
elements should look.

#### Step 2: CSS parsing

The browser reads the CSS and identifies selectors, properties, and
values.

``` css
h1 {
  color: blue;
  font-size: 32px;
}
```

-   `h1` --- selector.
-   `color` --- property.
-   `blue` --- property value.
-   `font-size` --- property.
-   `32px` --- property value.

**Why?** The browser needs to understand the rules and the styles they
define.

#### Step 3: CSSOM construction

The browser represents the parsed CSS rules in a structured object
model.

Conceptually, the rules are:

-   Rule for `h1`: `color: blue`, `font-size: 32px`.
-   Rule for `p`: `color: gray`, `font-size: 16px`.

**Why?** A structured representation allows the browser to inspect,
apply, and update CSS rules.

------------------------------------------------------------------------

## 5. How DOM and CSSOM Work Together

The DOM describes what elements exist. The CSSOM represents CSS rules.
The browser combines these with other styling information to calculate
the styles that apply to each element.

``` mermaid
flowchart TD
    A["HTML"] --> B["DOM"]
    C["CSS"] --> D["CSSOM"]
    B --> E["Style calculation"]
    D --> E
    E --> F["Layout"]
    F --> G["Painting"]
    G --> H["Displayed web page"]
```

For example:

-   The DOM contains an `h1` element.
-   The CSSOM contains a rule that makes `h1` blue.
-   The browser calculates the applicable styles and renders the
    heading.

This is a simplified rendering pipeline. Layout and painting may happen
again when the page or its styles change.

### DOM vs. CSSOM

  -----------------------------------------------------------------------
  DOM                                 CSSOM
  ----------------------------------- -----------------------------------
  Document Object Model               CSS Object Model

  Represents HTML document structure  Represents CSS rules and
                                      stylesheets

  Built by parsing HTML               Built by parsing CSS

  Contains elements and text nodes    Contains stylesheet and CSS rule
                                      objects

  JavaScript can manipulate page      JavaScript can inspect and modify
  elements                            CSS rules
  -----------------------------------------------------------------------

**Remember:**

-   **DOM:** What elements are on the page?
-   **CSSOM:** What CSS rules are available?
-   **Style calculation:** Which styles apply to each element?
-   **Rendering:** How does the browser display the page?

*Technical note:* The final computed style is not simply a copy of one
CSSOM rule. The browser considers the CSS cascade, specificity,
inheritance, and other applicable rules. JavaScript's
`getComputedStyle()` exposes an element's computed styles.

------------------------------------------------------------------------

## 6. Why This Matters for QA Automation

Understanding HTTP, the DOM, and the CSSOM helps QA engineers test web
applications more effectively.

### HTTP testing

As a QA engineer, verify:

-   The correct request method and URL are used.
-   Request headers and body contain the expected values.
-   The response has the expected status code.
-   The response body contains correct data.
-   Invalid requests return appropriate errors.
-   Authentication and authorization work correctly.

### DOM and UI automation

DOM knowledge helps you:

-   Understand how web page elements are structured.
-   Choose reliable locators, such as roles, accessible names, and IDs.
-   Investigate why an automation locator cannot find an element.
-   Understand dynamically added, removed, or updated content.
-   Inspect elements in browser Developer Tools.

Example Playwright test:

``` javascript
const heading = page.getByRole("heading", {
  name: "Hello World"
});

await expect(heading).toBeVisible();
```

This checks that the heading is visible.

### CSSOM and style testing

CSS knowledge helps you:

-   Verify colors, fonts, sizes, and other visual properties.
-   Investigate unexpected styles in Developer Tools.
-   Understand how CSS rules affect elements.
-   Write UI tests that validate visual properties when necessary.

Example Playwright test:

``` javascript
const heading = page.locator("h1");

await expect(heading).toHaveCSS(
  "color",
  "rgb(0, 0, 255)"
);
```

This checks whether the heading's computed text color is blue.

**Important:** The CSSOM contains CSS rules. `getComputedStyle()`
exposes the final computed styles for an element after the browser
considers the applicable rules, inheritance, and CSS cascade.

------------------------------------------------------------------------

## 7. Quick Revision

### The complete overview

``` mermaid
flowchart TD
    A["Browser sends HTTP request"] --> B["Server sends HTTP response"]
    B --> C["Browser identifies content and decodes bytes"]
    C --> D["HTML parsing"]
    D --> E["DOM construction"]
    B --> F["CSS is received and parsed"]
    F --> G["CSSOM construction"]
    E --> H["DOM + CSSOM"]
    G --> H
    H --> I["Style calculation"]
    I --> J["Layout and painting as needed"]
    J --> K["Web page displayed"]
```

### Key points to remember

  -----------------------------------------------------------------------
  Concept                             Simple meaning
  ----------------------------------- -----------------------------------
  HTTP request                        Message sent from client to server

  HTTP response                       Message returned from server to
                                      client

  Content-Type                        Identifies the response body's
                                      media type

  UTF-8                               Character encoding used to
                                      represent text as bytes

  HTML parsing                        Process of interpreting HTML
                                      according to HTML rules

  Tokenization                        Recognizing meaningful HTML tokens

  DOM node                            Object representing a part of the
                                      document

  Tree construction                   Creating and connecting nodes into
                                      a tree

  DOM                                 Object representation of the HTML
                                      document

  CSSOM                               Object representation of CSS rules
                                      and stylesheets

  Style calculation                   Determines the styles that apply to
                                      elements

  Rendering                           Processes such as layout and
                                      painting that produce the visible
                                      page
  -----------------------------------------------------------------------

### One-line summary

**HTTP delivers the content; HTML parsing builds the DOM; CSS parsing
builds the CSSOM; and the browser uses the DOM and CSSOM, together with
other information, to render the page.**

> **Note:** For a more detailed explanation, refer to my blog: [How the Browser Renders a Webpage — From URL to Pixels](https://medium.com/tech-learn-share/how-the-browser-renders-a-webpage-from-url-to-pixels-24a27c815538).
>> **Note:** This is an interesting YouTube video that makes these concepts easier to understand: [How Browsers Render Webpages: From URL to Pixels](https://youtu.be/wqqbIg7JrfU).
