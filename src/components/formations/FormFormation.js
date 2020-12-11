import React from "react";
import ReactQuill from "react-quill";
import { Button, Card, CardBody, Form, FormInput ,FormTextarea} from "shards-react";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";
const ADD = gql`
  mutation addFormation($input: InputFormation) {
    addFormation(input: $input) {
      id
    }
  }
`;
const FormationForm = (props) => {
  const [addFormation] = useMutation(ADD);
  const [isSubmited,setIsSubmited]=React.useState(false);
  const [state, setState] = React.useState({
    name: "",
    description: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmited(true)
   
    if (state.name && state.description) {
      addFormation({
        variables: {
          input: {
            ...state,
          },
        },
      })
        .then((res) => {
         props.history.push("/formations")
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  function handleChangeEditor(text) {
    console.log({ text });
    setState({
      ...state,
      description: text,
    });
  }
  function handleChangeInput({ target: { name, value } }) {
    setState({
      ...state,
      [name]: value,
    });
  }
  return (
    <Card small className="mb-3">
      <CardBody>
        <Form className="add-new-post" onSubmit={handleSubmit}>
          <div className="d-flex justify-content-end p-1 mb-2">
            <Button>Ajouter</Button>
          </div>
          <FormInput
            size="lg"
            className="mb-3"
            placeholder="Nom du formation"
            name="name"
            invalid={!!!state.name && isSubmited}
            
            onChange={handleChangeInput}
          />
          <FormTextarea
            size="lg"
            placeholder="description"
            className="form-control mb-1"
            name="description"
            onChange={handleChangeInput}
            invalid={!!!state.description && isSubmited}
            type=""
            
          />
        </Form>
      </CardBody>
    </Card>
  );
};

export default withRouter(FormationForm);
