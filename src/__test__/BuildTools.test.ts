import { renderTools } from '../components/BuildTools';
import _ from 'lodash';

describe('BuildTools', () => {
  beforeEach(() => {
    // Create a mock tools grid element
    document.body.innerHTML = '<div id="tools-grid"></div>';
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('renderTools renders tools correctly', () => {
    const mockTools = [
      {
        name: 'Test Tool',
        description: 'Test Description',
        website: 'https://test.com',
        logo: 'test-logo.png',
        category: 'Test Category',
      },
    ];

    renderTools(mockTools);

    const toolsGrid = document.getElementById('tools-grid');

    expect(toolsGrid).toContainHTML('Test Tool');
    expect(toolsGrid).toContainHTML('Test Description');
    expect(toolsGrid).toContainHTML('Test Category');
    expect(toolsGrid).toContainHTML('https://test.com');
    expect(toolsGrid).toContainHTML('test-logo.png');
  });

  test('renderTools handles empty tools array', () => {
    renderTools([]);

    const toolsGrid = document.getElementById('tools-grid');
    expect(toolsGrid?.innerHTML).toBe('');
  });
});
