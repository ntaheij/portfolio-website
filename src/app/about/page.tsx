import { Hero } from '@/components/Hero';
import { Metadata } from 'next';
import Image from 'next/image';
import portrait from '../../../public/img/me-2.webp';
import offshore from '../../../public/img/about/offshore.webp';
import veroxo from '../../../public/img/about/veroxo.webp';
import lokalized from '../../../public/img/about/lokalized.webp';
import hu from '../../../public/img/about/hu.webp';
import psm1 from '../../../public/img/about/psm1.webp';
import racesquare from '../../../public/img/about/racesquare.webp';

export const metadata: Metadata = {
  title: 'About - NTaheij.dev',
  description: 'I am Noah Taheij. A cloud engineer from the Netherlands.',
};

function isLeapYear(year: number) {
  var d = new Date(year, 1, 28);
  d.setDate(d.getDate() + 1);
  return d.getMonth() == 1;
}

function getAge() {
  var d = new Date('2004-03-30'),
    now = new Date();
  var years = now.getFullYear() - d.getFullYear();
  d.setFullYear(d.getFullYear() + years);
  if (d > now) {
    years--;
    d.setFullYear(d.getFullYear() - 1);
  }
  var days = (now.getTime() - d.getTime()) / (3600 * 24 * 1000);
  years + days / (isLeapYear(now.getFullYear()) ? 366 : 365);
  return years + days / (isLeapYear(now.getFullYear()) ? 366 : 365);
}

