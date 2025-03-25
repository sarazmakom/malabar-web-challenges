import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">( : Hello React : )</h2>
      <label htmlFor="input-field">Type something here:</label>
      <input type="text" id="input-field" />
      <a href="https://react.dev/" className="article__link">
        Link to the React website
      </a>
    </article>
  );
}
