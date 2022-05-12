import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList'
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {

    id: nanoid(),
    text:"Ma premiere note",
    date: "12/05/2022",

  },

  {

    id: nanoid(),
    text:"Ma deuxieme note",
    date: "12/05/2022",

  }, 

  {

    id: nanoid(),
    text:"Ma troisieme note",
    date: "12/05/2022",

  }, 

  {

    id: nanoid(),
    text:"Ma quatrieme note",
    date: "12/05/2022",

  }, 


]);

const [searchText, setSearchText] = useState('');

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()

  };


  const newNotes = [...notes, newNote];
  setNotes(newNotes);

};


const deleteNote =(id) => {
   const newNotes = notes.filter((note) => note.id !== id);
   setNotes(newNotes);


}

return <div className="container">
  <Header />
  <Search  handleSearchNote={setSearchText}/>
  <NotesList 
  notes={notes.filter((note) => 
    note.text.toLowerCase().includes(searchText)
    )}  
  handleAddNote={addNote}
  handleDeleteNote={deleteNote}
  />
</div>;
};

export default App;
