import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class TODOAPPComponent {
  list: any[] = [];
  errorMessage: string = '';

  addTask(
    Firstname: string,
    lastname: string,
    email: string,
    country: string,
    phoneNumber: any
  ) {
    if (!Firstname || Firstname.trim().length === 0) {
      this.errorMessage = 'First name is required.';
      return;
    } else {
      this.errorMessage = '';
    }
    if (!lastname || lastname.trim().length === 0) {
      this.errorMessage = 'Last name is required.';
      return;
    } else {
      this.errorMessage = '';
    }

    phoneNumber.length < 10
      ? (this.errorMessage = 'Phone numbere is not valid.')
      : null;
    // if (phoneNumber.length<10 ) {
    //   this.errorMessage = 'Phone numbere is not valid.';
    //   return;
    // } else {
    //   this.errorMessage = '';
    // }

    this.list.push({ id: this.list.length, Firstname, lastname, email,country,phoneNumber });
    console.log(this.list);
  }
  removeTask(id: number) {
    console.log(id);
    this.list = this.list.filter((item) => item.id !== id);
  }
  removeAll() {
    this.list = [];
  }

  editTask(item: any) {
    item.editing = true;
    item.updatedFirstname = item.Firstname;
    item.updatedLastname = item.lastname;
    item.updatedEmail = item.email;
    item.updatedCountry=item.country
    item.updatedPhoneNumber=item.phoneNumber
  }

  saveTask(item: any) {
    item.Firstname = item.updatedFirstname;
    item.lastname = item.updatedLastname;
    item.email = item.updatedEmail;
    item.country= item.updatedCountry
    item.phoneNumber=item.updatedPhoneNumber
    item.editing = false;
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Todo-App';
// }
