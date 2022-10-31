import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function userInfo() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre y Apellido </Form.Label>
        <Form.Control type="email" placeholder="Ingrese nombre y apellido" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Teléfono </Form.Label>
        <Form.Control type="email" placeholder="Ingrese su Teléfono" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
      <Button variant="primary" type="submit">
        Cancelar
      </Button>
    </Form>
  )
}

export default userInfo
