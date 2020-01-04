import React, { Component } from 'react';
import { Card, CardImg,CardBody, CardText,  CardTitle } from 'reactstrap';


class CampsiteInfoComponent extends Component {

   //renderCampsite method
    renderCampsite(campsite) {
        if (campsite) {
            return (
                <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        return <div />;
    } 

  
     renderComments(comments) {
        if(comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {return (
                        <div key={comment.id}>{comment.text} <br /> -- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</div>
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
    render() {
        if(this.props.campsite)  {
            return (
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            )
        } else {
            return(
                <div /> 
            )
        }
    }

  
}
 

  


export default CampsiteInfoComponent;