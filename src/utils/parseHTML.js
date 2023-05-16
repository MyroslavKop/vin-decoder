const parseHTML = (html) => {
  const parser = new DOMParser();
  const parsedDoc = parser.parseFromString(html, 'text/html');
  return parsedDoc.documentElement.innerHTML;
};

export default parseHTML;
