// src/app/about/page.tsx
import Link from 'next/link';
import Image from 'next/image'; // Correct import

export default function About() {
  return (
    <div className="about-container">
      <Image 
        src="/image.jpeg" // Replace with the actual image name in the public directory
        alt="Parveen Jatoi"
        className="rounded-image"
        width={150} 
        height={150}
      />
      <h1 className="about-title">About Me</h1>
      <p className="about-paragraph">
        Hi, I am <strong>Parveen Jatoi</strong>, a dedicated learner currently enrolled in the 
        Government IT Initiative for Generative AI and Cloud Computing Engineering course. 
        I have successfully completed my first quarter and am currently in my second quarter, 
        where I am expanding my skills and knowledge in these exciting fields.
      </p>
      <p className="about-paragraph">
        I have learned <strong>TypeScript, JavaScript, HTML, CSS,</strong> and <strong>Tailwind CSS</strong>, 
        and I am currently exploring <strong>Next.js</strong>. I have completed many projects that demonstrate 
        my skills and creativity.
      </p>
      <p className="about-paragraph">
        You can check out my projects <Link href="/projects" className="about-link">here</Link>.
      </p>
      <p className="about-paragraph">
        I am passionate about leveraging technology to solve real-world problems and am eager to 
        apply what I have learned to create innovative solutions.
      </p>
      <p className="about-paragraph">
        Thank you for visiting my portfolio!
      </p>
    </div>
  );
}