import React, { useState } from "react";
import {
    EmailShareButton,
    FacebookShareButton,
    RedditShareButton,
    TelegramShareButton, 
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    TelegramIcon,
    EmailIcon,
    RedditIcon
    
  } from "react-share";

const Header = () => {
    const [share,setShare] = useState(false)
  return (
  <div>
  
      <div className="main-container">

        <div className="div-star">
        <span className="material-icons">description</span>
        <h3 className="head doc">Untitled Document</h3>
        <span className="material-icons star">star_border</span>
        </div>
    <div className="list">
 
    <ul>
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Insert</li>
          <li>Format</li>
          <li>Tools</li>
          <li>Extensions</li>
          <li>Help</li>
        </ul>
    </div>
       <div className="share">
       <span className="material-icons comma">insert_comment</span>
        <span className="material-icons">videocam</span>
        <button onClick={()=>setShare(!share)}>
          <span className="material-icons">lock</span> share
        </button>
      

        <img src="https://icon-library.com/images/google-user-icon/google-user-icon-16.jpg" alt="icon" style={{height:"50px",width:"50px"}}/>
       </div>
      
      </div>
      <div>
         {

share?
<div class="share-btn">
<FacebookShareButton
url={'https://www.facebook.com'}>
<FacebookIcon size={32} round />
</FacebookShareButton>
<TwitterShareButton url={'https://www.twitter.com'}>
<TwitterIcon size={32} round />
</TwitterShareButton>
<WhatsappShareButton url={'https://www.whatsapp.com'}>
<WhatsappIcon size={32} round/>
</WhatsappShareButton>
<RedditShareButton url={'https://www.reddit.com'}>
<RedditIcon size={32} round/>
</RedditShareButton>
<EmailShareButton url={'https://gmail.com'}>
<EmailIcon size={32} round/>
</EmailShareButton>
<TelegramShareButton url={'https://www.telegram.com'}>
<TelegramIcon size={32} round/>
</TelegramShareButton>
</div>:""
}
      </div>
      </div>
  );
};

export default Header;
