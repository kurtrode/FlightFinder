import React from 'react'
import GithUb from '/public/img/github.png'
import LinkedIn from '/public/img/linkedin.png'
export default function AboutUs() {
  return (
    <>
      <h1>About Us</h1>

      <h2>The Team That Brought You All This Wonderful Stuff</h2>
        <div>
        <div>
        <h3>Kurt Rode</h3>
        <p>Kurt was responsible for the setup and administration of the database as well as varied tasks throughout the site such as the flight map.</p>
        <img src={GithUb} width={20} height={20}/> <a href="http://www.github.com/kurtrode">Kurt's GitHub</a><br/>
        <img src={LinkedIn} width={20} height={20}/> <a href="https://www.linkedin.com/in/kurtrode">Kurt's GitHub</a>
        </div>
        <div>
        <h3>Leonid Selivanov</h3>
        <p>Leonid managed the visual elements of the page as well as the login/register system.</p>
        <img src={GithUb} width={20} height={20}/> <a href="http://www.github.com/rgizzaj">Leonid's GitHub</a><br/>
        <img src={LinkedIn} width={20} height={20}/> <a href="https://www.linkedin.com/in/lselivanov">Leonid's LinkedIn</a>
        </div>
        <div>
        <h3>Maan Rokaya</h3>
        <p>Maan was the man when it came to API fetches.  The search results on this site are the result of his work.</p>
        <img src={GithUb} width={20} height={20}/> <a href="http://www.github.com/MRokaya">Maan's GitHub</a><br/>
        <img src={LinkedIn} width={20} height={20}/> <a href="https://www.linkedin.com/in/maan-rokaya-177692264">Maan's LinkedIn</a>
        </div>
        <div>
        <h3>Tobiáš Licek</h3>
        <p>Tobiáš was instrumental in the planning phase and the early part of production.</p>
        <img src={GithUb} width={20} height={20}/> <a href="http://www.github.com/tobiaslicek">Tobiáš's GitHub</a><br/>
        <img src={LinkedIn} width={20} height={20}/> <a href="https://www.linkedin.com/tobiaslicek">Tobiáš's LinkedIn</a>
        </div>

      </div>
    </>

  )
}
