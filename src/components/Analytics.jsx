import { useEffect, useState } from "react";
import API from "../api";

const Analytics = () => {
  const [stats, setStats] = useState({
    total: 0,
    converted: 0,
    newLeads: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const res = await API.get("/api/leads", { params: { limit: 1000 } });
    const leads = res.data.leads;

    setStats({
      total: leads.length,
      converted: leads.filter((l) => l.stage === "Converted").length,
      newLeads: leads.filter((l) => l.stage === "New").length,
    });
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <b>Total:</b> {stats.total} |{" "}
      <b>Converted:</b> {stats.converted} |{" "}
      <b>New:</b> {stats.newLeads}
    </div>
  );
};

export default Analytics;
