import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../res/css/footer.css';

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      ©2020 All Rights Reserved. | Developed by Group M2 for Software
      Engineering Studio 2A |{' '}
      <a
        href="https://github.com/jaaamesey/studio2a"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
        Github
      </a>
    </div>
  );
};
