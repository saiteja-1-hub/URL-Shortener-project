import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import CreateLinkModal from "../components/CreateLinkModal";
import LinkCard from "../components/LinkCard";

function Dashboard() {
  const [links, setLinks] = useState([]);

  const fetchLinks = async () => {
    try {
      const res =
        await api.get("/links");

      setLinks(res.data.rows);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <br />

        <CreateLinkModal
          fetchLinks={fetchLinks}
        />

        {links.map((item) => (
          <LinkCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </>
  );
}

export default Dashboard;