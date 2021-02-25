export async function getProfiles() {
  try {
    let response = await fetch(`${process.env.REACT_APP_BASE_URL}/profiles`);
    if (response.statusText === "Not Found") {
      return null;
    }
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    // console.log(error);
  }
}
