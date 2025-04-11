export async function fetchMusicGroups(pageNr = 0, pageSize = 30) {
    try {
      const response = await fetch(`/api/MusicGroup/Read?seeded=true&flat=false&pageNr=${pageNr}&pageSize=${pageSize}`);
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      console.log(`GET request successful`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching music groups:', error);
      throw error;
    }
  }