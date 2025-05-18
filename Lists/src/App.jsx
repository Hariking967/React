import List from './List.jsx'

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 52 },
    { id: 2, name: "Banana", calories: 89 },
    { id: 3, name: "Mango", calories: 60 },
    { id: 4, name: "Orange", calories: 47 },
    { id: 5, name: "Strawberry", calories: 32 },
  ];

  const vegetables = [
    { id: 1, name: "Carrot", calories: 41 },
    { id: 2, name: "Broccoli", calories: 34 },
    { id: 3, name: "Spinach", calories: 23 },
    { id: 4, name: "Potato", calories: 77 },
    { id: 5, name: "Tomato", calories: 18 },
  ];


  return (
    <>
      <List category="Fruits" item={fruits}></List>
      <List category="Vegetables" item={vegetables}></List>
    </>
  )
}

export default App
