import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/interfases/postinterface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-singlpost',
  templateUrl: './singlpost.component.html',
  styleUrls: ['./singlpost.component.css']
})
export class SinglpostComponent implements OnInit {
post:Posts = {}
  constructor(private postsService:PostsService,private rout:ActivatedRoute) { }
   id:string = this.rout.snapshot.params['id']
   getSinPost(){
     this.postsService.getSinglePost(this.id).subscribe({
       next:(res:any)=>{
        console.log(res)
        this.post = res
       },
       error:(error:any)=>{
         console.log(error)
       }
     })

   }

  ngOnInit(): void {
    this. getSinPost()
  }

}
