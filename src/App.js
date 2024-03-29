import React from 'react';
import ReactMarkdown from 'react-markdown'
import raw from 'raw.macro';

//import python from './images/python-brands.svg'
//import java from './images/java-brands.svg'
import book from './images/book.svg'
import bot from './images/robot.svg'
import amazon from './images/amazon.svg'
import terminal from './images/terminal.svg'
import tic_tac_toe from './images/tic-tac-toe-2.svg'
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
  EuiText,
  EuiTitle,
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiSideNav,
  EuiSpacer, EuiImage, EuiBadge, EuiFlexGrid
} from '@elastic/eui';
import Header from './Header';
import PageSection from './PageSection';

// Other themes are also available - see files at
// node_modules/@elastic/eui/dist/
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';
import './App.css';

function read(filename){
  const content = raw(`./data/${filename}`);
  return <ReactMarkdown source={content} />;
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

  // const makeIcon = (inputIcon) => {
  //   return (
  //     <svg
  //       className='euiIcon euiIcon--medium euiIcon-isLoaded euiListGroupItem__icon'
  //       viewBox='0 0 512 512'>
  //       <path d={inputIcon.icon[4]} />
  //     </svg>
  //   );
  // };
  
  const navItems = sections.map((section) => ({
    name: section,
    id: section,
    href: toHref(section),
  }));

  const renderTitle = () => {
    return (
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size='l'>
            <h1>{name}</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
      </EuiPageHeader>
    );
  };

  return (
    <div className='App'>
      <Header sections={sections} className='sticky' />
      <EuiPage restrictWidth={true}>
        <EuiPageSideBar>
          <EuiImage
            size='l'
            alt={name}
            url={headshot}
            style={{borderRadius: "50%", objectFit: "cover"}}
          />  
          <EuiSpacer />
          <EuiSideNav items={navItems} />
        </EuiPageSideBar>

        <EuiPageBody component='div'>
          {renderTitle()}
          {/* ABOUT ME SECTION */}
          <PageSection title='About Me'>
            <EuiText>
              <p>
                {content}
              </p>
            </EuiText>
          </PageSection>
          <EuiSpacer />
          {/* PROJECT SECTION */}
          <PageSection title='Projects'>
            <EuiFlexGroup gutterSize='m' direction='column'>
              {/* TWITTER BOT PROJECT */}
              <EuiFlexItem>
              <EuiCard
                textAlign='center'
                icon={<EuiIcon size='xxl' type={bot}  alt='Robot Icon' />}
                title={
                <EuiFlexGroup gutterSize='xs' justifyContent='flexStart' wrap>
                    <EuiFlexItem grow={false} style={{minWidth:30}}> <EuiBadge color='primary' alt='Python Badge' >Python</EuiBadge>  </EuiFlexItem>
                    <EuiFlexItem grow={false} style={{minWidth:470}}>{'Twitter Bot'} </EuiFlexItem>
                </EuiFlexGroup>
              }
                description={
                    <EuiText size='m'>{botDescription}</EuiText>   
                }
                href={
                  "https://twitter.com/EphCovidUpdates"
                }
                />
              </EuiFlexItem>
               {/* MY CONTACTS PROJECT */}
               <EuiFlexItem>
                <EuiCard
                  icon={<EuiIcon size='xxl' type={addressBook} alt='Address Book Icon' />}
                  title={
                    <EuiFlexGroup gutterSize='xs' justifyContent='flexStart' wrap>
                    <EuiFlexItem grow={false} style={{minWidth:50}}> <EuiBadge color='#FC5939' alt='Swift Badge' >Swift</EuiBadge>  </EuiFlexItem>
                    <EuiFlexItem grow={false} style={{minWidth:500}}>{'My Contacts'} </EuiFlexItem>
                  </EuiFlexGroup>
                  }
                  description={
                    <EuiText size='m'>{myContactsDescription}</EuiText>
                  }
                  href={
                    "https://github.com/nthimothe/ContactsApp"
                  }
                  //footer={<EuiButton aria-label='Go to Developers Tools' href=>See it</EuiButton>}
                />
              </EuiFlexItem>
               {/* SHOPPING LIST PROJECT */}
               <EuiFlexItem>
                <EuiCard
                  icon={<EuiIcon size='xxl' type={shoppingList} alt='Shopping List Icon' />}
                  title={
                    <EuiFlexGroup gutterSize='xs' justifyContent='flexStart' wrap>
                      <EuiFlexItem grow={false} style={{minWidth:50}}> <EuiBadge color='#FC5939' alt='Swift Badge' >Swift</EuiBadge></EuiFlexItem>
                      <EuiFlexItem grow={false} style={{minWidth:500}}>{'ShopIt!'} </EuiFlexItem>
                    </EuiFlexGroup>
                  }
                  description={
                    <EuiText size='m'>{shopItDescription}</EuiText>
                  }
                  href={
                    "https://github.com/nthimothe/ShopItApp"
                  }
                  //footer={<EuiButton aria-label='Go to Developers Tools' href=''>See it</EuiButton>}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
          </PageSection>
          <EuiSpacer />
           {/* WORK EXPERIENCE SECTION */}
           <PageSection title='Work Experience'>
            <EuiFlexGroup gutterSize='l' direction='column'>
              {/* WILLIAMS WORK EXPERIENCE */}
              <EuiFlexItem>
                <EuiCard
                    layout="horizontal"
                    icon={<EuiIcon size='xxl' type={williams}/>}
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
                    icon={<EuiIcon size='xxl' type={regis}/>}
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
  );
};

export default App;
