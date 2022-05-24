
const Plop = (plop) => {
    plop.setGenerator('component', {
        description: 'application component logic',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name please'
        }],
        actions: [{
            type: 'add',
            path: 'components/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: 'plop-templates/component.hbs'
        },
        {
            type: 'add',
            path: 'components/{{pascalCase name}}/{{name}}.spec.ts',
            templateFile: 'plop-templates/component.spec.hbs'
        },
        {
            type: 'add',
            path: 'components/{{pascalCase name}}/{{name}}.stories.tsx',
            templateFile: 'plop-templates/component.stories.hbs'
        },
        {
            type: 'add',
            path: 'components/{{pascalCase name}}/style.ts',
            templateFile: 'plop-templates/component.style.hbs'
        },
        {
            type: 'add',
            path: 'components/{{pascalCase name}}/index.ts',
            templateFile: 'plop-templates/index.hbs'
        }]
    });
};


module.exports = Plop