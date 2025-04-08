// eslint-disable-next-line import/no-anonymous-default-export
export default function (plop) {
  // create your generators here
  plop.setGenerator('component', {
      description: 'Generate a React component',
      prompts: [
        {
          type: 'input',
          name: 'namespace',
          message: 'Component name, e.g. NewComponent',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/stories/components/{{pascalCase namespace}}/{{pascalCase namespace}}.tsx',
          templateFile: 'src/codegen/component.hbs',
        },
        {
          type: 'add',
          path: 'src/stories/components/{{pascalCase namespace}}/{{pascalCase namespace}}.stories.ts',
          templateFile: 'src/codegen/component-storybook.hbs',
        },
      ] 
  });
  plop.setGenerator('screen', {
    description: 'Generate a screen',
    prompts: [
      {
        type: 'input',
        name: 'namespace',
        message: 'Screen name, e.g. NewScreen',
      },
      {
        type: 'input',
        name: 'directory',
        message: 'Directory path, without leading and trailing slashes',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/{{directory}}/{{dashCase namespace}}.tsx',
        templateFile: 'src/codegen/screen.hbs',
      },
    ],
  });
};