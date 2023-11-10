import { sharedTypes } from '@voyage-app-b2b/shared-types';
import { Ui } from '@voyage-app-b2b/ui';
import { useEffect, useState } from 'react';
export function App() {
  const [message, setMessage] = useState<string>('');
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3000').then((res) =>
        res.json()
      );
      setMessage(res.message);
    })();
  }, []);

  return (
    <div>
      <h1>My App {message}</h1>
      <Ui />
      {sharedTypes()}
    </div>
  );
}

export default App;
