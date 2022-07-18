import { useState } from "react";
import "./App.css";
import contactsArr from "./contacts.json";

function App() {
  let fiveContacts = contactsArr.slice(0, 5);
  const [contacts, setContacts] = useState(fiveContacts);

  function addRandomContact() {
    setContacts((prevContacts) => {
      console.log(prevContacts); 
      const newContactsList = contactsArr.filter((contact) => {
        return !prevContacts.includes(contact); 
      });
      console.log(newContactsList);
      const getRandomContact =

      newContactsList[Math.floor(Math.random() * newContactsList.length)];
      const newConctactSelection = [...prevContacts, getRandomContact];
      return newConctactSelection;
    });
  }

  function sortByPopularity() {
    setContacts((prevContacts) => {
      let sortedByPopularity = [...prevContacts].sort(
        (a, b) => b.popularity - a.popularity
      );
      return sortedByPopularity;
    });
  }

  function sortByName() {
    setContacts((prevContacts) => {
      let sortByName = [...prevContacts].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return sortByName;
    });
  }

  function removeContact(idToRemove) {
    setContacts((prevContacts) => {
      let arrAfterDelete = [...prevContacts].filter(
        (element) => element.id !== idToRemove
      );
      return arrAfterDelete;
    });
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={addRandomContact}>Add a Random Contact</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <button onClick={sortByName}>Sort by Name</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>wonOscar</th>
          <th>wonEmmy</th>
          <th>Actions</th>
        </tr>

        {contacts.map((contact) => {
          return (
            <tr>
              <td>
                <img src={contact.pictureUrl} alt="contact" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              {contact.wonOscar ? <td>🏆</td> : <td></td>}
              {contact.wonEmmy ? <td>🏆</td> : <td></td>}
              <td>
                <button onClick={() => removeContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
