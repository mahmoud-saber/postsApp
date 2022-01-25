import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfases/userinterface';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
allUsers:Users[]=[]
  constructor(private userservice:UserserviceService) { }
  getData(){
    this.allUsers = this.userservice.getUsers()
  }

  ngOnInit(): void {
    this.getData()
  }

}
