import { 
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit
} from '@angular/core';

import { AuthentificationService } from '../service/authentification.service';
import { UserPattern } from '../model/user-pattern';

@Directive({
  selector: '[appCanEdit]'
})
export class CanEditDirective {

  @Input('appCanEdit') targetUser!: UserPattern

  constructor( private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
    
    if(!this.targetUser) return 

    this.authentificationService.getCurrentUser()
    .subscribe(user => {
      if(!user?.id || !this.targetUser?.id){
        console.warn("Les données ne sont pas prêtes")
        this.viewContainer.clear();
        return;
      }
  
      const canEdit = user && user.id === this.targetUser.id && user.role === this.targetUser.role;

      if(canEdit){
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    })
  }
}