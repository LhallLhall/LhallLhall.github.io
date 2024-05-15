import React from "react";
import styles from "../styles/about.module.css"

export default function About() {
  return (
    <div className='container mx-auto h-screen font-mono'>
      <div className="grid-rows-1 flex-wrap flex my-4">
        <div className="grid-cols-12">
          <h2 className="my-5 ">About /&gt;</h2>
        </div>
        <div className="grid-cols-12">
          <div className={styles.codeWrp}>
          <div data-line-nr='01' className={styles.codel}>
            <div className={styles.methods}>class</div>
            <span className={styles.propname}> Logan Hall</span> &#123;
          </div>
          <div data-line-nr='02' className={styles.codel}>
            <div className={styles.dot}>··</div>
            <div className={styles.comment}>// I think, therfore I am</div>
          </div>
          <div data-line-nr='03' className={styles.codel}>
            <div className={styles.dot}>··</div>
            <div className={styles.comment}>// My vast variety of skills is continuously expanding.</div>
          </div>
          <div data-line-nr='04' className={styles.codel}>
            <div className={styles.dot}>··</div>
            <div className={styles.methods}>constructor</div>() &#123;
          </div>
          <div data-line-nr='05' className={styles.codel}>
            <div className={styles.dot}>····</div>
            <span className={styles.scope}>this</span>.<span className='prop2'>name</span> <span className={styles.scope}>=</span>{" "}
            <span className={styles.string}>'Logan Hall'</span>
          </div>
          <div data-line-nr='06' className={styles.codel}>
            <div className={styles.dot}>····</div>
            <span className={styles.scope}>this</span>.<span className='prop2'>dayOfBirthTimestamp</span>{" "}
            <span className={styles.scope}>=</span> <span className='number'>1072819200</span>
          </div>
          <div data-line-nr='07' className={styles.codel}>
            <div className={styles.dot}>····</div>
            <span className={styles.scope}>this</span>.<span className='prop2'>email</span> <span className={styles.scope}>=</span>{" "}
            <span className={styles.string}>'hall.logan@2819studios.com'</span>
          </div>
          <div data-line-nr='08' className={styles.codel}>
            <div className={styles.dot}>··</div>&#125;
          </div>
          <div data-line-nr='09' className={styles.codel}>
            <div className={styles.dot}>··</div>
            <span className={styles.propname}>workExperience</span>() &#123;
          </div>
          <div data-line-nr='10' className={styles.codel}>
            <div className={styles.dot}>····</div>
            <div className={styles.methods}>return</div> [
          </div>
          <div data-line-nr='11' className={styles.codel}>
            <div className={styles.dot}>······</div>
            &#123; <span className={styles.string}>'2024-now'</span> :
            <span className={styles.string}> 'Web / Mobile Developer at eLink Design.'</span> &#125;,
            
          </div>
          <div data-line-nr='12' className={styles.codel}>
            <div className={styles.dot}>······</div>
            &#123; <span className={styles.string}>'2019-now'</span> :
            <span className={styles.string}> 'Junior Web Developer at 2819 Studios.'</span> &#125;,
          </div>
          <div data-line-nr='13' className={styles.codel}>
            <div className={styles.dot}>······</div>
            &#123; <span className={styles.string}>'2023-2023'</span> :
            <span className={styles.string}> 'Assistant Instructor at Awesome Inc.'</span> &#125;,
          </div>
          <div data-line-nr='14' className={styles.codel}>
            <div className={styles.dot}>······</div>
            &#123; <span className={styles.string}>'2023-2023'</span> :
            <span className={styles.string}> 'Web Developer at CentrAlert.'</span> &#125;
          </div>
          <div data-line-nr='15' className={styles.codel}>
            <div className={styles.dot}>····</div>]
          </div>
          <div data-line-nr='16' className={styles.codel}>
            <div className={styles.dot}>··</div>&#125;
          </div>
          <div data-line-nr='17' className={styles.codel}>
            <div className={styles.dot}>··</div>
            <span className={styles.propname}>education</span>() &#123;
          </div>
          <div data-line-nr='18' className={styles.codel}>
            <div className={styles.dot}>····</div>
            <div className={styles.methods}>return</div> [
          </div>
          <div data-line-nr='19' className={styles.codel}>
            <div className={styles.dot}>······</div>
            &#123; <span className={styles.string}>'2022'</span>:
            <span className={styles.string}>
              {" "}
              'Awesome Inc Web Development Bootcamp - A 16 week program designed to teach you HTML/CSS/JS, React, Python, Django, and Bootstrap. Made over 13 different projects using weekly agile sprints.'
            </span>{" "}
            &#125;,
          </div>
          <div data-line-nr='22' className={styles.codel}>
            <div className={styles.dot}>····</div>]
          </div>
          <div data-line-nr='23' className={styles.codel}>
            <div className={styles.dot}>··</div>&#125;
          </div>
          <div data-line-nr='24' className={styles.codel}>
            <div className={styles.dot}>··</div>
            <span className={styles.propname}>skills</span>() &#123;
          </div>
          <div data-line-nr='25' className={styles.codel}>
            <div className={styles.dot}>····</div>
            <div className={styles.methods}>return</div> [{" "}
            <span className={styles.string}>
              'HTML/CSS/JS', 'Node.js', 'Bootstrap/Tailwind', 'Vite', 'npm/yarn/pnpm', 'Docker', 'Firebase', 'PHP', 'Laravel',
              'ORM', 'Alembic/FastAPI', 'Python', 'SQL', 'Django', 'PostgressSQL' 'Wordpress', 'UX/UI', 'AWS', 'C#', 'TypeScript',
              'NestJS', 'Postman', 'Thunderclient', 'GA4/Google Search Console', 'Agile Development', 'OOP', 'Responsive Design'  {" "}
            </span>{" "}
            <span className='cursor'></span> ]
          </div>
          <div data-line-nr='26' className={styles.codel}>
            <div className={styles.dot}>··</div>&#125;
          </div>
          <div data-line-nr='27' className={styles.codel}>
            &#125;
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
