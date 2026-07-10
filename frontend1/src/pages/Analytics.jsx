import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import AnalyticsChart from "../components/AnalyticsChart";

function Analytics() {
  const { id } = useParams();

  const [analytics, setAnalytics] =
    useState(null);

  useEffect(() => {
    getAnalytics();
  }, []);

  const getAnalytics =
    async () => {
      try {
        const res =
          await api.get(
            `/analytics/${id}`
          );

        setAnalytics(res.data);
      } catch (err) {
        console.log(err);
      }
    };

  if (!analytics)
    return <h2>Loading...</h2>;

  const browserCount = {};

  analytics.clicks.forEach(
    (item) => {
      browserCount[item.browser] =
        (browserCount[item.browser] ||
          0) + 1;
    }
  );

  const chartData =
    Object.entries(
      browserCount
    ).map(([browser, count]) => ({
      browser,
      count,
    }));

  return (
    <>
      <Navbar />

      <div className="container">
        <br />

        <h2>
          Total Clicks:
          {" "}
          {analytics.totalClicks}
        </h2>

        <br />

        <AnalyticsChart
          data={chartData}
        />
      </div>
    </>
  );
}

export default Analytics;