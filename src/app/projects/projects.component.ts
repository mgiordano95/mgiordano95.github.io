import { Component, OnInit } from '@angular/core';

import toolsData from "src/app/_json/tools.json";
import projectsData from "src/app/_json/projects.json";
import collaborativeProjectsData from "src/app/_json/collaborative-projects.json";

interface Projects {
  id: string,
  name: string;
  description: string;
  repository: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  tools: Projects[] = toolsData;
  projects: Projects[] = projectsData;
  collaborativeProjects: Projects[] = collaborativeProjectsData;
  
  ngOnInit() {
    
  }
  

}
