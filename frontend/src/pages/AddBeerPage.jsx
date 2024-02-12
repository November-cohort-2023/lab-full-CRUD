import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      firstBrewed: firstBrewed,
      brewersTips: brewersTips,
      attenuationLevel: attenuationLevel,
      contributedBy: contributedBy,
    };

    axios
      .post(`http://localhost:5005/beers/`, newBeer)
      .then((result) => {
        // console.log(result);
        navigate(`/beers/${result.data.id}`);
      })
      .catch((err) => {
        console.log(err);
      });

    // setName("");
    // setTagline("");
    // setDescription("");
    // setFirstBrewed("");
    // setBrewersTips("");
    // setAttenuationLevel(0);
    // setContributedBy("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-beer-form">
        <label htmlFor="" className="add-beer-label">
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </label>
        <label htmlFor="" className="add-beer-label">
          Tagline
          <input
            type="text"
            value={tagline}
            onChange={(e) => {
              setTagline(e.target.value);
            }}
            required
          />
        </label>
        <label htmlFor="" className="add-beer-label">
          Description
          <textarea
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />
        </label>
        <label htmlFor="" className="add-beer-label">
          First Brewed
          <input
            type="text"
            value={firstBrewed}
            onChange={(e) => {
              setFirstBrewed(e.target.value);
            }}
            required
          />
        </label>
        <label htmlFor="" className="add-beer-label">
          Brewer's Tips
          <input
            type="text"
            value={brewersTips}
            onChange={(e) => {
              setBrewersTips(e.target.value);
            }}
            required
          />
        </label>
        <label htmlFor="" className="add-beer-label">
          Attenuation Level
          <input
            type="number"
            value={attenuationLevel}
            onChange={(e) => {
              setAttenuationLevel(e.target.value);
            }}
            required
          />
        </label>
        <label htmlFor="" className="add-beer-label">
          Contributed By
          <input
            type="text"
            value={contributedBy}
            onChange={(e) => {
              setContributedBy(e.target.value);
            }}
            required
          />
        </label>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
