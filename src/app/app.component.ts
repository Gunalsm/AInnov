// import { Component } from '@angular/core';
// import { AppService } from './app.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   // Define a property to control the menu visibility
  // isMenuOpen: boolean = false;
//   question: string = '';
//   answer: string = '';


//   constructor(private appService: AppService) {}
  // // Define the toggleMenu function to change the value of isMenuOpen
  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }


 

  

//   sendMessage() {
//     if (this.question) {
//       this.appService.sendMessage(this.question).subscribe(
//         (response: any) => {
//           this.answer = response.answer;
//           // Handle the response as needed
//         },
//         (error) => {
//           console.error('Error:', error);
//           // Handle the error as needed
//         }
//       );
//     }
//   }
// }


import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpen: boolean = false;
  question: string = '';
  chatMessages: any[] = [];
  loading: boolean = false;
  thumbsUpCount: number = 0;
  thumbsDownCount: number = 0;

  constructor(private appService: AppService) {}

    // Define the toggleMenu function to change the value of isMenuOpen
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
     // Handle the thumbs-up click
  handleThumbsUpClick(message: any) {
    // Check if it's the first message
    if (message.isUserMessage) {
      // Increment the thumbs-up count
      this.thumbsUpCount++;
    }
  }

  // Handle the thumbs-down click
  handleThumbsDownClick(message: any) {
    // Check if it's the first message
    if (message.isUserMessage) {
      // Increment the thumbs-down count
      this.thumbsDownCount++;
    }
  }

    sendMessage() {
      if (this.question) {

        // Clear the chatMessages array
        this.chatMessages = [];

        this.loading = true;
        // Send user message to the backend
        this.appService.sendQuestion(this.question).subscribe((response: any) => {

          this.loading = false;

          // Add bot response to chat
          this.chatMessages.push({ text: response.answer, isUserMessage: false });
    
          // Clear the input field
          this.question = '';
        });
      }
    }
    
    // sendMessage() {
    //   if (this.question) {
        // // Clear the chatMessages array
        // this.chatMessages = [];
    
    //     // Send user message
    //     this.chatMessages.push({ text: this.question, isUserMessage: true });
    
    //     this.appService.sendQuestion(this.question).subscribe((response: any) => {
    //       // Add bot response to chat
    //       this.chatMessages.push({ text: response.answer, isUserMessage: false });
    
    //       // Clear the input field
    //       this.question = '';
    //     });
    //   }
    // }
    
    
}
