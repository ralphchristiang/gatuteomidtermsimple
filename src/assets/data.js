// These are ordinary image imports. Vite includes the pictures when building the site.
import ccsLogo from './images/ccs-large.png'
import bsitLogo from './images/bsit-logo.png'
import bscsLogo from './images/bscs-logo.png'
import bsdmiaLogo from './images/bsdmia-logo.png'
import blisLogo from './images/blis-logo.png'
import oracleLogo from './images/Oracle_Academy_rgb.png'
import ciscoLogo from './images/1024px-Cisco_academy_logo.svg_-300x300.png'
import acerLogo from './images/acer-300x300.jpg'
import huaweiLogo from './images/huawei-academy-logo-300x300.jpg'
import psiteLogo from './images/inal-black-300x127-1.png'
import govesmartLogo from './images/govesmart-1-300x76.jpg'
import mayadLogo from './images/mayad-300x55.png'
import lasortechLogo from './images/LasorTech-300x89.jpg'
import startupLogo from './images/startupproject.jpg'
import quijanoPhoto from './images/quijano-e1637132499305.png'
import ojacastroPhoto from './images/ojacastro-754x1024.jpg'
import balontongPhoto from './images/balontong-754x1024.jpg'
import beldiaPhoto from './images/beldia-754x1024.jpg'
import dignadicePhoto from './images/dignadice-1-754x1024.jpg'
import eregiaPhoto from './images/eregia-754x1024.jpg'
import jardelezaPhoto from './images/jardleza-754x1024.jpg'
import montanoPhoto from './images/montano-754x1024.jpg'
import parrenoPhoto from './images/parreno-754x1024.jpg'
import cambroneroPhoto from './images/cambronero-754x1024.jpg'
import sapulPhoto from './images/sapul-754x1024.jpg'
import cantelPhoto from './images/cantel-754x1024.jpg'
import pajarPhoto from './images/pajar-754x1024.jpg'
import castanoPhoto from './images/castano-754x1024.jpg'
import taasanPhoto from './images/taasan-754x1024.jpg'
import adorPhoto from './images/ador-754x1024.jpg'
import riveraPhoto from './images/rivera-754x1024.png'

export { ccsLogo }

// Program descriptions are summarized from the official CCS program pages.
export const programs = [
  {
    code: "BSIT",
    name: "Bachelor of Science in Information Technology",
    description: "Turn technology into practical solutions. Learn to develop, integrate, and manage the systems and infrastructure that organizations rely on.",
    logo: bsitLogo,
    logoName: "Information Technology Student Organization (ITSO)"
  },
  {
    code: "BSCS",
    name: "Bachelor of Science in Computer Science",
    description: "Explore the foundations of computing. Develop your understanding of algorithms, software, and hardware to solve problems through thoughtful design.",
    logo: bscsLogo,
    logoName: "Computer Science Society (CSS)"
  },
  {
    code: "BSDMIA",
    name: "Bachelor of Science in Digital Media and Interactive Arts",
    description: "Bring creative ideas to life through applied arts and digital media. Build your artistic skills for entertainment, education, and visual communication.",
    logo: bsdmiaLogo,
    logoName: "Modern Interactive Digital Artists Society (MIDAS)"
  },
  {
    code: "BLIS",
    name: "Bachelor of Library and Information Science",
    description: "Connect people with knowledge. Learn to develop, organize, and manage information resources across print, electronic, and digital formats.",
    logo: blisLogo,
    logoName: "Library and Information Science Student Organization (LISSO)"
  }
]

