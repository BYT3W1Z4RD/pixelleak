# Pixelleak

Pixelleak is a website script code that can be used to collect browser fingerprints and send them to a remote server using a webhook. The collected data can be used for various purposes, such as tracking users or detecting fraud.

## How it works

Pixelleak collects the following information from the user's browser:

- User agent
- Platform
- Language
- Color depth
- Pixel ratio
- Plugins
- MIME types
- Cookies enabled
- Timezone
- Network information
- Hardware concurrency
- Do not track

This information is then formatted into a string and sent to a remote server using an HTTP POST request with the webhook URL provided in the code.
