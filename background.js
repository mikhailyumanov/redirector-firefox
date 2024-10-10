const from_url = "old.example.com"
const to_url = "new.example.com"

browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Intercepted URL: ", details.url);
    if (details.url.includes(from_url)) {
      const newUrl = details.url.replace(from_url, to_url);
      console.log("Redirecting to: ", newUrl);
      return { redirectUrl: newUrl };
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);

