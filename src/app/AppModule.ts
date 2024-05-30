import { NgModule }                    from '@angular/core';
import { BrowserModule }               from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { routes }                      from './AppRoutingModule';
import { AppComponent }                from './AppComponent';

@NgModule({
	imports: [BrowserModule, RouterModule.forRoot(routes)],
	declarations: [AppComponent],
	providers: [provideRouter(routes)],
	bootstrap: [AppComponent],
	exports: [RouterModule]
})
export class AppModule {

}