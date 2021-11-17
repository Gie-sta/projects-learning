import React, { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';



const App = () => {
  const [expanded, setExpanded] = useState(false);

  const [border1, setBorder1] = useState('200px');
  const [border2, setBorder2] = useState('200px');
  const [border3, setBorder3] = useState('200px');
  const [border4, setBorder4] = useState('200px');

  const [top1, setTop1] = useState('82px');
  const [top2, setTop2] = useState('82px');
  const [top3, setTop3] = useState('82px');
  const [top4, setTop4] = useState('82px');



  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

    setBorder1(isExpanded && panel === 'panel1' ? '300px' : '200px');
    setBorder2(isExpanded && panel === 'panel2' ? '300px' : '200px');
    setBorder3(isExpanded && panel === 'panel3' ? '300px' : '200px');
    setBorder4(isExpanded && panel === 'panel4' ? '300px' : '200px');

    setTop1(isExpanded && panel === 'panel1' ? '100px' : '82px');
    setTop2(isExpanded && panel === 'panel2' ? '100px' : '82px');
    setTop3(isExpanded && panel === 'panel3' ? '100px' : '82px');
    setTop4(isExpanded && panel === 'panel4' ? '100px' : '82px');
  }






  return (
    <Box sx={{ margin: '30px 20px', }}>
      <Typography variant="h1" sx={{ fontFamily: 'Manrope, sans-serif', fontWeight: 'bold', fontSize: '64px', lineHeight: '87px' }} >
        CCT Lab Process
      </Typography>


      <Accordion expanded={expanded === 'panel1'} sx={{ marginBottom: '20px' }} onChange={handleChange('panel1')} >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ boxShadow: '5px 5px 5px #EEEEEE', position: 'relative', borderBottom: 'red' }}>
          <Typography
            sx={{ flexShrink: 0, mr: '36px', ml: '36px', pl: '17.12px', pr: '16.88px', background: 'linear-gradient(180deg, #00A9A7 0%, #00BA89 100%)', color: '#ffffff', fontSize: '36px', lineHeight: '49px', pb: '2.14px', pt: '3.21px' }}>1</Typography>
          <Typography sx={{ width: '50%', flexShrink: 0, fontFamily: 'Manrope, sans-serif', my: '17px' }}>Build test task</Typography>

          <Divider sx={{
            position: 'absolute', top: top1, left: '0', height: '3px', width: border1, background: '#00ADAA', transition: 'width 1s'
          }} />
        </AccordionSummary>
        <AccordionDetails sx={{ py: '0' }
        } >
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', pb: '0' }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ pt: '0', pl: '36px' }} >
                  <ListItemIcon>
                    <CheckCircleOutlineOutlinedIcon sx={{ color: '#00ADAA', width: '19.47px', height: '18.97px' }} />
                  </ListItemIcon>
                  <ListItemText sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '18px', lineHeight: '21.09px', color: '#0E2A35'
                    }
                  }} primary='Create repository' />
                </ListItemButton >
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: '36px' }}>
                  <ListItemIcon>
                    <CheckCircleOutlineOutlinedIcon sx={{ color: '#00ADAA', width: '19.47px', height: '18.97px' }} />
                  </ListItemIcon>
                  <ListItemText sx={{

                    '& .MuiListItemText-primary': {
                      fontSize: '18px', lineHeight: '21.09px', color: '#0E2A35', width: '800px'
                    }
                  }} primary='Implement designs' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding >
                <ListItemButton sx={{ pl: '36px' }}>
                  <ListItemIcon>
                    <CheckCircleOutlineOutlinedIcon sx={{ color: '#00ADAA', width: '19.47px', height: '18.97px' }} />
                  </ListItemIcon>
                  <ListItemText sx={{
                    width: '60%',
                    '& .MuiListItemText-primary': {
                      fontSize: '18px', lineHeight: '21.09px', color: '#0E2A35'
                    }
                  }} primary='Implement functionality' />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} sx={{ marginBottom: '20px' }} onChange={handleChange('panel2')} >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ boxShadow: '5px 5px 5px #EEEEEE', position: 'relative', borderBottom: 'red' }}>
          <Typography sx={{ flexShrink: 0, mr: '36px', ml: '36px', pl: '17.12px', pr: '16.88px', background: 'linear-gradient(180deg, #00A9A7 0%, #00BA89 100%)', color: '#ffffff', fontSize: '36px', lineHeight: '49px', pb: '2.14px', pt: '3.21px' }}>2</Typography>
          <Typography sx={{ width: '50%', flexShrink: 0, fontFamily: 'Manrope, sans-serif', my: '17px' }}>Submit your test task</Typography>

          <Divider sx={{
            position: 'absolute', top: top2, left: '0', height: '3px', width: border2, background: '#00ADAA', transition: 'width 1s'
          }} />
        </AccordionSummary>
        <AccordionDetails sx={{ py: '0' }}>
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', pb: '0' }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ pt: '0', pl: '36px' }} >
                  <ListItemIcon>
                    <CheckCircleOutlineOutlinedIcon sx={{ color: '#00ADAA', width: '19.47px', height: '18.97px' }} />
                  </ListItemIcon>
                  <ListItemText sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '18px', lineHeight: '21.09px', color: '#0E2A35'
                    }
                  }} primary='Open email client' />
                </ListItemButton >
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: '36px' }}>
                  <ListItemIcon>
                    <CheckCircleOutlineOutlinedIcon sx={{ color: '#00ADAA', width: '19.47px', height: '18.97px' }} />
                  </ListItemIcon>
                  <ListItemText sx={{
                    '& .MuiListItemText-primary': {
                      width: '800px'
                    }
                  }} primary={<><Typography sx={{ display: 'inline-block', fontSize: '18px', lineHeight: '21.09px', color: '#0E2A35', width: '235px' }}>Sent link with information to </Typography><Typography sx={{ display: 'inline-block', fontSize: '18px', lineHeight: '21.09px', color: '#00ADAA', }} >careers@cornercasetech.com</Typography></>} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel3'} sx={{ marginBottom: '20px' }} onChange={handleChange('panel3')} >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ boxShadow: '5px 5px 5px #EEEEEE', position: 'relative', borderBottom: 'red' }}>
          <Typography sx={{ flexShrink: 0, mr: '36px', ml: '36px', pl: '17.12px', pr: '16.88px', background: 'linear-gradient(180deg, #00A9A7 0%, #00BA89 100%)', color: '#ffffff', fontSize: '36px', lineHeight: '49px', pb: '2.14px', pt: '3.21px' }}>1</Typography>
          <Typography sx={{ width: '50%', flexShrink: 0, fontFamily: 'Manrope, sans-serif', my: '17px' }}>Participate in tech interview</Typography>

          <Divider sx={{
            position: 'absolute', top: top3, left: '0', height: '3px', width: border3, background: '#00ADAA', transition: 'width 1s'
          }} />
        </AccordionSummary>
        <AccordionDetails sx={{ py: '0' }} >
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', pb: '0' }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ pt: '0', pl: '36px' }} >
                  <ListItemIcon>
                    <CheckCircleOutlineOutlinedIcon sx={{ color: '#00ADAA', width: '19.47px', height: '18.97px' }} />
                  </ListItemIcon>
                  <ListItemText sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '18px', lineHeight: '21.09px', color: '#0E2A35'
                    }
                  }} primary='Talk with HR' />
                </ListItemButton >
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: '36px' }}>
                  <ListItemIcon>
                    <CheckCircleOutlineOutlinedIcon sx={{ color: '#00ADAA', width: '19.47px', height: '18.97px' }} />
                  </ListItemIcon>
                  <ListItemText sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '18px', lineHeight: '21.09px', color: '#0E2A35', width: '800px'
                    }
                  }} primary='Talk with Tech team' />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel4'} sx={{ marginBottom: '20px' }} onChange={handleChange('panel4')} >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ boxShadow: '5px 5px 5px #EEEEEE', position: 'relative', borderBottom: 'red' }}>
          <Typography sx={{ flexShrink: 0, mr: '36px', ml: '36px', pl: '17.12px', pr: '16.88px', background: 'linear-gradient(180deg, #00A9A7 0%, #00BA89 100%)', color: '#ffffff', fontSize: '36px', lineHeight: '49px', pb: '2.14px', pt: '3.21px' }}>1</Typography>
          <Typography sx={{ width: '50%', flexShrink: 0, fontFamily: 'Manrope, sans-serif', my: '17px' }}>Receive answer</Typography>

          <Divider sx={{
            position: 'absolute', top: top4, left: '0', height: '3px', width: border4, background: '#00ADAA', transition: 'width 1s'
          }} />
        </AccordionSummary>
        <AccordionDetails sx={{ py: '0' }} >
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', pb: '0' }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ pt: '0', pl: '36px' }} >
                  <ListItemIcon>
                    <CheckCircleOutlineOutlinedIcon sx={{ color: '#00ADAA', width: '19.47px', height: '18.97px' }} />
                  </ListItemIcon>
                  <ListItemText sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '18px', lineHeight: '21.09px', color: '#0E2A35'
                    }
                  }} primary='Receive answers' />
                </ListItemButton >
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: '36px' }}>
                  <ListItemIcon>
                    <CheckCircleOutlineOutlinedIcon sx={{ color: '#00ADAA', width: '19.47px', height: '18.97px' }} />
                  </ListItemIcon>
                  <ListItemText sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '18px', lineHeight: '21.09px', color: '#0E2A35', width: '800px'
                    }
                  }} primary='Start your IT career' />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>

    </Box >
  )
}

