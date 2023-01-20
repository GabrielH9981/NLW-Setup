import './styles/global.css';

import { Habit } from './components/Habit'

function App() {
  return (
    <div className='bg-zinc-900'>
      <Habit completed={3} />
      <Habit completed={2} />
      <Habit completed={5} />
    </div>
  )
}

export default App

//Conceitos de React Importantes
//COMPONENTE: Reaproveitar/isolar
//PROPRIEDADE: Uma informação enviada para modificar um componente visual ou comportamental