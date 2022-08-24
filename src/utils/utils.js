export const fetchData = async (fetchUrl) => {
  try {
    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error(`Error occoured response status is ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
