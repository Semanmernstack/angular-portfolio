import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { LayoutComponent } from '../pages/layout/layout.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { BookingComponent } from '../pages/booking/booking.component';
import { ItemComponent } from '../pages/item/item.component';
import { PortfolioComponent } from '../pages/portfolio/portfolio.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';

export const routes: Routes = [

    {
        path: "",
        redirectTo: "layout",
        pathMatch: 'full'
    },
   
     {
        path: "",
        component: LayoutComponent, 
     },
        
    {
        path: "dashboard",
        component: DashboardComponent

    },
    {
        path: "booking",
        component: BookingComponent
    },
    {
        path: "item",
        component: ItemComponent
    },
    {
        path: "portfolio",
        component: PortfolioComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
        
        
    

];
