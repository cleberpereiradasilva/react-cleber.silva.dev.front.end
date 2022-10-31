module.exports = plop => {
    // controller generator
    plop.setGenerator('component', {
        description: 'new component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Component name please: '
        }],
        actions: (data) => {
            data.parts = data.name.split('/')
            if(data.parts.length > 1){
                data.name = data.parts[data.parts.length -1]
                data.path =  data.parts.slice(0,data.parts.length-1).join('/')
            }else{
                data.path =  data.name
            }

            return [
                {
                    type: 'add',
                    path: 'src/components/{{lowerCase path}}/{{pascalCase name}}.tsx',
                    templateFile:
                    'plop-templates/component/Component.tsx.hbs',
                },
                {
                    type: 'add',
                    path: 'src/components/{{lowerCase path}}/stories/{{pascalCase name}}.stories.tsx',
                    templateFile:
                    'plop-templates/component/stories/Component.stories.tsx.hbs',
                },
                {
                    type: 'add',
                    path: 'src/components/{{lowerCase path}}/styles/{{pascalCase name}}.styles.ts',
                    templateFile:
                    'plop-templates/component/styles/Component.styles.ts.hbs',
                },
                {
                    type: 'add',
                    path: 'src/components/{{lowerCase path}}/tests/{{pascalCase name}}.spec.tsx',
                    templateFile:
                    'plop-templates/component/tests/Component.spec.tsx.hbs',
                },
                {
                    type: 'add',
                    path: 'src/components/{{lowerCase path}}/types/{{pascalCase name}}.type.ts',
                    templateFile:
                    'plop-templates/component/types/Component.type.ts.hbs',
                }
            ]
        }
    });
}
