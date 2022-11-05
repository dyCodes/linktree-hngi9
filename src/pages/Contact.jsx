import { Container } from 'react-bootstrap'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className="page">
      <Container className='my-5'>
        <header className='mb-5'>
          <h1 className='mb-3'>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </header>

        <main>
          <ContactForm />
        </main>
      </Container>

      <Footer />
    </div>
  )
}

export default Contact