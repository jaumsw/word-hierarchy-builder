import { WordNode } from '@/model/WordNode';
import { useState } from 'react';

// Hook personalizado para controlar a hierarquia de palavras
export const useWordHierarchyController = () => {
  // Estado inicial da hierarquia de palavras
  const [hierarchy, setHierarchy] = useState<WordNode>({ name: '', children: [] });

  // Função para adicionar um novo nó à hierarquia
  const addNode = (parent: WordNode, hasChildren: boolean) => {
    // Cria um novo nó, com ou sem filhos
    const newNode: WordNode = hasChildren ? { name: '', children: [] } : { name: '' };
    // Adiciona o novo nó aos filhos do nó pai
    if (parent.children) {
      parent.children.push(newNode);
      // Atualiza o estado da hierarquia
      setHierarchy({ ...hierarchy });
    }
  };

  // Função para alterar o nome de um nó
  const handleNameChange = (node: WordNode, name: string) => {
    // Atualiza o nome do nó
    node.name = name;
    // Atualiza o estado da hierarquia
    setHierarchy({ ...hierarchy });
  };

  // Função para remover um nó da hierarquia
  const removeNode = (parent: WordNode, nodeToRemove: WordNode) => {
    // Remove o nó especificado dos filhos do nó pai
    if (parent.children) {
      parent.children = parent.children.filter(node => node !== nodeToRemove);
      // Atualiza o estado da hierarquia
      setHierarchy({ ...hierarchy });
    }
  };

  // Função para salvar a hierarquia como um arquivo JSON
  const saveHierarchy = () => {
    // Converte a hierarquia para JSON
    const json = JSON.stringify(hierarchy, null, 2);
    // Cria um blob a partir do JSON
    const blob = new Blob([json], { type: 'application/json' });
    // Cria uma URL para o blob
    const url = URL.createObjectURL(blob);
    // Cria um elemento de link para download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hierarchy.json';
    // Simula um clique no link para iniciar o download
    a.click();
  };

  // Retorna as funções e dados do controlador de hierarquia de palavras
  return {
    hierarchy,
    addNode,
    handleNameChange,
    removeNode,
    saveHierarchy,
  };
};