import { BuildTool } from '../types';

const renderTools = async (tools: BuildTool[]) => {
  const { default: _ } = await import('lodash'); // dynamically load lodash

  const toolsGrid = document.getElementById('tools-grid') as HTMLDivElement;

  toolsGrid.innerHTML = _.join(
    tools.map(
      (tool) => `
      <div class="tool-card">
        <div class="header">
          <img src="${tool.logo}" alt="${tool.name} logo" class="tool-logo">
          <span class="category">${tool.category}</span>
        </div>
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
        <a href="${tool.website}" target="_blank" rel="noopener noreferrer">Learn More →</a>
      </div>
    `
    ),
    ''
  );
};

export { renderTools };
