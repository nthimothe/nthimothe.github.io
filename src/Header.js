import React from 'react';
import ReactMarkdown from 'react-markdown'
import raw from 'raw.macro';
import nt from './images/NT.svg'

import {
  EuiHeader,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiHeaderLogo,
  EuiHeaderSectionItem,
} from '@elastic/eui';
import PropTypes from 'prop-types';

const HeaderLink = ({ title }) => {
  const titleHref = () => {
    return '#' + title.toLowerCase().split(' ').join('-');
  };

  return <EuiHeaderLink href={titleHref()}>{title}</EuiHeaderLink>;
};

HeaderLink.propTypes = {
  title: PropTypes.string.isRequired,
};

function read(filename){
  const content = raw(`./data/${filename}`);
  return <ReactMarkdown children={content} />;
}

const Header = ({ sections, className }) => {
  const name = read('name.txt');
  return (
    <EuiHeader className={className}>
      <EuiHeaderSectionItem border='right'>
        <EuiHeaderLogo iconType={nt} href='#'>
        {name}
        </EuiHeaderLogo>
      </EuiHeaderSectionItem>

      <EuiHeaderLinks>
        {sections.map((section) => (
          <HeaderLink title={section} key={section} />
        ))}
      </EuiHeaderLinks>
    </EuiHeader>
  );
};

Header.propTypes = {
  sections: PropTypes.array,
};

Header.defaultProps = {
  sections: [],
};

export default Header;
