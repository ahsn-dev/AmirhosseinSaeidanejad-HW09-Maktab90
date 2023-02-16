// http://google.com
// /tutorial.html
// local/path
// ftp://ftp.com/my.zip
// http://nodejs.org
// http://internal.com/test

const links = document.querySelectorAll("a");
for (let link of links) {
  if (link.href.startsWith("http://") || link.href.startsWith("ftp://")) {
    link.style.color = "orange";
  }
}
