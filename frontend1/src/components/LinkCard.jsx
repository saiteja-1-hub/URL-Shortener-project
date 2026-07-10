import { Link } from "react-router-dom";

function LinkCard({ item }) {
  const shortUrl =
    `http://localhost:5000/r/${item.shortCode}`;

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "15px",
      }}
    >
      <h3>{item.title}</h3>

      <p>{item.originalUrl}</p>

      <a
        href={shortUrl}
        target="_blank"
      >
        {shortUrl}
      </a>

      <br />
      <br />

      <Link
        to={`/analytics/${item.id}`}
      >
        View Analytics
      </Link>
    </div>
  );
}

export default LinkCard;