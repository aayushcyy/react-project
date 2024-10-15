function elementEjector(ejectingEle, container) {
  /*const a = document.createElement(reactElement.type);
  a.innerHTML = reactElement.children;
  a.setAttribute("href", reactElement.props.href);
  a.setAttribute("target", reactElement.props.target);
  container.appendChild(a);
  */

  const a = document.createElement(ejectingEle.type);
  a.innerHTML = ejectingEle.children;
  for (const prop in ejectingEle.props) {
    a.setAttribute(prop, ejectingEle.props[prop]);
  }
  container.appendChild(a);
}

const rootElement = document.querySelector("#root");

const reactElement = {
  type: "a",
  props: {
    href: "https://genius.com/Kendrick-lamar-and-sza-all-the-stars-lyrics",
    target: "_blank",
  },
  children: `Lyrics of Kendrick Lamar's "All the stars" song.`,
};

elementEjector(reactElement, rootElement);
