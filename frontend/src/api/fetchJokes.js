const API_URL = "http://localhost:5000/api"; // ✅ API points to "/api"

export const getJoke = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/joke");
    if (!response.ok) throw new Error(`Failed to fetch joke: ${response.status}`);
    
    const joke = await response.json();
    console.log("Fetched joke:", joke); // ✅ Debug log
    return joke;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return null;
  }
};

// Send vote for a joke
export const voteJoke = async (jokeId, emoji) => {
  try {
    const response = await fetch(`${API_URL}/joke/${jokeId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emoji }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error voting on joke:", error);
    return null;
  }
};