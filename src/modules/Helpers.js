function toTitleCase(str) { // displays each input title nicely inside <label> element
  if (!str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

function pathToTitle(str) {
  return toTitleCase(str.split('/')[1]);
}

export default pathToTitle;
