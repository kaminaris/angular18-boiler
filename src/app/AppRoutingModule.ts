import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./test-table-tree/TestTableTreeModule').then(m => m.TestTableTreeModule)
	}
];