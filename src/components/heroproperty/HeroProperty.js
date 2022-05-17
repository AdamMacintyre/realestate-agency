import React, {useState} from 'react'

import './heroproperty.scss'
import HeroPropSlider from './HeroPropSlider'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExpand, faExpandAlt, faExternalLinkAlt, faExpandArrowsAlt, faBed, faTag, faTags, faBathtub } from "@fortawesome/free-solid-svg-icons"


import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'

import PropertyBanner from '../header/PropertyBanner'
import ContactShowing from '../contactforms/ContactShowing'



import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RequestInfo from '../contactforms/RequestInfo'





const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));






const HeroProperty = ({sliderimages, addresstop, addressbot, listing, propdesc, 
    propDescHidden, topimg, bath, bed, sqft, price}) => {
    
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [showDesc, setShowDesc ] = useState(false)
    


  return (
      <div className='heroProperty__container'>

          <PropertyBanner 
          backgroundImage={topimg}  />

        <div className='heroProperty__inner'>
        <div className='hp__titleWrap'>
            <h1><strong>{addresstop}</strong>
            <span>{addressbot}</span></h1>
            <p>listing #{listing}</p>
        </div>

            <div className='hp__icons'>
                <div><span>${price}</span><FontAwesomeIcon icon={faTags}/></div>
                <div><span>{bed} BEDS</span><FontAwesomeIcon icon={faBed}/></div>
                <div><span>{bath} BATH</span><FontAwesomeIcon icon={faBathtub}/></div>
                <div><span>{sqft} SQ. FT</span><FontAwesomeIcon icon={faExpandArrowsAlt}/></div>
                
                
        
                
                

            </div>
          
        
        <div className='hp__mainContents'>
            <div className='hp__descWrap'>
                <h2>PROPERTY DESCRIPTION</h2>
                <p>{propdesc}</p>



                {showDesc && <p>{propDescHidden}</p> }



                <button className='main__button viewMore' onClick={() => setShowDesc(!showDesc)}>
                {showDesc ? 'Show Less' : 'View More'} 
                    
                </button>




                <div className='hp__modalWrap'>
                    <div>
                    <Button className={'modalbutton'} variant="contained" color="secondary" 
                    onClick={handleOpen}
                    size="large"
                    >
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <p>Schedule a Showing</p>
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                        <ContactShowing />
                        </Fade>
                    </Modal>
                    
                    </div>

                    <div>
                    <Button className={'modalbutton'} variant="contained" color="secondary" 
                    onClick={handleOpen}
                    size="large"
                    >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    <p>Request Info</p>
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                        <RequestInfo />
                        </Fade>
                    </Modal>






                    </div>
                   
                </div>
            </div>

            <div className='hp__sliderContainer'>
                <HeroPropSlider 
                sliderimages={sliderimages}
                />
            </div>
        </div>
        </div>

      </div>
    
  )
}

export default HeroProperty