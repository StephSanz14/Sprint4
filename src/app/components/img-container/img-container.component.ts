import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from '../../models/image';
import { ImgService } from '../../services/img.service';

@Component({
  selector: 'app-img-container',
  imports: [],
  templateUrl: './img-container.component.html',
  styleUrl: './img-container.component.css'
})
export class ImgContainerComponent { 
  @Input() images!:Image[] /* recibe datos de su padre main */
  @Output() reloadImgs = new EventEmitter <void>; /* avisa que se elimino */ 

  constructor(private imgService:ImgService){} /* Inyectamos el servicio y sus funciones */

  deleteImage(id:number){
    this.imgService.deleteImageByID(id);
    this.reloadImgs.emit()
  }

}
