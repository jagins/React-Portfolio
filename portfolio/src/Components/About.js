import React from 'react';

function About (props) 
{
   if(props.data)
   {
      var name = props.data.name;
      var profilepic = props.data.image;
      var bio = props.data.bio;
      var city = props.data.address.city;
      var state = props.data.address.state;
      var phone= props.data.phone;
      var email = props.data.email;
      var resumeDownload = props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{city} {state}
                   </span><br />
						   <span>{phone}</span><br />
                     <span><a href='mailto:jagins629@gmail.com'>{email}</a></span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} target= '_blank' rel = 'noopener noreferer' className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
}

export default About;
