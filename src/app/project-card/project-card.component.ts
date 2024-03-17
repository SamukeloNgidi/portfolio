import { Component, Input } from '@angular/core';
import { Project } from '../_models/project';
//import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  //define inputs to components
  @Input() project = {} as Project;
  /*bsModalRef?: BsModalRef; //serves a reference to the model

  constructor(private modalService: BsModalService) {
  }

  openProjectModal() {
    this.bsModalRef = this.modalService.show('');
  }*/

  openProjectModal() {
    const modalDiv = document.getElementById('staticBackdrop');
    if(modalDiv != null){
      modalDiv.style.display = 'block';
    }
  }

}
