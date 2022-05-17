import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import '../../helpers/cssGlobal.css'
import './navbar.scss'
import { motion, AnimatePresence } from "framer-motion"


import logo from '../../assets/logo5713a0.png'


    const Path = (props) => (
        < motion.path 
            strokeWidth="3" 
            fill="transparent" 
            strokeLinecap="round" 
            {...props} />
    );
    const transition = { duration: 0.3 };


    

const Navbar = () => {
    const ref = useRef()
    const menuRef = useRef()

    const [show, setShow] = useState(false)

    const [ ul1Show, setUl1Show ] = useState(false)
    const [ ul2Show, setUl2Show ] = useState(false)

    const togglerHandler = () => {
        setTimeout(()=>{ 
            (setShow(!show))
        }, 300)
    }










    const [offset, setOffset] = useState(0);
    const [isUpper, setIsUpper] = useState(true); 
    const [isUpperLink, setIsUpperLink] = useState(true); 
    const handleScroll = () => setOffset(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      useEffect(() => {
        if (offset > 300) {
          setIsUpper(false);
        } else {
          setIsUpper(true);
        }
      }, [offset]);

      useEffect(() => {
        if (offset > 300) {
          setIsUpperLink(false);
        } else {
          setIsUpperLink(true);
        }
      }, [offset]);










      useEffect(() => {

        const checkIfClickedOutside = e => {
    
          // If the menu is open and the clicked target is not within the menu,
    
          // then close the menu
    
          if (ul2Show && ref.current && !ref.current.contains(e.target)) {
    
            setUl2Show(false)
    
          }
    
        }
    
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
    
        return () => {
    
          // Cleanup the event listener
    
          document.removeEventListener("mousedown", checkIfClickedOutside)
    
        }
    
      }, [ul2Show])
 




















      








    
      useEffect(() => {

        // Bind the event listener
        document.addEventListener("mousedown", handleOutsideClicks);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleOutsideClicks);
        };

      }, [ ul1Show]);


    //create a function in your component to handleOutsideClicks
    const handleOutsideClicks =(event)=>{
      if(ul1Show&& menuRef.current && !menuRef.current.contains(event.target)){
          setUl1Show(false);
      };

 
    
    };



    return (
          
        <nav className={isUpper ? "active navbar" : "navbar"}>



            <Link to={'/'} ><img src={logo} /></Link>

            <AnimatePresence initial={false}>
            {show && (
            
            <motion.div className='motionMenu'
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1,  
              x: ['-20px',  '100px', '-30px', '40px', '-10px', '0px'] 
           
           }}
           exit={{ x: -500, opacity: 0, transition: { duration: 0.5 } }}
            transition={{
              ease: [0.03, 0.01, 0.01, .01],
              
              duration: 1,
             
              
              
              
          }}
          >
            <ul className='mobileHiddenList'  >
              <li>
                <Link to="/" onClick={() => setShow(show => !show)} ><span>home</span> </Link>
              </li>
              <li>
                <Link to="/listings" onClick={() => setShow(show => !show)} ><span>listings</span> </Link>
              </li>

               
              
              <li onClick={() => setUl1Show(!ul1Show)}   ref={menuRef} >
                <span >buyers</span > 
                <AnimatePresence initial={false}>            
                {ul1Show && (

               
                  <motion.div className='motionMenuDropdownHidden'
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1,  
                      y: ['-20px', '0px'] 
                   }}
                  
                    transition={{
                      ease: [0.01, 0.01, 0.01, .01],
                      duration: 0.4,   
                  }}
                  exit={{ y: -100, opacity: 0, transition: { duration: 0.5 } }}
                  >
                  <ul className='mobileDropdownHidden buyers'  >

                  <li onClick={() => setShow(ul1Show => !ul1Show)}><Link to="/buyers" >your advantage</Link> </li>
                  <li onClick={() => setShow(ul1Show => !ul1Show)}><Link to="/contact" >contact</Link></li>
                </ul></motion.div>
                
               
                )}
                </AnimatePresence>
              </li>
             





        

              <li onClick={() => setUl2Show(!ul2Show)} ref={ref} >
                <span>sellers</span>
                <AnimatePresence initial={false}>     
                {ul2Show && (

                  <motion.div className='motionMenuDropdownHidden'
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1,  
                    y: ['-20px',  '50px', '0px'] 
                  }}
                  // exit={{ opacity: 0 }}
                  transition={{
                    ease: [0.01, 0.01, 0.01, .01],
                    duration: 0.4,   
                  }}
                  exit={{ y: -100, opacity: 0, transition: { duration: 0.5 } }}
                  >
                <ul className='mobileDropdownHidden sellers' >
                  <li onClick={() => setShow(ul2Show => !ul2Show)}><Link to="/sellers"  >your advantage</Link> </li>
                  <li onClick={() => setShow(ul2Show => !ul2Show)}><Link to="/contact" >contact</Link></li>
                </ul></motion.div>
                
                )}
              </AnimatePresence>
              </li>


              <li>			    
              <Link to="/communities"  onClick={() => setShow(show => !show)}><span>communities</span></Link>
               </li>
              <li>			    
              <Link to="/aboutus"  onClick={() => setShow(show => !show)}> <span>about</span></Link>
               </li>
              <li>			    
               <Link to="/contact"  onClick={() => setShow(show => !show)}><span>contact</span></Link>
              </li> 


















                        {/* {data.map((link, id) => {
                            return (
                                <Link to={link.to} key={id} >
                                    <li ><span>{link.name}</span>

                                    </li>
                                    </Link>
                            )
                        })} */}
                    </ul>
                    </motion.div>
                )}

                </AnimatePresence>








            <ul className='shownUl'>
		              <li>
                     <Link to="/listings" className={isUpperLink ? "activelink" : ""}><span>listings</span> </Link>
		              </li>


                  <li>
                     <Link to="/buyers" className={isUpperLink ? "activelink" : ""}><span>buyers</span>
                     <ul className='dropdownHidden'>
                       <li><Link to="/buyers" >your advantage</Link> </li>
                       <li><Link to="/contact" className={isUpperLink ? "" : ""}>contact</Link></li>
                     </ul>
                     </Link>
		              </li>
                  <li>
                     <Link to="/sellers" className={isUpperLink ? "activelink" : ""}><span>sellers</span>
                     <ul className='dropdownHidden'>
                       <li><Link to="/sellers" >your advantage</Link> </li>
                       <li><Link to="/contact" className={isUpperLink ? "" : ""}>contact</Link></li>
                     </ul>
                     </Link>
		              </li>


                  <li>			    
                     <Link to="/communities" className={isUpperLink ? "activelink" : ""}><span>communities</span></Link>
		              </li>

                  <li>			    
                     <Link to="/aboutus" className={isUpperLink ? "activelink" : ""}><span>about</span></Link>
		              </li>
		          <li>			    
                      <Link to="/contact" className={isUpperLink ? "activelink" : ""}><span>contact</span></Link>
		          </li> 






                {/* {data.map((link, id) => {
                            return (
                                  <li>
                                    <Link to={link.to} key={id} className={isUpperLink ? "activelink" : ""}>                      
                                    <span>{link.name}</span>

                                   {data.map((item, subid) => {
                                     return(
                                       <ul>
                                         <li>
                                           <Link to={item.subto} key={subid}>
                                            {item.subname}
                                           </Link>
                                         </li>
                                       </ul>


                                     )

                                   })}

                                    </Link>
                                  </li>                      
                            )
                        })}  */}





            </ul>

            <button className='toggler'
            onClick={togglerHandler}
            >
                <svg width="23" height="23" veiwBox="0 0 23 23">
                    <Path animate={show ? "open" : "closed"} 
                    initial={false} 
                    variants={{
                         closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(268, 100%, 37.6%)"},
                         open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(268, 100%, 37.6%)" }
                    
                    }} transition={transition}  
                    />

                    <Path 
                    d="M 2 9.423 L 20 9.423"
                    stroke="hsl(268, 100%, 37.6%)"
                    animate={show ? "open" : "closed"}
                    initial={false}
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={transition}  
                    />

                    <Path animate={show? "open" : "closed"} 
                    initial={false} 
                    variants={{
                         closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(268, 100%, 37.6%)"},
                         open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(268, 100%, 37.6%)" }
                    
                    }} transition={transition}  
                    />
                </svg>
            </button>
        </nav>
  )
}

export default Navbar