export default App


//less code but not able to manage green border grow on click
/*const data = [
  {
    id: "panel1",
    number: "1",
    heading: "Build test task",
    line: '',
    details: [
      'Create repository',
      'Implement designs',
      'Implement functionality'

    ]
  },
  {
    id: "panel2",
    number: "2",
    heading: "Submit your test task",
    line: '',
    details: [
      'Open email client',
      'Sent link with information to careers@cornercasetech.com'

    ]
  },
  {
    id: "panel3",
    number: "3",
    heading: "Participate in tech interview",
    line: '',
    details: [
      'Talk with HR',
      'Talk with Tech team'
    ]
  },
  {
    id: "panel4",
    number: "4",
    heading: "Build test task",
    line: '',
    details: [
      'Receive answers',
      'Start your IT career'

    ]
  },

];



return (
  <Box sx={{ margin: '30px 20px', }}>
    <Typography variant="h1" sx={{ fontFamily: 'Manrope, sans-serif', fontWeight: 'bold', fontSize: '64px', lineHeight: '87px' }} >
      CCT Lab Process
    </Typography>
    {data.map(accordion => {
      const { id, number, heading, line, details } = accordion;
      // console.log(details);
      return (
        <Accordion expanded={expanded === id} key={id} sx={{ marginBottom: '20px' }} onChange={handleChange(id)} >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{ boxShadow: '5px 5px 5px #EEEEEE', position: 'relative', borderBottom: 'red' }}

          >
            <Typography sx={{ flexShrink: 0, mr: '36px', ml: '36px', pl: '17.12px', pr: '16.88px', background: 'linear-gradient(180deg, #00A9A7 0%, #00BA89 100%)', color: '#ffffff', fontSize: '36px', lineHeight: '49px', pb: '2.14px', pt: '3.21px' }}>{number}</Typography>
            <Typography sx={{ width: '50%', flexShrink: 0, fontFamily: 'Manrope, sans-serif', my: '17px' }}>{heading}</Typography>
            <Box key={id} id={id} expanded={expanded === id} value={id} sx={{
              position: 'absolute', top: '82px', left: '0', height: '3px', width: '200px', background: '#00ADAA', transition: 'width 1s'
            }}>{line}</Box>

          </AccordionSummary>
          <AccordionDetails sx={{ py: '0' }
          } >
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', pb: '0' }}>
              <List>
                <ListItem disablePadding key={(details[0])}>
                  <ListItemButton sx={{ pt: '0', pl: '36px' }} >
                    <ListItemIcon>
                      <CheckCircleOutlineOutlinedIcon sx={{ color: '#00ADAA', width: '19.47px', height: '18.97px' }} />
                    </ListItemIcon>
                    <ListItemText sx={{
                      '& .MuiListItemText-primary': {
                        fontSize: '18px', lineHeight: '21.09px', color: '#0E2A35'
                      }
                    }} primary={(details[0])} />
                  </ListItemButton >
                </ListItem>
                <ListItem disablePadding key={(details[1])}>
                  <ListItemButton sx={{ pl: '36px' }}>
                    <ListItemIcon>
                      <CheckCircleOutlineOutlinedIcon sx={{ color: '#00ADAA', width: '19.47px', height: '18.97px' }} />
                    </ListItemIcon>
                    <ListItemText sx={{

                      '& .MuiListItemText-primary': {
                        fontSize: '18px', lineHeight: '21.09px', color: '#0E2A35', width: '800px'
                      }
                    }} primary={(details[1])} />
                  </ListItemButton>
                </ListItem>
                {!details[2] ? ' ' :
                  <ListItem disablePadding key={(details[2])}>
                    <ListItemButton sx={{ pl: '36px' }}>
                      <ListItemIcon>
                        <CheckCircleOutlineOutlinedIcon sx={{ color: '#00ADAA', width: '19.47px', height: '18.97px' }} />
                      </ListItemIcon>
                      <ListItemText sx={{
                        width: '60%',
                        '& .MuiListItemText-primary': {
                          fontSize: '18px', lineHeight: '21.09px', color: '#0E2A35'
                        }
                      }} primary={(details[2])} />
                    </ListItemButton>
                  </ListItem>
                }
              </List>
            </Box>
          </AccordionDetails>
        </Accordion>
      )
    })}
  </Box >
)
} */