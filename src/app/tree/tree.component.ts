import { Component, OnInit } from '@angular/core';
import {TreeDataService} from '../tree-data.service'


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
	posts : any = []

  constructor(private TreeDataService: TreeDataService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.TreeDataService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts)
    });
}

}
