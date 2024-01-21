import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoSearchSharp } from "react-icons/io5";




function InputSearch(){
    return(
        <InputGroup size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Find Cars, Mobile Phones and more...'
        />
        <InputGroup.Text id="basic-addon2"><IoSearchSharp /></InputGroup.Text>
      </InputGroup>
    )
}
export default InputSearch;