import { renderTools } from '../components/BuildTools';

describe('BuildTools', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="tools-grid"></div>';
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('renderTools renders tools correctly', async () => {
    const mockTools = [
      {
        name: 'Test Tool',
        description: 'Test Description',
        website: 'https://test.com',
        logo: 'test-logo.png',
        category: 'Test Category',
      },
    ];

    await renderTools(mockTools); // ✅ await because renderTools is now async

    const toolsGrid = document.getElementById('tools-grid');

    expect(toolsGrid).toContainHTML('Test Tool');
    expect(toolsGrid).toContainHTML('Test Description');
    expect(toolsGrid).toContainHTML('Test Category');
    expect(toolsGrid).toContainHTML('https://test.com');
    expect(toolsGrid).toContainHTML('test-logo.png');
  });

  test('renderTools handles empty tools array', async () => {
    await renderTools([]); // ✅ also await this call

    const toolsGrid = document.getElementById('tools-grid');
    expect(toolsGrid?.innerHTML).toBe('');
  });
});