// Published directory information: confirm the current roster and highest degrees with CCS.
export const departments = [
  {
    name: "College Leadership",
    members: [
      {
        name: "Ma. Christina A. Quijano",
        role: "Dean, College of Computer Studies",
        education: "Master of Science in Computer Science",
        photo: quijanoPhoto
      }
    ]
  },
  {
    name: "Information Technology & Information Systems",
    members: [
      {
        name: "Rose Leah Joy A. Ojacastro",
        role: "Acting Chairperson, IT & IS",
        education: "Master of Science in Computer Science",
        photo: ojacastroPhoto
      },
      {
        name: "Rea P. Balontong",
        role: "Faculty · IT & IS",
        education: "Master of Business Administration",
        photo: balontongPhoto
      },
      {
        name: "Leo Paulo B. Beldia",
        role: "Faculty · IT & IS",
        education: "Bachelor of Science in Computer Science",
        note: "Listed in the 2018–2019 directory; current highest degree unconfirmed.",
        photo: beldiaPhoto
      },
      {
        name: "Lesley Joy L. Dignadice",
        role: "Faculty · IT & IS",
        education: "Master of Business Administration",
        photo: dignadicePhoto
      },
      {
        name: "Rodolfo C. Eregia, Jr.",
        role: "Faculty · IT & IS",
        education: "Bachelor of Science in Information Technology",
        note: "Listed in the 2018–2019 directory; current highest degree unconfirmed.",
        photo: eregiaPhoto
      },
      {
        name: "Donie S. Jardeleza",
        role: "Faculty · IT & IS",
        education: "Master of Science in Computer Science",
        photo: jardelezaPhoto
      },
      {
        name: "Antonio M. Montaño, Jr.",
        role: "Faculty · IT & IS",
        education: "B.S.C. (WIT; specialization not published)",
        note: "Listed in the 2018–2019 directory; current highest degree unconfirmed.",
        photo: montanoPhoto
      }
    ]
  },
  {
    name: "Computer Science & Digital Media and Interactive Arts",
    members: [
      {
        name: "Marjee Rose B. Parreño",
        role: "Chairperson, BSCS & BSDMIA",
        education: "Master of Science in Computer Science; Master of Business Administration",
        photo: parrenoPhoto
      },
      {
        name: "Pedro Peter Rhys B. Cambronero, Jr.",
        role: "Faculty · Computer Science",
        education: "Master of Science in Computer Science",
        photo: cambroneroPhoto
      },
      {
        name: "Ma. Sheila C. Sapul",
        role: "Faculty · Computer Science",
        education: "Doctor of Philosophy (field not published)",
        photo: sapulPhoto
      }
    ]
  },
  {
    name: "Library & Information Science",
    members: [
      {
        name: "Ana Mae B. Cantel",
        role: "Program Coordinator, BLIS & MLIS",
        education: "Master of Library and Information Science",
        photo: cantelPhoto
      }
    ]
  },
  {
    name: "Administration & Support Services",
    members: [
      {
        name: "Lennon D. Pajar",
        role: "Computer Laboratory Coordinator (CCS directory)",
        education: "Master of Science in Computer Science",
        photo: pajarPhoto
      },
      {
        name: "Chrislyn Calsado Castaño",
        role: "Secretary",
        education: "B.S.C. (CPU; specialization not published)",
        note: "Listed in the 2018–2019 directory; current highest degree unconfirmed.",
        photo: castanoPhoto
      },
      {
        name: "A.M.P. Latter P. Taasan",
        role: "Computer Laboratory Technician",
        education: "Please confirm with the CCS Office",
        photo: taasanPhoto
      },
      {
        name: "Chriselda Elaine Ador",
        role: "Guidance Counselor",
        education: "Please confirm with the CCS Office",
        photo: adorPhoto
      },
      {
        name: "Donna May Rivera",
        role: "Library Liaison Officer",
        education: "Please confirm with the CCS Office",
        photo: riveraPhoto
      }
    ]
  }
]

export const partners = [
  {
    name: "Oracle Academy",
    logo: oracleLogo
  },
  {
    name: "Cisco Networking Academy",
    logo: ciscoLogo
  },
  {
    name: "Acer",
    logo: acerLogo
  },
  {
    name: "Huawei ICT Academy",
    logo: huaweiLogo
  },
  {
    name: "Philippine Society of Information Technology Educators",
    logo: psiteLogo
  },
  {
    name: "GoveSmart",
    logo: govesmartLogo
  },
  {
    name: "Mayad",
    logo: mayadLogo
  },
  {
    name: "Lasortech",
    logo: lasortechLogo
  },
  {
    name: "Startup Project Ventures",
    logo: startupLogo
  }
]
