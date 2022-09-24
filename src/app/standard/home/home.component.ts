import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [  
    { img: "../assets/images/1.jpeg" },  
    { img: "../assets/images/2.jpeg" },  
    { img: "../assets/images/3.jpeg" },  
    { img: "../assets/images/4.jpg" }
  ];  
  
  slideConfig = {  
    "slidesToShow": 2,  
    "slidesToScroll": 2,  
    "dots": true,  
    "infinite": true , 
    "autoplay" :true,
    "autoplaySpeed":800

    
  };  

  constructor() { }

  ngOnInit(): void {
  }

}
