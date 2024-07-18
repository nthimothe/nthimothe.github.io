import React from 'react';
import ReactMarkdown from 'react-markdown'
import raw from 'raw.macro';

//import python from './images/python-brands.svg'
//import java from './images/java-brands.svg'
import book from './images/book.svg'
import bot from './images/robot.svg'
import amazon from './images/amazon.svg'
import williams from './images/williams.svg'
import regis from './images/regis.svg'
import github from './images/github.svg'
import gmail from './images/gmail.svg'
import linkedin from './images/linkedin-2.svg'
import shoppingList from './images/shoppingList.svg'
import addressBook from './images/contact-book.svg'
import headshot from './images/amazonID.png'

import {
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiListGroup,
  EuiListGroupItem,
  EuiPageTemplate,
  EuiText,
  EuiTitle,
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSidebar,
  EuiSideNav,
  EuiSpacer, EuiImage, EuiBadge, EuiFlexGrid
} from '@elastic/eui';
import Header from './Header';
import PageSection from './PageSection';

// Other themes are also available - see files at
// node_modules/@elastic/eui/dist/
import '@elastic/eui/dist/eui_theme_light.css';
import './App.css';


function read(filename) {
  const content = raw(`./data/${filename}`);
  return <ReactMarkdown children={content} />;
}
const App = () => {
  const content = read('aboutMe.md');
  const name = read('name.txt');
  const botDescription = read('twitterbotDescription.txt');
  const dictDescription = read('dictionaryDescription.txt');
  const myContactsDescription = read('myContactsDescription.txt');
  const tictactoeDescription = read('tictactoeDescription.txt');
  const shopItDescription = read("shopItDescription.txt");

  const sections = ['About Me', 'Projects', 'Work Experience', 'Education', 'Contact Me'];

  const toHref = (title) => {
    return '#' + title.toLowerCase().split(' ').join('-');
  };


  const navItems = sections.map((section) => ({
    name: section,
    id: section,
    href: toHref(section),
  }));

  return (
    <div className='App'>
      <Header sections={sections} className='sticky' />
      <div className='Page'>
        <EuiPage restrictWidth={false}>
          <EuiPageSidebar >
            <EuiImage
              size='fullWidth'
              alt={name}
              url={headshot}
              style={{ borderRadius: "100%", objectFit: "cover" }}
            />
            <EuiSpacer />
            <EuiSideNav items={navItems} />
          </EuiPageSidebar>

          <EuiPageBody component='div' grow={false} direction='column'>
            <EuiTitle size='xl'>
              <h1>{name}</h1>
            </EuiTitle>
            {/* ABOUT ME SECTION */}
            <PageSection title='About Me'>
              <EuiText> {content} </EuiText>
            </PageSection>
            <EuiSpacer />
            {/* PROJECT SECTION */}
            <PageSection title='Projects'>
              <EuiFlexGroup gutterSize='m' alignItems='center' >
                {/* TWITTER BOT PROJECT */}
                <EuiFlexItem>
                  <EuiCard
                    textAlign='center'
                    icon={<EuiIcon size='xxl' type={bot} alt='Robot Icon' />}
                    title={
                      <EuiFlexGroup gutterSize='xs' justifyContent='spaceBetween' alignItems='center'>
                        <EuiFlexItem grow={false}>
                          <EuiBadge color='primary' alt='Python Badge'>Python</EuiBadge>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false} style={{ textAlign: 'center' }}>
                          {'Williams COVID-19 Twitter Bot'}
                        </EuiFlexItem>
                        <EuiFlexItem grow={false} style={{ minWidth: 50 }}></EuiFlexItem>
                      </EuiFlexGroup>
                    }
                    description={<EuiText size="m">{botDescription}</EuiText>}
                    href="https://twitter.com/EphCovidUpdates"
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </PageSection>
            <EuiSpacer />
            {/* WORK EXPERIENCE SECTION */}
            <PageSection title='Work Experience'>
              <EuiFlexGroup gutterSize='l' direction='column'>
                <EuiFlexItem>
                  <EuiCard
                    layout="horizontal"
                    icon={<EuiIcon size='xxl' type={amazon} />}
                    title='Amazon'
                    description='Software Engineer, Sept 2022 - Present'
                    href='https://www.amazon.com'
                  />
                </EuiFlexItem>
                {/* WILLIAMS WORK EXPERIENCE */}
                <EuiFlexItem>
                  <EuiCard
                    layout="horizontal"
                    icon={<EuiIcon size='xxl' type={williams} />}
                    title='Williams College'
                    description='Teaching Assistant, Feb 2019 - Present'
                    href='https://www.williams.edu'
                  />
                </EuiFlexItem>
                {/* AMAZON WORK EXPERIENCE */}
                <EuiFlexItem>
                  <EuiCard
                    layout="horizontal"
                    icon={<EuiIcon size='xxl' type={amazon} />}
                    title='Amazon'
                    description='Software Engineer Intern, Jun 2021 - Aug 2021'
                    href='https://www.amazon.com'
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </PageSection>
            <EuiSpacer />
            {/* EDUCATION SECTION */}
            <PageSection title='Education'>
              <EuiFlexGroup gutterSize='l' direction='column'>
                <EuiFlexItem>
                  <EuiCard
                    layout="horizontal"
                    icon={<EuiIcon size='xxl' type={williams} />}
                    title='Williams College'
                    description='B.A., Computer Science, Wilkins Fellow, Sept 2018 - May 2022'
                    href='https://www.williams.edu/'
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiCard
                    layout="horizontal"
                    icon={<EuiIcon size='xxl' type={regis} />}
                    title='Regis High School'
                    description='High School Diploma, Sept 2014 - Jun 2018'
                    href='https://www.regis.org/'
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </PageSection>
            <EuiSpacer />
            {/* PAGE SECTION */}
            <PageSection title='Contact Me'>
              <EuiFlexGroup gutterSize='l' direction='column'>
                {/* GITHUB CARD */}
                <EuiFlexItem>
                  <EuiCard
                    layout='horizontal'
                    icon={<EuiIcon size='xl' type={github} />}
                    title='@nthimothe'
                    href='https://github.com/nthimothe'
                  />
                </EuiFlexItem>
                {/* EMAIL CARD */}
                <EuiFlexItem>
                  {/* ICON FROM FREEPICK @ FLATICON.COM */}
                  <EuiCard
                    layout='horizontal'
                    icon={<EuiIcon size='xxl' type={gmail} />}
                    title='nathanthimothe@gmail.com'
                    href='mailto:nathanthimothe@gmail.com'
                  />
                </EuiFlexItem>
                {/* LINKEDIN CARD */}
                <EuiFlexItem>
                  {/* ICON FROM FREEPICK @ FLATICON.COM */}
                  <EuiCard
                    layout='horizontal'
                    icon={<EuiIcon size='xxl' type={linkedin} />}
                    title='Nathan Thimothe'
                    href='https://www.linkedin.com/in/nathan-t-807834188'
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </PageSection>
          </EuiPageBody>
        </EuiPage>
      </div>
    </div>
  );
};

export default App;
