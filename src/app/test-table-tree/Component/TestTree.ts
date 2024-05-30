import { Component } from '@angular/core';
import { TreeNode }  from 'primeng/api';

@Component({
	templateUrl: 'TestTree.html'
})
export class TestTree {
	files: TreeNode<any>[] = [
		{
			data: { name: 'main', size: '1kb', type: 'string' },
			expanded: true,
			children: [
				{ data: { name: 't1', size: '1kb', type: 'string' } },
				{ data: { name: 't2', size: '1kb', type: 'string' } },
				{ data: { name: 't3', size: '1kb', type: 'string' } },
				{ data: { name: 't4', size: '1kb', type: 'string' } }
			]
		}
	];

	currentDragNode: any;

	dragStart(rowNode: any) {
		console.log('dragStart', rowNode);
		this.currentDragNode = rowNode;
	}

	dragEnd() {

	}

	drop(rowNode: any, $event: any) {
		if (this.currentDragNode) {
			console.log('trying to drop', this.currentDragNode, 'to', rowNode);

			// making copy of data
			const newTree = structuredClone(this.files);

			const sourceName = this.currentDragNode.node.data.name;
			const targetName = rowNode.node.data.name;
			console.log('finding node', sourceName, targetName);

			// Source is the one we are moving
			const sourceNode = this.search(newTree, sourceName, null);
			// Target is the one we dropped onto
			const targetNode = this.search(newTree, targetName, null);
			console.log(sourceNode, targetNode);

			// remove it from source
			const sourceIdx = sourceNode.parent?.children?.indexOf(sourceNode.node!);
			console.log('Source index', sourceIdx);
			if (sourceIdx != undefined) {
				targetNode.parent?.children?.splice(sourceIdx, 1);
				console.log(targetNode.parent?.children);
			}

			// // to drop after
			const idx = targetNode.parent?.children?.indexOf(targetNode.node!);
			console.log('Target index', idx);
			if (idx != undefined) {
				// +1 is after, 0 is before
				targetNode.parent?.children?.splice(idx+1, 0, sourceNode.node!);
			}
			console.log(newTree);
			// console.log(idx);
			// rowNode.parent.children.push(this.currentDragNode);
			// some fancy shmancy calculations if we gonna drop it inside or besides
			console.log($event);

			//At the end, replace source
			this.files = newTree;
		}
	}

	search(nodes: TreeNode<any>[], nodeName: string, parent: TreeNode<any> | null): {
		node: TreeNode<any> | null,
		parent: TreeNode<any> | null
	} {
		for (let node of nodes) {
			if (node.data?.name === nodeName) {
				return { node, parent };
			}
			if (node.children) {
				const result = this.search(node.children, nodeName, node);
				if (result.node) {
					return result;
				}
			}
		}
		return { node: null, parent: null };
	}
}