export default function About() {
  return (
    <>
      <Hero title={'About me'} />

      <section className="max-w-7xl mx-auto px-4 xl:px-0 py-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16">
        <div className="col-span-1 md:col-span-3">
          <h2>Hi, I am Noah Taheij.</h2>
          <p className="mt-1">
            I am a {Math.floor(getAge())}-year-old cloud engineer with a passion
            for coding, photography, and cybersecurity. I discovered my interest
            in programming at a young age, starting his coding journey at the
            age of 8. Since then, I dedicated myself to mastering various
            programming languages, including Java, NodeJS, and Python.
          </p>
          <p className="mt-4">
            Driven by my fascination with computer systems, my initial goal was
            to create my own software and applications. Over time, I developed a
            desire to contribute to existing projects and help others through my
            programming skills. This ambition has shaped his journey and made me
            the skilled and motivated individual I am today.
          </p>
          <p className="mt-1">
            Currently pursuing a Bachelor&apos;s degree in ICT at Hogeschool
            Utrecht, my passion for Cloud engineering and automation led me to
            work as a Cloud Engineer on Azure Governance & Automation at the
            university. I continue to expand my knowledge and skills in the
            field while actively pursuing certifications, such as the PSM I and
            II Certification.
          </p>
          <h3 className="mt-4">Photography</h3>
          <p className="mt-1">
            In addition to my technical pursuits, I have a deep passion for
            photography, with a particular focus on portrait and wildlife
            photography. Through my lens, I capture the essence and beauty of
            people and the natural world. Whether I am behind the computer
            screen coding or behind the camera capturing life&apos;s fleeting
            moments, my passion for the world shines through in every frame.
          </p>
        </div>
        <div className="col-span-1">
          <Image
            className="rounded-md"
            src={portrait}
            alt={'A picture of me'}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto xl:px-0 border-t border-stone-200"></section>

      <section className="max-w-7xl mx-auto px-4 xl:px-0 pt-16 pb-32 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16">
        <div className="col-span-1">
          <h3>Work</h3>
          <p className="mt-1">What I am currently working on and for.</p>
        </div>
        <div className="col-span-1 md:col-span-3">
          <ol className="mx-4 md:mx-0 relative border-l border-stone-200">
            <li className="mb-8 ml-12">
              <div className="absolute w-8 h-8 rounded-full -left-4 border border-stone-200 bg-stone-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-11 h-11 items-center flex justify-center border border-stone-200 rounded-md">
                  <Image
                    className="rounded-md p-1"
                    src={offshore}
                    alt={'OffShore Events Logo'}
                  />
                </div>
                <div className="flex flex-col">
                  <time className="little-text opacity-50">may 2023 - now</time>
                  <h4>OffShore Events — Allrounder</h4>
                </div>
              </div>
              <p className="mt-1">
                Igniting the spirits of our adventurous guests, I unleash a
                torrent of adrenaline-fueled thrills as they embark on an
                extraordinary journey aboard one of our three lightning-fast RIB
                boats. With unwavering dedication to customer service and
                hospitality, I orchestrate a symphony of unforgettable
                experiences, ensuring that every moment is infused with
                awe-inspiring excitement and unparalleled care.
              </p>
            </li>
            <li className="mb-8 ml-12">
              <div className="absolute w-8 h-8 rounded-full -left-4 border border-stone-200 bg-stone-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-11 h-11 items-center flex justify-center border border-stone-200 rounded-md">
                  <Image
                    className="rounded-md p-1"
                    src={hu}
                    alt={'Hogeschool Utrecht Logo'}
                  />
                </div>
                <div className="flex flex-col">
                  <time className="little-text opacity-50">sep 2022 - now</time>
                  <h4>
                    Hogeschool Utrecht{' '}
                    <time className="little-text opacity-50">(internship)</time>
                  </h4>
                </div>
              </div>
              <p className="mt-1">
                Collaborating with the Cloud Services team, we harness the power
                of Infrastructure as Code (Bicep) to unleash a storm of
                efficiency, deploying and commanding Cloud Governance with the
                speed and precision of a lightning strike through CI/CD.
                Additionally, we are on a mission to empower the brilliant minds
                of our university&apos;s staff, unveiling the boundless
                possibilities of cloud-as-a-service in a spectacular fashion.
              </p>
            </li>
            <li className="mb-8 ml-12">
              <div className="absolute w-8 h-8 rounded-full -left-4 border border-stone-200 bg-stone-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-11 h-11 items-center flex justify-center border border-stone-200 rounded-md">
                  <Image
                    className="rounded-md p-1"
                    src={veroxo}
                    alt={'Veroxo Logo'}
                  />
                </div>
                <div className="flex flex-col">
                  <time className="little-text opacity-50">
                    april 2022 - now
                  </time>
                  <h4>Veroxo — Cloud Specialist</h4>
                </div>
              </div>
              <p className="mt-1">
                As a daring freelancer, I unleash my boundless creativity in the
                realm of Cloud projects. Armed with Azure&apos;s immense power,
                I engineer and bring to life captivating cloud solutions.
                Through Automation and Infrastructure as Code, I forge a
                seamless symphony of efficiency, revolutionizing the digital
                landscape with lightning-fast designs and implementations.
              </p>
            </li>
            <li className="mb-8 ml-12">
              <div className="absolute w-8 h-8 rounded-full -left-4 border border-stone-200 bg-stone-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-11 h-11 items-center flex justify-center border border-stone-200 rounded-md">
                  <Image
                    className="rounded-md p-1"
                    src={racesquare}
                    alt={'Racesquare Logo'}
                  />
                </div>
                <div className="flex flex-col">
                  <time className="little-text opacity-50">
                    june 2022 - may 2023
                  </time>
                  <h4>Racesquare — Race Marshall</h4>
                </div>
              </div>
              <p className="mt-1">
                Fueling the adrenaline-fueled frenzy of guests, I dive into the
                high-octane world of the F1 Racing Experience, propelling them
                to new heights of excitement. With unwavering enthusiasm, I
                become their fearless navigator, unravelling the secrets of our
                pulse-pounding simulators. But my role extends far beyond mere
                guidance - I am the master of entertainment, orchestrating a
                whirlwind of thrill and delight that leaves every guest
                breathless and hungry for more.
              </p>
            </li>

            <li className="ml-12 work-last-item">
              <div className="absolute w-8 h-8 z-[2] rounded-full -left-4 border border-stone-200 bg-stone-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <div className="absolute bg-stone-50 z-[1] w-8 bottom-0 -left-4 h-24"></div>
              <div className="flex flex-row gap-4">
                <div className="w-11 h-11 items-center flex justify-center border border-stone-200 rounded-md">
                  <Image
                    className="rounded-md p-1"
                    src={lokalized}
                    alt={'Lokalized Logo'}
                  />
                </div>
                <div className="flex flex-col">
                  <time className="little-text opacity-50">
                    february 2021 - april 2022
                  </time>
                  <h4 className="">Lokalized — Full-Stack Developer</h4>
                </div>
              </div>
              <p className="mt-1">
                As a Full-Stack Developer at Lokalized, I embark on an
                exhilarating journey of crafting software solutions that tackle
                pressing social issues head-on.
              </p>
            </li>
          </ol>
        </div>

        <div className="col-span-1">
          <h3>Education</h3>
          <p className="mt-1">My current and previous education.</p>
        </div>
        <div className="col-span-1 md:col-span-3">
          <ol className="mx-4 md:mx-0 relative border-l border-stone-200">
            <li className="mb-8 ml-12">
              <div className="absolute w-8 h-8 rounded-full -left-4 border border-stone-200 bg-stone-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-11 h-11 items-center flex justify-center border border-stone-200 rounded-md">
                  <Image
                    className="rounded-md p-1"
                    src={hu}
                    alt={'HU University of Applied Sciences Utrecht Logo'}
                  />
                </div>
                <div className="flex flex-col">
                  <time className="little-text opacity-50">2021 - 2025</time>
                  <h4 className="">
                    HU University of Applied Sciences Utrecht, BSc HBO-ICT
                    (leerroute Open-ICT)
                  </h4>
                </div>
              </div>
              <p className="mt-1">
                Working on my Bachelor&apos;s degree in ICT at Hogeschool
                Utrecht. I&apos;m currently in my 2nd year and working at the HU
                University of Applied Sciences Utrecht as a Cloud Engineer on
                Azure Governance &amp; Automation.
              </p>
            </li>
            <li className="ml-12 school-last-item">
              <div className="absolute w-8 h-8 z-[2] rounded-full -left-4 border border-stone-200 bg-stone-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <div className="absolute bg-stone-50 z-[1] w-8 bottom-0 -left-4 h-24"></div>
              <div className="flex flex-row gap-4">
                <div className="w-11 h-11 items-center flex justify-center border border-stone-200 rounded-md">
                  <Image
                    className="rounded-md p-1"
                    src={psm1}
                    alt={'PSM1 Logo'}
                  />
                </div>
                <div className="flex flex-col">
                  <time className="little-text opacity-50">2023</time>
                  <h4 className="">Professional Scrum Master I (PSM I)</h4>
                </div>
              </div>
              <p className="mt-1">
                Earned my Professional Scrum Master I (PSM I) certification from
                Scrum.org. This is a certification that shows that I have a good
                understanding of Scrum and can apply it in a team and as a Scrum
                Master if needed.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
