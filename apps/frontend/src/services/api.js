const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

export async function fetchHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    if (!res.ok) throw new Error("Not OK");
    return await res.json();
  } catch {
    return { status: "DOWN ❌" };
  }
}

export async function fetchDeploymentInfo() {
  try {
    const res = await fetch(`${API_BASE}/deployment`);
    return await res.json();
  } catch {
    return null;
  }
}