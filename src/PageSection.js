import React from 'react';
import {
  EuiPage,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiPageHeaderContent,
  EuiPageHeaderSection,
  EuiTitle,
} from '@elastic/eui';

const PageSection = ({ title, children }) => {
  const titleID = () => title.toLowerCase().split(' ').join('-');

  return (
    <EuiPage id={titleID()}>
      <EuiFlexGroup direction="column" gutterSize="s">
      <EuiPanel paddingSize="l"> {/* Adjust paddingSize as needed */}
      <EuiFlexItem>
        
          <EuiPageHeaderContent>
              <EuiTitle>
                <h2>{title}</h2>
              </EuiTitle>
          </EuiPageHeaderContent>
        
      </EuiFlexItem>
      <EuiFlexItem>
        {children}
      </EuiFlexItem>
      </EuiPanel>
      </EuiFlexGroup>
    </EuiPage>
  );
};

export default PageSection;
