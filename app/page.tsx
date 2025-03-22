"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <header>
        <div className="navbar">
          <div className="logo cp">Code<span>X</span></div>
          <div className="navlist "><a href="#courses">All Courses</a></div>
          <div className="navlist "><a href="">Gamma</a></div>
          <div className="navlist "><a href="#about">About Us</a></div>
          <div className="navlist "><a href="#contact">Contact Us</a></div>
          <div className="navlist ">My Learning</div>
          {!session &&
            <div className="login "><a href="/api/auth/signin">Login/Register</a></div>
          }
          {session &&
            <div className="login "><a href="/api/auth/signout">Sign Out</a></div>
          }
        </div>
      </header>
      <main>
        <div className="slider">
          {/* <Image className="slide" width={500} height="700" src="White Gradient Online Education App Promotion Banner.png" alt="" /> */}

        </div>
        {session?.user &&
          <h1 className="welcomeHeader">Welcome {session.user.name}</h1>
        }
        <div><h1>Start learning</h1></div>
        <div><h2>Recommended</h2></div>

        <div className="content-box" id="courses">
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (1).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=VTLCoHnyACE&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt" target="_blank">Complete Dsa Course | Data Structure And Algorithm</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault.jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=EerdGm-ehJQ&pp=ygUWamF2YXNjcmlwdCBmdWxsIGNvdXJzZQ%3D%3D" target="_blank">Javascript Full course - Beginner to pro</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (2).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=ER9SspLe4Hg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR" target="_blank">Javascript Tutorial | Beginner to Advanced</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (3).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=UrsmFxEIp5k&pp=ygUScHl0aG9uIGZ1bGwgY291cnNl" target="_blank">Python for beginners | One shot</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (4).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg" target="_blank">Python for beginners (Full Course) | #100days of code</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (5).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=-TkoO8Z07hI&pp=ygUDYysr" target="_blank">C++ Full Course | For Beginner</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (6).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=VTLCoHnyACE&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt" target="_blank">Complete Dsa Course | Data Structure And Algorithm | C++</a></p>
          </div>

          <div className="box">
            <Image height={170} width={500} src="/sddefault.jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=rZ41y93P2Qo&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" target="_blank">Complete Dsa Course in Java | Data Structure And Algorithm</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (7).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=1&pp=iAQB" target="_blank">Sigma Web Development Course</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (8).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=ZbG0c87wcM8&list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak" target="_blank">DevOps Bootcamp</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (1).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=VTLCoHnyACE&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt" target="_blank">Complete Dsa Course | Data Structure And Algorithm</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault.jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=EerdGm-ehJQ&pp=ygUWamF2YXNjcmlwdCBmdWxsIGNvdXJzZQ%3D%3D" target="_blank">Javascript Full course - Beginner to pro</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (2).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=ER9SspLe4Hg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR" target="_blank">Javascript Tutorial | Beginner to Advanced</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (3).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=UrsmFxEIp5k&pp=ygUScHl0aG9uIGZ1bGwgY291cnNl" target="_blank">Python for beginners | One shot</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (4).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg" target="_blank">Python for beginners (Full Course) | #100days of code</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (5).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=-TkoO8Z07hI&pp=ygUDYysr" target="_blank">C++ Full Course | For Beginner</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (6).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=VTLCoHnyACE&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt" target="_blank">Complete Dsa Course | Data Structure And Algorithm | C++</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/sddefault.jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=rZ41y93P2Qo&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" target="_blank">Complete Dsa Course in Java | Data Structure And Algorithm</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (7).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=1&pp=iAQB" target="_blank">Sigma Web Development Course</a></p>
          </div>
          <div className="box">
            <Image height={170} width={500} src="/hqdefault (8).jpg" alt="" />
            <p><a href="https://www.youtube.com/watch?v=ZbG0c87wcM8&list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak" target="_blank">DevOps Bootcamp</a></p>
          </div>


        </div>

        <div className="container" id="about">
          <div className="abt">

            <h1>About Our EdTech Platform</h1>
            <p>We aim to make life of students easier.</p>

            <h2>Our Mission & Impact</h2>
          </div>

          <div className="stats">
            <div className="stat-box">
              <p className="counter" id="learners">Free</p>
              <p>Resources</p>
            </div>
            <div className="stat-box">
              <p className="counter" id="educators">Gamma</p>
              <p>personal Guide</p>
            </div>
            <div className="stat-box">
              <p className="counter" id="minutes">10+</p>
              <p>Top Selected Courses</p>
            </div>

          </div>
          <div className="abt">
            <h2>Roadmap</h2>
          </div>
          <div className="timeline">
            <div><strong>DSA:</strong> Youtube lectures from Apna COllege and Kunal Kushwaha  </div>
            <div><strong>Web Development:</strong> Sigma Batch | Code With Harry</div>
            <div><strong>Java:</strong> Kunal Kushwaha</div>
            <div><strong>C++:</strong> Apna College</div>
            <div><strong>Projects And Open source:</strong> Harkirat Singh</div>
            <div><strong>One Shots:</strong> Bro code one shot lectures for fast learners</div>
          </div>
        </div>

      </main>



      <footer className="footer" id="contact">
        <div className="footer">
          <p>"Education is the most powerful weapon which you can use to change the world." – Nelson Mandela</p>
          <span>With love from CodeX ❤️</span>
        </div>
        <div className="footer-container">

          <div className="footer-section">
            <h2>About Us</h2>
            <p>We provide top-quality educational resources to help students and professionals grow in their careers.</p>
          </div>

          <div className="footer-section">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>


          <div className="footer-section">
            <h2>Contact Us</h2>
            <p>Email: codex.solutions1234@gmail.com</p>
            <p>Phone: +1 (123) 456-7890</p>

          </div>
        </div>

        <div className="footer-bottom">
          &copy; 2025 EdTech Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
