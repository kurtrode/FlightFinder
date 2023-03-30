import React from 'react'
import GithUb from '/public/img/github.png'
export default function AboutUs() {
  return (
    <>
      <h1>About Us</h1>

      <h2>The Team That Brought You All This Wonderful Stuff</h2>
        <div>
        <div>
        <h3>Kurt Rode</h3>
        
        <p>Kurt was responsible for the setup and administration of the database as well as varied tasks throughout the site such as the flight map.</p>
        <img src={GithUb} width={20} height={20}/> <a href="http://www.github.com/kurtrode">Kurt's GitHub</a>
        </div>
        <div>
        <h3>Leonid Selivanov</h3>
        <p>Leonid managed the visual elements of the page as well as the login/register system.</p>
        </div>
        <div>
        <h3>Maan Rokaya</h3>
        <p>Maan was the man when it came to API fetches.  The search results on this site are the result of his work.</p>
        </div>

      </div>
    </>

  )
}
