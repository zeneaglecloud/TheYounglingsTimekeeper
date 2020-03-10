import React from 'react';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Created by Joshua Smith</p>
                <p className="grey-text">8 March 2020, 4:20pm</p>
            </div>
        </div>
    )
}

export default ProjectSummary;