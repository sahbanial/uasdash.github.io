import React from "react";
import { Container, Row, Col, Button } from "shards-react";
import * as  Icons from "react-feather"
import PageTitle from "../components/common/PageTitle";
import { useQuery ,useMutation} from "react-apollo";
import gql from "graphql-tag";
const QUERY = gql`
  query {
    getNews {
        id
      title
      subTitle
      description
      photoUrl
    }
  }
`;
const DELETE = gql`
  mutation deleteNews($id:ID){
    deleteNews(id:$id) {
      id
    }
  }
`;
const FormItem = ({id,photoUrl,title,description,deleteFormation}) => {
    
  return (
    <Col  className="d-flex align-items-center bg-white m-2 p-2" style={{borderRadius:"10px"}}>
        <Col className="d-flex align-items-center" md="10" sm="12" lg="10">
        <div>
        <img style={{
            height:"50px",
            width:"50px",
        }} src="https://iatranshumanisme.com/wp-content/uploads/2017/12/formation-logo.png" />
      </div>
      <div className="ml-2 d-flex flex-column">
          <strong className="text-medium">{title}</strong>
          <span className="text-small"> {description}</span>
      </div>
        </Col>
     <Col md="2" sm="12" lg="2">
       
        <Button onClick={()=>deleteFormation(id)} className="ml-1 bg-danger border-danger" color="red">
          <Icons.Trash color="white" size={20} />
        </Button>
     </Col>

    </Col>
  );
};
const News = () => {
  const { data, loading, ...rest } = useQuery(QUERY);
  console.log({data})
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
          title="Liste des actualités"
          subtitle="Actualité"
          className="text-sm-left"
        />
      </Row>

      <Col>
       {data&& data.getNews && data.getNews.map(item=><FormItem deleteFormation={deleteFormationx} key={item.id} {...item} />)}
       {data && data.getNews && data.getNews.length == 0 && (
					<div 
          
          style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
						{" "}
						<span>Pas des Actualités </span>{" "}
					</div>
				)}
      </Col>
    </Container>
  );
};

export default News;
