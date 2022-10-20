import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent},
  { path: 'post', loadChildren: () => import('../post/post.module').then(m => m.PostModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }