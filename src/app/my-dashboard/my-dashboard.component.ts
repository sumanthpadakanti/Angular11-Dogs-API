import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { DogsService } from './dogs.service';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent {
  allBreeds: any;
  selectedBreed:string;
  selectedSubBreed:string = '';
  subBreeds: any;
  disable: boolean;
  
constructor(private dogsService: DogsService) {}
public cards = [];
public breeds: Array<string>;

ngOnInit() {
  this.disable = true;
  this.getAllBreedsList();
}
  
getAllBreedsList() {
   this.dogsService.getAllBreeds().subscribe(
     data => {
      this.allBreeds = data.message; 
      this.breeds = Object.keys(data.message);
      console.log(this.breeds);
    },
    err => {
      console.log('error');
    }
   )}; 

   selectBreed(selectedBreed: string) {
    console.log(selectedBreed);
    this.cards = [];
    this.selectedBreed = selectedBreed;
    if(this.allBreeds[selectedBreed].length > 0) {
      this.cards = [];
      this.subBreeds = Object.values(this.allBreeds[selectedBreed]);
      this.disable = true;
    }else {
      this.subBreeds = '';
      this.selectedSubBreed = '';
      this.disable = false;
    }  
 }
  selectSubBreed(subbreed) {
    if(subbreed) {
      this.disable = false;
    }
  }

 getBreeds(breed, subbreed?) {
   if(subbreed == '') {
    this.selectBreed(breed);
    this.getRandomPics(breed, 5);
   }else {
    this.getRandomPics(breed+'/'+subbreed, 5);
   }
 }

 addBreed(breed, subbreed?) {
  if(subbreed) { 
    this.getRandomPics(breed+'/'+subbreed, 1);
  }else {
    this.getRandomPics(breed, 1);
  }
 }

 getRandomPics(breed, count) {
   if(count == 5) {
    this.cards = [];
   }  
   this.dogsService.getRandomPics(breed, count).subscribe(
    data => {
      const randomPics = data.message;
      for (var i = 0; i < randomPics.length; i++) {
      for (let picture of randomPics) {
        this.cards.push({
          id: i++,
          pic: picture,
          likes: 0
        });
      }
    }
    },
    err => {
      console.log('error');
    },
    () => {
      console.log('complete');
    }
  )};

   count(card:any) {
    for (var x in this.cards) {
      if (this.cards[x] === card) {
      this.cards[x].likes = this.cards[x].likes + 1;
      console.log(this.cards[x]);
      }
    }
  }

  closeCard(card) {
    console.log(card);
    console.log('before', this.cards);
    this.cards = this.cards.filter(item => item.id !== card.id);
    console.log(this.cards);
  }
}
