import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'class',
    loadChildren: () => import('./class/class.module').then( m => m.ClassPageModule)
  },
  {
    path: 'subject/:id',
    loadChildren: () => import('./subject/subject.module').then( m => m.SubjectPageModule)
  },
  {
    path: 'chapter/:subjectid',
    loadChildren: () => import('./chapter/chapter.module').then( m => m.ChapterPageModule)
  },
  {
    path: 'questions/:chapterid',
    loadChildren: () => import('./questions/questions.module').then( m => m.QuestionsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'mcq-result-modal',
    loadChildren: () => import('./mcq-result-modal/mcq-result-modal.module').then( m => m.McqResultModalPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
