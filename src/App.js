import { useState } from "react";
import LeadsList from "./components/LeadsList";
import LeadDetails from "./components/LeadDetails";

function App() {
  const [selectedLead, setSelectedLead] = useState(null);

  return (
    <div>
      {!selectedLead ? (
        <LeadsList onView={setSelectedLead} />
      ) : (
        <LeadDetails lead={selectedLead} onBack={() => setSelectedLead(null)} />
      )}
    </div>
  );
}

export default App;
