import React, { useState, useEffect } from 'react';

function Epg(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(props.source);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleRecordClick(showName, channelName) {
    // code to launch Tivimate app in the background and start recording
    // save the recording to the downloads directory with a filename based on the showName and current date
  }

  return (
    <div className="Epg">
      {data.map((channel, index) => (
        <div key={index}>
          <h2>{channel.name}</h2>
          <ul>
            {channel.shows.map((show, index) => (
              <li key={index}>
                <h3>{show.name}</h3>
                <p>{show.description}</p>
                <img src={show.image} alt={show.name} />
                <button onClick={() => handleRecordClick(show.name, channel.name)}>
                  Record
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Epg;
