import React, { useState } from "react";

const Flames = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const getRelationShip = (count) => {
    const relations = [
      "Siblings",
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
    ];
    return relations[count];
  };

  const handleClick = () => {
    if (!name1.trim() || !name2.trim()) {
      setResult("Please Enter valid input");
      return;
    }

    let arr1 = name1.split("");
    let arr2 = name2.split("");

    for (let i = 0; i < arr1.length; i++) {
      const index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr1.splice(i, 1);
        arr2.splice(index, 1);
        i--;
      }
    }

    const count = (arr1.length + arr2.length) % 6;
    console.log(count)
    const relationship = getRelationShip(count);
    console.log(relationship)

    setResult(relationship);
  };

  const handleClear = () => {
    setName1("")
    setName2("")
    setResult("")
  }

  return (
    <div>
      <input
        type="text"
        name="name1"
        data-testid="input1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />
      <input
        type="text"
        name="name2"
        data-testid="input2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />
      <button
        name="calculate_relationship"
        data-testid="calculate_relationship"
        onClick={handleClick}
      >
        Calculate the Realationship Future
      </button>
      <button name="clear" data-testid="clear" onClick={handleClear}>
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default Flames;
