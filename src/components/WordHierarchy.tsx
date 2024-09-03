"use client";
import React from "react";
import { useWordHierarchyController } from "@/controllers/WordHierarchyController";
import { WordNode } from "@/model/WordNode";

// Componente principal da hierarquia de palavras
const WordHierarchy: React.FC = () => {
  // Obtém funções e dados do controlador de hierarquia de palavras
  const { hierarchy, addNode, handleNameChange, removeNode, saveHierarchy } =
    useWordHierarchyController();

  // Função para renderizar um nó da hierarquia
  const renderNode = (
    node: WordNode,
    parent: WordNode | null = null,
    level: number = 0
  ) => (
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
        {/* Botão para remover um nó, visível apenas se houver um nó pai */}
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
            {renderNode(child, node, level + 1)}
          </div>
        ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-gray-800 text-3xl font-bold">Word Hierarchy</h1>
        {/* Botão para salvar a hierarquia */}
        <button
          onClick={saveHierarchy}
          className="p-2 bg-green-600 shadow-md text-white font-semibold rounded-md hover:bg-green-700 transition-transform transform hover:scale-105"
          aria-label="Salvar Hierarquia"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
            />
          </svg>
        </button>
      </div>

      {/* Renderiza a hierarquia de palavras */}
      {renderNode(hierarchy)}
    </div>
  );
};

export default WordHierarchy;