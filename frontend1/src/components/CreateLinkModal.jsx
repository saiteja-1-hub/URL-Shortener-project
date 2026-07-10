import { useState } from "react";
import api from "../services/api";

function CreateLinkModal({ fetchLinks }) {
  const [title, setTitle] = useState("");
  const [originalUrl, setOriginalUrl] =
    useState("");

  const createLink = async () => {
    try {
      await api.post("/links", {
        title,
        originalUrl,
      });

      setTitle("");
      setOriginalUrl("");

      fetchLinks();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "30px",
      }}
    >
      <h3>Create Short URL</h3>

      <br />

      <input
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        placeholder="Original URL"
        value={originalUrl}
        onChange={(e) =>
          setOriginalUrl(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <button
        onClick={createLink}
        style={{
          padding: "10px 20px",
        }}
      >
        Create
      </button>
    </div>
  );
}

export default CreateLinkModal;