# Free Aftenposten

A Chrome extension running on aftenposten.no removing any cookies set by the website to track the number of visits you have made. This will rid you of the notice from Aftenposten telling you that you have no more visits left.

## Technical details

This extension removes the cookies VPW\_Quota\_Info and VPW\_Quota when visiting aftenposten.no. It runs a content script which in turn calls a background script removing any cookies matching the name VPW\*.
