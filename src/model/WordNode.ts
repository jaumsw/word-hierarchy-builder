// Define a interface WordNode, que representa um nó na hierarquia de palavras
export interface WordNode {
  // Nome do nó
  name: string;
  // Lista opcional de nós filhos
  children?: WordNode[];
}