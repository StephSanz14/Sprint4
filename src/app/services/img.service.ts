import { Injectable } from '@angular/core';
import { Image } from '../models/image';
import { DATOS } from '../models/datos';

@Injectable({
  providedIn: 'root'
})

/* Recupera y/o almacena los datos de la imagen en el local store */
export class ImgService {
private storageKey = 'images';
  constructor() { }

  /* creamos nuestras funciones */
  getImages():Image[]{
    const storedImages = localStorage.getItem(this.storageKey);
    let images:Image[]=DATOS;
    if(storedImages){
      images =JSON.parse(storedImages) as Image[];
    }
    return images; /* regresamos un vector con todas las imagenes guardadas en el localstorage */
  } 

  saveImage(name:string, src:string):void{
    let images=this.getImages();
    const newImage: Image={
      id_image: images.length>0 ? images[images.length-1].id_image+1:1,name,src
    };
    images.push(newImage)
    localStorage.setItem(this.storageKey,JSON.stringify(images));
  }

  deleteImageByID(id_image:number):void{
    let images=this.getImages();
    images=images.filter(img=>img.id_image!==id_image)
    localStorage.setItem(this.storageKey, JSON.stringify(images));
  }
}
