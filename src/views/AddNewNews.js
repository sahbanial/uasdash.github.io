import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import FormationForm from "../components/formations/FormFormation";
import NewsForm from "../components/news/NewsForm";
const AddNewNews = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle
        sm="4"
        title="Add New News"
        subtitle="Formations"
        className="text-sm-left"
      />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12" md="12" sm="12">
        <NewsForm />
      </Col>

      {/* Sidebar Widgets */}
     
    </Row>
  </Container>
);

export default AddNewNews;
