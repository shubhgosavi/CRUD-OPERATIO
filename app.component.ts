<div class="row">
  <div class="col-md-3"></div>
  <div class="col-md-6">
    <form [formGroup]="profileForm">
      
<table style="width:100%">
  <tr>    
 <th> <label
        >First Name:
        <input type="text" formControlName="firstName" />
      </label>
      <label
        >Last Name:
        <input type="text" formControlName="lastName" />
      </label>


      <button (click)="register()" class="btn btn-primary">Create</button></th></tr></table>
    </form>
   

   <th> <button (click)="getUser()" class="btn btn-primary">Show User</button>
    <li *ngFor="let user of users">
      {{ user.user_id }}{{ " " }} {{ user.firstName }}{{ " "
      }}{{ user.lastName }}
    </li>
    <div>
      <form [formGroup]="deleteForm">
        <input type="text" formControlName="delete" />
        <button (click)="deleteUser()" class="btn btn-primary">
          DeleteUser
        </button>
      </form>
      <div>
        <form [formGroup]="updateForm">
                <table style="width:100%">
                  <tr>
                    <th>
          <label
            >user_id:
            <input type="text" formControlName="id" />
          </label></th><th>
          <label
            >First Name:
            <input type="text" formControlName="first" />
          </label></th>
         <th> <label
            >Last Name:
            <input type="text" formControlName="last" />
          </label></th>
        <th>  <button (click)="updateUser()" class="btn btn-primary">
            update
          </button></th></tr></table>
        </form>
      </div>
    </div>
  </div>
</div>

