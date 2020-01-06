import React from 'react';
import { Card, CardImg,CardBody, CardText,  CardTitle,  Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
   //renderCampsite method
   function RenderCampsite({campsite}) {
        if (campsite) {
            return (
                <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        return <div />;
    } 

  
    function RenderComments({comments}) {
        if(comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {return (
                        <div key={comment.id}>{comment.text}<p> -- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p> </div>
                    )})}
                </div>
            )
        } else {
            return (
                <div />
            )
        }
    }
    
    // eslint-disable-next-line no-dupe-class-members
    function CampsiteInfoComponent(props) {
        if(props.campsite)  {
            return (
                <div className="container">
                    <div className="col">
                     <Breadcrumb>
                     <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>{props.campsite.name}s</h2>
                    <hr />
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
                </div>
            )
        } else {
            return(
                <div /> 
            )
        }
    }
  



export default CampsiteInfoComponent;