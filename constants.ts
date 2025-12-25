import { Project, ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Osama Elkassaby",
  title: "Mechanical Engineer",
  // about: "Mechanical Engineer with 4+ years of experience in product design and development in the medical device industry. Proven track record of taking complex assays from benchtop to fully automated prototypes.",
  //   
  about: `Mechanical engineer with product design and development experience in the medical device and commercial hydrogen industries spanning concept development, CAD modeling, engineering analysis, system integration, and verification & validation

Diverse skillset to support product development and prototyping, including substantial experience in CAD, embedded systems prototyping, and experience with circuit and PCB design

Demonstrated experience in leading a multidisciplinary team through prototype development

Proficient in SolidWorks; familiar with Fusion 360, CATIA`,
  contact: {
    email: "osama.kasaby@gmail.com",
    phone: "+1 (617) 618-8019",
    location: "Boston, MA | Jersey City, NJ",
    linkedin: "linkedin.com/in/osama-elkassaby/",
    github: "github.com/oelkassaby" // Often engineers use grabcad or similar, but github is fine for scripts/code
  },
  education: [
    {
      id: "1",
      degree: "Bachelor of Applied Science, Mechanical Engineering",
      institution: "University of Waterloo",
      year: "2021"
    },
  ],
  experience: [
    {
      id: "1",
      role: "Staff Engineer II",
      company: "Giner Labs",
      location: "Newton, MA",
      period: "Feb 2024 - Nov 2025",
      description: [
        "Lead engineer for National Institute of Health (NIH) phase II program: development of a field instrument for fully automated detection of arsenic, lead, and cadmium in the 1x PPB range from raw urine samples",
        "Designed the field instrument prototype in SolidWorks, leveraging sheet metal design, in-house FDM and SLA 3D-printing, and off-the-shelf components to deliver a fully functional prototype for under $7000",
        "Executed circuit design for electronic advanced oxidation process (EAOP) and fluidics system design. Prototype completed sample oxidation, full assay results, and self-cleaning in under 90 minutes",
        "Managed and supported multidisciplinary engineering effort for the successful build-out of the prototype, overseeing a team of 2 engineers and an intern through design, manufacturing, integration, and testing",
        "Led mechanical design of a commercial cathode liquid feed electrolyzer system. Completed SolidWorks design and FEA, delivering a design 52% smaller than the size constraint while maintaining DFM/A principles",
        "Designed sensor housing, subcutaneous injection mechanism, and automated lifetime testing system for a wearable alcohol biosensor (NIH Phase II)",
      ]
    },
    {
      id: "2",
      role: "R&D Engineer",
      company: "Kenota Health",
      location: "Waterloo, ON",
      period: "Jan 2022 - Dec 2023",
      description: [
        "Worked in cross-functional team of assay scientists, optical engineers, and leadership to identify root causes of device failures; developed component and subsystem-level redesigns to mitigate device failure points",
        "Designed TEC-based optics cooling system including thermal analysis, SolidWorks modeling of machined components, machining modifications to existing components, and assembling prototype builds. Achieved stable CMOS temperature within 0.5°C of target temperature during normal operation",
        "Developed microfluidic dispensing system to accurately dispense reagent volumes as small as 3 µL (σ<0.1). Responsible for the mechanical and electronic design, test plan design and execution, and data analysis",
        "Automated calibration and verification of optical and electromechanical systems using Python",
        "Defined verification and validation protocols in accordance with FDA standards to set product specifications",
      ]
    },
    {
      id: "3",
      role: "Engineering Specialist (Co-op)",
      company: "Toyota Motor North America ",
      location: "Cambridge, ON",
      period: "Sept 2017 – Dec 2017",
      description: [
        "Reduced upgrade cost by a total of $70,000 across 4 door welding jigs by completing continuous improvement study to simplify pneumatic system design",
        "Performed root cause analysis on critical jig misalignment issue. Designed pneumatic system realignment mechanism and worked with maintenance to implement it, reducing annual downtime by up to 70 minutes",
        "Redesigned robot cells and weld process in CATIA/DELMIA for transition to production of the RAV4 platform"
      ]
    }
  ],
  skills: [
    { category: "CAD/FEA", items: ["SolidWorks", "AutoCAD", "Ansys", "Fusion 360", "CATIA"] },
    { category: "Manufacturing", items: ["CNC Machining", "Injection Molding", "3D Printing", "Sheet Metal"] },
    { category: "Engineering", items: ["Thermodynamics", "GD&T", "DFM/DFA", "Matlab", "Python"] }
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Project 1",
    description: "Description 1.",
    tags: ["Tag1", "Tag2", "Tag3"],
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    link: "google.com/"
  },
  {
    id: "2",
    title: "Project 2",
    description: "Description 2",
    tags: ["Tag1", "Tag2", "Tag3"],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "3",
    title: "project 3",
    description: "Description 3.",
    tags: ["Tag1", "Tag2", "Tag3"],
    imageUrl: "https://images.unsplash.com/photo-1583912267550-d41354005b74?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
];