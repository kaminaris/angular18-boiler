import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { RouterModule, Routes }    from '@angular/router';
import { TreeTableModule }         from 'primeng/treetable';
import { TestTree }                from './Component/TestTree';
import { DragDropModule } from 'primeng/dragdrop';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
	{ path: 'home', component: TestTree }
];

@NgModule({
	declarations: [
		TestTree
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		TreeTableModule,
		DragDropModule
	]
})
export class TestTableTreeModule {
}
