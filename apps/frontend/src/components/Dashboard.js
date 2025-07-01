import React, { useEffect, useState } from "react";
import { fetchHealth, fetchDeploymentInfo } from "../services/api";

function Dashboard() {
  const [health, setHealth] = useState("Loading...");
  const [deploy, setDeploy] = useState(null);

  useEffect(() => {
    fetchHealth().then((res) => setHealth(res?.status || "Unknown"));
    fetchDeploymentInfo().then(setDeploy);
  }, []);

  return (
    <div>
      <h3>🔄 API Health</h3>
      <p>{health}</p>

      <h3>📦 Deployment Info</h3>
      {deploy ? (
        <ul>
          <li>Version: {deploy.version}</li>
          <li>Commit: {deploy.commit}</li>
          <li>Env: {deploy.env}</li>
          <li>Deployed At: {new Date(deploy.deployedAt).toLocaleString()}</li>
        </ul>
      ) : (
        <p>Loading deployment data...</p>
      )}

      <h3>⚙️ Current Frontend Env</h3>
      <p>{process.env.REACT_APP_ENV}</p>
    </div>
  );
}

export default Dashboard;
