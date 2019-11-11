import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName = 'puppie';
  petImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrqUu7GATOmqjwI5feeM4CvzrS6NsAR-itgvgwILQuYYvWt1Y&s';
  constructor() { }

  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }

  ngOnInit() {
  }

}
