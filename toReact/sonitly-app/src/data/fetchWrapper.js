
async function fetchData(resourceUri) {
    try {
      // 1) HTTP client
      const response = await fetch(resourceUri);
      // 2) validate the response
      if (!response.ok) {
          throw new Error(`the request was not good ${response.status}`);
      }
      // 3) retrieve the received payload from the response message
      const data = await response.json();
      return data;
 
    } catch (error) {
         console.log(error.message);
         return null;
    }
 }
 export {fetchData};