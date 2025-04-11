// src/components/MusicGroups.jsx
import { useState, useEffect } from 'react'
import { fetchMusicGroups } from '../services/api'

function MusicGroups() {
  const [musicGroups, setMusicGroups] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        const data = await fetchMusicGroups()
        console.log('API response:', data) // Add this line to inspect the data
        setMusicGroups(data)
        setError(null)
      } catch (err) {
        setError('Failed to load music groups. Please try again later.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
  
    loadData()
  }, [])

  if (loading) return <div>Loading music groups...</div>
  if (error) return <div className="error">{error}</div>

  // In your MusicGroups component
return (
    <div className="music-groups">
      <h1>Music Groups</h1>
      {!musicGroups || (Array.isArray(musicGroups) && musicGroups.length === 0) ? (
        <p>No music groups found.</p>
      ) : (
        <ul>
          {Array.isArray(musicGroups) 
            ? musicGroups.map(group => (
                <li key={group.id || group.name}>
                  <h3>{group.name}</h3>
                  {group.description && <p>{group.description}</p>}
                </li>
              ))
            : // If musicGroups is an object with a specific property containing the array
              // Replace 'items' with whatever property contains your array
              musicGroups.items && Array.isArray(musicGroups.items) 
                ? musicGroups.items.map(group => (
                    <li key={group.id || group.name}>
                      <h3>{group.name}</h3>
                      {group.description && <p>{group.description}</p>}
                    </li>
                  ))
                : <p>Invalid data format received</p>
          }
        </ul>
      )}
    </div>
  )
}

export default MusicGroups