import { Component } from '@angular/core';
import { Image } from '../models/image';
import { ImgService } from '../services/img.service';
import { AddButtonComponent } from "../components/add-button/add-button.component";
import { ImgContainerComponent } from "../components/img-container/img-container.component";
import { NewimageFormComponent } from "../components/newimage-form/newimage-form.component";
import { DATOS } from '../models/datos';

@Component({
  selector: 'app-main',
  imports: [AddButtonComponent, ImgContainerComponent, NewimageFormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  newImageModalIs:number=1; /* Las imagenes se numeran desde 1 */
  imgArray:Image[]=DATOS; /* Arreglo donde guardar las imagenes */
  constructor(private imgService:ImgService){
    /* Estamos inyectando el uso del servicio */
  }
  /* metodo para inicializar el programa */
  ngOnInit():void{ 
    /* localStorage.clear() */
    this.imgArray=this.imgService.getImages(); /* obtenemos las imagenes del servicio y las guardamos en el arreglo del array y lo estamos actualizando */
  }   
}
