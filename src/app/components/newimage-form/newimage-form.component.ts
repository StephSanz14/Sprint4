import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImgService } from '../../services/img.service';
declare var $:any;

@Component({
  selector: 'app-newimage-form',
  imports: [],
  templateUrl: './newimage-form.component.html',
  styleUrl: './newimage-form.component.css'
})
export class NewimageFormComponent {
  @Input() modalID!:number;
  imgUrl:string | null='';
  imageName:string='';
  @Output() reloadImg=new EventEmitter<void>

  constructor(private imgService:ImgService){}

  /* definimos los m'etodos */
  onFileSelected(event:any){
    const file =event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imgUrl = reader.result as string;
        this.imageName = file.name;
      };
      reader.readAsDataURL(file);
    }
  }

  saveImage(){
    if(!this.imgUrl || !this.imageName){
      alert('Selecciona una imagen antes de guardar.');
      return;
    }
    this.imgService.saveImage(this.imageName, this.imgUrl);
    this.loadImages();
    this.imgUrl=null;
    this.imageName='';
    
    $(`#${this.modalID}`).modal('hide');
  }

  loadImages(){
    this.reloadImg.emit();
  }

}
