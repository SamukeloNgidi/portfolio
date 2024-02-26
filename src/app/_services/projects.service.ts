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
    {id: 0, name: 'Todo List App', summary: 'An Angular Todo List App', description: '', projectLink: 'https://github.com/SamukeloNgidi/todo-list', pictures: [], tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id: 1, name: 'Portfolio App', summary: 'An Angular Personal Portfolio App', description: '', projectLink: 'https://github.com/SamukeloNgidi/portfolio', pictures: [], tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id: 2, name: 'SpringBoot-RESTful-API-CRUD', summary: 'RESTful API with Spring Boot', description: '', projectLink: 'https://github.com/SamukeloNgidi/SpringBoot-RESTful-API-CRUD', pictures: [], tags: [Tag.JAVA, Tag.SPRINGBOOT]}
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
