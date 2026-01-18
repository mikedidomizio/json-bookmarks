// Global
const BROWSER_FIREFOX = "Firefox";
const BROWSER_CHROME = "Chrome";
var BROWSER_VENDOR = "undefined";

if (typeof chrome !== "undefined")
{
  if (window.chrome)
  {
    BROWSER_VENDOR = BROWSER_CHROME;
  }
  else
  {
    BROWSER_VENDOR = BROWSER_FIREFOX;
  }
}
