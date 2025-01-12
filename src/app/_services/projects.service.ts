import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  //services are generally for fetching data from an API endpoints, then supply that data to components to use
  //in this case I am just fectching the data from this array below
  projects: Project [] = [
    { id: 0, 
      name: 'Todo List App', 
      summary: 'An Angular Todo List App', 
      description: 'An application that helps you stay organised. You write all your tasks in a list, which makes them more manageable. When you complete a task, you can cross it off your list.', 
      projectLink: 'https://github.com/SamukeloNgidi/todo-list', 
      pictures: ["../../assets/portfolio-icon.png"], 
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    
    { id: 1, 
      name: 'Portfolio App', 
      summary: 'An Angular Personal Portfolio App', 
      description: 'An application that presents your work to potential employers and display the skills that qualify you for a position.', 
      projectLink: 'https://github.com/SamukeloNgidi/portfolio', 
      pictures: ["../../assets/portfolio-icon.png"], 
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    
    { id: 2, 
      name: 'Quiz App', 
      summary: 'React Quiz App', 
      description: 'A react quiz app that allows you to take a quiz, see correct and incorrect answers, and gives you the total score.', 
      projectLink: 'https://github.com/SamukeloNgidi/quiz-app', 
      pictures: ["../../assets/portfolio-icon.png"], 
      tags: [Tag.REACT, Tag.JSX]},

      { id: 3, 
        name: 'SpringBoot-RESTful-API-CRUD', 
        summary: 'RESTful API with Spring Boot', 
        description: 'A Representational State Transfer Application Programming Interface in Spring Boot to expose functionalities of your application over HTTP, following the principles of REST.', 
        projectLink: 'https://github.com/SamukeloNgidi/SpringBoot-RESTful-API-CRUD', 
        pictures: ["../../assets/portfolio-icon.png"], 
        tags: [Tag.JAVA, Tag.SPRINGBOOT]}
  ];
  
  constructor() { }

  getAllProjects() {
    return this.projects;
  }

  getProjectById(id: number): Project {
    let project = this.projects.find(project => project?.id === id);
    
    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id)
    }

    return project;
  }
}
