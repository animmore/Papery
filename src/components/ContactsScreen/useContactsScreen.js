//@flow

import {useState, useEffect} from 'react'

export const useContactsScreen = () => {
  const [contacts, setContacts] = useState([])
  const [filtratedContacts, setFiltratedContacts] = useState([])
  const [searchInput, setSearchInput] = useState('')

  fetchContacts = () => {
    fetch('https://randomuser.me/api/?results=20&inc=name,gender,dob,email,phone,picture')
      .then((response) => response.json())
      .then((response) => {
        setContacts(response.results)
        setFiltratedContacts(response.results)
      })
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  newArrOfContacts = () => {
    const newContacts: any = contacts.filter(
      (val) =>
        val.name.first.toLowerCase().includes(searchInput.toLowerCase()) ||
        val.name.last.toLowerCase().includes(searchInput.toLowerCase()),
    )
    setFiltratedContacts(newContacts)
  }

  useEffect(() => {
    newArrOfContacts()
  }, [searchInput])

  searchContacts = () => {
    return (key: string) => setSearchInput(key)
  }

  return {filtratedContacts, searchContacts}
}
