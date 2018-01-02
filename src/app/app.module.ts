import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {SocialMediaComponent} from './social-media/social-media.component';
import {SwitchesComponent} from './switches/switches.component';
import {BankTextComponent} from './bank-text/bank-text.component';
import {PageNameComponent} from './page-name/page-name.component';
import {FooterComponent} from './footer/footer.component';
import {FormComponent} from './form/form.component';
import {ContactComponent} from './contact/contact.component';
import {GeneralComponent} from './general/general.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {CatalogComponent} from './catalog/catalog.component';
import {KitchenComponent} from './kitchen/kitchen.component';
import {ContactsComponent} from './contacts/contacts.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {EffetiComponent} from './effeti/effeti.component';
import { CabinetsComponent } from './cabinets/cabinets.component';
import { FooterLessComponent } from './footer-less/footer-less.component';
import { SocialMedia2Component } from './social-media-2/social-media-2.component';
import { Footer2Component } from './footer-2/footer-2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SocialMediaComponent,
    SwitchesComponent,
    BankTextComponent,
    PageNameComponent,
    FooterComponent,
    FormComponent,
    ContactComponent,
    GeneralComponent,
    AboutUsComponent,
    CatalogComponent,
    KitchenComponent,
    ContactsComponent,
    EffetiComponent,
    CabinetsComponent,
    FooterLessComponent,
    SocialMedia2Component,
    Footer2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: '',
        redirectTo: 'home',
        pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'aboutUs',
        component: AboutUsComponent
      },
      {
        path: 'catalog',
        component: CatalogComponent,
        children: [
          { path: '',
            redirectTo: 'kitchens',
            pathMatch: 'full'},
          { path: 'kitchens', component: KitchenComponent},
          { path: 'cabinets', component: CabinetsComponent}
        ]
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path: 'kitchens',
        component: KitchenComponent
      },
      {
        path: 'effeti',
        component: EffetiComponent
      },
      {
        path: 'catalog/kitchens',
        component: KitchenComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
