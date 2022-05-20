import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import ContactsList from "./components/ContactsList"
import ContactsAdd from "./components/ContactsAdd"
import ContactsView from "./components/ContactsView"
import ContactsEdit from "./components/ContactsEdit"
import Meetings from "./components/Meetings"


import "./styles/styles.css"

export default function App() {
  const [contacts, setContacts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(async () => {
    const res = await fetch('http://localhost:4000/contacts')
    const data = await res.json()
    setContacts(data)
    setIsLoading(false)
  }, [])

  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          <li><Link to='/'>Contacts List</Link></li>
          <li><Link to='/contacts/add'>Add New Contact</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<ContactsList contacts={contacts} setContacts={setContacts} isLoading={isLoading}/>} />
          <Route path='/contacts/add' element={<ContactsAdd setContacts={setContacts} contacts={contacts}/>} />
          <Route path='/contacts/:id' element={<ContactsView />} />
          <Route path='/contacts/:id/edit' element={<ContactsEdit setContacts={setContacts} contacts={contacts}/>} />
          <Route path='/contacts/:id/meetings' element={<Meetings />} />
        </Routes>
      </main>
    </>
  )
}
