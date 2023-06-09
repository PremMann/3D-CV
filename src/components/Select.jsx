import { useState, Fragment } from 'react'
import { Combobox } from '@headlessui/react'
// import { CheckIcon } from '@heroicons/react/20/solid'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

const  DropDownBox = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Input
        onChange={(event) => setQuery(event.target.value)}
        displayValue={(person) => person.name}
      />
      <Combobox.Options>
        {filteredPeople.map((person) => (
          <Combobox.Option
            key={person.id}
            value={person}
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
          >
            {/* <CheckIcon className="hidden ui-selected:block" /> */}
            {person.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}


export default DropDownBox;