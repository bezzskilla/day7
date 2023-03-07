import { Form } from '../Form';
import './header.css'

function Header({ addToList }) {

  console.log('Header render');

  return (
    <>
      <header className="wrapper">Header</header>
      <Form addToList={addToList} />
    </>
  )
}

export { Header }

