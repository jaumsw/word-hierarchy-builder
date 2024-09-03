import { WordNode } from '@/model/WordNode';
import { useState } from 'react';

export const useWordHierarchyController = () => {
  const [hierarchy, setHierarchy] = useState<WordNode>({ name: '', children: [] });

  const addNode = (parent: WordNode, hasChildren: boolean) => {
    const newNode: WordNode = hasChildren ? { name: '', children: [] } : { name: '' };
    if (parent.children) {
      parent.children.push(newNode);
      setHierarchy({ ...hierarchy });
    }
  };

  const handleNameChange = (node: WordNode, name: string) => {
    node.name = name;
    setHierarchy({ ...hierarchy });
  };

  const removeNode = (parent: WordNode, nodeToRemove: WordNode) => {
    if (parent.children) {
      parent.children = parent.children.filter(node => node !== nodeToRemove);
      setHierarchy({ ...hierarchy });
    }
  };

  const saveHierarchy = () => {
    const json = JSON.stringify(hierarchy, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hierarchy.json';
    a.click();
  };

  return {
    hierarchy,
    addNode,
    handleNameChange,
    removeNode,
    saveHierarchy,
  };
};