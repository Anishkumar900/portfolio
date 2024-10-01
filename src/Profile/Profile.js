import React, { useRef, useState, useEffect } from 'react';
import logo from '../Image/portfolioLogo.png';
import photo from '../Image/Anishkr.jpeg'
import './Profile.css';
import SkillSvg from '../Svg/SkillSvg';
import zeecare from '../Image/zeecare.png'
import zeecareadmin from '../Image/zeecareadmin.png';
import pitchhere from '../Image/pitchhere.png';
import Mernsvg from '../Svg/Mernsvg';
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function Profile() {
    const [activeSection, setActiveSection] = useState('');
    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [disable, setDisable] = useState(false);

    const handlechange = (e) => {
        const { name, value } = e.target
        setFormdata({ ...formdata, [name]: value })
    }

    // let currentToastId = null;
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setDisable(true)
    //     if (currentToastId) {
    //         toast.dismiss(currentToastId);
    //     }
    //     currentToastId =toast.info('🦄 Wow so easy!', {
    //         position: "top-center",
    //         autoClose: 10000, // This sets the toast to close automatically after 15 seconds
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: false,
    //         draggable: false,
    //         progress: undefined,
    //         theme: "light",
    //         transition: Bounce,
    //     });

    //     axios.post(`${process.env.REACT_APP_BASE_URL}`, formdata)
    //         .then((res) => {
    //             // console.log(res.data)
    //             // setFormdata({ name: '', email: '', message: '' });
    //             if (currentToastId) {
    //                 toast.dismiss(currentToastId);
    //             }
    //             currentToastId = toast.success('Email sent successfully!', {
    //                 position: "top-center",
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "light",
    //                 transition: Bounce,
    //             });
    //         })
    //         .catch((err) => {
    //             // console.log(err)
    //             if (currentToastId) {
    //                 toast.dismiss(currentToastId);
    //             }
    //             currentToastId = toast.error('Something want wrong!', {
    //                 position: "top-center",
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "light",
    //                 transition: Bounce,
    //             });
    //         })
    //         .finally(() => {
    //             setDisable(false); // Re-enable the button regardless of success or failure
    //         });

    // }




    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        toast.promise(
            axios.post(`${process.env.REACT_APP_BASE_URL}`, formdata),
            {
                pending: 'Sending your Message!',
                success: {
                    render({ data }) {
                        // Reset form data on success
                        setFormdata({ name: '', email: '', message: '' });
                        return 'Email sent successfully!';
                    },
                },
                error: {
                    render() {
                        return 'Something went wrong!';
                    },
                },
            },
            {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            }
        ).finally(() => {
            setDisable(false);
        });
    };




    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();
    const section4 = useRef();
    const section5 = useRef();
    const section6 = useRef();

    const scrollHandler = (element) => {
        const elementPosition = element.current.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 30;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        setActiveSection(element);
    };

    const handleScroll = () => {
        const sections = [section1, section2, section3, section4, section5, section6];
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.current.offsetTop;
            const sectionHeight = section.current.offsetHeight;

            if (scrollPosition >= sectionTop - 35 && scrollPosition < sectionTop + sectionHeight) {
                // console.log(section)
                if (section1 === section) {
                    setActiveSection('');
                }
                else {
                    setActiveSection(section);
                }

            }
        });
    };

    const githubHandal = () => {
        window.open('https://github.com/Anishkumar900', '_blank');
    }

    const linkedinHandal = () => {
        window.open('https://www.linkedin.com/in/anish-kumar-978b34242/', '_blank');
    }

    const youtubeHandal = () => {
        window.open('https://www.youtube.com/@daily_practice_question', '_blank');

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const zeecareportalurl = () => {
        window.open('https://zeecareportal.netlify.app/', '_blank');
    };
    const zeecareadminurl = () => {
        window.open('https://zeecareadmin.netlify.app/', '_blank');
    }


    const pitchhereurl = () => {
        window.open('https://pitchhere.in/', '_blank');
    }
    return (
        <>

            <nav className='bg-slate-800 text-white navmain md:py-5 py-4 flex px-10 justify-between fixed w-full z-10 rounded-b-2xl'>
                <button className='flex items-center' onClick={() => scrollHandler(section1)}>
                    <img src={logo} alt='logo' className='bg-white rounded-full w-8 h-8 flex' />
                </button>

                {/* <div className=' hidden lg:block'> */}
                <ul className='lg:flex hidden gap-16 font-semibold text-lg   mx-auto cursor-pointer'>
                    <li className='flex flex-col items-center' onClick={() => scrollHandler(section2)}>
                        About
                        <div className={` ${activeSection === section2 ? 'barbutton' : ''}`}>
                        </div>
                    </li>
                    <li className='flex flex-col items-center' onClick={() => scrollHandler(section3)}>
                        Services
                        <div className={` ${activeSection === section3 ? 'barbutton' : ''}`}>
                        </div>
                    </li>
                    <li className='flex flex-col items-center' onClick={() => scrollHandler(section4)}>
                        Skill
                        <div className={` ${activeSection === section4 ? 'barbutton' : ''}`}>
                        </div>
                    </li>
                    <li className='flex flex-col items-center' onClick={() => scrollHandler(section5)}>
                        Projects
                        <div className={` ${activeSection === section5 ? 'barbutton' : ''}`}>
                        </div>
                    </li>
                    <li className='flex flex-col items-center' onClick={() => scrollHandler(section6)}>
                        Contact
                        <div className={` ${activeSection === section6 ? 'barbutton' : ''}`}>
                        </div>
                    </li>
                </ul>
                {/* </div> */}
                {/* <div onClick={changeBar} className='block lg:hidden'>
                    {
                        show ? <RxCross2 size={32} /> : <FaBars size={32} />
                    }

                </div> */}

            </nav>


            <section className='bg-black md:p-12 md:pt-32 pt-28 p-4 grid lg:grid-cols-2 ' ref={section1}>
                <div className=''>
                    <p className='text-white text-lg font-semibold'>Hello There! I'm <span className='text-purple-500   '>Anish kumar</span></p>
                    <p className='web md:text-7xl text-5xl font-bold mt-5'>I'M A WEB </p> <br />
                    <p className='web md:text-7xl text-5xl font-bold mt-5'>DEVELOPER</p>
                    <p className='text-gray-400 mt-8'>I dissect intricate user experience challenges to engineer integrity-focused solutions that resonate with billions of users.</p>
                    <div className='text-white md:flex gap-10 mt-12'>
                        <div className='flex flex-col md:items-center'>
                            <p className='md:font-bold text-slate-300  md:text-lg'>June 2024 – Present(LTIMindtree)Full-time</p>
                            <p className='md:font-bold text-slate-300  md:text-lg'>Nov 2023 – April 2024(Kordinate digi)Internship</p>
                            <p className='md:font-bold text-slate-300  md:text-lg'>Feb 2023 – July 2023(LTIMindtree)Internship</p>
                            <p className='mt-4'>Years Of Experience</p>
                        </div>
                        <div className='flex flex-col md:items-center my-10 md:my-auto '>
                            <p className='font-extrabold text-4xl'>4+</p>
                            <p className='mt-4'>Completed Projects</p>
                        </div>

                    </div>
                </div>
                <div className='mx-auto  my-auto'>
                    <img src={photo} className='md:w-80 md:h-80 w-64 h-64 rounded-full  ' alt='anish' />
                </div>

            </section>

            <section className='bg-slate-800 lg:py-16 py-10 md:px-28 px-4  grid lg:grid-cols-2' ref={section2}>
                <div className='mx-auto z-0 lg:block hidden'>
                    <img src={photo} className='w-80 h-80 rounded-3xl aboutimg ' alt='anish' />
                </div>
                <div className=' lg:mt-0'>
                    <p className='aboutme text-7xl'>About Me</p>
                    <p className='mt-8 text-white text-lg font-medium'>I am <span className='text-violet-600'>Anish kumar,</span></p>
                    <p className='text-slate-400 mt-4 font-serif'>Experienced Full Stack Developer with a passion for creating dynamic, intuitive,
                        and responsive applications. Proficient in multiple programming languages and frameworks,
                        as well as database design and management. Strong problem-solving and analytical skills, and a
                        track record of delivering high-quality code on time and on budget.</p>
                    <p></p>
                </div>

            </section>


            <section className='bg-black text-center' ref={section3}>
                <p className='text-center services'>Services</p>
                <p className='text-slate-400 lg:px-60 lg:my-10 my-5  md:px-20'>I transform your ideas, and consequently your desires, into a distinctive web project that both inspires you and captivates your customers.</p>


                <div className=' grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:px-12 lg:py-10 md:py-6 px-4'>
                    <div className='bg-slate-700 p-6 rounded-2xl text-gray-400 font-semibold hover:text-white front-main'>
                        <div className='flex gap-3'>
                            <div className="icon-container-front rounded-full fronticon">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    className="icon-front"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z" />
                                </svg>
                            </div>
                            <p className='my-auto front'>Front-End Development</p>
                        </div>
                        <p className='pt-8'>Frontend development encompasses a variety of technologies and frameworks, including HTML, CSS, JavaScript, React, Vue, Tailwind, Bootstrap, Redux, and Hooks, among others, to create dynamic, responsive user interfaces!</p>
                    </div>
                    <div className='bg-slate-700 p-6 rounded-2xl text-gray-400 font-semibold hover:text-white back-main'>
                        <div className='flex gap-3'>
                            <div className="icon-container-back rounded-full ">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 17 17"
                                    className="icon-back"
                                    height="2em"
                                    width="2em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.667 0h-8.651v1.984h-0.516c-0.827 0-1.5 0.673-1.5 1.5v8.588l2.521 4.956 2.464-4.959v-8.585c0-0.827-0.673-1.5-1.5-1.5h-0.469v-0.984h6.984v5h5v10h-11.5v1h12.5v-11.692l-5.333-5.308zM3.908 14.002h-0.804l-1.104-2.17v-5.848h1v6.027h1v-6.027h0.984v5.851l-1.076 2.167zM4.984 3.484v1.5h-2.984v-1.5c0-0.275 0.225-0.5 0.5-0.5h1.984c0.276 0 0.5 0.225 0.5 0.5zM12 1.742l3.273 3.258h-3.273v-3.258z"></path>
                                </svg>
                            </div>
                            <p className='my-auto back'>Back-End Development</p>
                        </div>
                        <p className='pt-8'>Backend development requires skills in Node.js, JavaScript, Express, MongoDB, SQL, and various dynamic technologies to handle server-side logic, database management, and API integration effectively!</p>
                    </div>
                    <div className='bg-slate-700 p-6 rounded-2xl text-gray-400 font-semibold hover:text-white webdev-main'>
                        <div className='flex gap-3'>
                            <div className="icon-container-webdev rounded-full ">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                    className="icon-webdev"
                                    height="2em"
                                    width="2em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
                                    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"></path>
                                </svg>
                            </div>
                            <p className='my-auto webdev'>Web Development</p>
                        </div>
                        <p className='pt-8'>Frontend development uses HTML, CSS, JavaScript, React, and Vue to create responsive user interfaces. Backend development employs Node.js, Express, and databases like MongoDB and SQL for server-side logic and API integration, ensuring seamless functionality.</p>
                    </div>
                </div>
            </section>




            <section className='bg-black lg:px-28 md:px-6 px-4  py-10 ' ref={section4}>
                <div className='section-skill'>
                    <p className='myskill'>My Skills</p>
                </div>

                <div className=' grid md:grid-cols-2 lg:gap-16 md:gap-8 gap-6 pt-8 '>
                    <div className='p-8 front-skill-main   bg-gray-900'>
                        <p className='text-violet-400 text-2xl text-center font-bold '>Frontend Development</p>
                        <div className='text-white pt-4  my-4'>
                            <div className='flex justify-between'>
                                <div className=''>
                                    <div className='flex items-center gap-3'>
                                        <SkillSvg />
                                        <p className=''>HTML</p>
                                    </div>
                                    <div className='flex items-center gap-3 my-4'>
                                        <SkillSvg />
                                        <p className=''>CSS</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <SkillSvg />
                                        <p className=''>JAVASCRIPT</p>
                                    </div>

                                    <div className='flex items-center gap-3 my-4'>
                                        <SkillSvg />
                                        <p className=''>REDUX</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <SkillSvg />
                                        <p className=''>BOOTSTRAP</p>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='flex items-center gap-3'>
                                        <SkillSvg />
                                        <p className=''>REACT JS</p>
                                    </div>
                                    <div className='flex items-center gap-3 my-4'>
                                        <SkillSvg />
                                        <p className=''>VUE JS</p>
                                    </div>
                                    <div className='flex items-center gap-3 '>
                                        <SkillSvg />
                                        <p className=''>HOOKS</p>
                                    </div>
                                    <div className='flex items-center gap-3 my-4'>
                                        <SkillSvg />
                                        <p className=''>TAILWIND</p>
                                    </div>
                                </div>
                            </div>





                            <div>

                            </div>
                        </div>
                    </div>


                    <div className='p-5 back-skill-main bg-gray-900'>
                        <p className='text-violet-400 text-2xl text-center font-bold'>Backend Development</p>

                        <div className='text-white pt-4 flex justify-between  my-4 lg:px-16 md:px-10 px-2'>
                            <div>
                                <div className='flex items-center gap-3'>
                                    <SkillSvg />
                                    <p>NODE JS</p>
                                </div>
                                <div className='flex items-center gap-3 my-4'>
                                    <SkillSvg />
                                    <p>EXPRESS</p>
                                </div>
                            </div>


                            <div>
                                <div className='flex items-center gap-3'>
                                    <SkillSvg />
                                    <p>MONGODB</p>
                                </div>
                                <div className='flex items-center gap-3 my-4'>
                                    <SkillSvg />
                                    <p>VS CODE</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>





            <section className='bg-black md:px-12 px-4 py-10' ref={section5}>
                <div className='section-project'>
                    <p className='project'>Projects</p>
                </div>

                <div className='text-white grid lg:grid-cols-3 md:grid-cols-2  gap-5 mt-8'>
                    <div className='bg-gray-900 ' >
                        <img src={zeecare} alt='zeecare' className=' rounded-t-2xl w-full' />
                        <p className='my-5 font-semibold text-center px-3 ' >Doctor Appointment Management System</p>
                        <p className='text-gray-400 overflow-y-scroll h-32 px-3 scrollcss'>Developed a platform to display available doctors and manage patient appointments, enhancing user experience with real-time availability and easy scheduling. Improved communication between patients and healthcare providers streamlines the appointment process, promoting better health outcomes and overall patient satisfaction.</p>
                        <Mernsvg />
                        <button onClick={zeecareportalurl} className=' px-10 rounded-2xl font-semibold mx-3 my-5 py-2 url' >url</button>
                    </div>


                    <div className='bg-gray-900 '>
                        <img src={zeecareadmin} alt='zeecare' className=' rounded-t-2xl w-full' />
                        <p className='my-5 font-semibold text-center px-3'>Doctor Appointment Management System (Admin Portal)</p>
                        <p className='text-gray-400 overflow-y-scroll h-32 px-3 scrollcss'>Created an admin portal for the Doctor Appointment Management System, streamlining the management of doctor profiles, appointment scheduling, and patient communications. This initiative significantly improved operational efficiency and enhanced the overall user experience for both doctors and patients.</p>
                        <Mernsvg />
                        <button onClick={zeecareadminurl} className='url px-10 rounded-2xl font-semibold mx-3 my-5 py-2'>url</button>
                    </div>


                    <div className='bg-gray-900 '>
                        <img src={pitchhere} alt='zeecare' className=' rounded-t-2xl min-h-60' />
                        <p className='my-5 font-semibold text-center px-3'>Platform for investors.</p>
                        <p className='text-gray-400 overflow-y-scroll h-32 px-3 scrollcss'>Developed a platform for investors that facilitates seamless investment opportunities, offering real-time analytics and insights. This user-friendly interface enhances decision-making, enabling investors to track their portfolios effectively and engage with market trends for better financial outcomes.</p>
                        <Mernsvg />
                        <button onClick={pitchhereurl} className='url px-10 rounded-2xl font-semibold mx-3 my-5 py-2'>url</button>
                    </div>
                </div>
            </section>




            <footer className='lg:px-12 px-4 py-5 bg-black' ref={section6}>
                <div className='grid lg:grid-cols-3  gap-5'>
                    <div className='text-gray-400 '>
                        <p className='contactme'>Contact Me</p>
                        <p className='mt-5'>Ready to take your digital presence to the next level? Whether you're looking to launch a new website, revamp an existing one, or need expert advice on the best web technologies, I'm here to help. Reach out to discuss your project, ask questions, or just say hello.</p>
                    </div>
                    <div className='text-white flex flex-col items-center'>
                        <div className='bg-gray-800 p-4 rounded-2xl w-72 footer-send'>
                            <div className='my-2 flex justify-center'>
                                <MdEmail color='white' size={24} />
                            </div>
                            <p className='text-center my-2'>Email</p>
                            <p className='text-center my-2'>anishunique900@gmail.com</p>
                            <div className='flex justify-center'>
                                <button className='hover:bg-slate-700 my-2 px-4 py-3 rounded-3xl' onClick={() => window.location.href = 'mailto:anishunique900@gmail.com'}>Send a message</button>
                            </div>
                        </div>
                        <div className='bg-gray-800 p-4 rounded-2xl mt-5 w-72 footer-send'>
                            <div className='my-2 flex justify-center'>
                                <FaWhatsapp color='white' size={24} />
                            </div>
                            <p className='text-center my-2'>WhatsApp</p>
                            <p className='text-center my-2'>+91 7903461477</p>
                            <div className='flex justify-center'>
                                <button className='my-2 rounded-3xl hover:bg-slate-700 px-4 py-3' onClick={() => window.open('https://wa.me/7903461477', '_blank')}>Send a message</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form className='my-3' onSubmit={handleSubmit}>
                            <input
                                placeholder='Your full name'
                                className='my-3 bg-slate-700  rounded-2xl w-full p-5 text-white focus:outline-none'
                                type="text"
                                name='name'
                                id="name"
                                value={formdata.name}
                                onChange={handlechange}
                                required
                            />

                            <input
                                placeholder='Your email'
                                className='my-3 bg-slate-700  rounded-2xl w-full p-5 text-white focus:outline-none'
                                type="email"
                                name='email'
                                id="email"
                                value={formdata.email}
                                onChange={handlechange}
                                required

                            />

                            <textarea
                                placeholder='Your message'
                                className='my-3 bg-slate-700  rounded-2xl w-full p-5 text-white focus:outline-none font-light'
                                name='message'
                                id="message"
                                value={formdata.message}
                                onChange={handlechange}
                                required
                                rows={3}
                            />

                            <button className='w-full text-white rounded-2xl py-3  url' type='submit' disabled={disable}>
                                Send Message
                            </button>
                            <ToastContainer
                                position="top-center"
                                autoClose={3000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                                transition={Bounce}
                            />
                        </form>

                    </div>
                </div>

                <div className='text-gray-200 mb-10 mt-20'>
                    <ul className='flex md:gap-12 gap-4 justify-center md:text-lg  cursor-pointer'>
                        <li onClick={() => scrollHandler(section2)} >About</li>
                        <li onClick={() => scrollHandler(section3)}>Services</li>
                        <li onClick={() => scrollHandler(section4)}>Skill</li>
                        <li onClick={() => scrollHandler(section5)}>Projects</li>
                        <li onClick={() => scrollHandler(section6)}>Contact</li>
                    </ul>
                </div>


                <div className='flex gap-16 justify-center'>
                    <button className='footericon' onClick={githubHandal}><FaGithub color='white' /></button>
                    <button className='footericon' onClick={linkedinHandal}><FaLinkedinIn color='white' /></button>
                    <button className='footericon' onClick={youtubeHandal}><FaYoutube color='white' /></button>
                </div>

                <p className='text-white my-5 text-center text-lg font-semibold'>Copyright © All right reserved - | 2024</p>
                <p className='text-slate-400 mb-5 text-center'>Build with love by Anish kumar</p>

            </footer>

        </>
    )
}
