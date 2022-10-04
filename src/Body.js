import React from "react";
import "./App.css";
import MyPic from "./MyPic";
import Keeper from "./Keeper";
import Blog from "./BlogWebsite";
import RestFulApi from "./Api";
import Commerce from "./E-commerce";
import Todo from "./todolist";

function Body() {


    return (
        <div id="body">
            <div>
                <div id="Starters">
                    <h1 className="title fade-in-text_1">Lakshmi Narayana K</h1>
                    <p className="sub-title fade-in-text_2">
                        I build things for the Web.
                    </p>
                    <div className="box fade-in-text_3">
                        <p className="sub-subtitle">I’m a software program engineer focusing on constructing (and occasionally designing) remarkable virtual experiences. Currently,  I am currently concentrating on barrier-free, human-centric construction. </p>
                    </div>
                </div>
                <div className="Sectional_Divs">
                    <section className="tag">
                        <div>
                            <h1 className="headers" >About Me</h1>

                        </div>
                    </section>
                    <div class="post-container">
                        <section className="tag">
                            <div class="post-thumb" ><MyPic /></div>
                        </section>
                        <section className="tag">
                            <div class="post-content">
                                <p>Hello! This side, Lakshmi Narayana and I am Pursuing my B-Tech at IIT Roorkee. I get pleasure from making things that survive the internet. My interest in Web development started back in 2021, once I decided to edit some custom virtual interfaces — seems it instructed me towards hypertext markup language & CSS!

                                </p>
                                <p> Fast-forward to today, and I’ve had the privilege of working on projects provided by our clubs in my college. My main focus these days is building accessible, inclusive products and digital experiences.</p>
                                <p>Here are few technologies I have been working with recently:</p>
                            </div>
                        </section>
                        <section className="tag">
                            <div className="box bruh">
                                <ul className="skills-list">
                                    <li>
                                        JavaScript (ES5+)
                                    </li>
                                    <li>
                                        React
                                    </li>
                                    <li>
                                        Node.js
                                    </li>
                                    <li>
                                        Databases
                                    </li>

                                </ul>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="Sectional_Divs">
                    <section className="tag" id="work">
                        <div>
                            <h1 className="headers">My Building Blocks!</h1>
                        </div>
                    </section>
                    <section className="tag" >
                        <div className="Outer_container1">
                            <div className="behind_container" >
                                <Keeper />
                            </div>
                            <div className="front_view ">
                                <h1>The Keeper App</h1>
                                <p>A minimal Clone of Google Keep written in ReactJS with Material UI Components, themed to look exactly like Google Keep, with complex features like archiving, reminders etc. shoved away.</p>

                                <div><ul className="UsedFrameworks1">
                                    <li>React.js</li>
                                </ul></div>

                                <div><a href="https://github.com/KLNarayana03/KLNarayana03.github.io" ><i class="fa-brands fa-github code1"></i></a>
                                    <a href="https://klnarayana03.github.io/" ><i class="fa-brands fa-codepen code1"></i></a>

                                </div>

                            </div>


                        </div>
                    </section>
                </div>

                <div className="Sectional_Divs">
                    <section className="tag">
                        <div className="Outer_container1">
                            <div className="behind_container" >
                                <Commerce />
                            </div>
                            <div className="front_view ">
                                <h1>E-Commerce</h1>
                                <p>
                                    A web app for visualizing personalized E-commerce data. View my best products, tools and many more. Sign up and become a permanent member with our valuable discount offers.</p>
                                <p>This site is currently under development process.</p>
                                <div ><ul className="UsedFrameworks1">
                                    <li>React.js</li>
                                    <li>Firebase</li>
                                </ul></div>
                                <div>
                                    <a href="https://github.com/klnarayanaiit/klnarayanaiit.github.io" ><i class="fa-brands fa-github code1"></i></a>
                                    <a href="https://klnarayanaiit.github.io/" ><i class="fa-brands fa-codepen code1"></i></a>
                                </div>
                            </div>


                        </div>
                    </section>
                </div>
                <div className="Sectional_Divs">
                    <section className="tag">
                        <div className="Outer_container1">
                            <div className="behind_container" >
                                <Todo />
                            </div>
                            <div className="front_view ">
                                <h1>TodoList</h1>
                                <p>A web app written using Javascript with Material UI components, themed using bootstrap. Useful for storing data which ranges from everyday tasks to complex data.</p>
                                <div ><ul className="UsedFrameworks1">
                                    <li>Express</li>
                                    <li>ejs</li>
                                    <li>Mongoose</li>
                                    <li>Node.js</li>

                                </ul></div>
                                <div><a href="https://github.com/KLNarayana03/To-Do-List" ><i class="fa-brands fa-github code1"></i></a>
                                    {/* <a href="https://github.com/KLNarayana03/To-Do-List" ><i class="fa-brands fa-codepen code1"></i></a> */}

                                </div>

                            </div>


                        </div>
                    </section>
                </div>

            </div >
            <div className="Sectional_Divs">
                <section className="tag">
                    <div className="Outer_container1">
                        <div className="behind_container" >
                            <RestFulApi />
                        </div>
                        <div className="front_view ">
                            <h1>The RESTful API</h1>
                            <p>
                                An API created from scratch and resources from Backend.</p>
                            <div ><ul className="UsedFrameworks1">
                                <li>Express</li>
                                <li>ejs</li>
                                <li>Mongoose</li>

                            </ul></div>

                            <div>
                                <a href="https://github.com/KLNarayana03/Wiki_API" ><i class="fa-brands fa-github code1"></i></a>
                                {/* <a href="https://github.com/KLNarayana03/Wiki_API" ><i class="fa-brands fa-codepen code1"></i></a> */}
                            </div>
                        </div>


                    </div>
                </section>
            </div>

            <div className="Sectional_Divs">
                <section className="tag">
                    <div className="Outer_container1">
                        <div className="behind_container" >
                            <Blog />
                        </div>
                        <div className="front_view ">
                            <h1>My Personal Blog</h1>
                            <p>An interactive web app created with quite a few UI components and resources from backend.</p>
                            <div ><ul className="UsedFrameworks1">
                                <li>Express</li>
                                <li>ejs</li>
                                <li>Mongoose</li>
                                <li>Lodash</li>

                            </ul></div>

                            <div>
                                <a href="https://github.com/KLNarayana03/Blog-Website" ><i class="fa-brands fa-github code1"></i></a>
                                {/* <a href="#" ><i class="fa-brands fa-codepen code1"></i></a> */}
                            </div>
                        </div>


                    </div>
                </section>
            </div>
            {/* Third Project*/}

            {/* Fourth Porject */}
            <div className="Sectional_Divs">
                <section className="tag" id="games">
                    <div>
                        <h1 className="headers1">Other Noteworthy Projects</h1>
                    </div>
                </section>
                <section className="tag">
                    <div class="row">


                        <div class="col-12 col-md-4 divs">
                            <div class="classWithPad">
                                <div className="Game">
                                    <a href="#"><i class="fa-regular fa-folder"></i></a>
                                    <a href="https://github.com/KLNarayana03/Dice_Game" ><i class="fa-brands fa-github code2"></i></a>
                                    <a href="https://klnarayana03.github.io/Dice_Game/dicee.html" ><i class="fa-brands fa-codepen code2"></i></a>
                                </div>
                                <div><p className="GameHeaders">Dice Game</p></div>
                                <div><p>A simple game works when the page is reloaded. Spawns random numbered dice.</p></div>
                                <div><ul className="UsedFrameworks1">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                </ul></div>
                            </div>
                        </div>



                        <div class="col-12 col-md-4 divs">
                            <div class="classWithPad">
                                <div className="Game">
                                    <a href="#"><i class="fa-regular fa-folder"></i></a>
                                    <a href="https://github.com/KLNarayana03/Simon_Game" ><i class="fa-brands fa-github code2"></i></a>
                                    <a href="https://klnarayana03.github.io/Simon_Game/" ><i class="fa-brands fa-codepen code2"></i></a>
                                </div>
                                <div><p className="GameHeaders">Simon Game</p></div>
                                <div><p>Press any key to start the game. Press the correct sequence of buttons to win the game!</p></div>
                                <div><ul className="UsedFrameworks1">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                </ul></div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 divs">
                            <div class="classWithPad">
                                <div className="Game">
                                    <a href="#"><i class="fa-regular fa-folder"></i></a>
                                    <a href="https://github.com/KLNarayana03/Drum_Kit" ><i class="fa-brands fa-github code2"></i></a>
                                    <a href="https://klnarayana03.github.io/Drum_Kit/" ><i class="fa-brands fa-codepen code2"></i></a>
                                </div>
                                <div><p className="GameHeaders">Drum Kit</p></div>
                                <div><p>An interactive Drum-kit. Create new songs!</p></div>
                                <div><ul className="UsedFrameworks1">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                </ul></div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </div >
    )
}



export default Body;