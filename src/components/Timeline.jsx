import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Timeline.css';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    id: 1,
    title: 'Software Engineer Intern',
    company: 'Wemco Limited',
    period: '2022 - 2023',
    description: 'Worked with team to build high-performance apps, integrated AI features and improved engagement by 10%.',
  },
  {
    id: 2,
    title: 'Graduate Engineer Trainee',
    company: 'HCL Technologies',
    period: '2023 - 2024',
    description: 'Worked as a Tester on a large Scale Life Science Project. Developed test cases, executed tests, and reported bugs to ensure quality.',
  },
  {
    id: 3,
    title: 'Software Developer',
    company: 'Simpl itech',
    period: '2024 - 2025',
    description: 'Implemented UI features, fixed bugs, and contributed to scalable development.',
  },
];

export default function Timeline() {
  const timelineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Animate timeline items on scroll
    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
            markers: false,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={timelineRef} className="timeline">
      <h3 className="timeline__title">Experience & Journey</h3>
      <div className="timeline__container">
        <div className="timeline__line" />
        <div className="timeline__items">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              ref={el => itemsRef.current[index] = el}
              className={`timeline__item timeline__item--${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline__dot" />
              <div className="timeline__content">
                <div className="timeline__header">
                  <h4 className="timeline__job">{item.title}</h4>
                  <span className="timeline__company">{item.company}</span>
                </div>
                <span className="timeline__period">{item.period}</span>
                <p className="timeline__description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
