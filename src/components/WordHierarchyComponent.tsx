"use client";
import React from "react";
import { useWordHierarchyController } from "@/controllers/WordHierarchyController";
import WordNodeComponent from "./WordNodeComponent";

// Componente principal da hierarquia de palavras
const WordHierarchyComponent: React.FC = () => {
  // Obtém funções e dados do controlador de hierarquia de palavras
  const { hierarchy, addNode, handleNameChange, removeNode, saveHierarchy } =
    useWordHierarchyController();

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

      {/* Componente para renderizar o nó da hierarquia */}
      <WordNodeComponent
        node={hierarchy}
        parent={null}
        level={0}
        addNode={addNode}
        handleNameChange={handleNameChange}
        removeNode={removeNode}
      />
    </div>
  );
};

export default WordHierarchyComponent;