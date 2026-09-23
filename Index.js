
.hero-home{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  min-height: 100vh;
  padding: 0 8%;
  background-color: #050816;
  color: #ffffff;
}
.mini-box{
  display: inline-block;
  border: 1px solid rgba(79, 172, 254, 0.3);
  border-radius: 30px;
  color: #8ab4ff;
  font-size: 18px;
  box-shadow:  0 0 20px rgba(79, 172, 254, 0.2);
  padding: 7px 20px;
}
.hero h1{
  color: white;
  font-size: 43px;
}
.hero p{
  color: white;
  text-shadow: 0 0 15px white;
  line-height: 1.8rem;
  font-size: 20px;
}
.Get{
  padding: 10px 25px;
  font-size: 15px;
  color: white;
  background-color: #023999;
  border: 1px solid transparent;
  border-radius: 7px;
  margin-right: 25px;
  box-shadow: 0 0 20px #023999;
} 
.Get:hover{
  color: black;
  transform: scale(1.05);
  box-shadow: 0 0 20px #023999;
                         
}
.View{
  font-size: 15px;
  padding: 10px 25px;
  background-color: transparent;
  border: 1px solid #111b4b;
  border-radius: 7px;
  color: white;
  box-shadow: 0 0 20px #111b4b;
}
.View:hover{
  background-color: rgb(216, 216, 216);
  color: black;
  transform: scale(1.05);
  box-shadow: 0 0 20px #111b4b;
}
.hero-image{
  position: relative;
  width: 650px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle{
  position: absolute;
  width: 480px;
  height: 480px;
  border-radius: 300px;
  background:radial-gradient(circle at 30% 30%, #5aa9ff, #0066ff);
  box-shadow: 
     0 0 80px rgba(0, 102, 255, 0.6),
     0 0 150px rgba(0, 102, 255, 0.3);
     z-index: 2;
  top: 20%;
  left: 20%;   
}
.hero-image img{
  position: relative;
  height: 450px;
  top: 10px;
  z-index: 2;
  left: 6%;

}
/*------------------end of hero--------------------*/
.about1{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-right: 7%;
  min-height: 80vh;
  background-color: #050816;
  color: #ffffff;
}
.about{
  color: white;
  background-color: #050816;
  padding: 3% 8%;
}
.about h4{
  color: #8ab4ff;
}
.about h2{
  color: white;
  font-size: 40px;
}
.about p{
  color: #ecedf1;
  line-height: 1.4rem;
}
.about ul li{
  list-style: none;
  color: #ecedf1;
}
.list{
  color: white;
  border: solid #0066ff;
  border-radius: 50px;
}
.about1 img{
  width: 600px;
  height: 350px;
  border-radius: 20px;
}
.box{
  height: 90px;
  width: 100px;
  border-radius: 12px;
  padding: 10px 14px;
  text-align: center;
  background-color: #0066ff;
  position: absolute;
  left: 42%;
}
/*-------------------About end----------------------*/
.project{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  padding: 5% 8%;
  background-color: #050816;
  color: #ffffff;
}
.project h3{
  color: #679af1;
}
.project h2{
  color: white;
  font-size: 40px;
}
.project p{
  color: white;
  font-size: 25px;
  line-height: 1.9rem;
}
.project h4{
  color: white;
  text-align: right;
}
.button{
top: 10%;
}
.project-home{
  top: 10%;
}
.our-project{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 8%;
  background-color: #050816;
  color: #ffffff;
}
.our-work img{
  width: 300px;
  height: 250px;
  border: none;
  background-color: #040a22;
  border-radius: 15px;
  padding: 35px 20px;
}
.our-work1 img{
  width: 300px;
  height: 250px;
  border: none;
  background-color: #3b4d96;
  border-radius: 15px;
  padding: 35px 20px;
}
.our-work2 img{
  width: 300px;
  height: 250px;
  border: none;
  background-color: #ecedf1;
  border-radius: 15px;
  padding: 35px 20px;
}
.flow{
  display: flex;
  gap: 80px;
  color: white;

}
#flow0{
  border: none;
  border-radius: 15px;
  padding: 15px 20px;
  background-color:#080c1d;
  top: 0;
}
.flow h4{
  color: #f3eeee;
}
.flow h2{
  border: none;
  background-color: #0066ff;
  border-radius: 50px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  padding: 20px 20px;
  font-size: 25px;
}








  
  <!-------------------------end of hero----------------->
  <section class="about1" id="About">
    <div class="about">
      <h4>ABOUT US</h4><br>
      <h2>We Are A Digital<br> Product Agency</h2><br>
      <p>We are a team of passionate designers,<br>
      developers and marketer who help<br>
      businesses create incredible digital <br>
      product and experience </p>
      <ul><br>
        <li><span class="list">✔</span> Creative & Professional Team</li>
        <li><span class="list">✔</span> Focused on Quality & Details</li>
        <li><span class="list">✔</span> 100% Client Satisfaction</li>
      </ul>
    </div>
    <div class="meeting">
        <img src="image/IMG_9703.JPG" alt="meeting image">
    </div>
    <div class="box"><h1>5+</h1>
    <h4>Years
      <h4>Experience</h4>
    </h4></div>
  </section>
  <hr>
  <!-------------------------end of about----------------->
    <section id="Project">
      <div class="project">
      <div class="Project-home">
      <h3>OUR PROJECT</h3><br>
      <h2>Our Recent Projects</h2><br>
      <p>Here are some of the project we have worked on.<br>
      Each project is crafted with passion and precision</p>
      </div>
      <div class="button">
        <button class="View">View All Projects</button>
      </div>
      </div>
      <div class="our-project">
      <div class="our-work">
        <img src="image/IMG_9701.JPG" alt="project 1">
        <div class="flow" id="flow0">
        <div>
        <h3>Workflow Website</h3><br>
        <h4>Web design</h4>
        </div>
        <div>
        <h2>↗</h2>
        </div>
        </div>
      </div>
      <div class="our-project">
      <div class="our-work2">
        <img src="image/IMG_9699.JPG" alt="project 1">
        <div class="flow" id="flow0">
        <div>
        <h3>Websign With Coding</h3><br>
        <h4>Web design</h4>
        </div>
        <div>
        <h2>↗</h2>
        </div>
        </div>
      </div>
      <div class="our-project">
      <div class="our-work1">
        <img src="image/IMG_9700.JPG" alt="project 1">
        <div class="flow" id="flow0">
        <div>
        <h3>Create powerful Apps</h3><br>
        <h4>Web design</h4>
        </div>
        <div>
        <h2>↗</h2>
        </div>
        </div>
      </div>
      </div>
    </section>
  </body>
</html>↗↗↗