import { Component } from "@angular/core";
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
  Validator,
  FormControl,
  FormGroup
} from "@angular/forms";
import { ProfileService } from "./profile.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "crud";
  users;
  usr = "";
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {}
  profileForm = this.fb.group({
    firstName: [""],
    lastName: [""]
  });
  deleteForm = this.fb.group({
    delete: [""]
  });

  updateForm = this.fb.group({
    id: [""],
    first: [""],
    last: [""]
  });
  register() {
    let data = this.profileForm.value;

    this.profileService.getData(data).subscribe(da => {
      console.log("got result: " + da);
    });
  }

  getUser() {
    this.profileService.getUser().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  deleteUser() {
    this.usr = this.deleteForm.controls.delete.value;
    let a = this.usr.split(",");
    console.log(a);
    let u = a;
    this.profileService.deleteUser(u).subscribe(data => {
      // console.log(data);
    });
  }
  updateUser() {
    let data = this.updateForm.value;

    this.profileService.updateUser(data).subscribe(da => {
      console.log("got result: " + da);
    });
  }
}
