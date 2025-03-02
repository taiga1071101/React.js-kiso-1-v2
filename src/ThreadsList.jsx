import React, { useEffect, useState } from 'react';
import './threadsList.css';

const ThreadsList = () => {
  const [threads, setThreads] = useState([]);
  const url = "https://railway.bulletinboard.techtrain.dev/threads?offset=0";

  const fetchThreads = () => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setThreads(data);
    })
    .catch(error => {
      console.error('データ取得エラー', error);
    });
  }

  useEffect(()=> {
    fetchThreads();
  }, []);

  return (
    <>
      <div className="threads-list">
        <h1>新着スレッド</h1>
        <ul>
          {
            threads.map(thread => {
              return ( <li key={thread.id}>{thread.title}</li> );
            })
          }
        </ul>
      </div>
    </>
  )
}

export default ThreadsList
