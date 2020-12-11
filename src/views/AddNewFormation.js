import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import FormationForm from "../components/formations/FormFormation";
const AddNewFormation = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle
        sm="4"
        title="Add New Formation"
        subtitle="Formations"
        className="text-sm-left"
      />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12" sm="12">
        <FormationForm />
      </Col>

      {/* Sidebar Widgets */}
     
    </Row>
  </Container>
);

export default AddNewFormation;
