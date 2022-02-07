import { useState } from "react";
import "./App.css";
import jsonData from "./MOCK_DATA.json";

function App() {
  const [search, setSearch] = useState("");

  const data = jsonData
    .filter((val) => {
      if (
        val.first_name.toLowerCase().includes(search.toLowerCase()) ||
        val.last_name.toLowerCase().includes(search.toLowerCase()) ||
        val.email.toLowerCase().includes(search.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    })
    .map((val, key) => {
      return (
        <tr key={key}>
          <td>{val.id}</td>
          <td>{val.first_name}</td>
          <td>{val.last_name}</td>
          <td>{val.email}</td>
        </tr>
      );
    });
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
}

export default App;
