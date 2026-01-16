const LeadDetails = ({ lead, onBack }) => {
  return (
    <div style={{ padding: 20 }}>
      <h3>Lead Details</h3>
      <p>Name: {lead.name}</p>
      <p>Email: {lead.email}</p>
      <p>Phone: {lead.phone}</p>
      <p>Stage: {lead.stage}</p>
      <p>Source: {lead.source}</p>

      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default LeadDetails;
