import { Project, ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Osama Elkassaby",
  title: "Senior Mechanical Engineer",
  summary: "Detail-oriented Mechanical Engineer with 4+ years of experience in product design and development in the medical device industry. Proven track record of taking complex mechanical systems from concept to functional prototypes.",
  contact: {
    email: "osama.kasaby@gmail.com",
    phone: "+1 (617) 618-8019",
    location: "Boston, MA",
    linkedin: "www.linkedin.com/in/osama-elkassaby/",
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
      period: "Feb 2024 - Nov 2025",
      description: [
        "Lead engineer for National Institute of Health (NIH) phase II program: development of a field instrument for fully automated detection of arsenic, lead, and cadmium in the 1x PPB range from raw urine samples",
        "Managed a cross-functional team of engineers and designers to deliver prototypes on tight deadlines.",
        "Implemented GD&T standards across the department, reducing manufacturing errors by 25%."
      ]
    },
    {
      id: "2",
      role: "Mechanical Design Engineer",
      company: "ThermalSystems Corp",
      period: "2017 - 2020",
      description: [
        "Designed and analyzed heat exchangers for industrial HVAC systems using Ansys Fluent.",
        "Created detailed manufacturing drawings and worked closely with machinists to optimize parts for CNC production.",
        "Conducted failure analysis on field returns and implemented robust corrective actions."
      ]
    },
    {
      id: "3",
      role: "Junior Engineer",
      company: "ProtoWorks",
      period: "2015 - 2017",
      description: [
        "Responsible for 3D printing and post-processing of rapid prototypes for client presentations.",
        "Assisted in the design of injection molded plastic enclosures for consumer electronics.",
        "Performed tolerance stack-up analysis for assembly fits."
      ]
    }
  ],
  skills: [
    { category: "CAD/FEA", items: ["SolidWorks", "AutoCAD", "Ansys", "Fusion 360", "CATIA"] },
    { category: "Manufacturing", items: ["CNC Machining", "Injection Molding", "3D Printing", "Sheet Metal"] },
    { category: "Engineering", items: ["Thermodynamics", "GD&T", "DFM/DFA", "Matlab", "Python"] }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Autonomous Rover Suspension",
    description: "Designed a 6-wheel rocker-bogie suspension system for an autonomous agricultural rover.",
    tags: ["SolidWorks", "Kinematics", "Prototyping"],
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "2",
    title: "High-Efficiency Turbine Blade",
    description: "CFD analysis and shape optimization of a wind turbine blade to maximize lift-to-drag ratio.",
    tags: ["Ansys Fluent", "Aerodynamics", "MATLAB"],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "3",
    title: "Ergonomic Surgical Tool",
    description: "Industrial design and mechanism development for a handheld laparoscopic surgical instrument.",
    tags: ["Medical Devices", "Injection Molding", "Human Factors"],
    imageUrl: "https://images.unsplash.com/photo-1583912267550-d41354005b74?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "4",
    title: "EV Battery Housing",
    description: "Thermal management and structural housing design for a liquid-cooled electric vehicle battery pack.",
    tags: ["Thermal Analysis", "Sheet Metal", "Automotive"],
    imageUrl: "https://images.unsplash.com/photo-1625244585141-860e67618218?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "5",
    title: "Hydraulic Press Frame",
    description: "FEA validation and structural design of a 50-ton hydraulic press frame.",
    tags: ["Structural Analysis", "Heavy Machinery", "Welding"],
    imageUrl: "https://images.unsplash.com/photo-1565514020126-787c800b6d91?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "6",
    title: "Consumer Drone Chassis",
    description: "Lightweight, injection-molded polycarbonate chassis for a consumer quadcopter.",
    tags: ["Plastics", "Mass Production", "SolidWorks"],
    imageUrl: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];