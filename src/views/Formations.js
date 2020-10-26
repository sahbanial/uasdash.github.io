import React from "react";
import { Container, Row, Col, Button } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import { useQuery ,useMutation} from "react-apollo";
import gql from "graphql-tag";
const QUERY = gql`
  query {
    getFormations {
        id
      name
      subTitle
      description
      photoUrl
    }
  }
`;
const DELETE = gql`
  mutation deleteFormation($id:ID){
    deleteFormation(id:$id) {
      id
    }
  }
`;
const FormItem = ({id,photoUrl,name,description,deleteFormation}) => {
    
  return (
    <Col  className="d-flex align-items-center bg-white m-2" style={{borderRadius:"10px"}}>
        <Col className="d-flex align-items-center" md="9" sm="12" lg="9">
        <div>
        <img style={{
            height:"50px",
            width:"50px",
        }} src="https://iatranshumanisme.com/wp-content/uploads/2017/12/formation-logo.png" />
      </div>
      <div className="ml-1">
          <strong className="h6">{name}</strong>
          <span> {description}</span>
      </div>
        </Col>
     <Col md="3" sm="12" lg="3">
        <Button>Edit</Button>
        <Button onClick={deleteFormation} className="ml-1 bg-danger" color="red">Delete</Button>
     </Col>

    </Col>
  );
};
const Formations = () => {
  const { data, loading, ...rest } = useQuery(QUERY);
  const [deleteFormation] =useMutation(DELETE)
  function deleteFormationx(id){
      deleteFormation({
          variables:{
              id:id
          }
      }).then(()=>{
          rest.refetch();
      })
  }
  return (
    <Container fluid className="main-content-container px-4 pb-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Liste des formations"
          subtitle="Formations"
          className="text-sm-left"
        />
      </Row>

      <Col>
       {data&& data.getFormations && data.getFormations.map(item=><FormItem deleteFormation={deleteFormationx} key={item.id} {...item} />)}
      </Col>
    </Container>
  );
};

export default Formations;
