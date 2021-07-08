  // import React, { useState, useEffect } from 'react';
  // import { FaBars, FaTimes } from 'react-icons/fa';
  // import { IconContext } from 'react-icons/lib';
  // import { Button } from '../../globalStyles';
  // import {
  //   Nav,
  //   NavbarContainer,
  //   NavLogo,
  //   NavIcon,
  //   MobileIcon,
  //   NavMenu,
  //   NavItem,
  //   NavItemBtn,
  //   NavLinks,
  //   NavBtnLink
  // } from './Navbar.elements';
  // import logo from './SimplyStaking.svg'

  // function Navbar() {
  //   const [click, setClick] = useState(false);
  //   const [button, setButton] = useState(true);

  //   const handleClick = () => setClick(!click);
  //   const closeMobileMenu = () => setClick(false);

  //   const showButton = () => {
  //     if (window.innerWidth <= 960) {
  //       setButton(false);
  //     } else {
  //       setButton(true);
  //     }
  //   };

  //   useEffect(() => {
  //     showButton();
  //   }, []);

  //   window.addEventListener('resize', showButton);

  //   return (
  //     <>
  //       <IconContext.Provider value={{ color: '#fff' }}>
  //         <Nav>
  //           <NavbarContainer>
  //             <NavLogo to='/' onClick={closeMobileMenu}>   
  //               <img class="navbar-left" src={logo} height="30px" width = "30px"></img>                         
  //             </NavLogo>
  //             <MobileIcon onClick={handleClick}>
  //               {click ? <FaTimes /> : <FaBars />}
  //             </MobileIcon>
  //             <NavMenu onClick={handleClick} click={click}>                                            
  //               <NavItemBtn>
  //                 {button ? (
  //                   <NavBtnLink to='/contactus'>
  //                     <Button primary>Contact Us</Button>
  //                   </NavBtnLink>
  //                 ) : (
  //                   <NavBtnLink to='/contactus'>
  //                     <Button onClick={closeMobileMenu} fontBig primary>
  //                       Contact Us
  //                     </Button>
  //                   </NavBtnLink>
  //                 )}
  //               </NavItemBtn>
  //             </NavMenu>
  //           </NavbarContainer>
  //         </Nav>
  //       </IconContext.Provider>
  //     </>
  //   );
  // }

  // export default Navbar;
