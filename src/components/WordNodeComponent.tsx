import React from "react";
import { WordNode } from "@/model/WordNode";

// Define as propriedades esperadas pelo componente WordNodeComponent
interface WordNodeComponentProps {
  node: WordNode; // Nó atual da hierarquia
  parent: WordNode | null; // Nó pai, ou null se for a raiz
  level: number; // Nível de profundidade do nó na hierarquia
  addNode: (node: WordNode, isChild: boolean) => void; // Função para adicionar um novo nó
  handleNameChange: (node: WordNode, newName: string) => void; // Função para alterar o nome do nó
  removeNode: (parent: WordNode, node: WordNode) => void; // Função para remover um nó
}

// Componente para renderizar um nó da hierarquia de palavras
const WordNodeComponent: React.FC<WordNodeComponentProps> = ({
  node,
  parent,
  level,
  addNode,
  handleNameChange,
  removeNode
}) => (
  <div
    className={`flex flex-col ml-${level * 6} mt-2 p-4 border-l-4 ${
      level % 2 === 0 ? "border-blue-400" : "border-green-400"
    }`}
  >
    <div className="flex flex-row items-center space-x-3">
      {/* Campo de entrada para o nome do nó */}
      <input
        type="text"
        value={node.name}
        onChange={(e) => handleNameChange(node, e.target.value)}
        className="border text-black p-2 rounded-md shadow-sm focus:outline-none w-full"
        placeholder="Nome"
      />
      {/* Botão para adicionar um nó filho */}
      <button
        onClick={() => addNode(node, true)}
        className="p-2 bg-green-600 shadow-md text-white font-semibold rounded-md hover:bg-green-700 transition-transform transform hover:scale-105"
        aria-label="Adicionar nó filho"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      {/* Botão para adicionar um nó irmão */}
      <button
        onClick={() => addNode(node, false)}
        className="p-2 bg-blue-600 shadow-md text-white font-semibold rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
        aria-label="Adicionar nó irmão"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      {/* Botão para remover o nó, visível apenas se houver um nó pai */}
      {parent && (
        <button
          onClick={() => removeNode(parent, node)}
          className="p-2 bg-red-600 shadow-md text-white font-semibold rounded-md hover:bg-red-700 transition-transform transform hover:scale-105"
          aria-label="Remover nó"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
    {/* Renderiza os nós filhos recursivamente */}
    {node.children &&
      node.children.map((child, index) => (
        <div key={index} className="ml-4">
          <WordNodeComponent
            node={child}
            parent={node}
            level={level + 1}
            addNode={addNode}
            handleNameChange={handleNameChange}
            removeNode={removeNode}
          />
        </div>
      ))}
  </div>
);

export default WordNodeComponent;