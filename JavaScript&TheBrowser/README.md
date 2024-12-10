# JavaScript and the Browser

## Networks and the Internet

* A *network* is simply computers connected to share data.

* The *internet* is a giant network connecting computers all over the world.

* Computers communicate by sending bits(small pieces of information). To make sense of bits, computers use protocols(rules for communication).


**Important Protocols**

1. HTTP(Hypertect Transfer Protocol):
    - used for fetching web pages
    - **example** of a request:
    `GET /index.html HTTP/1.1`
    This asks the server for a file called `index.html`

2. TCP(Transmission Control Protocol):

    - ensures data is sent correctly over the internet

    - acts like a pipe between two computers where data flows in both directions

    - computers use ports to manage different types of communication(eg. HTTP uses port 80)


## The Web

* World Wide Web(WWW) is built on the internet and allows us to view and link web pages using browsers.

* URLs(Uniform Resource Locators) identify web pages

    - Example:
    `http://eloquentjavascript.net/13_browser.html`

    - http: Protocol for accessing the page

    - eloquentjavascript.net: The server hosting the page

    - /13_browser.html: Path to the specific page


**How the web works**

* You type a URL(eg. `eloquentjavascript.net`) in your browser

* The browser looks up the server's IP address

* It connects to the server and requests the page

* The server sends back the page, and the browser displays it


## HTML: The skeleton of the Web

HTML is like the skeleton of the webpage, it gives structure to content. Without it, the browser wouldnt know if something is a heading, a paragraph or a link.

**How it works**

1. *Tags are the building blocks*

Tags are like labels that tell the browser, that a certain part is a heading, a paragraph etc.

2. *HTML is structured in layers*

* `<!doctype html>`: is the modern HTML declaration

* `<html>`: the grand container that holds everything

* `<head>`: the brain of the document. It contains metadata(data about your data) like the title, character encoding, and stylesheets.

* `<body>`: the body is where all the visible action happens; headings, paragraphs, images etc.

3. *Self-closing tags*

Some tags, like `<meta>` or `<img>`, dont have any content to wrap around, so they just close themselves. Theyre like a lone wolf in HTML.

4. *Attributes: The spice of tags*

They give extra info to tags. They are like a modifier to the html elements. eg. href attribute

```htm
<a href="https://chatgpt.com">Visit ChatGPT</a> <!-- 'href' is the destination -->
```


## HTML + JavaScript: Bringing Life to the party

HTML alone is static. JavaScript is the magician that makes it interaactive.

**How it works**

1. *Using the `<script>` tag*

The `<script>` tag is the VIP pass for JavaScript to join the html party. When the browser reads this tag, it executes the JavaScript code inside.

2. *Linking external scripts*

Big programs are hard to manage in the `<script>` tag, so we store them in separate files and link them using the `src` attribute.

3. *Event-based actions*

JavaScript thrives on events like clicks, hovers or typing. eg.
`<button onclick="alert('You clicked me!')">`


## Sandboxing: Keeping the chaos contained

JavaScript is super powerful, but with great power comes great responsibility. Browsers use a sandbox to make sure scripts cant go rogue and mess up with your system.

**How sandboxing works:**

1. *Limited access*

Scripts can only play with the web page they're part of. They cant peek at ones files, steal passwords or access sensitive information on ones computer.

2. *Steel-caged playground*

Browsers enforce strict rules, like:
    
    * No reading files on ones device
    * No unauthorized network connections
    * No sneaking into other browser tabs

3. *What could go wrong?*

If a hacker finds a loophole, like an unpatched browser vulnerability, they could bypass these rules and steal ones data. Thats why browser updates are crucial since they fix the loopholes.


## Compatability and the Browser wars: A journey through the wild web

Back in the days, Mosaic was the first browser that everyone loved because it brought web pages to life. However, Netscape rolled in and everyone switched to Netscape. But soon after, Microsoft entered the game and introduced *Internet Explorer*. 

With Microsoft's massive reach, IE quickly became the king of the browser market, then chaos began


**The Browser Wars**

Microsoft got comfy at the top. They thought, "Why bother following rules while thwy could make their own!" They added unique features to their browser. Developers now had a problem of whether to build their websites for Internet Explorer or for other browsers like Netscape.

The result? A web mess:

    * Features worked in one browser but broke in others.
    * Bugs appeared everywhere, and different browsers had different bugs. Writing code became like working in a minefield.

Developers had to include ugly hacks and special rules just to make websites work for all users. Life as a developer then, was stressful.


**The rise of the challenge**

Heroes arrived to restore balance:

* *Mozilla Firefox* emerged as an open source alternative to IE. It was fast, free and followed web standards.

* Apple launched *Safari*, optimized for its macOS users.

* *Google Chrome* came roaring in with speed and simplicity

Now, the web had 4 major players: Firefox, Chrome, Safari, and Internet explorer


**Standards saving the day**

By the late 2000s, everyone realized the web is for everyone. Developers and browser makers agreed to follow standards:

    * The W3C(World Wide Web Consortium) set guidelines for browsers to ensure compatability. Browsers improved their performance and squashed bugs.

Microsoft eventually ditched the chaotic Internet Explorer abd introduced Edge, built to align with these standards. Later, they even built edge using Chrome's underlying engine, Chromium.


**Today:A mostly peaceful web**

Thanks to years of battles and collaboration, we now live in a relatively calm era for web developers:

    * Modern browsers (Chrome, Edge, Safari, Firefox) behave similarly.

    * Developers can mostly trust that their code will work across different browsers without hacks.

But there's a catch,

    * Google's Chrome has gained massive dominance, with over 60% of the market share. This raises concerns that Google could once again dictate the rules of the web.
