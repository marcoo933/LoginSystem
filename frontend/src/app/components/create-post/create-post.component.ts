import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Post } from 'src/app/models/Post';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  @ViewChild("formDirective") formDirective: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();
  form: FormGroup;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl("", [Validators.required, Validators.minLength(5)]),
      body: new FormControl("", [Validators.required, Validators.minLength(10)]),
    })
  }

  onSubmit(formData: Pick<Post, "title" | "body">): void {
    console.log(formData);
    this.create.emit(null);
    this.form.reset();
    this.formDirective.resetForm();
  }

}
