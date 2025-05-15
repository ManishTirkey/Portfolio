import { SkillCategoryData } from "./SkillsSection";
import { IconType } from "react-icons"; 
// logos

import {
  DockerOriginal,
  MysqlOriginalWordmark,
  Css3OriginalWordmark,
  DjangoPlainWordmark,
  MongodbOriginalWordmark,
  TypescriptOriginal,
  RaspberrypiOriginal,
  GitOriginalWordmark,
  GithubOriginalWordmark,
  GithubactionsOriginal,
  NodejsOriginalWordmark,
  JavascriptOriginal,

} from 'devicons-react'

import { FaReact } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { IoLogoElectron } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { VscVscode } from "react-icons/vsc";
import { SiJupyter } from "react-icons/si";
import { SiPycharm } from "react-icons/si";


export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillIcons{
  icon: IconType;
}


const skillCategories: SkillCategoryData[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C/C++", proficiency: 90 },
      { name: "Python", proficiency: 90 },
      { name: "Java", proficiency: 50 },
    ]
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "HTML/CSS", proficiency: 90 },
      { name: "JavaScript", proficiency: 70 },
      { name: "TypeScript", proficiency: 60 },
      { name: "React", proficiency: 70 },
      { name: "Django", proficiency: 70 },
    ]
  },
  {
    category: "Environments",
    skills: [
      { name: "Windows", proficiency: 100 },
      { name: "Linux", proficiency: 70 },
      { name: "MacOS", proficiency: 30 },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", proficiency: 60 },
      { name: "MongoDB", proficiency: 60 },
    ]
  }
];

export default skillCategories;


// icons and logos

const skills_icons: SkillIcons[] = [
  { icon: TbBrandCpp, },
  { icon: FaPython },
  { icon: JavascriptOriginal },

  { icon: TiHtml5, },
  { icon: Css3OriginalWordmark, },
  { icon: TypescriptOriginal, },

  { icon: DjangoPlainWordmark, },
  { icon: FaReact, },
  { icon: IoLogoElectron, },

  { icon: MysqlOriginalWordmark, },
  { icon: MongodbOriginalWordmark, },

  { icon: FcLinux },

  { icon: NodejsOriginalWordmark },

  // tootls
  { icon: VscVscode, },
  { icon: SiPycharm, },
  { icon: SiJupyter },
  { icon: DockerOriginal, },
  { icon: GitOriginalWordmark, },
  { icon: GithubOriginalWordmark, },
  { icon: GithubactionsOriginal, },
  { icon: RaspberrypiOriginal, },


];

export { skills_icons };