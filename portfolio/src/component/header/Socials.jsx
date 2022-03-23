import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const Socials = () => {
    return(
        <div className='socialMedia'> 
            <a href ='https://linkedin.com' target="_blank" rel="noreferrer"><LinkedInIcon fontSize="large"/></a>
            <a href ='https://github.com' target="_blank" rel="noreferrer"><GitHubIcon fontSize="large"/></a>
            <a href ="mailto: joeleegc@gmail.com"><ForwardToInboxIcon fontSize="large"/></a>
        </div>
    )
};

export default Socials