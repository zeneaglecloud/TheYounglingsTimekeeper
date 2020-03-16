import React from 'react';


const ProjectDetails = (props) => {
    const { project } = props;
  if (project) {
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{project.title}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eius veniam esse ex voluptatibus optio voluptatum quisquam ut dolores. Dolor voluptates explicabo sed aut cupiditate ullam illum deleniti eligendi facilis!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Joshua Smith</div>
                    <div>8 March 2020, 4:20pm</div>
                </div>
            </div>
        </div>
        )
    }
    else {
        return (
            <div className="container center">
                <p>Projects loading...</p>
            </div>
        )
    }
}

export default (ProjectDetails);
