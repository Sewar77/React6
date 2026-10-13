import { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    age: 0,
    univesity: "",
    married: false,
    hasCar: false,
  });
  console.log(data);
  return (
    <>
      <div className="min-h-100">
        <form action="">
          <input
            type="text"
            placeholder="name"
            name="name"
            id=""
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="age"
            name="age"
            id=""
            onChange={(e) => setData({ ...data, age: e.target.value })}
          />
          <select
            name="uni"
            id=""
            onChange={(e) => setData({ ...data, univesity: e.target.value })}
          >
            <option value="yarmouk">UARMOUK</option>
            <option value="just">JUST</option>
            <option value="alalbayt">ALALBAYT</option>
          </select>
          <div>
            <label htmlFor="married"></label>
            <input
              type="radio"
              name="married"
              value={"yes"}
              onChange={(e) => setData({ ...data, married: e.target.value })}
            />
            <input
              type="radio"
              value={"no"}
              name="married"
              onChange={(e) => setData({ ...data, married: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="car"></label>
            <input
              type="radio"
              name="car"
              value={"yes"}
              onChange={(e) => setData({ ...data, hasCar: e.target.value })}
            />
            <input
              type="radio"
              value={"no"}
              name="car"
              onChange={(e) => setData({ ...data, hasCar: e.target.value })}
            />
          </div>

          <button>Submit</button>
        </form>
        {/* react hooks */}
      </div>
    </>
  );
}
