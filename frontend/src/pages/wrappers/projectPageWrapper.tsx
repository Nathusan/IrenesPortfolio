import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectPage from '../ProjectPage';

const ProjectPageWrapper = () => {
    const { data } = useLocation().state || {};

    return (
        <ProjectPage
            data={data}
        />
    )
}

export default ProjectPageWrapper;