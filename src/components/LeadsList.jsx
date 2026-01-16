import { useEffect, useState } from "react";
import API from "../api";
import Analytics from "./Analytics";

const LeadsList = ({ onView }) => {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [stage, setStage] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
  const fetchLeads = async () => {
    const res = await API.get("/api/leads", {
      params: { search, stage, page },
    });
    setLeads(res.data.leads);
    setPages(res.data.pages);
  };

  fetchLeads();
}, [search, stage, page]);


  return (
    <div style={{ padding: 20 }}>
      <h2>Lead Management Dashboard</h2>

      <Analytics />

      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={stage} onChange={(e) => setStage(e.target.value)}>
        <option value="">All Stages</option>
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Qualified">Qualified</option>
        <option value="Converted">Converted</option>
      </select>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Stage</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((l) => (
            <tr key={l._id}>
              <td>{l.name}</td>
              <td>{l.email}</td>
              <td>{l.stage}</td>
              <td>
                <button onClick={() => onView(l)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <span> Page {page} of {pages} </span>
      <button disabled={page === pages} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default LeadsList;
