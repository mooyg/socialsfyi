import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:8000/api/auth/me", {
      credentials: "include",
    })
      .then((req) => {
        console.log(req.body);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <>
      <h2 className="font-bold text-2xl">Hello world</h2>
    </>
  );
}

export default App;
