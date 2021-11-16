import React from 'react';

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



const App = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };




  const data = [
    {
      id: "panel1",
      number: "1",
      heading: "Build test task",
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
      details: [
        'Open email client',
        'Sent link with information to careers@cornercasetech.com'

      ]
    },
    {
      id: "panel3",
      number: "3",
      heading: "Participate in tech interview",
      details: [
        'Talk with HR',
        'Talk with Tech team'
      ]
    },
    {
      id: "panel4",
      number: "4",
      heading: "Build test task",
      details: [
        'Receive answers',
        'Start your IT career'

      ]
    },

  ];




  // return (
  //   <Box sx={{ margin: '30px 20px' }}>
  //     <Typography variant="h1" >
  //       CCT Lab Process
  //     </Typography>
  //     {data.map(accordion => {
  //       const { id, number, heading, details } = accordion;
  //       return (
  //         <Accordion expanded={expanded === id} key={id} sx={{ marginBottom: '20px' }} onChange={handleChange(id)} >
  //           <AccordionSummary
  //             aria-controls="panel1bh-content"
  //             id="panel1bh-header"
  //           >
  //             <Typography sx={{ width: '50px', height: '53,58px', flexShrink: 0, paddingLeft: '10px', backgroundColor: 'green', color: '#ffffff', fontSize: '36px', lineHeight: '39px' }}>{number}</Typography>
  //             <Typography sx={{ width: '33%', flexShrink: 0 }}>{heading}</Typography>
  //           </AccordionSummary>

  //           {data.map(accordion => {
  //             const { details } = accordion;
  //             console.log(details);
  //             for (const detail of details) {
  //               console.log(detail);
  //               return (
  //                 <AccordionDetails>
  //                   <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  //                     <List>
  //                       <ListItem disablePadding key={Object.keys(details)}>
  //                         <ListItemButton>
  //                           <ListItemIcon>
  //                             <CheckCircleOutlineOutlinedIcon />
  //                           </ListItemIcon>
  //                           <ListItemText primary={(detail)} />
  //                         </ListItemButton>
  //                       </ListItem>

  //                     </List>
  //                   </Box>
  //                 </AccordionDetails>

  //               )
  //             }
  //           })
  //           }

  //         </Accordion>
  //       )
  //     })}
  //   </Box >
  // )

  return (
    <Box sx={{ margin: '30px 20px' }}>
      <Typography variant="h1" >
        CCT Lab Process
      </Typography>
      {data.map(accordion => {
        const { id, number, heading, details } = accordion;
        // console.log(details);
        return (
          <Accordion expanded={expanded === id} key={id} sx={{ marginBottom: '20px' }} onChange={handleChange(id)} >
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '50px', height: '53,58px', flexShrink: 0, paddingLeft: '10px', backgroundColor: 'green', color: '#ffffff', fontSize: '36px', lineHeight: '39px' }}>{number}</Typography>
              <Typography sx={{ width: '33%', flexShrink: 0 }}>{heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List>
                  <ListItem disablePadding key={(details[0])}>
                    <ListItemButton>
                      <ListItemIcon>
                        <CheckCircleOutlineOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={(details[0])} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding key={(details[1])}>
                    <ListItemButton>
                      <ListItemIcon>
                        <CheckCircleOutlineOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={(details[1])} />
                    </ListItemButton>
                  </ListItem>
                  {!details[2] ? ' ' :
                    <ListItem disablePadding key={(details[2])}>
                      <ListItemButton>
                        <ListItemIcon>
                          <CheckCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={(details[2])} />
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
}

export default App

