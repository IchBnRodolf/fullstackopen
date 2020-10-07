import React, { useEffect, useState } from "react";
import AllEntry from "./components/AllEntry";
import Filter from "./components/Filter";
import Input from "./components/Input";
import numberService from "./services/number";
import axios from "axios";
import Notification from "./components/Notification";

const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    numberService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const addNewName = (event) => {
    event.preventDefault();
    const entryObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    persons.some((person) => person.name === newName)
      ? window.alert(`${newName} is already added to phonebook`)
      : numberService.create(entryObject).then((returnedNumber) => {
          setMessage(`${newName} has been added`);
          setPersons(persons.concat(returnedNumber));
          setNewName("");
          setNewNumber("");
          setShowAll("");
          setTimeout(() => {
            setMessage(null);
          }, 2000);
        });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleShowChange = (event) => {
    setShowAll(event.target.value);
  };

  const entryToShow = showAll
    ? persons.filter((person) => person.name.includes(showAll))
    : persons;

  return (
    <div>
      <form onSubmit={addNewName}>
        <h2>Phonebook</h2>
        <Notification message={message} />
        <Filter
          text={"Filter shown with:"}
          value={showAll}
          change={handleShowChange}
        />
        <Input text={"Name"} value={newName} change={handleNameChange} />
        <Input text={"Number"} value={newNumber} change={handleNumberChange} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <AllEntry entry={entryToShow} />
    </div>
  );
};

export default App;
