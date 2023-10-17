import React from "react";
import ProjectList from "./ProjectList";

const Project = () => {
  const data = [
    {
      name: "Chess Forum",
      des: "a specialized forum where users can make posts, chatting in real-time,create discussions for other users to respond to, and manage their data in a personalprofile.",
      projectLink: "https://github.com/YuriiDorosh/chess-forum",
      techUsed: [
        {
            techname: "Python",
        },
        {
          techname: "Django",
        },
        {
            techname: "Django Channels",
        },
        {
          techname: "PostgreSQL",
        },
        {
          techname: "Docker",
        },
        {
            techname: "Celery",
        },
        {
            techname: "Redis",
          },
      ],
    },
    {
      name: "Linux System Monitor",
      des: "a program for monitoring systemresources, including CPU and GPU load, CPU and GPU frequency, available RAM,available disk space, and, if run on a laptop, battery charge.",
      projectLink: "https://github.com/YuriiDorosh/Linux-system-monitor",
      techUsed: [
        {
          techname: "Python",
        },
        {
          techname: "Tkinter/CustomTkinter",
        },
        {
          techname: "Psutil",
        },
      ],
    },
    {
      name: "Django A.I.",
      des: "a specialized chatGPT clone that uses davinci-003 with the ability to save requests and distribute them",
      projectLink: "https://github.com/YuriiDorosh/Django-AI-site",
      techUsed: [
        {
          techname: "Python",
        },
        {
          techname: "Django",
        },
        {
          techname: "PostgreSQL",
        },
        {
            techname: "Docker",
        },
      ],
    },
    {
      name: "Markdown Viewer",
      des: "a simple GTK-based application to view Markdown files",
      projectLink: "https://github.com/YuriiDorosh/markdown-viewer",
      techUsed: [
        {
          techname: "C",
        },
        {
          techname: "GTK",
        },
        {
          techname: "cmark",
        },
      ],
    },
    {
      name: "Work.ua Parser",
      des: "a Python script for parsing job vacancies from the Work.ua website",
      projectLink: "https://github.com/YuriiDorosh/Work.ua-parser",
      techUsed: [
        {
          techname: "Python",
        },
        {
          techname: "BeautifulSoup4",
        },
        {
          techname: "requests",
        },
      ],
    },
    {
      name: "New Words Telegram Bot",
      des: "This Telegram bot is designed to assist in learning new words. It's a valuable tool for language learning, term memorization, and more",
      projectLink: "https://github.com/YuriiDorosh/new-words-telegram-bot",
      techUsed: [
        {
          techname: "JavaScript",
        },
        {
          techname: "Node Js",
        },
        {
          techname: "SQLite",
        },
        {
            techname: "Docker",
        },
      ],
    },
  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            {/* <ProjectList name={item.name} /> */}
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;