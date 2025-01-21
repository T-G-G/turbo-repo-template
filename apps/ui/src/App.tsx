import { useState } from "react";

import { Button } from "@repo/components/src/Button";

function App() {
  const [message, setMessage] = useState<string | undefined>();

  const onClick = async () => {
    const response = await fetch("http://localhost:3002");
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center w-1/2 mx-auto">
      <h1 className="text-2xl font-bold">App</h1>
      <div className="flex flex-col items-center justify-center p-4">
        <Button onClick={() => onClick()}>Click me</Button>
        {message && (
          <span className="text-gray-500 p-4">Message: {message}</span>
        )}
      </div>
    </div>
  );
}

export default App;
